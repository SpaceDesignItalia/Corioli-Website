/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Gli screenshot del prodotto sono PNG pesanti (fino a 1,3 MB): serviti in
    // AVIF/WebP scendono di circa un ordine di grandezza. L'AVIF va per primo
    // perche comprime meglio, con WebP come fallback per i browser piu vecchi.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 giorni: sono asset statici che cambiano di rado
  },
  // Le demo non devono comparire nei motori di ricerca.
  async headers() {
    return [
      {
        source: "/demo/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      // Gli asset delle demo hanno l'hash nel nome: cambiano nome a ogni
      // build, quindi possono restare in cache un anno. Chi riapre la demo non
      // riscarica niente.
      {
        source: "/demo/:spec/assets/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async rewrites() {
    return [
      // Le demo sono app a pagina singola in public/demo/<specialita>/:
      // senza queste regole l'indirizzo senza index.html darebbe 404.
      { source: "/demo/:spec(ginecologia|cardiologia)", destination: "/demo/:spec/index.html" },
      { source: "/demo/:spec(ginecologia|cardiologia)/", destination: "/demo/:spec/index.html" },
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/array/:path*",
        destination: "https://eu-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
