import React from "react";
import { PHONE, PHONE_D } from "../config.js";
import { ServicePage } from "../components/Layouts.jsx";
import { Crumbs, FaqBlock, ProcessSteps } from "../components/Blocks.jsx";
import { CORE_FAQS as F } from "../data/core.js";

const svc = (name, slug) => [["Home", ""], ["What We Buy", "what-we-buy"], [name, null]];
function make(props) { return function Page() { return <ServicePage crumbItems={svc(props.cname, props.slug)} {...props} />; }; }

export const SellGoldPage = make({
  cname: "Cash Against Gold", slug: "sell-gold", faqPrefix: "sg",
  h1: "Cash Against Gold in Delhi — Sell Gold at Our South Extension Branch",
  intro: "Get instant cash for your gold jewellery, ornaments and gold items — tested on a German Karat Meter in front of you and valued at the day's market rate.",
  bullets: ["Gold jewellery — rings, chains, bangles, necklaces, earrings", "Old, broken or out-of-fashion gold jewellery", "Gold with or without hallmark, with or without bill", "Gold coins and bars (see also our coins page)"],
  detailH2: "Sell Gold for Cash in South Delhi — Transparently",
  paras: [
    "Bharat Gold Buyer buys gold jewellery at our single branch in Wazir Nagar, South Extension. The process is built so you never have to take our word for anything: your gold is tested on a <strong>German Karat Meter</strong> in front of you, the purity shows on screen, the item is weighed at the counter, and the value is calculated from the day's market rate with the full working explained.",
    "We accept gold of every purity and condition — hallmarked or not, with a bill or without one, new, old or broken. Set diamonds are evaluated separately and added to the gold value; stones and non-gold parts are explained openly rather than buried in a deduction.",
    "When you accept the offer, payment is made in the same visit by <strong>cash, cheque or bank transfer</strong>, with proper documentation and a receipt. Testing and valuation are free, and there is no obligation to sell — if the figure doesn't suit you, you take your gold back.",
    'New to selling? Read <a href="/where-to-sell-gold">how and where to sell gold</a>, or check <a href="/gold-rate-today">how today\'s rate decides your payout</a> before you visit.',
  ],
  faqs: [F[1], F[2], F[4], F[3]],
});

export const CashForGoldPage = make({
  cname: "Cash for Gold", slug: "cash-for-gold", faqPrefix: "cfg",
  h1: "Cash for Gold in Delhi — Transparent Evaluation, Instant Payment",
  intro: "Cash for gold with the evaluation done in front of you: German Karat Meter purity on screen, counter weighing, the day's rate, and payment in the same visit.",
  bullets: ["All gold jewellery and ornaments", "Broken chains, single earrings and damaged pieces", "Old and inherited gold, with or without bill", "Scrap gold and loose gold pieces"],
  detailH2: "How Cash for Gold Works at Bharat Gold Buyer",
  paras: [
    "'Cash for gold' should mean exactly what it says: you bring gold, it is valued honestly, and you leave with money. At our South Extension branch, the valuation is a public process — purity tested on the German Karat Meter in front of you, weight taken at the counter, and the day's market rate applied with the calculation shown line by line.",
    "There are no charges for testing or evaluation and no obligation to sell. If you accept, choose how you are paid: <strong>cash, cheque or bank transfer</strong>, completed in the same visit with a proper receipt.",
    "Because rates move daily, the honest way to compare buyers is the final payable amount on the same day. Get our figure — free — and compare it. We are comfortable with that comparison because every number behind it is shown to you.",
  ],
  faqs: [F[2], F[3], F[4], F[9]],
});

