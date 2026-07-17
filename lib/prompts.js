export const analysisResponseSchema = {
  riskLevel: "",
  urgency: "",
  possibleConditions: [],
  recommendedSpecialist: "",
  firstAid: [],
  nextSteps: [],
  summary: "",
  emergency: false,
};

export function createAnalysisPrompt(intake) {
  return `You are MedLens AI, a healthcare triage assistant. Review the provided medical intake information and create a concise, safety-first triage summary. Do not diagnose with certainty. Clearly identify urgent or emergency situations when appropriate.

Medical intake:
${JSON.stringify(intake, null, 2)}

Return ONLY valid JSON. Do not use markdown, code fences, explanations, or any text outside the JSON object. Use exactly this structure and preserve every key:
{
  "riskLevel": "",
  "urgency": "",
  "possibleConditions": [],
  "recommendedSpecialist": "",
  "firstAid": [],
  "nextSteps": [],
  "summary": "",
  "emergency": false
}`;
}
