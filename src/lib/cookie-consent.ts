export const COOKIE_CONSENT_KEY = "cookie_consent";

export type CookieConsentValue = "accepted" | "declined";

export function getStoredCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function setStoredCookieConsent(value: CookieConsentValue): void {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new Event("cookie_consent_changed"));
}

/** Consenso analytics: Cookiebot (statistics) o, in assenza, banner locale. */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;

  const cookiebot = window.Cookiebot;
  if (cookiebot?.consent) {
    return cookiebot.consent.statistics === true;
  }

  const stored = getStoredCookieConsent();
  if (stored === "declined") return false;
  return stored === "accepted";
}

/** Consenso marketing: Cookiebot (marketing) o, in assenza, banner locale. */
export function hasMarketingConsent(): boolean {
  if (typeof window === "undefined") return false;

  const cookiebot = window.Cookiebot;
  if (cookiebot?.consent) {
    return cookiebot.consent.marketing === true;
  }

  const stored = getStoredCookieConsent();
  if (stored === "declined") return false;
  return stored === "accepted";
}