export const SellOldGoldPage = make({
  cname: "Sell Old Gold", slug: "sell-old-gold", faqPrefix: "sog",
  h1: "Sell Old Gold Jewellery for Cash in Delhi",
  intro: "Old gold jewellery buyer in South Delhi — old, inherited and out-of-fashion gold valued by tested purity and weight, not by age. With or without bill.",
  bullets: ["Old and inherited gold jewellery of any age", "Out-of-fashion designs you no longer wear", "Old gold with or without hallmark or bill", "Single pieces and complete family sets"],
  detailH2: "Old Gold Is Paid by Purity and Weight — Not Age",
  paras: [
    "Gold does not expire. An old 22K piece contains the same gold as a new 22K piece, and at Bharat Gold Buyer it is paid by the same formula: <strong>tested purity × weight × the day's market rate</strong>. Age, design and fashion do not reduce the metal value of your jewellery.",
    "Most old and inherited gold has no purchase bill — that is normal and accepted. You only need one valid photo ID (and PAN for transactions of ₹2 lakh and above). The German Karat Meter test decides the purity in front of you, whether or not the piece carries a hallmark.",
    "If your old jewellery has stones, the gold is tested and weighed, set diamonds are evaluated separately and included, and we show you how each part was treated before you decide.",
  ],
  faqs: [
    ["Can I sell old gold without a purchase bill?", "Yes. Most old and inherited gold has no bill. You only need one valid photo ID (Aadhaar, Voter ID, Driving Licence or Passport) — and PAN for transactions of ₹2 lakh and above. Value is decided by tested purity and weight, not paperwork."],
    ["Is old gold paid less than new gold?", "No. Gold is paid by weight and purity, not by age. An old 22K piece earns the same per-gram rate as a new 22K piece."],
    F[1], F[4]],
});

export const SellSilverPage = make({
  cname: "Cash For Silver", slug: "sell-silver", faqPrefix: "ss",
  h1: "Cash For Silver in Delhi — Sell Silver at Our South Extension Branch",
  intro: "Convert your silver jewellery and items into immediate cash — weighed in front of you, valued at the day's silver rate, paid in the same visit.",
  bullets: ["Silver jewellery — bangles, chains, anklets, rings", "Silver utensils, plates, bowls and pooja articles", "Silver coins and gift items", "Tarnished or blackened silver (tarnish does not reduce value)"],
  detailH2: "Sell Silver Jewellery, Utensils and Articles",
  paras: [
    "Bharat Gold Buyer buys silver in all its common forms: jewellery, utensils, pooja articles, coins and gift items. Each item is weighed in front of you and valued by its silver content at the day's silver rate, with the calculation explained before you decide.",
    "Tarnished or blackened silver is not worth less — tarnish is surface oxidation only, and the silver underneath is unchanged. Broken silver items are likewise valued by content and weight, not condition.",
    "Payment is made in the same visit by cash, cheque or bank transfer once you accept, with a proper receipt. Testing and valuation are free and carry no obligation.",
  ],
  faqs: [
    ["Do you buy silver utensils and pooja articles?", "Yes — glasses, plates, bowls, lamps, idols and complete pooja sets are all accepted and valued by weight and purity."],
    ["Does tarnished or blackened silver fetch less?", "No. Tarnish is only surface oxidation; the silver content is unchanged, and that is what you are paid for."],
    F[4], F[9]],
});

export const SellDiamondsPage = make({
  cname: "Cash For Diamond", slug: "sell-diamonds", faqPrefix: "sd",
  h1: "Cash For Diamond in Delhi — Sell Diamond Jewellery in South Extension",
  intro: "Fair rates for diamond jewellery and gemstones — diamonds evaluated carefully by trained staff, and the gold setting valued separately and added.",
  bullets: ["Diamond rings and solitaires", "Diamond earrings, pendants and bracelets", "Set diamond jewellery of all kinds", "Certified and uncertified diamonds"],
  detailH2: "How Diamond Jewellery Is Valued",
  paras: [
    "A diamond's value rests on its cut, colour, clarity and carat weight. At Bharat Gold Buyer, trained staff evaluate each stone carefully and explain the grading to you, so you understand what your diamond is and why it is valued as it is.",
    "The gold or platinum setting is <strong>not</strong> ignored: the metal is tested and weighed separately, and both figures — stone and setting — are included in your offer. A certificate helps the evaluation, but uncertified diamonds are accepted and graded in the same way.",
    "When you accept, payment is made in the same visit by cash, cheque or bank transfer, with proper documentation. Evaluation is free and there is no obligation to sell.",
  ],
  faqs: [
    ["Do I need a certificate to sell my diamond?", "No. A certificate helps, but our staff can evaluate uncertified diamonds as well and will explain the grading to you."],
    ["Is the gold in my diamond ring paid for separately?", "Yes. The diamond and the gold setting are valued separately and both are included in your offer."],
    F[0], F[4]],
});

