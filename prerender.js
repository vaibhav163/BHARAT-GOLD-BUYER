// prerender.js
// Generates a real, crawlable static HTML file for every route so search
// engines (and social-preview bots, which mostly don't run JS at all) see
// full content immediately instead of an empty <div id="root">.
//
// Usage: node prerender.js   (run after `npm run build` + the ssr build)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from './dist-ssr/entry-server.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const SITE_URL = 'https://bharatgoldbuyer.com'; // update if the live domain differs

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const BUSINESS_NAME = 'Bharat Gold Buyer';
const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '1515 Upper Ground Floor, Wazir Nagar, South Extension, Kotla Mubarakpur',
  addressLocality: 'New Delhi',
  addressRegion: 'Delhi',
  postalCode: '110003',
  addressCountry: 'IN',
};
const GEO = { '@type': 'GeoCoordinates', latitude: 28.569136, longitude: 77.223220 };
const PHONE = '+91-9990780499';
const AREA_SERVED = ['South Extension', 'Lajpat Nagar', 'Kotla Mubarakpur', 'Wazir Nagar', 'South Delhi', 'Delhi NCR'];

const LOCAL_BUSINESS_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: PHONE,
  email: 'bharatgoldbuyer@gmail.com',
  description: 'Gold, silver, diamond and coin buyer offering instant cash payment, certified German karat-meter purity testing, and pledged gold loan release in South Delhi.',
  address: ADDRESS,
  geo: GEO,
  areaServed: AREA_SERVED,
  priceRange: '₹₹',
};

function faqLd(qas) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qas.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

// One entry per route in src/App.jsx. Title ≤ 60 chars, description ≤ 155 chars.
const routes = [
  {
    path: '/',
    title: 'Gold Buyer in South Delhi | Cash for Gold Near Me | Bharat Gold Buyer',
    description: 'Trusted gold buyer in South Delhi (South Extension, Lajpat Nagar, Kotla Mubarakpur, Wazir Nagar). Sell gold, silver, diamonds & coins for instant cash.',
    jsonLd: [
      LOCAL_BUSINESS_LD,
      faqLd([
        { q: 'How do you test gold purity?', a: 'We use a German karat-meter machine for non-destructive gold purity testing, so your jewellery is tested accurately without any damage or cutting.' },
        { q: 'What is today\u2019s gold buying rate in Delhi?', a: 'Gold rates change daily. Call us at +91 9990780499 for today\u2019s live gold buying rate before you visit.' },
        { q: 'Do you offer the highest price for old gold?', a: 'We price old gold jewellery, scrap gold, coins and bars based on current market rates and certified purity testing to ensure you get a fair, competitive price.' },
        { q: 'Are you a trusted gold buyer near South Extension and Lajpat Nagar?', a: 'Yes, our branch is located at Wazir Nagar on the South Extension–Kotla Mubarakpur border, serving customers across South Extension, Lajpat Nagar, Kotla Mubarakpur and Wazir Nagar in South Delhi.' },
      ]),
    ],
  },
  {
    path: '/aboutus',
    title: 'About Bharat Gold Buyer | Trusted Gold Buyer in Delhi NCR',
    description: 'Learn about Bharat Gold Buyer — a trusted gold, silver and diamond buyer in South Delhi known for certified purity testing and instant cash payment.',
  },
  {
    path: '/blog',
    title: 'Gold & Silver Selling Guides | Bharat Gold Buyer Blog',
    description: 'Tips and guides on getting the best price when you sell gold, silver, diamonds and coins, from the team at Bharat Gold Buyer, Delhi NCR.',
  },
  {
    path: '/cash-against-gold',
    title: 'Sell Old Gold Jewelry & Scrap Gold for Cash | Release Pledged Gold',
    description: 'Sell old gold jewelry, scrap gold, coins and bars for instant cash. We also help release gold pledged with a bank or NBFC and pay off gold loans in Delhi.',
    jsonLd: faqLd([
      { q: 'Can you release gold I pledged with a bank for a loan?', a: 'Yes. We help release pledged gold from a bank or NBFC by paying off your outstanding gold loan, then buying the released gold from you at the current market rate.' },
      { q: 'How do I pay off my gold loan and sell the gold?', a: 'Share your bank/NBFC name, outstanding loan amount and pledged gold weight with us. We settle the loan to release the gold, then value and pay you the balance in cash on the spot.' },
      { q: 'Do you buy scrap gold and broken jewelry?', a: 'Yes, we buy old gold jewelry, scrap gold, and broken pieces at fair market value based on certified purity testing.' },
    ]),
  },
  {
    path: '/contactus',
    title: 'Contact Bharat Gold Buyer | Gold Buyer Near Kotla Mubarakpur',
    description: 'Contact Bharat Gold Buyer for a free gold, silver or diamond valuation. Visit our South Extension / Wazir Nagar branch or call +91 9990780499.',
  },
  {
    path: '/cash-for-silver',
    title: 'Cash for Silver in Delhi | Sell Old Silver Coins | Bharat Gold Buyer',
    description: 'Sell silver jewellery, utensils and old silver coins for instant cash for silver in Delhi NCR with certified valuation at Bharat Gold Buyer.',
  },
  {
    path: '/cash-for-diamond',
    title: 'Sell Diamond Jewelry in Delhi | Diamond Buyer Near Me | Bharat Gold Buyer',
    description: 'Sell diamond jewelry online or in person in Delhi. Certified diamond valuation and instant cash payout with Bharat Gold Buyer, a trusted diamond buyer near you.',
  },
  {
    path: '/sell-gold-coins',
    title: 'Sell Gold Coins & Bars for Cash | Bharat Gold Buyer',
    description: 'Sell gold coins and bars for instant cash at the best market rate with certified purity testing at Bharat Gold Buyer, Delhi NCR.',
  },
];

