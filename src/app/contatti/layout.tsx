import type { Metadata } from "next";
import { SITE_URL, breadcrumbList, jsonLdProps, pageOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Demo gestionale medico",
  description: "Prenota una demo gratuita di 15 minuti di Corioli, il gestionale medico per specialisti, o chiedi un preventivo per la migrazione dei tuoi dati.",
  alternates: {
    canonical: "/contatti",
  },
  openGraph: {
    ...pageOpenGraph,
    title: "Richiedi demo | Corioli gestionale medico",
    description: "Scopri Corioli con una demo gratuita per il tuo studio medico specialistico.",
    url: "https://corioli.it/contatti",
  },
};

// I recapiti erano dichiarati solo dentro l'Organization del layout, che vale
// per tutto il sito. Qui la pagina viene tipizzata come ContactPage: e cosi che
// un assistente a cui viene chiesto "come contatto Corioli" trova un URL da
// indicare, invece di riportare l'indirizzo email senza sapere dove mandare.
const contattiStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([{ name: "Contatti", path: "/contatti" }]),
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contatti#pagina`,
      url: `${SITE_URL}/contatti`,
      name: "Contatti e demo — Corioli",
      description:
        "Richiedi una demo gratuita di 15 minuti di Corioli o l'installazione assistita della versione per macOS.",
      inLanguage: "it-IT",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      mainEntity: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: "info@corioli.it",
            telephone: "+39 393 800 1284",
            areaServed: "IT",
            availableLanguage: "Italian",
          },
          {
            "@type": "ContactPoint",
            contactType: "technical support",
            email: "info@corioli.it",
            areaServed: "IT",
            availableLanguage: "Italian",
          },
        ],
      },
    },
  ],
};

export default function ContattiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script {...jsonLdProps(contattiStructuredData)} />
      {children}
    </>
  );
}
