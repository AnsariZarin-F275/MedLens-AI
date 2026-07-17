import { jsPDF } from "jspdf";

function formatDateTime(date) {
  return new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(date);
}

function formatDateForFile(date) {
  return date.toISOString().slice(0, 10);
}

export function downloadAnalysisReport(report) {
  const document = new jsPDF({ unit: "mm", format: "a4" });
  const generatedAt = new Date();
  const margin = 16;
  const pageWidth = document.internal.pageSize.getWidth();
  const pageHeight = document.internal.pageSize.getHeight();
  const contentWidth = pageWidth - margin * 2;
  let cursor = margin;

  const addPageIfNeeded = (height = 10) => {
    if (cursor + height <= pageHeight - margin) return;
    document.addPage();
    cursor = margin;
  };

  const writeParagraph = (text, size = 10, color = [51, 65, 85]) => {
    document.setFontSize(size);
    document.setTextColor(...color);
    const lines = document.splitTextToSize(text, contentWidth);
    addPageIfNeeded(lines.length * 5 + 3);
    document.text(lines, margin, cursor);
    cursor += lines.length * 5 + 3;
  };

  const writeSection = (title, values) => {
    addPageIfNeeded(16);
    document.setFont("helvetica", "bold");
    document.setFontSize(12);
    document.setTextColor(30, 64, 175);
    document.text(title, margin, cursor);
    cursor += 7;
    document.setFont("helvetica", "normal");
    values.forEach((value) => {
      const lines = document.splitTextToSize(value, contentWidth - 6);
      addPageIfNeeded(lines.length * 5 + 3);
      document.setFillColor(37, 99, 235);
      document.circle(margin + 1.5, cursor - 1.2, 0.8, "F");
      document.setFontSize(10);
      document.setTextColor(51, 65, 85);
      document.text(lines, margin + 5, cursor);
      cursor += lines.length * 5 + 3;
    });
    cursor += 3;
  };

  document.setFillColor(30, 64, 175);
  document.rect(0, 0, pageWidth, 30, "F");
  document.setTextColor(255, 255, 255);
  document.setFont("helvetica", "bold");
  document.setFontSize(18);
  document.text("MedLens AI – Emergency Triage Report", margin, 15);
  document.setFont("helvetica", "normal");
  document.setFontSize(9);
  document.text(`Generated ${formatDateTime(generatedAt)}`, margin, 22);
  cursor = 40;

  writeSection("Risk assessment", [`Risk level: ${report.riskLevel}`, `Urgency: ${report.urgency}`, `Emergency status: ${report.emergency ? "Emergency care is recommended" : "Emergency care is not currently indicated"}`]);
  if (report.patientInformation && typeof report.patientInformation === "object") {
    writeSection("Patient information", Object.entries(report.patientInformation).filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`));
  }
  writeSection("Possible conditions", report.possibleConditions);
  writeSection("Recommended specialist", [report.recommendedSpecialist]);
  writeSection("First aid guidance", report.firstAid);
  writeSection("Next steps", report.nextSteps);
  writeSection("Health summary", [report.summary]);
  writeSection("Disclaimer", ["This report is informational and is not a diagnosis or a substitute for professional medical care. Contact emergency services immediately for a life-threatening emergency."]);
  writeParagraph("MedLens AI", 8, [100, 116, 139]);
  document.save(`MedLensAI_Report_${formatDateForFile(generatedAt)}.pdf`);
}
