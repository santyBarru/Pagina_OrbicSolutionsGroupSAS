import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ product: string }> }
) {
  const { product } = await context.params;
  const n8nBase = process.env.N8N_BASE_URL;
  const apiKey = process.env.N8N_API_KEY;

  if (!n8nBase) {
    return NextResponse.json(
      { error: "N8N_BASE_URL no está configurada" },
      { status: 500 }
    );
  }

  const url = `${n8nBase}/webhook/${product}`;
  const headers: Record<string, string> = {};

  if (apiKey) {
    headers["Authorization"] = `Bearer ${apiKey}`;
  }

  const response = await fetch(url, { headers });
  const data = await response.json();

  return NextResponse.json(data, { status: response.status });
}
