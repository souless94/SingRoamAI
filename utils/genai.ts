import { env } from "@/config/env";
import { GoogleGenAI } from "@google/genai";

const genai = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });

async function generateAIText(prompt: string ="", context: string = "") {
  const response = await genai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      systemInstruction: context,
      tools: [{ googleSearch: {} }],
    },
  });

  return response;
}