export const SellCoinsPage = make({
  cname: "Sell Gold & Silver Coins", slug: "sell-coins", faqPrefix: "sc",
  h1: "Sell Gold & Silver Coins in Delhi — Coin Buyer in South Extension",
  intro: "Fair prices for collectible and investment coins — gold and silver coins and bars valued by weight, tested purity and the day's market rate.",
  bullets: ["Gold coins — bank, investment, temple and commemorative", "Silver coins of all kinds", "Gold and silver bars", "Coins with or without original packing or bill"],
  detailH2: "Sell Gold Coins and Silver Coins for Cash",
  paras: [
    "Coins are among the simplest items to value honestly: weight, purity and the day's rate decide the figure, and all three are shown to you. Sealed packing and bills help, but loose coins and bars are accepted after a free purity test at the counter.",
    "Temple and commemorative coins are valued on their metal content in the same way as investment coins. Plated coins, which carry negligible precious-metal content, will be tested free and we will tell you honestly what they are.",
    "Payment is made in the same visit by cash, cheque or bank transfer once you accept, with a proper receipt.",
  ],
  faqs: [
    ["Do you buy coins and bars without the original bill or packing?", "Yes. Sealed packing and bills help, but loose coins and bars are accepted after a free purity test."],
    ["Are plated coins accepted?", "Plated coins have negligible precious-metal content, so they carry little or no metal value. We will test the coin free and tell you honestly what it is."],
    F[4], F[9]],
});

export const ReleasePledgedGoldPage = make({
  cname: "Release Pledged Gold", slug: "release-pledged-gold", faqPrefix: "rpg",
  h1: "Release Pledged Gold in Delhi — Settle Your Gold Loan and Keep the Difference",
  intro: "Gold pledged in a bank, NBFC or with a financier? We help you release pledged gold in Delhi, settle the loan and keep the difference.",
  bullets: ["Gold pledged with banks and NBFCs", "Gold pledged with local financiers", "Loan receipt / pawn ticket cases", "Full settlement help at our South Extension branch"],
  detailH2: "How Releasing Pledged Gold Works",
  paras: [
    "When gold sits in a loan, interest keeps growing while the gold earns nothing. If the gold's value today is more than the loan dues, releasing it and selling it can leave you with money in hand instead of a growing liability — and stop the risk of losing the gold entirely if the loan goes unpaid.",
    "The process is straightforward: bring your <strong>loan receipt or pawn ticket</strong> and one photo ID. We calculate the gold's value at the day's rate, go with the settlement figure the lender confirms, help you settle and release the gold, and buy it from you — you keep the difference between the value and the dues.",
    "If the loan amount turns out to be more than the gold's value, releasing may not benefit you, and we will tell you that clearly. There is no charge for the valuation or the advice, and no obligation. Please note: we help you settle a loan you already have — <strong>we do not offer loans or financial advice</strong>.",
  ],
  faqs: [
    ["What documents do I need to release pledged gold?", "Your loan receipt / pawn ticket, one valid photo ID, and the lender's details. PAN is needed if the final transaction is ₹2 lakh or above."],
    ["What if the loan amount is more than my gold's value?", "Then releasing may not benefit you, and we will tell you that clearly. There is no obligation and no charge for the valuation or the advice."],
    ["How long does the release process take?", "It depends on the lender's release procedure — many gold loans can be settled and released the same day. Call us first and we'll plan it with you."],
    F[4]],
});

export const ScrapGoldBuyerPage = make({
  cname: "Scrap Gold Buyer", slug: "scrap-gold-buyer", faqPrefix: "scrap",
  h1: "Scrap Gold Buyer in Delhi — Fair Scrap Gold Evaluation, On Screen",
  intro: "Scrap gold buying with on-screen German Karat Meter evaluation — broken bits, findings and workshop scrap valued by tested purity and weight at the day's rate.",
  bullets: ["Broken and damaged gold pieces of any kind", "Loose findings, clasps and odd gold bits", "Dental gold with gold content", "Mixed scrap — grouped and tested in front of you"],
  detailH2: "How Scrap Gold Is Priced",
  paras: [
    "Scrap gold is priced by tested purity and weight at the day's market rate — the same formula as jewellery. There is no separate lower 'scrap rate' at our counter; the German Karat Meter reading decides, and you watch it happen.",
    "Mixed scrap is handled openly: we group similar pieces, test representative items from each group in front of you, and weigh each group. You see every reading and every weight before you accept anything.",
    "There is no minimum quantity. Small amounts are tested and valued the same way — free of charge and with no obligation to sell.",
  ],
  faqs: [
    ["How is scrap gold priced?", "By tested purity and weight, at the day's market rate — the same formula as jewellery. There is no separate lower 'scrap rate' at our counter; the Karat Meter reading decides."],
    ["Can I sell dental gold?", "Yes, if it has gold content. We test it in front of you; you're paid for the gold percentage it actually contains."],
    ["Is there a minimum quantity for scrap gold?", "No minimum. Small quantities are tested and valued the same way — free of charge and with no obligation to sell."],
    F[1]],
});

