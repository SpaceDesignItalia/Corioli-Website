import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Download gestionale medico per Windows",
  description: "Scarica Corioli per ginecologia o Corioli Cardiologia dal Microsoft Store, o richiedi l'installazione assistita su Mac. 30 giorni di prova gratuita.",
  alternates: {
    canonical: "/download",
  },
  openGraph: {
    ...pageOpenGraph,
    title: "Download | Corioli gestionale medico",
    description: "Scarica l'edizione di Corioli per la tua specialità, ginecologia o cardiologia. Installazione rapida e sicura dal Microsoft Store.",
    url: "https://corioli.it/download",
  },
};

export default function DownloadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
