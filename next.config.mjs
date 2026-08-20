/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Gli screenshot del prodotto sono PNG pesanti (fino a 1,3 MB): serviti in
    // AVIF/WebP scendono di circa un ordine di grandezza. L'AVIF va per primo
    // perche comprime meglio, con WebP come fallback per i browser piu vecchi.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 giorni: sono asset statici che cambiano di rado
  },
  async rewrites() {
    return [
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
