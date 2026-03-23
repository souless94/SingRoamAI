import { env } from "@/config/env";
import logger from "@/lib/logger";
import { aiTripOutputSchema, createTripSchema } from "@/schemas/trips/createTripSchema";
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

const genai = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });



export function buildTripPrompt(input: z.infer<typeof createTripSchema>): string {
  const {
    title,
    destination,
    startDate,
    endDate,
    tripLength,
    people,
    budget,
    notes,
  } = input;

  return `
## ROLE
You are a travel planning assistant.

## OBJECTIVE
Generate a detailed multi-day travel itinerary and weather information based on user preferences.

## CONTEXT
- Trip Title: ${title}
- Destination: ${destination}
- Dates: ${startDate} to ${endDate}
- Trip Length: ${tripLength} day(s)
- Budget: $${budget}
- People Going: ${people}
- Notes: ${notes || "NA"}


## INSTRUCTIONS
1. Suggest a short image query suitable for this destination (e.g., "Santorini sunset") to be used for unsplash API.
2. Generate ${tripLength} day objects with:
   - title (e.g., "Day 1 - Explore Old Town")
   - dayIndex (starting from 1)
   - date (must match the actual trip dates starting from ${startDate})
   - morningTitle and morning (short title + ~300 to 400 words detailed plan with food and activities recommendations )
   - afternoonTitle and afternoon (short title + ~300 to 400 words detailed plan with food and activities recommendations)
   - eveningTitle and evening (short title + ~300 to 400 words detailed plan with food and activities recommendations)
3. Generate a "weatherInfo" object with:
   - season (e.g., Spring, Winter)
   - temperatureInfo (e.g., "Average 12–18°C")
   - description (e.g., "Cool and dry, ideal for walking")
   - itemsToPack (e.g., "light jacket, walking shoes")
   - considerations (e.g., "Some attractions may close early in winter")

## RESPONSE FORMAT
You MUST respond with ONLY a raw JSON object. No markdown, no code fences, no explanation — just the JSON.

{
  "imagePrompt": "string",
  "days": [
    {
      "title": "string",
      "dayIndex": number,
      "date": "YYYY-MM-DD",
      "morningTitle": "string",
      "morning": "string",
      "afternoonTitle": "string",
      "afternoon": "string",
      "eveningTitle": "string",
      "evening": "string"
    }
  ],
  "weatherInfo": {
    "season": "string",
    "temperatureInfo": "string",
    "description": "string",
    "itemsToPack": "string",
    "considerations": "string"
  }
}
`;
}


// Step 1: Use Google Search grounding to gather real, up-to-date travel info
async function researchWithGrounding(prompt: string): Promise<string> {
  const response = await genai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    config: {
      systemInstruction: "You are a travel research assistant. Use Google Search to find accurate, up-to-date information about the destination including current attractions, weather, local tips, and pricing. Summarize your findings clearly.",
      tools: [{ googleSearch: {} }],
    },
  });

  if (!response.text) throw new Error("No research response from AI");
  return response.text;
}

// Step 2: Format the researched content into structured JSON
async function formatAsJson(researchedContent: string, structurePrompt: string): Promise<string> {
  const response = await genai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [{
          text: `Using the following researched travel information, generate the structured itinerary.\n\n## RESEARCHED INFO\n${researchedContent}\n\n${structurePrompt}`,
        }],
      },
    ],
    config: {
      systemInstruction: "You are a structured travel planning assistant. Generate complete, realistic, and practical travel itineraries. CRITICAL: You MUST respond with a single, valid JSON object only. No markdown, no code fences, no prose, no citations.",
      responseMimeType: "application/json",
    },
  });

  if (!response.text) throw new Error("No format response from AI");
  return response.text;
}


export async function generateTripPlan(input: z.infer<typeof createTripSchema>) {
  const prompt = buildTripPrompt(input);

  // Step 1: Research with Google Search grounding
  const researchedContent = await researchWithGrounding(prompt);

  // Step 2: Format into valid JSON
  const text = await formatAsJson(researchedContent, prompt);

  try {
    const jsonString = text.trim().replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    const parsed = JSON.parse(jsonString);
    const validated = aiTripOutputSchema.parse(parsed);
    return validated;
  } catch (err) {
    logger.error(err, "Failed to parse AI response:");
    throw new Error("AI returned invalid JSON format");
  }
}