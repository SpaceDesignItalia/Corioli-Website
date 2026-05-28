import { hasMarketingConsent } from "@/lib/cookie-consent";

export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18188860926";

let bootstrapped = false;

export function isGoogleAdsEnabled(): boolean {
  return hasMarketingConsent();
}

export function bootstrapGoogleAds(
  onConsentChange?: (enabled: boolean) => void,
): void {
  if (typeof window === "undefined" || bootstrapped) return;
  bootstrapped = true;

  const sync = () => onConsentChange?.(isGoogleAdsEnabled());

  sync();

  window.addEventListener("CookiebotOnConsentReady", sync);
  window.addEventListener("CookiebotOnAccept", sync);
  window.addEventListener("CookiebotOnDecline", sync);
}
