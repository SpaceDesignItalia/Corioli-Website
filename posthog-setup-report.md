<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Corioli website (Next.js 16 App Router). Here is a summary of all changes made:

## Integration summary

- **`instrumentation-client.ts`** (new) — Client-side PostHog initialization using the `instrumentation-client.ts` pattern for Next.js 15.3+. Initializes `posthog-js` with the EU host, error tracking, and a reverse proxy.
- **`next.config.mjs`** — Added reverse proxy rewrites so all PostHog requests route through `/ingest/` (avoiding ad blockers), with both `/ingest/static/*` and `/ingest/array/*` pointing to the EU assets host.
- **`src/lib/posthog-server.ts`** (new) — Singleton server-side PostHog client (`posthog-node`) used by API routes.
- **`.env.local`** — `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` added.
- **`src/components/BlogGrid.tsx`** (new) — Client component wrapping the blog article grid to enable click tracking.
- **`src/components/FeaturesCta.tsx`** (new) — Client component wrapping the features-page CTA link to enable click tracking.

## Events instrumented

| Event | Description | File |
|---|---|---|
| `demo_request_submitted` | Client-side: contact form submitted successfully | `src/app/contatti/page.tsx` |
| `demo_request_failed` | Contact form submission error (server or network) | `src/app/contatti/page.tsx` |
| `contact_form_submitted` | Server-side: email sent successfully after demo request | `src/app/api/contact/route.ts` |
| `pricing_billing_toggled` | User switches between monthly and annual billing | `src/app/prezzi/page.tsx` |
| `pricing_cta_clicked` | User clicks "Inizia la prova di 14 giorni" on pricing page | `src/app/prezzi/page.tsx` |
| `hero_cta_clicked` | User clicks "Inizia la prova gratuita" on homepage hero | `src/app/page.tsx` |
| `dashboard_tab_switched` | User switches between Ostetricia/Pediatria demo tabs | `src/app/page.tsx` |
| `login_attempted` | User submits the login form | `src/app/login/page.tsx` |
| `lp_ginecologia_viewed` | Gynecology landing page viewed (top of funnel) | `src/app/lp/ginecologia/page.tsx` |
| `lp_ginecologia_demo_requested` | Demo form submitted on gynecology landing page | `src/app/lp/ginecologia/page.tsx` |
| `blog_article_clicked` | User clicks a blog article card | `src/components/BlogGrid.tsx` |
| `features_cta_clicked` | User clicks "Richiedi Demo" on the features page | `src/components/FeaturesCta.tsx` |

User identification is performed at:
- **Login form** (`posthog.identify(email)`) in `src/app/login/page.tsx`
- **Contact form success** (`posthog.identify(email, { name, specializzazione })`) in `src/app/contatti/page.tsx`
- **Server-side** (`posthog.identify({ distinctId: email, properties })`) in `src/app/api/contact/route.ts`

Exception capture (`posthog.captureException`) is added to the contact form network error handler.

## Next steps

We've built a dashboard and five insights to track user behavior from day one:

- **Dashboard — Analytics basics**: https://eu.posthog.com/project/176856/dashboard/673850
  - **Demo Request Conversion Funnel** (hero CTA → demo submitted): https://eu.posthog.com/project/176856/insights/wF1tYwqt
  - **Demo Requests Over Time** (server-side, area graph): https://eu.posthog.com/project/176856/insights/H5oW3n6E
  - **CTA Performance** (hero vs pricing vs features): https://eu.posthog.com/project/176856/insights/PnH9GHV8
  - **Pricing Page Engagement** (billing toggle + CTA): https://eu.posthog.com/project/176856/insights/ov86NvSY
  - **Gynecology Landing Page Funnel** (LP view → demo requested): https://eu.posthog.com/project/176856/insights/klYCcVMB

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
