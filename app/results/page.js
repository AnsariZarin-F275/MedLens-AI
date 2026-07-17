import ResultsDashboard from "@/components/ResultsDashboard";

export const metadata = {
  title: "Analysis Results | MedLens AI",
  description: "AI-generated emergency triage summary from MedLens AI.",
};

const report = {
  risk: "Moderate",
  conditions: ["Viral fever", "Influenza"],
  specialist: "General physician",
  firstAid: ["Stay hydrated", "Monitor temperature", "Rest and avoid strenuous activity"],
  emergency: "Not currently required",
  nextSteps: ["Schedule a consultation if symptoms continue beyond 48 hours", "Keep a record of temperature and symptom changes", "Seek urgent care if breathing becomes difficult or chest pain occurs"],
  summary: "Your reported symptoms suggest a moderate level of concern. Rest, hydration, and monitoring are recommended while you arrange follow-up with a general physician.",
};

export default function ResultsPage() {
  return <ResultsDashboard report={report} />;
}
