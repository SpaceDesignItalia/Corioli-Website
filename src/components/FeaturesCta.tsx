"use client";

import Link from "next/link";
import posthog from "posthog-js";

export default function FeaturesCta() {
  return (
    <Link
      href="/contatti"
      className="bg-brand-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-700 transition-colors shadow-soft hover:shadow-card"
      onClick={() => posthog.capture("features_cta_clicked")}
    >
      Richiedi Demo
    </Link>
  );
}
