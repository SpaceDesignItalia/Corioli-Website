/** Consenso analytics tramite Cookiebot (categoria Statistiche). */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  return window.Cookiebot?.consent?.statistics === true;
}

/** Consenso marketing tramite Cookiebot (categoria Marketing). */
export function hasMarketingConsent(): boolean {
  if (typeof window === "undefined") return false;
  return window.Cookiebot?.consent?.marketing === true;
}
