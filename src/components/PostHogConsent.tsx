"use client";

import { useEffect } from "react";
import { bootstrapPostHog } from "@/lib/posthog-client";

/** Allinea PostHog al consenso cookie (Cookiebot, categoria Statistiche). */
export default function PostHogConsent() {
  useEffect(() => {
    bootstrapPostHog();
  }, []);

  return null;
}
