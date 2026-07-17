import { GoogleGenAI, Type } from "@google/genai";
import { analysisResponseSchema, createAnalysisPrompt } from "./prompts";

const responseSchema = {
  ...analysisResponseSchema,
  type: Type.OBJECT,
  properties: {
    riskLevel: { type: Type.STRING },
    urgency: { type: Type.STRING },
    possibleConditions: { type: Type.ARRAY, items: { type: Type.STRING } },
    recommendedSpecialist: { type: Type.STRING },
    firstAid: { type: Type.ARRAY, items: { type: Type.STRING } },
    nextSteps: { type: Type.ARRAY, items: { type: Type.STRING } },
    summary: { type: Type.STRING },
    emergency: { type: Type.BOOLEAN },
  },
};

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isValidAnalysisResponse(value) {
  return value !== null
    && typeof value === "object"
    && typeof value.riskLevel === "string"
    && typeof value.urgency === "string"
    && isStringArray(value.possibleConditions)
    && typeof value.recommendedSpecialist === "string"
    && isStringArray(value.firstAid)
    && isStringArray(value.nextSteps)
    && typeof value.summary === "string"
    && typeof value.emergency === "boolean";
}

export async function analyzeWithGemini(intake) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Gemini API key is not configured.");
  }

  const client = new GoogleGenAI({ apiKey });
  const response = await client.models.generateContent({
    model: "gemini-2.5-flash",
    contents: createAnalysisPrompt(intake),
    config: {
      responseMimeType: "application/json",
      responseSchema,
    },
  });

  let analysis;

  try {
    analysis = JSON.parse(response.text);
  } catch {
    throw new Error("Gemini returned invalid JSON.");
  }

  if (!isValidAnalysisResponse(analysis)) {
    throw new Error("Gemini returned an invalid analysis structure.");
  }

  return analysis;
}
