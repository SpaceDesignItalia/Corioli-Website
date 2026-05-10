import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog gestionale medico e digitalizzazione studio",
  description: "Guide e approfondimenti su gestionale medico, cartella clinica elettronica, digitalizzazione dello studio medico, GDPR e software per ginecologi e specialisti.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog Corioli | Gestionale medico e studio digitale",
    description: "Risorse per medici specialisti su software gestionale, cartella clinica elettronica, referti e sicurezza GDPR.",
    url: "https://corioli.it/blog",
  },
};

const articoli = [
  {
    slug: "gestionale-per-ginecologi-cosa-cercare",
    titolo: "Gestionale per ginecologi: cosa cercare nel 2025",
    estratto: "Funzionalità cliniche, calcolatori ostetrici, cartella ostetrica elettronica e GDPR: tutto quello che serve davvero a un ginecologo in ambulatorio.",
    data: "5 Febbraio 2025",
    categoria: "Ginecologia"
  },
  {
    slug: "come-sostituire-word-excel-studio-medico",
    titolo: "Come sostituire Word e Excel nello studio medico",
    estratto: "Come migrare i dati storici, eliminare la carta e migliorare il flusso clinico passando a un gestionale medico senza perdere nulla.",
    data: "28 Gennaio 2025",
    categoria: "Gestione Studio"
  },
  {
    slug: "gestionale-medico-gdpr-cosa-deve-avere",
    titolo: "Gestionale medico e GDPR: cosa deve avere per essere conforme",
    estratto: "Crittografia, backup, DPA, accessi controllati e consenso digitale: la checklist per valutare la conformità GDPR di un software medico.",
    data: "20 Gennaio 2025",
    categoria: "Normativa"
  },
  {
    slug: "cos-e-cartella-clinica-elettronica-come-sceglierla",
    titolo: "Cos'è la cartella clinica elettronica e come sceglierla",
    estratto: "Differenze con la carta, vantaggi concreti e i criteri tecnici e clinici per scegliere il software giusto per il tuo studio medico.",
    data: "15 Gennaio 2025",
    categoria: "Guide"
  },
  {
    slug: "migliori-software-gestionali-medici-italia",
    titolo: "Migliori software gestionali per medici in Italia (2025)",
    estratto: "Cosa distingue un gestionale generico da uno verticale, cosa valutare prima di scegliere e perché il cloud cambia le regole del gioco.",
    data: "10 Gennaio 2025",
    categoria: "Confronto"
  },
  {
    slug: "come-digitalizzare-lo-studio-ginecologico",
    titolo: "Come digitalizzare lo studio ginecologico: la guida definitiva",
    estratto: "Dal passaggio da carta a digitale fino alla scelta del software: gli step per modernizzare il tuo ambulatorio senza stress.",
    data: "24 Maggio 2024",
    categoria: "Gestione Studio"
  },
  {
    slug: "gestionale-medico-vs-word-ginecologi",
    titolo: "Gestionale medico vs Word: perché i ginecologi cambiano",
    estratto: "Analisi dei costi occulti dell'uso di Word per i referti clinici e perché il 40% dei medici sta finalmente passando a soluzioni native.",
    data: "12 Maggio 2024",
    categoria: "Tecnologia"
  },
  {
    slug: "cartella-clinica-elettronica-obbligatoria-2025",
    titolo: "Cartella clinica elettronica: cosa cambia nel 2025?",
    estratto: "Tutte le novità normative e i requisiti GDPR che gli specialisti privati devono conoscere per essere in regola l'anno prossimo.",
    data: "3 Maggio 2024",
    categoria: "Normativa"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
         <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Risorse & Approfondimenti</h1>
         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           Riflessioni e guide sull'intersezione tra medicina specialistica, tecnologia e gestione moderna dell'ambulatorio.
         </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articoli.map((articolo) => (
          <article key={articolo.slug} className="flex flex-col bg-white rounded-2xl shadow-soft border border-gray-100 hover:shadow-card hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
            <div className="p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">{articolo.categoria}</span>
                <span className="text-xs text-gray-400 font-medium">{articolo.data}</span>
              </div>
              <h2 className="font-heading text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors line-clamp-3">
                <Link href={`/blog/${articolo.slug}`} className="before:absolute before:inset-0 relative">
                  {articolo.titolo}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">
                {articolo.estratto}
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 mt-auto">
                Leggi articolo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