export const SellBrokenGoldPage = make({
  cname: "Sell Broken Gold", slug: "sell-broken-gold", faqPrefix: "sbg",
  h1: "Sell Broken Gold Jewellery in Delhi — Broken Jewellery Buyer",
  intro: "Sell broken gold jewellery for cash — broken chains, single earrings and damaged pieces valued by purity and weight, not by condition.",
  bullets: ["Broken chains, bangles and bracelets", "Single earrings and unmatched pieces", "Damaged rings and pendants", "Pieces with missing stones"],
  detailH2: "Damage Does Not Reduce Gold Content",
  paras: [
    "A broken chain contains exactly as much gold as it did the day before it broke. At Bharat Gold Buyer, broken gold is paid by <strong>tested purity and weight</strong> — the same formula as intact jewellery — so damage does not reduce your payout.",
    "Single earrings, odd studs and unmatched pieces are accepted and valued on their own weight and purity. If a stone has fallen out of a broken ring, that simply means less non-gold material in the piece; any set diamonds are still evaluated separately.",
    "Testing on the German Karat Meter is free and non-destructive, and payment is made in the same visit once you accept.",
  ],
  faqs: [
    ["Is broken gold paid at a lower rate?", "No. We pay by tested purity and weight — the same formula as intact jewellery. Damage does not reduce the gold content, so it does not reduce your payout."],
    ["I have only one earring of a pair. Can I sell it?", "Yes. Single earrings, odd studs and unmatched pieces are accepted and valued by their own weight and purity."],
    F[1], F[4]],
});

export const GoldExchangePage = make({
  cname: "Gold Exchange", slug: "gold-exchange", faqPrefix: "ge",
  h1: "Gold Exchange Service in Delhi — Exchange Old Gold for Its Full Value",
  intro: "Your old gold valued transparently and paid in full as cash, cheque or bank transfer. No forced purchase, no lock-in to any jeweller.",
  bullets: ["Old gold exchanged for full metal value", "Broken and old-fashioned pieces accepted", "Value paid to you — spend it anywhere", "Same transparent Karat Meter valuation as a sale"],
  detailH2: "Exchange Without the Lock-In",
  paras: [
    "A jeweller's exchange offer usually comes with a condition: the value must be spent in that same store, often with making charges and deductions along the way. Bharat Gold Buyer works differently — we are a buyer, not a showroom. Your old gold is valued transparently and the full amount is <strong>paid to you</strong>, so you can use it anywhere, including at any jeweller you choose for new jewellery.",
    "The valuation is exactly like a sale: German Karat Meter-tested purity × weight × the day's market rate, shown to you line by line, with proper documentation and a receipt.",
    "Broken and old-fashioned gold is valued by the same formula — exchange value depends on metal content, not condition or design.",
  ],
  faqs: [
    ["Do I have to buy new jewellery to exchange my gold here?", "No. We are a gold buyer: your old gold's value is paid to you as cash, cheque or bank transfer. You can use it anywhere — with no purchase condition from us."],
    ["How is exchange value calculated?", "Exactly like a sale: tested purity × weight × the day's market rate, shown to you line by line, with documentation and a receipt."],
    F[4], F[9]],
});

