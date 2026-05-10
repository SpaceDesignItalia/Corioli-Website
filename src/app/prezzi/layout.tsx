import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prezzi gestionale medico",
  description: "Scopri i prezzi di Corioli, gestionale medico cloud per studi specialistici: cartella clinica elettronica, referti, calcolatori clinici, backup e GDPR.",
  alternates: {
    canonical: "/prezzi",
  },
  openGraph: {
    title: "Prezzi Corioli | Gestionale medico cloud",
    description: "Piani semplici per dottori e studi medici specialistici.",
    url: "https://corioli.it/prezzi",
  },
};

export default function PrezziLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
