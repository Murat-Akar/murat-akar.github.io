# Murat Akar — Portfolio

React + TypeScript + Vite portfolio featuring LeadOps Copilot, Lumina AI, Seller Insights, Intersection Incident Lab, and LeadOps Lab (GTM Diagnosis Lab and Lead-to-Demo Accelerator).

## Run locally

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
```

Output: `dist/`. The hash-based routes work on static hosting without route rewrites.

## Deploy to Vercel

Import this GitHub repository, select Vite, keep root directory `./`, build command `npm run build` and output directory `dist`. No environment variables are required by this version.

The contact form uses a public Web3Forms form identifier. This is not a Gmail password or a private API credential.

Seller Insights displays bundled synthetic report data or a JSON uploaded locally in the browser. The site does not call n8n, HubSpot or Amazon APIs. Public workflow exports are inactive templates without credential bindings.

Intersection Incident Lab is presented through screenshots and source links; the Kotlin/Kafka/PostgreSQL application is not hosted with this static portfolio.

Asset sources and component references are documented in ATTRIBUTION.md.
