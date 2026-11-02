import { immagineSpecialita } from "@/lib/og-specialita";

export const alt = "Corioli — Il gestionale per ginecologi e ostetrici";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return immagineSpecialita({
    occhiello: "Corioli · Ginecologia e ostetricia",
    titolo: "Il gestionale per ginecologi e ostetrici",
    testo:
      "Biometria e peso fetale con Hadlock, flussimetria ombelicale, cartella ostetrica e referti PDF. 30 giorni di prova gratuita.",
    percorso: "corioli.it/ginecologia",
  });
}
