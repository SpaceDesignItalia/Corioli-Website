import type { Metadata } from "next";
import Link from "next/link";
import BlogGrid from "@/components/BlogGrid";
import { posts, categories } from "./posts";

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

const articoli = posts.map((post) => ({
  slug: post.slug,
  titolo: post.title,
  estratto: post.excerpt,
  data: post.date,
  categoria: post.category,
}));

// Dati strutturati della raccolta: elenca gli articoli in ordine cosi i motori
// di ricerca capiscono che /blog e la pagina indice del blog e non un articolo.
const blogStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://corioli.it/blog#blog",
      url: "https://corioli.it/blog",
      name: "Blog Corioli",
      description:
        "Guide e approfondimenti su gestionale medico, cartella clinica elettronica, digitalizzazione dello studio medico e normativa sanitaria.",
      inLanguage: "it-IT",
      publisher: {
        "@type": "Organization",
        name: "Corioli",
        url: "https://corioli.it",
      },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.isoDate,
        url: `https://corioli.it/blog/${post.slug}`,
      })),
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
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogStructuredData).replace(/</g, "\u003c"),
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
         <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
           Gestionale medico e studio digitale: guide per lo specialista
         </h1>
         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           Approfondimenti su cartella clinica elettronica, refertazione,
           calcolatori clinici e normativa sanitaria, scritti per chi lavora
           ogni giorno in ambulatorio.
         </p>

         <nav
           aria-label="Categorie del blog"
           className="flex flex-wrap justify-center gap-3 mt-10"
         >
           {categories.map((category) => (
             <Link
               key={category.slug}
               href={`/blog/categoria/${category.slug}`}
               className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-brand-300 hover:text-brand-700 transition-colors"
             >
               {category.name}{" "}
               <span className="text-gray-400">({category.count})</span>
             </Link>
           ))}
         </nav>
      </div>

      <BlogGrid articoli={articoli} />

    </div>
  );
}
