import type { Metadata } from "next";
import { jsonLdProps, pageOpenGraph } from "@/lib/seo";
import { pricingFaqs } from "./faqs";

export const metadata: Metadata = {
  title: "Prezzi: gestionale medico a 30€/mese, tutto incluso",
  description:
    "Corioli costa 30€ al mese, tutto incluso: nessun modulo a pagamento e nessun vincolo. Prova gratuita di 30 giorni, senza carta di credito.",
  alternates: {
    canonical: "/prezzi",
  },
  openGraph: {
    ...pageOpenGraph,
    title: "Prezzi Corioli | Gestionale medico a 30€/mese, tutto incluso",
    description:
      "Un solo prezzo, nessun modulo extra: 30 giorni di prova gratuita senza carta di credito e nessun vincolo contrattuale.",
    url: "https://corioli.it/prezzi",
  },
};

// La pagina è un client component e non può esporre JSON-LD in modo statico:
// lo schema vive qui, generato dalle stesse FAQ mostrate nell'accordion.
const pricingFaqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://corioli.it/prezzi#faq",
  mainEntity: pricingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function PrezziLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script {...jsonLdProps(pricingFaqStructuredData)} />
      {children}
    </>
  );
}
