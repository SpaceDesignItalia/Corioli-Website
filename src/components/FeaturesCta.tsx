"use client";

import Link from "next/link";
import posthog from "posthog-js";

export default function FeaturesCta() {
  return (
    <Link
      href="/download"
      className="bg-brand-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-700 transition-colors shadow-soft hover:shadow-card"
      onClick={() => posthog.capture("features_cta_clicked")}
    >
      Inizia la prova
    </Link>
  );
}
