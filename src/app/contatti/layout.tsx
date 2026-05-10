import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo gestionale medico",
  description: "Prenota una demo gratuita di Corioli, il gestionale medico cloud per dottori e studi specialistici con cartella clinica elettronica, referti e sicurezza GDPR.",
  alternates: {
    canonical: "/contatti",
  },
  openGraph: {
    title: "Richiedi demo | Corioli gestionale medico",
    description: "Scopri Corioli con una demo gratuita per il tuo studio medico specialistico.",
    url: "https://corioli.it/contatti",
  },
};

export default function ContattiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
