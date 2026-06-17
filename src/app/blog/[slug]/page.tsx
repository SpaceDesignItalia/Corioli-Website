import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { posts, postsBySlug } from "../posts";

type ComparisonRow = {
  name: string;
  deployment: string;
  fetalCalculators: string;
  obstetricRecord: string;
  freeTrial: string;
  price: string;
  highlight?: boolean;
};

const gynecologySoftwareComparison: ComparisonRow[] = [
  {
    name: "Corioli",
    deployment: "Cloud",
    fetalCalculators: "Sì — Hadlock, biometria, percentili, età gestazionale",
    obstetricRecord: "Sì — cartella ostetrica e ginecologica completa",
    freeTrial: "90 giorni, senza carta di credito",
    price: "da 15€/mese (piano annuale)",
    highlight: true,
  },
  {
    name: "ArzaMed",
    deployment: "Cloud",
    fetalCalculators: "Limitati — focus su gestione amministrativa",
    obstetricRecord: "Sì — modulo ginecologia personalizzabile",
    freeTrial: "Demo gratuita su richiesta",
    price: "da 99€/mese (fino a 2 utenti)",
  },
  {
    name: "Gynobase",
    deployment: "Cloud + versione desktop offline",
    fetalCalculators: "Parziali — strumenti base, interfaccia datata",
    obstetricRecord: "Sì — visite in gravidanza e ginecologia",
    freeTrial: "Demo e registrazione",
    price: "Su richiesta",
  },
  {
    name: "WindDoctor",
    deployment: "Cloud",
    fetalCalculators: "Generici — non verticali per ostetricia",
    obstetricRecord: "Parziale — cartelle cliniche generiche",
    freeTrial: "Prova gratuita limitata (12 documenti/anno)",
    price: "da 10€/mese",
  },
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postsBySlug[slug];

  if (!post) {
    return {
      title: "Articolo non trovato",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://corioli.it/blog/${slug}`,
      publishedTime: post.isoDate,
      authors: ["Corioli"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postsBySlug[slug];

  if (!post) {
    notFound();
  }

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.isoDate,
        dateModified: post.isoDate,
        inLanguage: "it-IT",
        author: {
          "@type": "Organization",
          name: "Corioli",
          url: "https://corioli.it",
        },
        publisher: {
          "@type": "Organization",
          name: "Corioli",
          logo: {
            "@type": "ImageObject",
            url: "https://corioli.it/logo_short.png",
          },
        },
        mainEntityOfPage: `https://corioli.it/blog/${slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://corioli.it",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://corioli.it/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://corioli.it/blog/${slug}`,
          },
        ],
      },
      ...(post.faq
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <article className="pt-32 pb-24 bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Torna agli articoli
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold uppercase text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">
              {post.category}
            </span>
            <span className="text-sm text-gray-500 font-medium">
              {post.date}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
        </div>

        <div className="prose prose-lg prose-brand max-w-none text-gray-700 leading-relaxed">
          <p className="lead text-xl text-gray-600 mb-8 font-medium">
            {post.lead}
          </p>

          <div className="my-10 p-8 bg-brand-50 rounded-2xl border border-brand-100">
            <p className="italic text-brand-900 font-heading text-xl mb-0">
              "Un gestionale medico utile non archivia soltanto dati: deve
              aiutare il medico a lavorare meglio durante la visita."
            </p>
          </div>

          {post.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-2xl font-bold mt-12 mb-4 text-gray-900">
                {section.title}
              </h2>
              {section.body.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mb-6">
                  {paragraph}
                </p>
              ))}
              {section.variant === "comparison-table" && (
                <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full min-w-[640px] text-sm text-left">
                    <thead>
                      <tr className="bg-brand-50 border-b border-brand-100">
                        <th className="px-4 py-3 font-bold text-gray-900">
                          Nome
                        </th>
                        <th className="px-4 py-3 font-bold text-gray-900">
                          Cloud/Desktop
                        </th>
                        <th className="px-4 py-3 font-bold text-gray-900">
                          Calcolatori fetali
                        </th>
                        <th className="px-4 py-3 font-bold text-gray-900">
                          Cartella ostetrica
                        </th>
                        <th className="px-4 py-3 font-bold text-gray-900">
                          Prova gratuita
                        </th>
                        <th className="px-4 py-3 font-bold text-gray-900">
                          Prezzo indicativo
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {gynecologySoftwareComparison.map((row) => (
                        <tr
                          key={row.name}
                          className={
                            row.highlight
                              ? "bg-brand-50/60 border-b border-brand-100"
                              : "border-b border-gray-100 even:bg-gray-50/50"
                          }
                        >
                          <td className="px-4 py-3 font-semibold text-gray-900">
                            {row.name}
                          </td>
                          <td className="px-4 py-3 text-gray-700">
                            {row.deployment}
                          </td>
                          <td className="px-4 py-3 text-gray-700">
                            {row.fetalCalculators}
                          </td>
                          <td className="px-4 py-3 text-gray-700">
                            {row.obstetricRecord}
                          </td>
                          <td className="px-4 py-3 text-gray-700">
                            {row.freeTrial}
                          </td>
                          <td className="px-4 py-3 text-gray-700">
                            {row.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="px-4 py-3 text-xs text-gray-500 bg-gray-50 border-t border-gray-100">
                    * Prezzi e funzionalità basati su informazioni pubbliche
                    al 2025. Verificare sempre sul sito ufficiale del
                    fornitore.
                  </p>
                </div>
              )}
            </section>
          ))}

          {post.faq && post.faq.length > 0 && (
            <section>
              <h2 className="font-heading text-2xl font-bold mt-12 mb-6 text-gray-900">
                Domande frequenti
              </h2>
              <dl className="flex flex-col gap-6">
                {post.faq.map((item) => (
                  <div
                    key={item.question}
                    className="p-6 bg-gray-50 rounded-2xl border border-gray-100"
                  >
                    <dt className="font-heading font-bold text-lg text-gray-900 mb-3">
                      {item.question}
                    </dt>
                    <dd className="text-gray-700 leading-relaxed mb-0">
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>

        <div className="mt-16 pt-10 border-t border-gray-100">
          <div className="bg-brand-900 rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-40 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <h4 className="font-heading font-bold text-2xl text-white mb-3">
                Pronto a trasformare il tuo ambulatorio?
              </h4>
              <p className="text-brand-100 text-sm mb-8 max-w-md mx-auto">
                Scopri come Corioli può farti risparmiare ore di lavoro
                amministrativo con una demo gratuita di 15 minuti.
              </p>
              <Link
                href="/contatti"
                className="bg-white text-brand-900 px-6 py-3 rounded-xl font-bold hover:bg-brand-50 transition-colors inline-block text-sm shadow-md"
              >
                Richiedi una Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
