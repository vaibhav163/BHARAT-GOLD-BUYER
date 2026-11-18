# Bharat Gold Buyer — React (SSG) Build

Vite 5 + React 18, prerendered to real static HTML, **clean URLs** (no `.html`),
design per the owner's guide: cream #FFFBF3, dark brown #3E2413 headings,
gold #D9A404 / #E9B949 accents, brown buttons #8A5A00, dark brown footer #2E1A0C.
**52 pages + 404** — core, services, keyword/local-intent, 13 Delhi area pages, 5 blogs.

## Local par chalana ho to (development)
```
npm install
npm run dev      -> http://localhost:5173  (koi bhi page: /sell-gold, /gold-buyer-near-me ...)
npm run build    -> dist/ dobara banta hai (prerendered, deploy-ready)
npm run preview  -> bane hue dist/ ko local par dekhne ke liye
```

## Deploy (Option A — no build needed)
1. Upload the **contents of `dist/`** to the root of the hosting repo / hosting.
   Everything is pre-built: HTML, CSS, JS, images, sitemap.xml, robots.txt, llms.txt, vercel.json.
2. Vercel serves `dist/<page>/index.html` for each clean URL and `dist/index.html` for `/`.
3. `vercel.json` (inside dist/) has: security headers, cache headers, `/home` → `/`
   and main `.html` → clean-URL 301 redirects.

## After deploy — indexing (owner's steps)
- Submit the sitemap in Google Search Console: `https://www.bharatgoldbuyer.com/sitemap.xml` (52 URLs).
- Request indexing first for: homepage, /sell-gold, /gold-rate-today, /gold-buyer-near-me,
  /gold-buyer-in-south-extension, /sell-gold-in-south-delhi.
- Do **one real test enquiry** from the live site and confirm the email arrives.
- GBP guide: see `../bharat-gbp-guide.md` (category = Gold dealer, NAP, services, photos, reviews, Q&A, weekly posts).

## Enquiry form
- Wired **inside React** (`src/lib/enquiry.jsx`, `@emailjs/browser`) — same shared
  EmailJS account as the owner's other sites: public key `xLfYDZXLlR6IeQ-C6`,
  service `service_fkmfynb`, template `template_bdjcyq6`. Exactly **1 send per submit**.
- Success → thank-you overlay + toast + form resets. Failure → WhatsApp fallback
  link (wa.me/919990780499) shown; WhatsApp never auto-opens.
- `public/js/main.js` handles only click tracking, mobile menu, FAQ accordion,
  trust strip and the lead popup. **Do NOT add form wiring there — it would double-send.**
- dataLayer events: `click_call`, `click_whatsapp`, `click_directions`, `enquiry_submit`.
- Conversion tracking is a generic dataLayer push helper. **GTM is intentionally EMPTY**
  in `src/config.js` (no GTM ID exists for Bharat yet — do not copy Samridhi's).
  When the owner provides a GTM ID / Google verification code, set `GTM` / `GVERIFY`
  in `src/config.js` and rebuild — the head and noscript are already guarded on them.

## Facts baked in (do not change casually)
- **ONE branch only:** 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I,
  Kotla Mubarakpur, New Delhi, Delhi **110003** (use 110003 everywhere — GBP pin code).
- Phones: **+91 9990780499** (primary / WhatsApp), +91 9821598950 (secondary).
- Email: bharatgoldbuyer@gmail.com · Hours: **10:00 AM – 8:00 PM, all 7 days**.
- Area pages = areas customers travel **from** to the South Extension branch.
  Every area page says plainly that there is no branch in that area.
- **No gold rate/price is published anywhere** — rates change daily; the Gold Rate
  Today page has the formula, BIS purity table and a clearly-labelled illustrative
  example only, plus "call for today's rate". No "highest price" claims anywhere.
- No aggregateRating / fake review schema (the old site's Google stars are NOT in schema).
- Images: central paths in `src/config.js` (`IMG`). Hero/service/feature images are the
  owner's own live-site assets; blog/gallery extras are generated gold graphics —
  replace with real branch photos under the **same file names** anytime.
- Business constants live only in `src/config.js`. Routes/titles/meta in `src/routes.jsx`.
- `KEYWORD-MAP.md` maps each target keyword to its page.

## Zip contents
Source + ready `dist/` + this README + KEYWORD-MAP.md. `node_modules` and `dist-ssr`
are NOT in the zip. `.gitignore` (node_modules, dist-ssr) is included — if you push
the source to GitHub, keep it, or Vercel builds fail with 'vite: Permission denied'.
