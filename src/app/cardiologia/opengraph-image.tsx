import { immagineSpecialita } from "@/lib/og-specialita";

export const alt = "Corioli Cardiologia — Il gestionale per cardiologi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return immagineSpecialita({
    occhiello: "Corioli Cardiologia",
    titolo: "Il gestionale per cardiologi",
    testo:
      "ECG, ecocardiogramma e TC coronarica in campi strutturati, indici con la formula in chiaro e referti PDF. 30 giorni di prova gratuita.",
    percorso: "corioli.it/cardiologia",
  });
}
