"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { bootstrapGoogleAds, GOOGLE_ADS_ID } from "@/lib/google-ads";

/** Carica il tag Google Ads (gtag) solo con consenso marketing. */
export default function GoogleAdsTag() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    bootstrapGoogleAds(setEnabled);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  );
}
