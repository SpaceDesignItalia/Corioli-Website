import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_URL, STATIC_PAGES_UPDATED, breadcrumbList, jsonLdProps, pageOpenGraph } from "@/lib/seo";
import { glossaryGroups, glossaryTerms } from "./terms";

export const metadata: Metadata = {
  title: "Glossario del gestionale medico",
  description:
    "Le definizioni che ricorrono nello studio specialistico: cartella clinica elettronica, FSE 2.0, età gestazionale, Hadlock, QTc, CHA2DS2-VA ed eGFR.",
  alternates: {
    canonical: "/glossario",
  },
  openGraph: {
    ...pageOpenGraph,
    title: "Glossario | Corioli gestionale medico",
    description:
      "Definizioni brevi e verificate dei termini clinici, normativi e software che riguardano lo studio medico specialistico.",
    url: `${SITE_URL}/glossario`,
  },
};

// DefinedTermSet: dichiara la pagina come un glossario e ogni voce come un
// termine con un proprio identificativo. Serve a due cose diverse: i motori
// possono mostrare la definizione come risposta, e gli assistenti che citano
// una voce hanno un URL con ancora da riportare invece del solo dominio.
const glossaryStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbList([{ name: "Glossario", path: "/glossario" }]),
    {
      "@type": "DefinedTermSet",
      "@id": `${SITE_URL}/glossario#glossario`,
      name: "Glossario del gestionale medico",
      description:
        "Definizioni dei termini clinici, normativi e software ricorrenti nello studio medico specialistico privato.",
      url: `${SITE_URL}/glossario`,
      inLanguage: "it-IT",
      dateModified: STATIC_PAGES_UPDATED,
      publisher: { "@id": `${SITE_URL}/#organization` },
      hasDefinedTerm: glossaryTerms.map((term) => ({
        "@type": "DefinedTerm",
        "@id": `${SITE_URL}/glossario#${term.slug}`,
        name: term.term,
        ...(term.aliases ? { alternateName: term.aliases } : {}),
        description: term.definition,
        inDefinedTermSet: `${SITE_URL}/glossario#glossario`,
        url: `${SITE_URL}/glossario#${term.slug}`,
      })),
    },
  ],
};

export default function GlossarioPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 bg-background">
      <script {...jsonLdProps(glossaryStructuredData)} />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <header className="mb-16 md:mb-20">
          <p className="text-brand-600 font-bold text-sm uppercase tracking-wider mb-4">
            Glossario
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
            Le parole dello studio medico, spiegate una volta sola.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            {glossaryTerms.length}{" "}
            definizioni brevi dei termini che tornano
            quando si sceglie un gestionale, si mette in regola un archivio
            clinico o si legge un referto. Ogni voce sta in un paragrafo e
            rimanda all&apos;approfondimento, se ne esiste uno.
          </p>
        </header>

        {/* Indice: dà una panoramica dei temi coperti e serve come navigazione
            interna su una pagina lunga. */}
        <nav
          aria-label="Sezioni del glossario"
          className="flex flex-wrap gap-3 mb-16 md:mb-20"
        >
          {glossaryGroups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-brand-200 hover:text-brand-700 transition-colors"
            >
              {group.title}
              <span className="text-gray-400 text-xs">
                {glossaryTerms.filter((term) => term.group === group.id).length}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-20">
          {glossaryGroups.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-32">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {group.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl">
                {group.description}
              </p>

              {/* Ogni voce e un <article> con un <h3>, non un <dl>: il titolo
                  deve restare un heading, sia per la struttura del documento
                  sia perche e cosi che una definizione viene estratta e citata
                  insieme al proprio termine. */}
              <div className="flex flex-col gap-6">
                {glossaryTerms
                  .filter((term) => term.group === group.id)
                  .map((term) => (
                    <article
                      key={term.slug}
                      id={term.slug}
                      className="scroll-mt-32 bg-white rounded-2xl border border-gray-100 p-7 md:p-8 shadow-soft"
                    >
                      <h3 className="font-heading text-xl font-bold text-gray-900">
                        {term.term}
                      </h3>
                      {term.aliases && (
                        <p className="text-sm text-gray-400 mt-1">
                          Anche: {term.aliases.join(", ")}
                        </p>
                      )}
                      <p className="text-gray-600 leading-relaxed mt-3">
                        {term.definition}
                      </p>
                      {term.detail && (
                        <p className="text-gray-500 leading-relaxed mt-4 pl-4 border-l-2 border-brand-100">
                          {term.detail}
                        </p>
                      )}
                      {term.link && (
                        <Link
                          href={term.link.href}
                          className="inline-flex items-center gap-2 mt-5 py-1 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors group"
                        >
                          {term.link.label}
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                      )}
                    </article>
                  ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-24 bg-brand-900 text-white rounded-3xl p-10 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h2 className="font-heading text-2xl font-bold mb-4">
              Dalle definizioni alla pratica
            </h2>
            <p className="text-brand-100 leading-relaxed mb-8 max-w-2xl">
              Datazione, biometria, percentili, QTc, eGFR e punteggi di rischio
              in Corioli si calcolano dentro la visita, con la formula sempre in
              chiaro, e finiscono coerenti nel referto PDF senza ricopiature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/funzionalita"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-900 font-semibold hover:bg-brand-50 transition-colors"
              >
                Vedi le funzionalità
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Richiedi una demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
