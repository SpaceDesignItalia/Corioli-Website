import type { Metadata } from "next";
import BlogGrid from "@/components/BlogGrid";
import { posts } from "./posts";

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

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
         <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Risorse & Approfondimenti</h1>
         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           Riflessioni e guide sull'intersezione tra medicina specialistica, tecnologia e gestione moderna dell'ambulatorio.
         </p>
      </div>

      <BlogGrid articoli={articoli} />

    </div>
  );
}
