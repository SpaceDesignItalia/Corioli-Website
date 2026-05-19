import { NextResponse } from "next/server";
import { getLatestWindowsRelease } from "@/lib/github-release";

export async function GET() {
  const release = await getLatestWindowsRelease();

  if (!release) {
    return NextResponse.json(
      { error: "Installer Windows non disponibile" },
      { status: 404 },
    );
  }

  return NextResponse.json(release);
}
