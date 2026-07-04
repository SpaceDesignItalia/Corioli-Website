import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download gestionale medico | Corioli",
  description: "Scarica Corioli, il gestionale medico per Windows dedicato a dottori e studi specialistici. Inizia subito la prova gratuita di 90 giorni e ottimizza il tuo ambulatorio.",
  alternates: {
    canonical: "/download",
  },
  openGraph: {
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
