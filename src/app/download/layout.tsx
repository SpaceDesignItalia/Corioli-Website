import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Download gestionale medico per Windows",
  description: "Scarica Corioli per Windows dal Microsoft Store o richiedi l'installazione assistita su Mac. 30 giorni di prova gratuita, senza carta di credito.",
  alternates: {
    canonical: "/download",
  },
  openGraph: {
    ...pageOpenGraph,
    title: "Download | Corioli gestionale medico",
    description: "Scarica l'applicazione Corioli per il tuo sistema operativo. Installazione rapida e sicura.",
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
