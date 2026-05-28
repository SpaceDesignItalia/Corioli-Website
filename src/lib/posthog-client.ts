import posthog from "posthog-js";
import { hasAnalyticsConsent } from "@/lib/cookie-consent";

let initialized = false;
let bootstrapped = false;

export function initPostHog(): void {
  if (typeof window === "undefined" || initialized) return;
  if (!hasAnalyticsConsent()) return;

  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  if (!token) return;

  posthog.init(token, {
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    defaults: "2026-01-30",
    capture_exceptions: true,
    debug: process.env.NODE_ENV === "development",
  });
  initialized = true;
}

export function shutdownPostHog(): void {
  if (typeof window === "undefined" || !initialized) return;
  posthog.opt_out_capturing();
  posthog.reset();
  initialized = false;
}

function syncPostHogWithConsent(): void {
  if (hasAnalyticsConsent()) {
    initPostHog();
  } else {
    shutdownPostHog();
  }
}

export function bootstrapPostHog(): void {
  if (typeof window === "undefined" || bootstrapped) return;
  bootstrapped = true;

  syncPostHogWithConsent();

  window.addEventListener("CookiebotOnConsentReady", syncPostHogWithConsent);
  window.addEventListener("CookiebotOnAccept", syncPostHogWithConsent);
  window.addEventListener("CookiebotOnDecline", syncPostHogWithConsent);
}
