import React from "react";
import { STREET, CITY, PIN, PHONE_D, HOURS_D } from "./config.js";
import { faqLd, breadcrumbLd, serviceLd } from "./lib/schema.js";
import { CORE_FAQS, HOME_FAQS, BLOGS } from "./data/core.js";
import HomePage from "./pages/Home.jsx";
import {
  AboutPage, WhatWeBuyPage, ProcessPage, GalleryPage, FaqPage, ContactPage,
  WhyChooseUsPage, LocationsPage,
} from "./pages/Simple.jsx";
import {
  SellGoldPage, CashForGoldPage, SellOldGoldPage, SellSilverPage, SellDiamondsPage,
  SellCoinsPage, ReleasePledgedGoldPage, GoldRatePage, ScrapGoldBuyerPage,
  SellBrokenGoldPage, GoldExchangePage, InstantCashPage,
} from "./pages/Services.jsx";
import {
  DelhiPage, SouthDelhiPage, SouthExtensionPage, SouthExtensionPartIPage,
  LajpatNagarPage, GreaterKailashPage, DefenceColonyPage, SaketPage,
  KotlaMubarakpurPage, HauzKhasPage, NehruPlacePage, KalkajiPage, MalviyaNagarPage,
} from "./pages/Areas.jsx";
import { BlogIndexPage, BlogPostPage, blogPostSchemas } from "./pages/Blogs.jsx";
import { PrivacyPage, TermsPage, SitemapPage, NotFoundPage } from "./pages/Legal.jsx";
import {
  GoldBuyerNearMePage, BestGoldBuyerDelhiPage, OldGoldBuyerDelhiPage,
  WhereToSellGoldPage, SafePlacePage, CashForGoldSouthDelhiPage,
  SellGoldJewellerySouthDelhiPage, GoldPurityTestingPage, GoldValuationPage,
} from "./pages/Keyword.jsx";

const F = CORE_FAQS;
const bc = (items) => breadcrumbLd(items);
const svcBc = (name, slug) => bc([["Home", ""], ["What We Buy", "what-we-buy"], [name, slug]]);
const svcSchemas = (name, slug, faqs) => [svcBc(name, slug), faqLd(faqs), serviceLd(name)];
const areaSchemas = (area, slug, faqs) => [bc([["Home", ""], [`Gold Buyer in ${area}`, slug]]), faqLd(faqs)];
const areaFaqs = (area) => [
  [`Do you have a branch in ${area}?`, `No — our only branch is at ${STREET}, ${CITY} ${PIN}. Customers from ${area} travel to us there. We never claim a branch we don't have.`],
  [`Can I get an estimate on call before travelling from ${area}?`, `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat and we'll give you an indicative value at the day's rate. The final figure is confirmed after the free German Karat Meter test at the branch.`],
  F[1], F[4]];

const R = (path, title, desc, element, schemas, extra = {}) => ({
  path,
  file: path === "/" ? "index.html" : path.slice(1) + "/index.html",
  head: { title, desc, path, ogtype: extra.ogtype || "website", schemas },
  element,
  popup: !!extra.popup,
  priority: extra.priority || "0.7",
});

