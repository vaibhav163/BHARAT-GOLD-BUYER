import React from "react";
import { ADDRESS_LINE, PHONE_D } from "../config.js";
import { GuidePage } from "../components/Layouts.jsx";
import { CORE_FAQS as F } from "../data/core.js";

const rel = {
  sell: ["/sell-gold", "Cash Against Gold", "Sell gold jewellery at our South Extension branch."],
  rate: ["/gold-rate-today", "Gold Rate Today", "The formula, purity table and a worked example."],
  near: ["/gold-buyer-near-me", "Gold Buyer Near Me", "How to choose a nearby buyer — and the red flags."],
  safe: ["/safe-place-to-sell-gold", "Safe Place to Sell Gold", "What makes a gold sale safe, step by step."],
  where: ["/where-to-sell-gold", "How & Where to Sell Gold", "Buyer types compared honestly, with a seller's checklist."],
  testing: ["/gold-purity-testing", "Gold Purity Testing", "Free German Karat Meter testing, explained."],
};

export function GoldBuyerNearMePage() {
  return <GuidePage
    crumbItems={[["Home", ""], ["Gold Buyer Near Me", null]]}
    eyebrow="Gold Buyer Near Me"
    h1="Gold Buyer Near Me — How to Choose the Right One in Delhi"
    intro="Looking for the best gold buyer near you in South Delhi? Distance matters less than method. Here is how to choose a nearby buyer — and how we work at our South Extension branch."
    sections={[
      { h2: "The Five Tests of a Good Nearby Buyer", paras: ["The best nearby buyer is the one who (1) tests purity on a German Karat Meter in front of you, (2) weighs in front of you, (3) values at the day's market rate with the calculation shown, (4) pays in the same visit with proper documentation, and (5) lets you walk away free if you don't like the offer. A ten-minute extra drive can be worth thousands of rupees on larger quantities — compare final payable amounts, not promises."], bullets: ["Machine testing you can watch", "Weight and rate shown, not just a final number", "Payment in the same visit, with a receipt", "Free valuation with no obligation"] },
      { h2: "Our Branch — the 'Near Me' Answer for South Delhi", paras: [`Bharat Gold Buyer has one branch: ${ADDRESS_LINE}. For South Extension, Lajpat Nagar, Defence Colony, Greater Kailash, Kotla Mubarakpur and Saket, that is a genuinely nearby buyer — close to the South Extension metro station (Pink Line), open all 7 days, 10 AM – 8 PM.`] },
      { h2: "Red Flags to Walk Away From", paras: ["Testing done 'inside' where you can't see it; acid or touchstone tests that scratch your jewellery; unexplained deductions for wastage or melting; payment promised tomorrow; no ID asked and no receipt given. Any one of these is reason enough to try a different counter — testing is free at genuine buyers, so comparing costs you nothing."] },
    ]}
    faqs={[
      ["Which is the best gold buyer near me?", "The one who tests purity by machine in front of you, shows the weight and the day's rate, pays in the same visit with documentation, and lets you walk away free. Judge by method, not by the biggest signboard."],
      ["Should I sell to the closest buyer or compare?", "Compare — testing is free at genuine buyers. Get your purity tested once, note the exact karat and net weight, then compare final payable amounts from two buyers on the same day, since rates move daily."],
      ["How do I find a scrap gold buyer near me?", "Look for a dedicated gold buyer that accepts broken and scrap gold and tests it by machine. We accept scrap gold, broken jewellery and loose pieces at our South Extension branch."],
      F[9]]}
    faqPrefix="gbnm" related={[rel.sell, rel.rate, rel.safe]} showAreas />;
}

