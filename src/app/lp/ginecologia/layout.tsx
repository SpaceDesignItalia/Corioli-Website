import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestionale medico per ginecologi",
  description: "Prova Corioli, il gestionale medico cloud per ginecologia e ostetricia: cartella clinica elettronica, calcolatori fetali, referti e sicurezza GDPR.",
  alternates: {
    canonical: "/lp/ginecologia",
  },
  openGraph: {
    title: "Corioli | Gestionale medico per ginecologi",
    description: "Software gestionale per studi di ginecologia e ostetricia con cartella clinica elettronica, calcolatori e referti.",
    url: "https://corioli.it/lp/ginecologia",
  },
};

export default function GinecologiaLandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
