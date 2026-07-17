import { NextResponse } from "next/server";

function isValidRequestBody(body) {
  return body !== null && typeof body === "object" && !Array.isArray(body);
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  if (!isValidRequestBody(body)) {
    return NextResponse.json({ error: "Request body must be a JSON object." }, { status: 400 });
  }

  return NextResponse.json(
    { error: "AI analysis is not implemented yet." },
    { status: 501 },
  );
}
