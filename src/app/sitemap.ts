import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
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
    {
      url: 'https://corioli.it/blog/gestionale-per-ginecologi-cosa-cercare',
      lastModified: new Date('2025-02-05'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://corioli.it/blog/come-sostituire-word-excel-studio-medico',
      lastModified: new Date('2025-01-28'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://corioli.it/blog/gestionale-medico-gdpr-cosa-deve-avere',
      lastModified: new Date('2025-01-20'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://corioli.it/blog/cos-e-cartella-clinica-elettronica-come-sceglierla',
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://corioli.it/blog/migliori-software-gestionali-medici-italia',
      lastModified: new Date('2025-01-10'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://corioli.it/blog/come-digitalizzare-lo-studio-ginecologico',
      lastModified: new Date('2024-05-24'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://corioli.it/blog/gestionale-medico-vs-word-ginecologi',
      lastModified: new Date('2024-05-12'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://corioli.it/blog/cartella-clinica-elettronica-obbligatoria-2025',
      lastModified: new Date('2024-05-03'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
