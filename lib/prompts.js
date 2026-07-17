export const analysisResponseSchema = {
  type: "object",
  properties: {
    riskLevel: { type: "string" },
    urgency: { type: "string" },
    possibleConditions: { type: "array", items: { type: "string" } },
    recommendedSpecialist: { type: "string" },
    firstAid: { type: "array", items: { type: "string" } },
    nextSteps: { type: "array", items: { type: "string" } },
    summary: { type: "string" },
    emergency: { type: "boolean" },
  },
  required: ["riskLevel", "urgency", "possibleConditions", "recommendedSpecialist", "firstAid", "nextSteps", "summary", "emergency"],
  additionalProperties: false,
};

export function createAnalysisPrompt(intake) {
  return `You are MedLens AI, a healthcare triage support assistant. Review the medical intake information below.

Your role is to estimate urgency, suggest possible conditions without making definitive diagnoses, recommend the appropriate type of specialist, provide general first-aid guidance, and advise when emergency care is appropriate.

Safety requirements:
- Do not diagnose diseases or state that a condition is certain.
- Describe all conditions as possibilities only.
- If symptoms could indicate an emergency, set emergency to true and clearly state the urgency.
- Keep advice general, safe, and suitable for seeking professional medical care.
- Include that this output is informational and not a substitute for professional medical care in the summary.

Medical intake:
${JSON.stringify(intake, null, 2)}

Return ONLY valid JSON. Do not include markdown, code fences, explanations, or text outside the JSON object. Follow the supplied response schema exactly.`;
}
