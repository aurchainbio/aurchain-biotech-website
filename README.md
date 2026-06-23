# Aurchain Biotech Website

English B2B marketing website for [aurchainbio.com](https://www.aurchainbio.com), built with Next.js, TypeScript, and Tailwind CSS. It exports as plain static files and does not require a database or server.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Before launch

1. Open `lib/site.ts` and replace the placeholder WhatsApp number with the final full international number (digits only).
2. Confirm that `sales@aurchainbio.com` is active, or update it in the same file.
3. Review the example catalog in `data/products.ts`. Add or remove product objects there; the search and filters update automatically.
4. Confirm all regulatory language with your legal/compliance advisor for each target market.

## Static build

```bash
npm run build
```

The deployable static website is generated in `out/`.

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import the repository in Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build`.
5. Deploy and connect `www.aurchainbio.com` in **Project Settings → Domains**.

Vercel detects the exported site automatically.

## Deploy to Cloudflare Pages

1. Create a Pages project from the Git repository.
2. Framework preset: **Next.js (Static HTML Export)**.
3. Build command: `npm run build`.
4. Build output directory: `out`.
5. Set the Node.js version to 20 or newer.
6. Deploy and add `www.aurchainbio.com` under **Custom domains**.

## RFQ form behavior

The RFQ form runs entirely in the browser. On submit, it opens the visitor's email app with a structured inquiry addressed to the configured sales email. This keeps the site static and stores no visitor data. A hosted form service or CRM endpoint can be added later without redesigning the form.

## Project structure

```text
app/                     Pages, metadata, and global styles
  products/              Searchable catalog
  custom-peptide-synthesis/
  quality-control/
  about/
  contact/               RFQ and direct contact
components/              Shared navigation, cards, form, and CTA
data/products.ts         Extensible product catalog
lib/site.ts              Central contact and domain settings
public/                   robots.txt and sitemap.xml
```
