import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // /login non e disallow: la pagina ha gia robots noindex nel suo layout e
  // bloccarla qui impedirebbe a Google di leggere quel noindex, lasciandola
  // indicizzabile se qualcuno la linka dall'esterno.
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://corioli.it/sitemap.xml',
    host: 'https://corioli.it',
  }
}
