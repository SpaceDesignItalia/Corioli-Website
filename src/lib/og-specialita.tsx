import { ImageResponse } from "next/og";
import { LOGO_RATIO, logoDataUri } from "@/lib/brand";

// Anteprima social delle pagine di specialità, nello stile di
// app/opengraph-image.tsx. /ginecologia e /cardiologia sono i link delle
// campagne e girano su WhatsApp e LinkedIn: con l'immagine generica del sito
// l'anteprima non diceva per quale specialità fosse il software.
// Solo testo, niente screenshot: un PNG con una schermata supera facilmente
// i 300 KB oltre i quali WhatsApp non mostra l'anteprima.
export const ogSize = { width: 1200, height: 630 };

export async function immagineSpecialita({
  occhiello,
  titolo,
  testo,
  percorso,
}: {
  occhiello: string;
  titolo: string;
  testo: string;
  percorso: string;
}) {
  const logo = await logoDataUri("corioli-logo-su-scuro.svg");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#213f3f",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-160px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            backgroundColor: "#2d6b6b",
            opacity: 0.55,
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori vuole <img> */}
        <img
          src={logo}
          alt=""
          width={Math.round(64 * LOGO_RATIO)}
          height={64}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#8cc7c7",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            {occhiello}
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: "980px",
            }}
          >
            {titolo}
          </div>
          <div
            style={{
              marginTop: "28px",
              color: "#d9eeee",
              fontSize: 32,
              maxWidth: "960px",
              lineHeight: 1.3,
            }}
          >
            {testo}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#8cc7c7",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          {percorso}
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