export const InstantCashPage = make({
  cname: "Instant Cash for Gold", slug: "instant-cash-for-gold", faqPrefix: "icf",
  h1: "Instant Cash for Gold in Delhi — On-Spot Payment in One Visit",
  intro: "Instant cash for gold in South Delhi — on-spot cash payment, cheque or instant bank transfer in the same visit, once you accept our offer.",
  bullets: ["Payment in the same visit, at the counter", "Cash, cheque or bank transfer — your choice", "Free testing and valuation before you decide", "Proper receipt for every transaction"],
  detailH2: "How Fast Is 'Instant' — Really?",
  paras: [
    "Once you accept the valuation, payment is made <strong>in the same visit</strong>: cash at the counter, a cheque, or a bank transfer initiated in front of you. Testing, valuation and payment together usually take a single short visit.",
    "Bank transfer is available for any amount and is a sensible choice for larger transactions, so you carry no cash at all. You receive the transfer confirmation and a proper receipt before you leave.",
    "If you accept a valuation but prefer to be paid later, note that gold rates change daily — a later sale is valued at that day's rate. Most customers complete everything in one visit.",
  ],
  faqs: [
    ["How fast is 'instant' — really?", "Once you accept the valuation, payment is made in the same visit: cash at the counter, cheque, or a bank transfer initiated in front of you."],
    ["Is bank transfer available for all amounts?", "Yes. Bank transfer is available for any transaction, and recommended for larger ones. You receive the transfer confirmation and a proper receipt before you leave."],
    ["Do I get any document for the payment?", "Yes — every sale is completed with documentation and a receipt recording what was sold, its tested purity and weight, and the amount paid."],
    F[0]],
});

export function GoldRatePage() {
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={[["Home", ""], ["Gold Rate Today", null]]} />
          <div className="eyebrow">Gold Rate Today</div>
          <h1 className="sec-title">Gold Rate Today in Delhi — and How Your Payout Is Calculated</h1>
          <p className="sec-desc">
            Gold rates change every day, so we do not print a stale number on this page. Call us on <a href={`tel:${PHONE}`}>{PHONE_D}</a> for today's live gold buying rate — then use the formula below to verify any buyer's calculation, including ours.
          </p>
          <div className="content-page" style={{ marginTop: "26px" }}>
            <h2>The Formula</h2>
            <p><strong>Payout = net weight of pure gold × today's rate per gram of pure gold.</strong> Your item's weight is converted to pure-gold weight using its tested purity, and that pure weight is multiplied by the day's rate.</p>
            <h2>Purity Table (BIS)</h2>
            <table className="rate-table">
              <thead><tr><th>Karat</th><th>Purity</th><th>Common use</th></tr></thead>
              <tbody>
                <tr><td>24K</td><td>99.9%</td><td>Coins and bars</td></tr>
                <tr><td>22K</td><td>91.6%</td><td>Classic Indian jewellery (hallmark 916)</td></tr>
                <tr><td>18K</td><td>75.0%</td><td>Diamond jewellery (hallmark 750)</td></tr>
                <tr><td>14K</td><td>58.5%</td><td>Light everyday jewellery</td></tr>
              </tbody>
            </table>
            <h2>A Worked Example (Illustrative Numbers Only)</h2>
            <p>Suppose — <strong>purely as an illustration, not a quote</strong> — the day's pure-gold rate is ₹7,500 per gram, and you bring a 22K bangle weighing 12 grams. Pure-gold weight = 12 × 0.916 = 10.992 g. Payout = 10.992 × ₹7,500 = <strong>₹82,440</strong>. The actual rate on the day you visit will be different — call us for today's figure, and watch the same calculation done in front of you at the counter after a free German Karat Meter test.</p>
            <h2>Why We Don't Publish a Fixed Rate Here</h2>
            <p>The rate follows the international gold price and the rupee–dollar exchange rate, and moves daily — sometimes within the day. Any rate printed on a website would mislead someone within hours. An honest buyer states the day's rate at the counter, shows you the purity and weight, and lets you verify the multiplication yourself.</p>
          </div>
        </div>
      </section>
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow">How It Works</div>
          <h2 className="sec-title">How to Sell Your Gold in 3 Easy Steps</h2>
          <ProcessSteps />
        </div>
      </section>
      <section className="sec">
        <div className="ctr">
          <div className="eyebrow">FAQs</div>
          <h2 className="sec-title">Rate Questions</h2>
          <FaqBlock faqs={[F[7], F[2]]} prefix="rate" />
          <p style={{ textAlign: "center", marginTop: "24px" }}>
            <a className="btn-gold" href={`tel:${PHONE}`}>📞 Call for Today's Rate — {PHONE_D}</a>
          </p>
        </div>
      </section>
    </>
  );
}