export function BestGoldBuyerDelhiPage() {
  return <GuidePage
    crumbItems={[["Home", ""], ["Best Gold Buyer in Delhi", null]]}
    eyebrow="Best Gold Buyer in Delhi"
    h1="Best Gold Buyer in Delhi — What 'Best' Should Actually Mean"
    intro="Every buyer in Delhi claims to be the best. Here is an honest checklist for judging that claim — and how Bharat Gold Buyer measures up at our South Extension branch."
    sections={[
      { h2: "Judge the Process, Not the Claim", paras: ["We will not ask you to take our word for being the best gold buyer in Delhi — and you should be suspicious of anyone who does. Judge any buyer, including us, on verifiable process: machine purity testing in front of you, weighing at the counter, the day's market rate stated openly, the calculation explained line by line, payment in the same visit, and proper documentation for every sale. A buyer who does all six has earned the word 'best' in the only way that matters."] },
      { h2: "How We Work", paras: ["At our Wazir Nagar, South Extension branch, your gold is tested on a German Karat Meter — non-destructive, with the purity on screen. We weigh at the counter, apply the day's rate, and explain the full calculation before you decide. Testing and valuation are free with no obligation. On acceptance, you choose cash, cheque or bank transfer, paid in the same visit with a receipt."], bullets: ["German Karat Meter testing — zero damage", "No hidden charges or unexplained deductions", "Instant payment by cash, cheque or bank transfer", "Open all 7 days, 10 AM – 8 PM"] },
      { h2: "Compare Us — Please", paras: ["Get a free valuation from us, note your exact purity and weight, and compare the final payable amount at any other Delhi buyer the same day. We are comfortable being compared because every number behind our offer is shown to you. That, more than any slogan, is what a seller should look for."] },
    ]}
    faqs={[F[1], F[2], F[3], F[4]]}
    faqPrefix="bgd" related={[rel.near, rel.rate, rel.where]} showAreas />;
}

export function OldGoldBuyerDelhiPage() {
  return <GuidePage
    crumbItems={[["Home", ""], ["Old Gold Buyer in Delhi", null]]}
    eyebrow="Old Gold Buyer in Delhi"
    h1="Old Gold Buyer in Delhi — Sell Old & Inherited Gold for Its Full Metal Value"
    intro="Old gold buyer in South Delhi: inherited sets, out-of-fashion designs and decades-old jewellery valued by tested purity and weight — never by age."
    sections={[
      { h2: "Old Gold, New Arithmetic", paras: ["Gold bought decades ago was purchased at a fraction of today's rate, so old family jewellery is often worth far more than its owners expect. Its value today is simple: tested purity × weight × today's market rate. Age and design do not reduce metal value — an old 22K piece is paid at the same per-gram rate as a new one."] },
      { h2: "No Bill? No Hallmark? Still Sellable", paras: ["Most inherited gold has neither a bill nor a readable hallmark. That is normal. The German Karat Meter measures the actual purity in front of you, so paperwork does not decide your price. Bring one photo ID (and PAN if the sale may cross ₹2 lakh) and we handle the rest."] },
      { h2: "Stones and Mixed Pieces", paras: ["Old sets often mix gold with stones and enamel. The gold is tested and weighed; set diamonds are evaluated separately and added; non-gold parts are explained openly. You see how each part of the piece was treated before you decide anything."] },
    ]}
    faqs={[
      ["Is old gold paid less than new gold?", "No. Gold is paid by weight and purity, not by age or design."],
      ["Can I sell inherited gold without a bill?", "Yes. One photo ID is enough (PAN above ₹2 lakh). The machine test decides purity and value."],
      F[1], F[4]]}
    faqPrefix="ogd" related={[["/sell-old-gold", "Sell Old Gold", "Our old gold buying service in detail."], rel.rate, rel.safe]} showServices />;
}