function buildHead(route) {
  const canonical = `${SITE_URL}${route.path === '/' ? '' : route.path}`;
  let head = '';
  head += `\n    <title>${route.title}</title>\n`;
  head += `    <meta name="description" content="${route.description}" />\n`;
  head += `    <link rel="canonical" href="${canonical}" />\n`;
  head += `    <meta property="og:type" content="website" />\n`;
  head += `    <meta property="og:site_name" content="Bharat Gold Buyers" />\n`;
  head += `    <meta property="og:title" content="${route.title}" />\n`;
  head += `    <meta property="og:description" content="${route.description}" />\n`;
  head += `    <meta property="og:url" content="${canonical}" />\n`;
  head += `    <meta name="twitter:card" content="summary_large_image" />\n`;
  head += `    <meta name="twitter:title" content="${route.title}" />\n`;
  head += `    <meta name="twitter:description" content="${route.description}" />\n`;
  if (route.jsonLd) {
    const blocks = Array.isArray(route.jsonLd) ? route.jsonLd : [route.jsonLd];
    for (const block of blocks) {
      head += `    <script type="application/ld+json">${JSON.stringify(block)}</script>\n`;
    }
  }
  return head;
}

for (const route of routes) {
  const appHtml = render(route.path);

  let pageHtml = template
    // Replace the existing <title>...</title>
    .replace(/<title>.*?<\/title>/s, '')
    // Remove the template's default meta description so it doesn't duplicate the per-page one
    .replace(/\s*<meta name="description"[^>]*\/?>\s*/, '\n')
    .replace('</head>', `${buildHead(route)}  </head>`)
    // Inject the server-rendered app markup into the root div
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outDir = route.path === '/' ? distDir : path.join(distDir, route.path);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), pageHtml, 'utf-8');
  console.log(`✓ prerendered ${route.path === '/' ? '/' : route.path + '/'}`);
}

console.log(`\nDone. ${routes.length} static pages written into dist/`);