export const ROUTES = [
  R("/", "Gold Buyer in Delhi | Cash Against Gold, Silver & Diamonds — Bharat Gold Buyer, South Extension",
    "Sell gold, silver, diamonds & coins in Delhi at Bharat Gold Buyer, South Extension. Free German Karat Meter purity testing, transparent valuation & instant payment. Open 7 days — call +91 9990780499.",
    <HomePage />, [faqLd(HOME_FAQS), bc([["Home", ""]])], { popup: true, priority: "1.0" }),

  R("/about", "About Us | Bharat Gold Buyer — Trusted Gold Buyer in South Extension, Delhi",
    "Bharat Gold Buyer at Wazir Nagar, South Extension buys gold, silver, diamonds & coins with German Karat Meter testing, transparent valuation and instant payment. Know who you're selling to.",
    <AboutPage />, [bc([["Home", ""], ["About Us", "about"]])]),

  R("/what-we-buy", "What We Buy | Gold, Silver, Diamonds & Coins — Bharat Gold Buyer, Delhi",
    "We buy gold jewellery, silver articles, diamond jewellery and gold/silver coins in South Delhi — with or without hallmark or bill. Free German Karat Meter testing & instant payment.",
    <WhatWeBuyPage />, [bc([["Home", ""], ["What We Buy", "what-we-buy"]])]),

  R("/process", "How to Sell Gold in 3 Easy Steps | Bharat Gold Buyer, South Extension, Delhi",
    "Visit our South Extension branch, get your gold evaluated on a German Karat Meter, and receive instant payment. Selling gold at Bharat Gold Buyer in 3 easy steps.",
    <ProcessPage />,
    [bc([["Home", ""], ["How It Works", "process"]]),
     { "@type": "HowTo", name: "How to sell gold at Bharat Gold Buyer",
       step: [
         ["Visit our branch", "Visit 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, New Delhi with your jewellery and a valid photo ID."],
         ["Get your gold evaluated", "Purity is tested on a German Karat Meter in front of you — non-destructive, result on screen — then weighed and valued at the day's rate."],
         ["Receive instant payment", "Accept and get paid in the same visit by cash, cheque or bank transfer, with a receipt."],
       ].map(([n, t], i) => ({ "@type": "HowToStep", position: i + 1, name: n, text: t })) }]),

  R("/why-choose-us", "Why Choose Us | German Karat Meter vs Old Purity Test — Bharat Gold Buyer, Delhi",
    "Why we are different from other gold jewellery buyers: German Karat Meter testing vs the old touchstone method, transparent valuation and instant payment in South Extension, Delhi.",
    <WhyChooseUsPage />, [bc([["Home", ""], ["Why Choose Us", "why-choose-us"]])]),

  R("/our-locations", "Our Branch | Bharat Gold Buyer — Wazir Nagar, South Extension, New Delhi 110003",
    "Visit Bharat Gold Buyer's only branch: 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. Timings, metro, directions & map.",
    <LocationsPage />, [bc([["Home", ""], ["Our Locations", "our-locations"]])]),

  R("/gallery", "Gallery | Bharat Gold Buyer, South Extension, Delhi",
    "See what we buy and how selling works at Bharat Gold Buyer — German Karat Meter purity testing, counter weighing and instant payment at Wazir Nagar, South Extension.",
    <GalleryPage />, [bc([["Home", ""], ["Gallery", "gallery"]])]),

  R("/faq", "FAQs | Selling Gold, Silver & Diamonds in Delhi — Bharat Gold Buyer",
    "Appointment, items bought, how price is determined, testing charges, payment timing, documents and safety — every question about selling gold in Delhi, answered by Bharat Gold Buyer.",
    <FaqPage />, [bc([["Home", ""], ["FAQs", "faq"]]), faqLd(F)]),

  R("/contact", "Contact Us | Bharat Gold Buyer — South Extension, New Delhi",
    `Visit Bharat Gold Buyer at ${STREET}, ${CITY} ${PIN}. Call or WhatsApp ${PHONE_D}. Open 7 days, ${HOURS_D}. Get directions & a free gold valuation.`,
    <ContactPage />, [bc([["Home", ""], ["Contact Us", "contact"]])]),

  // ----- services -----
  R("/sell-gold", "Cash Against Gold in Delhi | Sell Gold for Cash — Bharat Gold Buyer, South Extension",
    "Sell gold jewellery for cash in Delhi. Free German Karat Meter purity test, valuation at today's market rate, instant payment. With/without hallmark or bill. Call +91 9990780499.",
    <SellGoldPage />, svcSchemas("Cash Against Gold", "sell-gold", [F[1], F[2], F[4], F[3]]), { priority: "0.9" }),

  R("/cash-for-gold", "Cash for Gold in Delhi | Transparent Evaluation, Instant Payment — Bharat Gold Buyer",
    "Cash for gold in Delhi with the evaluation in front of you — Karat Meter purity on screen, counter weighing, the day's rate and payment in the same visit. Call +91 9990780499.",
    <CashForGoldPage />, svcSchemas("Cash for Gold", "cash-for-gold", [F[2], F[3], F[4], F[9]]), { priority: "0.8" }),

  R("/sell-old-gold", "Sell Old Gold Jewellery in Delhi | Old Gold Buyer — Bharat Gold Buyer",
    "Sell old gold jewellery for cash in Delhi. Old gold buyer — Karat Meter-tested purity, the day's rate, with or without bill. Instant payment in South Extension.",
    <SellOldGoldPage />, svcSchemas("Sell Old Gold", "sell-old-gold", [F[2], F[1], F[4]]), { priority: "0.8" }),

  R("/sell-silver", "Cash For Silver in Delhi | Sell Silver Jewellery, Utensils & Coins — Bharat Gold Buyer",
    "Sell silver jewellery, utensils, articles & coins in Delhi. Weighed in front of you, valued at the day's silver rate, instant payment. Call +91 9990780499.",
    <SellSilverPage />, svcSchemas("Cash For Silver", "sell-silver", [F[4], F[9]]), { priority: "0.8" }),

  R("/sell-diamonds", "Cash For Diamond in Delhi | Diamond Jewellery Buyer — Bharat Gold Buyer",
    "Sell diamond rings, solitaires & diamond jewellery in Delhi. Careful diamond evaluation plus the gold setting valued separately. Instant payment. Call +91 9990780499.",
    <SellDiamondsPage />, svcSchemas("Cash For Diamond", "sell-diamonds", [F[0], F[4]]), { priority: "0.8" }),

  R("/sell-coins", "Sell Gold & Silver Coins in Delhi | Coin Buyer — Bharat Gold Buyer, South Extension",
    "Sell gold and silver coins in Delhi — investment, temple & commemorative coins and bars valued by weight, purity & the day's rate. Instant payment. Call +91 9990780499.",
    <SellCoinsPage />, svcSchemas("Sell Gold & Silver Coins", "sell-coins", [F[4], F[9]]), { priority: "0.8" }),

  R("/release-pledged-gold", "Release Pledged Gold in Delhi | Gold Loan Settlement Help — Bharat Gold Buyer",
    "Gold pledged in a bank, NBFC or with a financier? We help you release pledged gold in Delhi, settle the loan and keep the difference. Call +91 9990780499.",
    <ReleasePledgedGoldPage />, svcSchemas("Release Pledged Gold", "release-pledged-gold", [F[8], F[4]]), { priority: "0.8" }),

  R("/gold-rate-today", "Gold Rate Today in Delhi | How Your Payout Is Calculated — Bharat Gold Buyer",
    "What is today's gold rate in Delhi & how is your selling price calculated? Formula, BIS purity table & a worked example. Call +91 9990780499 for today's live rate.",
    <GoldRatePage />, [bc([["Home", ""], ["Gold Rate Today", "gold-rate-today"]]), faqLd([F[7], F[2]])], { priority: "0.9" }),

  R("/scrap-gold-buyer", "Scrap Gold Buyer in Delhi | Scrap Gold Buying & Evaluation — Bharat Gold Buyer",
    "Scrap gold buyer in Delhi — scrap gold buying with on-screen German Karat Meter evaluation. Broken bits, findings & dental gold at the day's rate.",
    <ScrapGoldBuyerPage />, svcSchemas("Scrap Gold Buyer", "scrap-gold-buyer", [F[1]]), { priority: "0.8" }),

  R("/sell-broken-gold", "Sell Broken Gold Jewellery in Delhi | Broken Jewellery Buyer — Bharat Gold Buyer",
    "Sell broken gold jewellery for cash in Delhi — broken chains, single earrings, damaged pieces valued by purity & weight, not condition. Free test, instant payment.",
    <SellBrokenGoldPage />, svcSchemas("Sell Broken Gold", "sell-broken-gold", [F[1], F[4]]), { priority: "0.8" }),

  R("/gold-exchange", "Gold Exchange Service in Delhi | Exchange Old Gold for Full Value — Bharat Gold Buyer",
    "Gold exchange service in Delhi — your old gold valued transparently and paid in full as cash, cheque or bank transfer. No forced purchase, no lock-in.",
    <GoldExchangePage />, svcSchemas("Gold Exchange Service", "gold-exchange", [F[4], F[9]]), { priority: "0.8" }),

  R("/instant-cash-for-gold", "Instant Cash for Gold in Delhi | On-Spot Payment in One Visit — Bharat Gold Buyer",
    "Instant cash for gold in Delhi — on-spot cash, cheque or instant bank transfer in the same visit, once you accept our offer, with a receipt.",
    <InstantCashPage />, svcSchemas("Instant Cash for Gold", "instant-cash-for-gold", [F[0], F[4]]), { priority: "0.8" }),

  // ----- keyword / local intent -----
  R("/gold-buyer-near-me", "Best Gold Buyer Near Me in Delhi | Instant Cash for Gold Near Me — Bharat Gold Buyer",
    "Looking for the best gold buyer near you in South Delhi? How to choose a nearby buyer — machine testing, the day's rate, instant cash & red flags. South Extension branch.",
    <GoldBuyerNearMePage />, [bc([["Home", ""], ["Gold Buyer Near Me", "gold-buyer-near-me"]]), faqLd([F[9]])], { priority: "0.9" }),

  R("/best-gold-buyer-in-delhi", "Best Gold Buyer in Delhi | Judge the Process, Not the Claim — Bharat Gold Buyer",
    "What 'best gold buyer in Delhi' should actually mean: German Karat Meter testing in front of you, the day's rate, explained calculation, instant payment & documentation.",
    <BestGoldBuyerDelhiPage />, [bc([["Home", ""], ["Best Gold Buyer in Delhi", "best-gold-buyer-in-delhi"]]), faqLd([F[1], F[2], F[3], F[4]])], { priority: "0.8" }),

  R("/old-gold-buyer-in-delhi", "Old Gold Buyer in Delhi | Sell Old & Inherited Gold — Bharat Gold Buyer",
    "Old gold buyer in Delhi — inherited sets and old jewellery valued by tested purity & weight, never by age. No bill or hallmark needed. South Extension branch.",
    <OldGoldBuyerDelhiPage />, [bc([["Home", ""], ["Old Gold Buyer in Delhi", "old-gold-buyer-in-delhi"]]), faqLd([F[1], F[4]])], { priority: "0.8" }),

  R("/where-to-sell-gold", "How to Sell Gold & Where to Sell Gold in Delhi | Complete Guide — Bharat Gold Buyer",
    "How to sell gold step by step, and where to sell gold for a fair value — jeweller vs bank vs online vs dedicated buyer, compared honestly, with a seller's checklist.",
    <WhereToSellGoldPage />, [bc([["Home", ""], ["How & Where to Sell Gold", "where-to-sell-gold"]]), faqLd([F[3]])], { priority: "0.8" }),

  R("/safe-place-to-sell-gold", "Safe Place to Sell Gold Jewellery in Delhi | Bharat Gold Buyer, South Extension",
    "A safe place to sell gold jewellery — fixed South Extension branch, testing in front of you, traceable payment & a receipt for every sale. Open 7 days.",
    <SafePlacePage />, [bc([["Home", ""], ["Safe Place to Sell Gold", "safe-place-to-sell-gold"]]), faqLd([F[6], F[4]])], { priority: "0.8" }),

  R("/cash-for-gold-in-south-delhi", "Cash for Gold in South Delhi | Instant Payment — Bharat Gold Buyer, South Extension",
    "Cash for gold in South Delhi — Karat Meter purity in front of you, counter weighing, the day's rate, payment in the same visit at our South Extension branch.",
    <CashForGoldSouthDelhiPage />, svcSchemas("Cash for Gold in South Delhi", "cash-for-gold-in-south-delhi", [F[2], F[4], F[3], F[9]]), { priority: "0.8" }),

  R("/sell-gold-jewellery-in-south-delhi", "Sell Gold Jewellery in South Delhi | Bangles, Chains, Rings & Sets — Bharat Gold Buyer",
    "Sell gold jewellery in South Delhi at our South Extension branch — every piece machine-tested, weighed in front of you and valued at the day's rate.",
    <SellGoldJewellerySouthDelhiPage />, svcSchemas("Sell Gold Jewellery in South Delhi", "sell-gold-jewellery-in-south-delhi", [F[1], F[5], F[2], F[4]]), { priority: "0.8" }),

  R("/gold-purity-testing", "Gold Purity Testing in Delhi | Free German Karat Meter Test — Bharat Gold Buyer",
    "Free gold purity testing in Delhi — German Karat Meter, exact karat on screen, zero damage. No obligation to sell. South Extension branch.",
    <GoldPurityTestingPage />,
    [bc([["Home", ""], ["Gold Purity Testing", "gold-purity-testing"]]), faqLd([F[2]]), serviceLd("Gold Purity Testing", "Delhi")], { priority: "0.8" }),

  R("/gold-valuation", "Gold Valuation in Delhi | Free Jewellery & Diamond Valuation — Bharat Gold Buyer",
    "Free gold valuation in Delhi — Karat Meter purity, counter weighing & the day's rate, every figure shown to you. Valuation without selling, no obligation.",
    <GoldValuationPage />,
    [bc([["Home", ""], ["Gold Valuation", "gold-valuation"]]), faqLd([F[9]]), serviceLd("Gold Valuation")], { priority: "0.8" }),

  // ----- area pages (single branch in South Extension) -----
  R("/sell-gold-in-delhi", "Gold Buyer in Delhi | Sell Gold — Bharat Gold Buyer (South Extension Branch)",
    "Sell gold in Delhi at Bharat Gold Buyer, South Extension. German Karat Meter testing, transparent valuation & instant payment. Call +91 9990780499.",
    <DelhiPage />, areaSchemas("Delhi", "sell-gold-in-delhi", areaFaqs("Delhi")), { priority: "0.9" }),

  R("/sell-gold-in-south-delhi", "Sell Gold in South Delhi | Trusted Gold Buyer — Bharat Gold Buyer, South Extension",
    "Sell gold in South Delhi at Bharat Gold Buyer — in South Delhi itself, at Wazir Nagar, South Extension. Karat Meter testing, the day's rate, instant payment.",
    <SouthDelhiPage />, areaSchemas("South Delhi", "sell-gold-in-south-delhi", areaFaqs("South Delhi")), { priority: "0.9" }),

  R("/gold-buyer-in-south-extension", "Gold Buyer in South Extension | Sell Gold at Wazir Nagar — Bharat Gold Buyer",
    "Gold buyer in South Extension — our branch is in South Extension Part I itself. Free Karat Meter testing, transparent valuation & instant payment. Call +91 9990780499.",
    <SouthExtensionPage />, areaSchemas("South Extension", "gold-buyer-in-south-extension", areaFaqs("South Extension")), { priority: "0.9" }),

  R("/gold-buyer-in-south-extension-part-1", "Gold Buyer in South Extension Part I | Bharat Gold Buyer, Wazir Nagar",
    "Gold buyer in South Extension Part I — Bharat Gold Buyer's branch is at 1515 Wazir Nagar, in Part I itself. Free purity testing & instant payment.",
    <SouthExtensionPartIPage />, areaSchemas("South Extension Part I", "gold-buyer-in-south-extension-part-1", areaFaqs("South Extension Part I")), { priority: "0.8" }),

  R("/gold-buyer-in-lajpat-nagar", "Gold Buyer in Lajpat Nagar | Sell Gold — Bharat Gold Buyer (South Extension)",
    "Sell gold near Lajpat Nagar at Bharat Gold Buyer — minutes away in South Extension, one metro stop on the Pink Line. Karat Meter testing & instant payment.",
    <LajpatNagarPage />, areaSchemas("Lajpat Nagar", "gold-buyer-in-lajpat-nagar", areaFaqs("Lajpat Nagar")), { priority: "0.8" }),

  R("/gold-buyer-in-greater-kailash", "Gold Buyer in Greater Kailash | Sell Gold — Bharat Gold Buyer (South Extension)",
    "Sell gold near Greater Kailash at Bharat Gold Buyer, South Extension — a short drive via Ring Road. Machine-tested valuation & instant payment.",
    <GreaterKailashPage />, areaSchemas("Greater Kailash", "gold-buyer-in-greater-kailash", areaFaqs("Greater Kailash")), { priority: "0.8" }),

  R("/gold-buyer-in-defence-colony", "Gold Buyer in Defence Colony | Sell Gold — Bharat Gold Buyer (South Extension)",
    "Sell gold near Defence Colony at Bharat Gold Buyer — minutes away at Wazir Nagar, South Extension. Free Karat Meter testing & instant payment.",
    <DefenceColonyPage />, areaSchemas("Defence Colony", "gold-buyer-in-defence-colony", areaFaqs("Defence Colony")), { priority: "0.8" }),

  R("/gold-buyer-in-saket", "Gold Buyer in Saket | Sell Gold — Bharat Gold Buyer (South Extension Branch)",
    "Sell gold near Saket at Bharat Gold Buyer, South Extension — by road via Malviya Nagar or metro to South Extension station. Tested valuation & instant payment.",
    <SaketPage />, areaSchemas("Saket", "gold-buyer-in-saket", areaFaqs("Saket")), { priority: "0.8" }),

  R("/gold-buyer-in-kotla-mubarakpur", "Gold Buyer in Kotla Mubarakpur | Bharat Gold Buyer, Wazir Nagar",
    "Gold buyer in Kotla Mubarakpur — our branch is in Kotla itself, at Wazir Nagar, South Extension Part I. Walk in for free purity testing & instant payment.",
    <KotlaMubarakpurPage />, areaSchemas("Kotla Mubarakpur", "gold-buyer-in-kotla-mubarakpur", areaFaqs("Kotla Mubarakpur")), { priority: "0.8" }),

  R("/gold-buyer-in-hauz-khas", "Gold Buyer in Hauz Khas | Sell Gold — Bharat Gold Buyer (South Extension)",
    "Sell gold near Hauz Khas at Bharat Gold Buyer, South Extension — a short drive across South Delhi. Karat Meter testing, the day's rate, instant payment.",
    <HauzKhasPage />, areaSchemas("Hauz Khas", "gold-buyer-in-hauz-khas", areaFaqs("Hauz Khas")), { priority: "0.8" }),

  R("/gold-buyer-in-nehru-place", "Gold Buyer in Nehru Place | Sell Gold — Bharat Gold Buyer (South Extension)",
    "Sell gold near Nehru Place at Bharat Gold Buyer, South Extension — open until 8 PM, all 7 days. Machine-tested valuation & instant payment.",
    <NehruPlacePage />, areaSchemas("Nehru Place", "gold-buyer-in-nehru-place", areaFaqs("Nehru Place")), { priority: "0.8" }),

  R("/gold-buyer-in-kalkaji", "Gold Buyer in Kalkaji | Sell Gold — Bharat Gold Buyer (South Extension Branch)",
    "Sell gold near Kalkaji at Bharat Gold Buyer, South Extension — via Lajpat Nagar by road or metro. Free purity testing & payment in one visit.",
    <KalkajiPage />, areaSchemas("Kalkaji", "gold-buyer-in-kalkaji", areaFaqs("Kalkaji")), { priority: "0.8" }),

  R("/gold-buyer-in-malviya-nagar", "Gold Buyer in Malviya Nagar | Sell Gold — Bharat Gold Buyer (South Extension)",
    "Sell gold near Malviya Nagar at Bharat Gold Buyer, South Extension — via Hauz Khas by road or metro to South Extension station. Tested valuation & instant payment.",
    <MalviyaNagarPage />, areaSchemas("Malviya Nagar", "gold-buyer-in-malviya-nagar", areaFaqs("Malviya Nagar")), { priority: "0.8" }),

  // ----- blog -----
  R("/blog", "Blog | Gold Selling Tips & Guides, Delhi — Bharat Gold Buyer",
    "Guides on selling gold, silver & diamonds in Delhi: how price is calculated, documents needed, questions to ask, Karat Meter vs touchstone, and why rates are high.",
    <BlogIndexPage />, [bc([["Home", ""], ["Blog", "blog"]])]),

  ...BLOGS.map((b) =>
    R("/" + b.slug, b.title, b.desc, <BlogPostPage blog={b} />, blogPostSchemas(b), { ogtype: "article" })
  ),

  // ----- legal -----
  R("/privacy-policy", "Privacy Policy | Bharat Gold Buyer",
    "How Bharat Gold Buyer collects, uses and protects your personal information when you sell gold or enquire on bharatgoldbuyer.com.",
    <PrivacyPage />, [bc([["Home", ""], ["Privacy Policy", "privacy-policy"]])]),

  R("/terms-and-conditions", "Terms & Conditions | Bharat Gold Buyer",
    "Terms governing gold, silver, diamond and coin buying services of Bharat Gold Buyer, South Extension, New Delhi.",
    <TermsPage />, [bc([["Home", ""], ["Terms & Conditions", "terms-and-conditions"]])]),

  R("/sitemap", "Sitemap | Bharat Gold Buyer",
    "Every page on bharatgoldbuyer.com — services, areas served, guides and legal pages of Bharat Gold Buyer, South Extension, New Delhi.",
    <SitemapPage />, [bc([["Home", ""], ["Sitemap", "sitemap"]])], { priority: "0.3" }),
];

export const NOT_FOUND_ROUTE = {
  path: "/404",
  file: "404.html",
  head: {
    title: "Page Not Found | Bharat Gold Buyer",
    desc: "This page could not be found. Visit Bharat Gold Buyer, South Extension — sell gold, silver & diamonds with free German Karat Meter testing.",
    path: "/404",
    ogtype: "website",
    schemas: [bc([["Home", ""]])],
  },
  element: <NotFoundPage />,
  popup: false,
};

const byPath = new Map(ROUTES.map((r) => [r.path, r]));

export function normalizePath(raw) {
  let p = raw || "/";
  if (p === "/index.html" || p === "/index") p = "/";
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

export function getRoute(rawPath) {
  const p = normalizePath(rawPath);
  return byPath.get(p) || NOT_FOUND_ROUTE;
}

export function allRoutes() {
  return [...ROUTES, NOT_FOUND_ROUTE];
}
