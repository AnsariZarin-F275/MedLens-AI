export const analysisResultKey = "medlens-analysis-result";

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

export function isValidAnalysisResult(value) {
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

export function saveAnalysisResult(result) {
  if (!isValidAnalysisResult(result)) {
    throw new Error("The analysis response was incomplete.");
  }

  sessionStorage.setItem(analysisResultKey, JSON.stringify(result));
}

export function readAnalysisResult() {
  try {
    const storedResult = sessionStorage.getItem(analysisResultKey);
    if (!storedResult) return null;

    const result = JSON.parse(storedResult);
    return isValidAnalysisResult(result) ? result : null;
  } catch {
    return null;
  }
}