export function WhereToSellGoldPage() {
  return <GuidePage
    crumbItems={[["Home", ""], ["How & Where to Sell Gold", null]]}
    eyebrow="Selling Guide"
    h1="How to Sell Gold — and Where to Sell Gold for a Fair Value"
    intro="How to sell gold step by step, and where to sell gold for a fair value — jeweller vs bank vs online vs dedicated buyer, compared honestly, with a seller's checklist."
    sections={[
      { h2: "How to Sell Gold, Step by Step", paras: ["1) Gather the pieces and one photo ID (PAN if the value may exceed ₹2 lakh). 2) Get the purity machine-tested free and note the karat and net weight. 3) Get the valuation at the day's market rate and check the calculation yourself: pure weight × rate. 4) Compare one more buyer if you wish — same day, since rates move. 5) Accept, complete documentation, take payment in the same visit and keep your receipt. At our South Extension branch the whole process takes one short visit."] },
      { h2: "Where to Sell Gold — the Options Compared", paras: ["<strong>Jewellers</strong> suit exchange-into-new-jewellery, but buy-back is a side line and often carries making-charge and wastage deductions. <strong>Banks</strong> lend against gold; they are not fair-value buyers of it. <strong>Online buyers</strong> ask you to surrender your gold before the final price is fixed. A <strong>dedicated gold buyer</strong> with machine testing, live-rate valuation and instant documented payment gives the most verifiable result for an outright sale. Compare final payable amounts on the same day before deciding."] },
      { h2: "Seller's Checklist", paras: ["Before you hand over anything, confirm:"], bullets: ["Purity will be machine-tested in front of me", "I will see the weight and the day's rate separately", "Every deduction is named and explained", "Payment happens in this visit, by a mode I choose", "I receive proper documentation and a receipt", "I can walk away free if the offer doesn't suit me"] },
    ]}
    faqs={[
      ["What is the best place to sell gold?", "For most people, a dedicated gold buyer with machine testing, market-rate valuation and instant documented payment gives the fairest, most verifiable result. Compare final payable amounts on the same day before deciding."],
      ["Can I sell gold without a bill or hallmark?", "Yes, at a genuine buyer. The bill is optional and the hallmark only an indicator — the machine test measures actual purity either way. ID, however, is mandatory."],
      ["Should I sell gold or take a gold loan instead?", "They solve different problems. A loan keeps ownership but adds interest and risk; selling converts the asset to money permanently at today's rate. If gold is already pledged and the loan has grown, see our pledged gold release page."],
      F[3]]}
    faqPrefix="wts" related={[rel.near, rel.safe, rel.testing]} showAreas />;
}

export function SafePlacePage() {
  return <GuidePage
    crumbItems={[["Home", ""], ["Safe Place to Sell Gold", null]]}
    eyebrow="Safe Selling"
    h1="Safe Place to Sell Gold Jewellery — Established Branch, Documented Payment"
    intro="A safe place to sell gold jewellery in South Delhi: a fixed, established high-street branch, testing done in front of you, traceable payment options and a receipt for every sale."
    sections={[
      { h2: "What Makes a Gold Sale Safe?", paras: ["Safety is a chain, and every link matters: a fixed branch you can revisit, staff who test in front of you rather than out of sight, documentation that records the transaction, and payment you can trace. Break any link — an unnamed buyer, testing 'inside', cash with no receipt — and the risk lands on you."] },
      { h2: "How We Keep Your Sale Safe", paras: ["Bharat Gold Buyer operates from a fixed branch at Wazir Nagar, South Extension — the same address published on this website and our Google listing. Testing and weighing happen at the counter in front of you. Every sale is documented with a receipt recording the items, purity, weight and amount. For larger amounts we recommend bank transfer, so the money reaches your account directly and you carry no cash at all."], bullets: ["Fixed, published branch address", "Testing and weighing in front of you", "Receipt and documentation for every sale", "Bank transfer recommended for larger amounts", "No-pressure process — take your time, no obligation"] },
      { h2: "Selling Alone? Senior Citizen? Woman Seller?", paras: ["Many of our customers come alone, and the published timings (all 7 days, 10 AM – 8 PM), the established high-street location and the no-obligation process are designed for exactly that comfort. Take all the time you need; if the offer doesn't suit you, your jewellery goes home with you, undamaged by the free test."] },
    ]}
    faqs={[
      ["Is it safe to carry gold to your branch?", "Our branch is at a fixed, published address in South Extension Part I — a busy, well-known South Delhi market area. You are visiting an established shop, not meeting a stranger."],
      ["Is bank transfer safer than cash?", "For larger amounts, yes — the money reaches your account directly and you carry no cash. Cash and cheque are also available; the transfer is always initiated in front of you."],
      F[6], F[4]]}
    faqPrefix="safe" related={[rel.near, rel.where, rel.sell]} showAreas />;
}

