import { MetadataRoute } from 'next'
import { posts } from './blog/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://corioli.it/blog/${post.slug}`,
    lastModified: new Date(post.isoDate),
    changeFrequency: 'yearly',
    priority: 0.7,
  }))

  return [
    {
      url: 'https://corioli.it',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://corioli.it/funzionalita',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://corioli.it/specializzazioni',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://corioli.it/ginecologia',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://corioli.it/prezzi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://corioli.it/chi-siamo',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://corioli.it/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://corioli.it/contatti',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://corioli.it/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://corioli.it/gdpr',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://corioli.it/download',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...blogPosts,
  ]
}
