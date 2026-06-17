import { ImageResponse } from "next/og";
import { posts, postsBySlug } from "../posts";

// Immagine OpenGraph per-articolo: mostra titolo e categoria del post, cosi
// ogni condivisione del blog ha un'anteprima dedicata invece di una generica.
export const alt = "Articolo del blog Corioli";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postsBySlug[slug];

  const title = post?.title ?? "Blog Corioli";
  const category = post?.category ?? "Approfondimenti";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "14px",
            backgroundColor: "#2d6b6b",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#2d6b6b",
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: "0.04em",
            }}
          >
            ● CORIOLI
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#f0f9f9",
              color: "#2d6b6b",
              fontSize: 26,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              padding: "10px 22px",
              borderRadius: "10px",
            }}
          >
            {category}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#0F172A",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            color: "#5ba6a6",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          corioli.it/blog
        </div>
      </div>
    ),
    { ...size },
  );
}
