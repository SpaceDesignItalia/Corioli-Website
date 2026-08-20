import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import BlogGrid from "@/components/BlogGrid";
import {
  posts,
  categories,
  categoryBySlug,
  categoryMeta,
} from "../../posts";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

function getCategory(slug: string) {
  const name = categoryBySlug[slug];
  if (!name) return null;
  const meta = categoryMeta[name];
  if (!meta) return null;
  return { name, meta };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {
      title: "Categoria non trovata",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: category.meta.title,
    description: category.meta.description,
    alternates: {
      canonical: `/blog/categoria/${slug}`,
    },
    openGraph: {
      title: `${category.meta.title} | Corioli`,
      description: category.meta.description,
      url: `https://corioli.it/blog/categoria/${slug}`,
    },
  };
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryPosts = posts.filter((post) => post.category === category.name);

  const articoli = categoryPosts.map((post) => ({
    slug: post.slug,
    titolo: post.title,
    estratto: post.excerpt,
    data: post.date,
    categoria: post.category,
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `https://corioli.it/blog/categoria/${slug}#collection`,
        url: `https://corioli.it/blog/categoria/${slug}`,
        name: category.meta.title,
        description: category.meta.description,
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://corioli.it/blog#blog" },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: categoryPosts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `https://corioli.it/blog/${post.slug}`,
            name: post.title,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://corioli.it" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://corioli.it/blog" },
          {
            "@type": "ListItem",
            position: 3,
            name: category.name,
            item: `https://corioli.it/blog/categoria/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        {/* Breadcrumb visibile: rispecchia il BreadcrumbList dei dati strutturati */}
        <nav aria-label="Percorso" className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors"
          >
            <ArrowLeft size={16} /> Tutti gli articoli
          </Link>
        </nav>

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wide text-brand-600 bg-brand-50 px-3 py-1 rounded-md mb-6">
            {category.name}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight text-balance">
            {category.meta.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {category.meta.intro}
          </p>
          <p className="text-sm text-gray-400 mt-6">
            {categoryPosts.length}{" "}
            {categoryPosts.length === 1 ? "articolo" : "articoli"}
          </p>
        </div>
      </div>

      <BlogGrid articoli={articoli} />

      {/* Le altre categorie: dà a ogni pagina link interni in uscita e permette
          ai motori di raggiungere l'intero blog da qualsiasi categoria. */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 mt-20 pt-10 border-t border-gray-100">
        <h2 className="font-heading text-xl font-bold text-gray-900 mb-6 text-center">
          Esplora le altre categorie
        </h2>
        <nav
          aria-label="Altre categorie"
          className="flex flex-wrap justify-center gap-3"
        >
          {categories
            .filter((item) => item.slug !== slug)
            .map((item) => (
              <Link
                key={item.slug}
                href={`/blog/categoria/${item.slug}`}
                className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-brand-300 hover:text-brand-700 transition-colors"
              >
                {item.name}{" "}
                <span className="text-gray-400">({item.count})</span>
              </Link>
            ))}
        </nav>
      </section>
    </div>
  );
}