export function CashForGoldSouthDelhiPage() {
  return <GuidePage
    crumbItems={[["Home", ""], ["Cash for Gold in South Delhi", null]]}
    eyebrow="Cash for Gold — South Delhi"
    h1="Cash for Gold in South Delhi — Instant Payment at Our South Extension Branch"
    intro="Cash for gold in South Delhi with the valuation done in front of you: German Karat Meter purity, counter weighing, the day's rate and payment in the same visit."
    sections={[
      { h2: "Cash for Gold, Without the Guesswork", paras: ["South Delhi has no shortage of buyers offering cash for gold — the difference is how the number is produced. At Bharat Gold Buyer, South Extension, purity is machine-tested in front of you, weight is taken at the counter, and the day's market rate is applied with the calculation shown. The cash figure you accept is one you have verified yourself."] },
      { h2: "Serving All of South Delhi From One Branch", paras: ["Our single branch at Wazir Nagar serves Lajpat Nagar, Greater Kailash, Defence Colony, Saket, Hauz Khas, Kalkaji, Malviya Nagar and Kotla Mubarakpur. We don't pretend to have a shop in each area — we have one established branch, close to the South Extension metro station (Pink Line), open all 7 days."] },
      { h2: "Cash, Cheque or Transfer — Your Choice", paras: ["On acceptance, choose cash at the counter, a cheque, or a bank transfer initiated in front of you. For larger amounts, transfer is the safer carry. Every payment comes with proper documentation and a receipt."] },
    ]}
    faqs={[F[2], F[4], F[3], F[9]]}
    faqPrefix="cfgsd" related={[["/cash-for-gold", "Cash for Gold", "Our cash-for-gold service in detail."], rel.rate, rel.near]} showAreas />;
}

export function SellGoldJewellerySouthDelhiPage() {
  return <GuidePage
    crumbItems={[["Home", ""], ["Sell Gold Jewellery in South Delhi", null]]}
    eyebrow="Sell Gold Jewellery — South Delhi"
    h1="Sell Gold Jewellery in South Delhi — Bangles, Chains, Rings & Sets"
    intro="Sell gold jewellery in South Delhi at our South Extension branch: every piece machine-tested, weighed in front of you and valued at the day's rate."
    sections={[
      { h2: "Every Kind of Gold Jewellery", paras: ["Necklaces, bangles, chains, rings, earrings, bracelets and complete bridal sets — new, old or broken, hallmarked or not, with a bill or without one. Jewellery is paid by its metal: tested purity × weight × the day's market rate. Design and making charges belong to the buying price you once paid; the selling value is the gold itself, plus separate value for any set diamonds."] },
      { h2: "Sets, Stones and Mixed Pieces", paras: ["For sets and stone-studded pieces, the gold is tested and weighed, set diamonds are evaluated separately and added, and non-gold parts are explained openly — never buried in an unexplained deduction. You see the treatment of every part before you decide."] },
      { h2: "One Visit, Start to Finish", paras: ["Walk into our South Extension branch with your jewellery and one photo ID. Free German Karat Meter testing, valuation and — if you accept — payment by cash, cheque or bank transfer, all in the same visit, with a proper receipt."] },
    ]}
    faqs={[F[1], F[5], F[2], F[4]]}
    faqPrefix="sgjsd" related={[rel.sell, rel.rate, rel.safe]} showAreas />;
}

