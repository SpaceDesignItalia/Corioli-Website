import { ImageResponse } from "next/og";
import { LOGO_RATIO, logoDataUri } from "@/lib/brand";

// Immagine OpenGraph/social generata dinamicamente: sostituisce il vecchio
// /og-image.jpg (mancante) ed e usata come anteprima per la home e le pagine
// che non definiscono una propria immagine.
export const alt = "Corioli — Gestionale medico per specialisti";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
              color: "#ffffff",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            Il gestionale medico per specialisti
          </div>
          <div
            style={{
              marginTop: "28px",
              color: "#d9eeee",
              fontSize: 34,
              maxWidth: "880px",
              lineHeight: 1.3,
            }}
          >
            Cartella clinica elettronica, referti e calcolatori clinici per
            ginecologia, ostetricia e cardiologia.
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
          corioli.it
        </div>
      </div>
    ),
    { ...size },
  );
}
