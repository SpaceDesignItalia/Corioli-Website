import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Proporzioni del logo orizzontale (viewBox 395x120 di public/corioli-logo.svg).
export const LOGO_RATIO = 395 / 120;

// Il logo come data URI per le immagini generate con next/og: Satori non legge
// da solo i file di /public. Gli SVG hanno la scritta già convertita in
// tracciati, quindi non serve caricare il font Lexend.
export async function logoDataUri(
  file: "corioli-logo.svg" | "corioli-logo-su-scuro.svg",
) {
  const svg = await readFile(join(process.cwd(), "public", file));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}
