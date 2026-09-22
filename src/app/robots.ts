import { MetadataRoute } from 'next'

// Crawler degli assistenti conversazionali e dei motori di risposta. Sono
// dichiarati esplicitamente per due motivi: (1) alcuni — Google-Extended e
// Applebot-Extended su tutti — di default NON leggono nulla se il sito non li
// nomina, quindi il silenzio equivale a un divieto; (2) un gruppo esplicito
// rende evidente che l'accesso e voluto, invece di dipendere dalla regola
// generica che qualcuno potrebbe stringere in futuro senza accorgersene.
// Per Corioli farsi citare da ChatGPT, Claude, Perplexity e Gemini quando un
// medico chiede "gestionale medico" vale quanto una posizione su Google.
const AI_CRAWLERS = [
  // OpenAI: addestramento, ricerca in ChatGPT, navigazione su richiesta utente
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google Gemini e AI Overviews (token separato da Googlebot)
  'Google-Extended',
  // Apple Intelligence e Siri (token separato da Applebot)
  'Applebot-Extended',
  // Microsoft Copilot passa da Bingbot, gia coperto dalla regola generica
  'Amazonbot',
  'meta-externalagent',
  'DuckAssistBot',
  'MistralAI-User',
  'cohere-ai',
  'YouBot',
  'CCBot',
]

export default function robots(): MetadataRoute.Robots {
  // /login non e disallow: la pagina ha gia robots noindex nel suo layout e
  // bloccarla qui impedirebbe a Google di leggere quel noindex, lasciandola
  // indicizzabile se qualcuno la linka dall'esterno.
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: AI_CRAWLERS,
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://corioli.it/sitemap.xml',
    host: 'https://corioli.it',
  }
}
