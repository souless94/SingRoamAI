import { env } from "@/config/env";
import { aiTripOutputSchema, createTripSchema } from "@/schemas/trips/createTripSchema";
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

const genai = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });



const systemInstruction = `
You are a structured travel planning assistant. Your job is to generate a complete, realistic, and practical travel itinerary based on the user's preferences. Please generate the following details:

- Detailed summary for each day of the trip (morning, afternoon, evening).
- Include location names, activities, and key experiences for each part of the day.
- **Do not include any citations, source references, or numbers in brackets (like [4], [7]).**
- Your response should be in a structured JSON format without any reference to sources or citations.
- Ensure the activities are practical, clear, and easy to follow.
- The packing list and weather advice should be included as part of the day-by-day breakdown, without citations.
- Provide an overall, easy-to-read travel plan that is complete and realistic, with no unnecessary information or references.
`;
export function buildTripPrompt(input: z.infer<typeof createTripSchema>): string {
  const {
    title,
    destination,
    startDate,
    endDate,
    tripLength,
    budget,
    activities,
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
- Preferred Activities: ${activities || "Not specified"}

## INSTRUCTIONS
1. Suggest an image prompt suitable for this destination (e.g., "Santorini sunset with whitewashed houses").
2. Generate ${tripLength} day objects with:
   - title (e.g., "Day 1 - Explore Old Town")
   - dayIndex (starting from 1)
   - date (must match the actual trip dates starting from ${startDate})
   - morningTitle and morning (short title + detailed plan)
   - afternoonTitle and afternoon (short title + detailed plan)
   - eveningTitle and evening (short title + detailed plan)
3. Generate a "weatherInfo" object with:
   - season (e.g., Spring, Winter)
   - temperatureInfo (e.g., "Average 12–18°C")
   - description (e.g., "Cool and dry, ideal for walking")
   - itemsToPack (e.g., "light jacket, walking shoes")
   - considerations (e.g., "Some attractions may close early in winter")

## RESPONSE FORMAT
Respond only with a valid JSON object like below:

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


async function generateAIText(prompt: string = "", context: string = "") {
  const response = await genai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
    config: {
      systemInstruction: context,
      tools: [{ googleSearch: {} }],
    },
  });

  return response;
}


export async function generateTripPlan(input: z.infer<typeof createTripSchema>) {
  const prompt = buildTripPrompt(input);
  const response = await generateAIText(prompt, systemInstruction);

  const text = response.text;

  if (!text) throw new Error("No response from AI");

  try {
    const jsonString = text.trim().replace(/^```json\n?/, "").replace(/```$/, "");
    const parsed = JSON.parse(jsonString);
    const validated = aiTripOutputSchema.parse(parsed);
    return validated;
  } catch (err) {
    console.error("Failed to parse AI response:", err);
    throw new Error("AI returned invalid JSON format");
  }
}