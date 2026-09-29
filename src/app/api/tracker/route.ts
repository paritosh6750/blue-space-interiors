import { NextResponse } from "next/server";
import { trackAndGetVisitCount, getLiveMetrics } from "@/app/actions/tracker";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const isReadOnly = url.searchParams.get("readOnly") === "true";
  
  if (isReadOnly) {
    const metrics = await getLiveMetrics();
    return NextResponse.json(metrics);
  }

  const path = url.searchParams.get("path") || "/";
  const metrics = await trackAndGetVisitCount(path);
  return NextResponse.json(metrics);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const path = body?.path || "/";
  const metrics = await trackAndGetVisitCount(path);
  return NextResponse.json(metrics);
}