export function GoldPurityTestingPage() {
  return <GuidePage
    crumbItems={[["Home", ""], ["Gold Purity Testing", null]]}
    eyebrow="Gold Purity Testing"
    h1="Gold Purity Testing in Delhi — Free German Karat Meter Test in South Extension"
    intro="Free gold purity testing in South Delhi — German Karat Meter, exact karat on screen, zero damage to your jewellery. No obligation to sell."
    sections={[
      { h2: "Why the Test Method Decides Your Price", paras: ["Purity is the single biggest factor in your payout, and the old touchstone-and-acid method only estimates it — while scratching your jewellery. Our German Karat Meter measures the exact metal composition and displays it, for example 22K = 91.6%, with your jewellery completely undamaged. Read the full comparison: <a href=\"/blog-german-karat-meter-vs-old-purity-test\">German Karat Meter vs the old purity test</a>."] },
      { h2: "What the Test Tells You", paras: ["The reading shows the karat and the percentage of gold and alloy metals in the piece — hallmarked or not. With exact purity and an accurate weight, your valuation becomes simple arithmetic at the day's rate, which you can verify on your own phone. Even if you sell elsewhere later, you leave knowing exactly what you hold."] },
      { h2: "Free, In Front of You, No Obligation", paras: ["Testing at our South Extension branch is completely free — a single piece or a full set — and the item is returned exactly as brought if you choose not to sell. There is no charge and no pressure; the number is yours to think over."] },
    ]}
    faqs={[
      ["Is gold purity testing really free?", "Yes. Karat Meter testing and valuation at our branch are completely free, with no obligation to sell."],
      ["Will the test damage my jewellery?", "No. The German Karat Meter test is non-destructive — the piece is not scratched, cut, heated or acid-tested. It comes back exactly as you brought it."],
      ["Can you test gold without a hallmark?", "Yes — that is exactly what the machine is for. Hallmarked or not, the reading shows the actual metal composition."],
      F[2]]}
    faqPrefix="gpt" related={[["/why-choose-us", "Why Choose Us", "The full old-method vs Karat Meter comparison."], rel.rate, rel.sell]} showServices />;
}

export function GoldValuationPage() {
  return <GuidePage
    crumbItems={[["Home", ""], ["Gold Valuation", null]]}
    eyebrow="Gold Valuation"
    h1="Gold Valuation in Delhi — Free Jewellery & Diamond Valuation in South Extension"
    intro="Free jewellery valuation in South Delhi — gold, silver and diamond valuation with Karat Meter purity, counter weighing and the day's rate, every figure shown to you."
    sections={[
      { h2: "What the Free Evaluation Includes", paras: ["German Karat Meter purity testing, weighing at the counter in front of you, valuation at the day's market rate for gold and silver, diamond assessment (cut, colour, clarity, carat) for diamond pieces, and a line-by-line explanation of the final figure. You leave with the numbers — purity, weight and value per piece — whether or not you sell."] },
      { h2: "Valuation Without Selling", paras: ["Many customers value inherited jewellery for family division, for their own records, or simply to know what they hold before deciding anything. That is a perfectly good reason to visit: the valuation is free, takes one short visit for a typical set, and carries no obligation whatsoever."] },
      { h2: "How Long Does It Take?", paras: ["A typical set of items takes a short single visit. Large collections take a little longer; calling ahead on " + PHONE_D + " helps us keep time aside for you."] },
    ]}
    faqs={[
      ["What does the free evaluation include?", "Karat Meter purity testing, counter weighing, valuation at the day's rate, diamond assessment for diamond pieces, and a line-by-line explanation."],
      ["Can I get a valuation without selling?", "Yes — that is the point of the service. There is no charge and no obligation."],
      ["Do you value diamonds in the same evaluation?", "Yes. Diamond pieces are assessed on the 4Cs by trained staff, and the gold setting is tested and valued separately — both figures are shown to you."],
      F[9]]}
    faqPrefix="gv" related={[rel.testing, rel.rate, rel.sell]} showServices />;
}
