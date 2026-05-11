"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import posthog from "posthog-js";

interface Articolo {
  slug: string;
  titolo: string;
  estratto: string;
  data: string;
  categoria: string;
}

export default function BlogGrid({ articoli }: { articoli: Articolo[] }) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articoli.map((articolo) => (
        <article key={articolo.slug} className="flex flex-col bg-white rounded-2xl shadow-soft border border-gray-100 hover:shadow-card hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
          <div className="p-8 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">{articolo.categoria}</span>
              <span className="text-xs text-gray-400 font-medium">{articolo.data}</span>
            </div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors line-clamp-3">
              <Link
                href={`/blog/${articolo.slug}`}
                className="before:absolute before:inset-0 relative"
                onClick={() => posthog.capture("blog_article_clicked", { slug: articolo.slug, title: articolo.titolo, categoria: articolo.categoria })}
              >
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
  );
}
