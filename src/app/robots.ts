import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/lp/',
    },
    sitemap: 'https://corioli.it/sitemap.xml',
  }
}
