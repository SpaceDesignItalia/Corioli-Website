import { MetadataRoute } from 'next'
import { posts, categorySlug } from './blog/posts'

const BASE = 'https://corioli.it'

// Data dell'ultima revisione sostanziale delle pagine statiche. È volutamente
// una costante e non `new Date()`: rigenerare la sitemap a ogni build faceva
// dichiarare "modificata oggi" anche per pagine ferme da mesi, e un lastmod
// sempre aggiornato è un segnale che Google impara a ignorare.
// Aggiornala quando modifichi davvero il contenuto delle pagine.
const STATIC_PAGES_UPDATED = '2026-08-20'

type StaticEntry = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
  lastModified?: string
}

const staticPages: StaticEntry[] = [
  { path: '', changeFrequency: 'monthly', priority: 1 },
  { path: '/funzionalita', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/specializzazioni', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ginecologia', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/prezzi', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/chi-siamo', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/contatti', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/download', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/gdpr', changeFrequency: 'yearly', priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE}${page.path}`,
    lastModified: new Date(page.lastModified ?? STATIC_PAGES_UPDATED),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Le pagine indice di categoria derivano dalle categorie effettivamente
  // presenti negli articoli, così non restano URL orfani se una categoria
  // sparisce.
  const categories = [...new Set(posts.map((post) => post.category))].sort()
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE}/blog/categoria/${categorySlug(category)}`,
    lastModified: new Date(
      posts
        .filter((post) => post.category === category)
        .map((post) => post.updatedIso ?? post.isoDate)
        .sort()
        .reverse()[0],
    ),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    // Se l'articolo è stato rivisto, il lastmod è la data di revisione.
    lastModified: new Date(post.updatedIso ?? post.isoDate),
    changeFrequency: 'yearly',
    priority: 0.7,
  }))

  return [...pages, ...categoryPages, ...blogPosts]
}
