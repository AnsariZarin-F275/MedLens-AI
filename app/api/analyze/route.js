import { NextResponse } from "next/server";
import { analyzeWithGemini } from "@/lib/gemini";

export const runtime = "nodejs";

function isValidRequestBody(body) {
  return body !== null && typeof body === "object" && !Array.isArray(body);
}

export async function POST(request) {
  let intake;

  try {
    intake = await request.json();
  } catch {
    return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  if (!isValidRequestBody(intake)) {
    return NextResponse.json({ error: "Request body must be a JSON object." }, { status: 400 });
  }

  try {
    const analysis = await analyzeWithGemini(intake);
    return NextResponse.json(analysis);
  } catch (error) {
    console.error("Gemini analysis failed:", error);
    return NextResponse.json(
      { error: "Unable to generate an analysis at this time." },
      { status: 502 },
    );
  }
}
