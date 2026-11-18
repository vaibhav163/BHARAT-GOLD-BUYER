import React, { useState } from "react";
import { PHONE, PHONE_D, PHONE2_D, WA, EMAIL, HOURS_D, MAPS_URL, MAP_EMBED, ADDRESS_LINE, IMG } from "../config.js";
import { makeSubmitHandler, EnquiryStatus } from "../lib/enquiry.jsx";
import {
  Crumbs, FaqBlock, ProcessSteps, AreasSection, ServicesSection, WhyUs, TrustChips,
  SkeletonImg, HeroForm,
} from "../components/Blocks.jsx";
import { CORE_FAQS } from "../data/core.js";

export function AboutPage() {
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={[["Home", ""], ["About Us", null]]} />
          <div className="eyebrow">About Us</div>
          <h1 className="sec-title">About Bharat Gold Buyer — Gold, Silver &amp; Diamond Buyer in South Extension, Delhi</h1>
          <div className="content-page">
            <p><strong>Sona Lao, Paise Pao.</strong> Bharat Gold Buyer is a gold buying business at <strong>{ADDRESS_LINE}</strong>, where you can sell gold, silver, diamond jewellery and coins with complete transparency.</p>
            <p>We started with a simple observation: most people who sell old gold have no way of knowing whether they are getting a fair price. Traditional testing methods — acid or touchstone — scratch the jewellery, and the final number is often just "trust us". Stones, wastage and melting charges quietly eat into the value.</p>
            <p>At Bharat Gold Buyer, the process happens in front of you. We test purity with a <strong>German Karat Meter machine</strong> — the result shows on a screen, with zero damage to your jewellery. We weigh your item in front of you, apply the day's market rate, and explain the full calculation before you decide. Every sale is completed with proper documentation and a receipt, and payment is made instantly by cash, cheque or bank transfer once you accept our offer.</p>
            <p>Our branch sits at Wazir Nagar, on the South Extension–Kotla Mubarakpur border in South Delhi — easy to reach from South Extension, Lajpat Nagar, Greater Kailash, Defence Colony, Saket and across Delhi NCR. It is our <strong>only branch</strong>. We are open all 7 days, and testing and valuation are always free, with no obligation to sell.</p>
            <h2>Our Promise</h2>
            <ul>
              <li>Your jewellery is never damaged during testing — no acid, no scratching, no melting.</li>
              <li>You see the purity, the weight and the rate. Nothing is hidden.</li>
              <li>No obligation: if the offer doesn't suit you, you take your jewellery back — free of charge.</li>
              <li>Instant payment and a proper receipt, every single time.</li>
            </ul>
          </div>
          <WhyUs />
        </div>
      </section>
      <AreasSection />
    </>
  );
}

export function WhatWeBuyPage() {
  const cards = [
    [IMG.gold, "Cash Against Gold", "All gold jewellery — necklaces, bangles, chains, rings, earrings and bracelets. With or without hallmark, with or without bill, old, new or broken. Valued by German Karat Meter-tested purity at the day's market rate.", "/sell-gold", "Sell gold →"],
    [IMG.silver, "Cash For Silver", "Silver jewellery, utensils, pooja articles, gift items and ornaments. Weighed in front of you and valued at the day's silver rate.", "/sell-silver", "Sell silver →"],
    [IMG.diamond, "Cash For Diamond", "Diamond rings, solitaires, earrings, pendants and set jewellery — certified or uncertified. Each stone is evaluated carefully and explained to you.", "/sell-diamonds", "Sell diamonds →"],
    [IMG.coins, "Sell Gold & Silver Coins", "Gold and silver coins — bank-issued, investment, temple and commemorative — valued by weight, purity and the day's market rate.", "/sell-coins", "Sell coins →"],
    [null, "Release Pledged Gold", "Gold pledged with a bank, NBFC or local financier? We help you settle the loan, release the gold and buy it from you — so you keep the difference instead of losing the gold.", "/release-pledged-gold", "How it works →"],
    [null, "Today's Gold Rate", "Rates change every day. See how the market rate, purity and weight combine to decide your payout — then call us for today's exact rate.", "/gold-rate-today", "Understand the rate →"],
  ];
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={[["Home", ""], ["What We Buy", null]]} />
          <div className="eyebrow">Our Gold Buying Services</div>
          <h1 className="sec-title">What We Buy — Gold, Silver, Diamonds &amp; Coins</h1>
          <p className="sec-desc">Every category is tested with the same transparent, non-destructive German Karat Meter process and paid for in the same visit at our South Extension branch.</p>
          <div className="buy-cards">
            {cards.map(([img, t, d, u, link], i) => (
              <div className="buy-card" key={i}>
                {img ? <SkeletonImg src={img} alt={t + " — Bharat Gold Buyer, Delhi"} className="skel-auto" style={{ width: "84px", borderRadius: "12px" }} /> : <div className="buy-card-icon">{i === 4 ? "🔓" : "📈"}</div>}
                <div><h3>{t}</h3><p>{d}</p><a href={u}>{link}</a></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServicesSection />
    </>
  );
}

export function ProcessPage() {
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={[["Home", ""], ["How It Works", null]]} />
          <div className="eyebrow">How It Works</div>
          <h1 className="sec-title">How to Sell Your Gold in 3 Easy Steps</h1>
          <p className="sec-desc">A simple, transparent and secure process to get a fair value for your gold, silver or diamonds — usually completed in a single visit to our South Extension branch.</p>
          <ProcessSteps />
          <div className="content-page" style={{ marginTop: "34px" }}>
            <h2>What to Bring</h2>
            <p>Your items, and one valid government photo ID — Aadhaar Card, PAN Card, Driving License or Passport. PAN is required for transactions of ₹2 lakh and above. A purchase bill is helpful but not compulsory; for pledged gold, bring the loan receipt or pawn ticket as well.</p>
            <h2>What Happens at the Counter</h2>
            <p>Your item is tested on the German Karat Meter in front of you — the purity appears on screen and the jewellery is not damaged in any way. It is then weighed at the counter, and the value is calculated as pure-metal weight × the day's market rate, explained line by line. Diamonds set in jewellery are evaluated separately and added. Only when you accept the figure do we complete the documentation and pay you — by cash, cheque or bank transfer, your choice.</p>
            <h2>No Obligation, Ever</h2>
            <p>Testing and valuation are free. If the offer doesn't suit you, you take your items back and pay nothing. Many customers get a valuation first, think it over at home, and return when they are ready — that is exactly how the process should work.</p>
          </div>
        </div>
      </section>
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow">FAQs</div>
          <h2 className="sec-title">Process Questions</h2>
          <FaqBlock faqs={[CORE_FAQS[3], CORE_FAQS[4], CORE_FAQS[5], CORE_FAQS[9]]} prefix="proc" />
        </div>
      </section>
    </>
  );
}

export function WhyChooseUsPage() {
  return (
    <>
      <section className="sec sec-dark">
        <div className="ctr">
          <Crumbs items={[["Home", ""], ["Why Choose Us", null]]} />
          <div className="eyebrow">Why Choose Us</div>
          <h1 className="sec-title">Why We Are Different From Other Gold Jewellery Buyers</h1>
          <p className="sec-desc">We use a German Karat Meter Machine for accurate, non-destructive and internationally trusted purity testing — and we show you everything.</p>
          <div className="compare-wrap">
            <div className="compare-col bad">
              <h3>❌ Oldest Method To Test The Purity</h3>
              <ul className="compare-list">
                <li>❌ This method is completely inaccurate — judged by eye</li>
                <li>❌ Cheapest and easily available in the market</li>
                <li>❌ Scratches jewellery and uses acid</li>
                <li>❌ Often gives a lower value than the actual purity</li>
              </ul>
            </div>
            <div className="compare-col good">
              <h3>✅ German Karat Meter Machine</h3>
              <ul className="compare-list">
                <li>✅ German Karatmeter testing — worldwide certified technology</li>
                <li>✅ A non-destructive method, widely used and appreciated</li>
                <li>✅ Provides the exact value of purity in karat &amp; % — e.g. 22kt / 91.6%</li>
                <li>✅ Result on screen, in front of you</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="ctr">
          <div className="eyebrow">The Bharat Difference</div>
          <h2 className="sec-title">Four Reasons Sellers Choose Us</h2>
          <TrustChips />
          <div className="content-page" style={{ marginTop: "30px" }}>
            <h2>Transparent From Testing to Payment</h2>
            <p>Everything from testing to pricing is explained clearly before you make a decision: the purity reading, the weight, the day's rate and the final calculation. There are no hidden charges, and testing and evaluation are free with no obligation to sell. Choose cash, cheque or bank transfer — paid in the same visit once you accept our offer.</p>
            <p>Read the detailed comparison in our blog: <a href="/blog-german-karat-meter-vs-old-purity-test">German Karat Meter vs the old touchstone test</a>, or see <a href="/gold-purity-testing">how our purity testing works</a>.</p>
          </div>
        </div>
      </section>
      <AreasSection />
    </>
  );
}

export function LocationsPage() {
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={[["Home", ""], ["Our Locations", null]]} />
          <div className="eyebrow">Our Branch</div>
          <h1 className="sec-title">Our Branch — Find Us in South Extension, Delhi NCR</h1>
          <p className="sec-desc">Bharat Gold Buyer has <strong>one branch</strong>, in South Extension. We are easy to walk into for customers from South Extension, Kotla Mubarakpur, Wazir Nagar and nearby Lajpat Nagar — and customers travel to us from across South Delhi and Delhi NCR.</p>
          <div className="location-wrap" style={{ marginTop: "30px" }}>
            <div className="loc-info">
              <div className="loc-rows">
                <div className="loc-row"><strong>📍 Delhi Branch</strong><span>{ADDRESS_LINE}</span></div>
                <div className="loc-row"><strong>📞 Phone</strong><span><a href={`tel:${PHONE}`}>{PHONE_D}</a> · {PHONE2_D}</span></div>
                <div className="loc-row"><strong>✉️ Email</strong><span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></div>
                <div className="loc-row"><strong>🕐 Timings</strong><span>Mon – Sun: {HOURS_D} (open all 7 days)</span></div>
                <div className="loc-row"><strong>🚇 Nearest Metro</strong><span>South Extension (Pink Line)</span></div>
              </div>
              <ul className="sell-bullets" style={{ marginTop: "16px" }}>
                <li><span className="dot"></span>Prime, easy-to-reach location in South Extension Part I</li>
                <li><span className="dot"></span>Well connected by metro and road</li>
                <li><span className="dot"></span>Trusted by customers across Delhi NCR</li>
                <li><span className="dot"></span>Safe, secure and professional process</li>
              </ul>
              <div className="loc-btns">
                <a className="btn-gold" href={`tel:${PHONE}`}>Call Now</a>
                <a className="btn-outline" href={MAPS_URL} target="_blank" rel="noreferrer">Get Directions</a>
              </div>
            </div>
            <div className="map-box">
              <iframe title="Bharat Gold Buyer location — Wazir Nagar, South Extension, New Delhi" src={MAP_EMBED} loading="lazy" style={{ border: 0, width: "100%", height: "100%", minHeight: "320px" }} allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
      <AreasSection title="Areas Our Customers Travel From" />
    </>
  );
}

export function GalleryPage() {
  const imgs = [
    [IMG.hero, "Gold jewellery and cash at Bharat Gold Buyer, South Extension"],
    [IMG.gold, "Gold jewellery we buy — necklaces, bangles and earrings"],
    [IMG.silver, "Silver items we buy — utensils, bangles and articles"],
    [IMG.diamond, "Diamond jewellery we buy — rings and solitaires"],
    [IMG.coins, "Gold and silver coins we buy"],
    [IMG.chart, "Gold rate and valuation at Bharat Gold Buyer, Delhi"],
  ];
  return (
    <section className="sec">
      <div className="ctr">
        <Crumbs items={[["Home", ""], ["Gallery", null]]} />
        <div className="eyebrow">Gallery</div>
        <h1 className="sec-title">Inside Bharat Gold Buyer — South Extension, Delhi</h1>
        <p className="sec-desc">What we buy and how selling works: German Karat Meter purity testing, counter weighing and instant payment at our Wazir Nagar, South Extension branch. Replace these images with real branch photos anytime — the file names stay the same.</p>
        <div className="buy-cards" style={{ marginTop: "28px" }}>
          {imgs.map(([src, alt], i) => (
            <div className="buy-card" key={i}>
              <SkeletonImg src={src} alt={alt} className="skel-auto" style={{ width: "100%", borderRadius: "12px" }} />
              <div><p>{alt}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqPage() {
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={[["Home", ""], ["FAQs", null]]} />
          <div className="eyebrow">FAQs</div>
          <h1 className="sec-title">Frequently Asked Questions</h1>
          <p className="sec-desc">Find quick answers to common queries about selling gold, silver and diamonds at Bharat Gold Buyer, South Extension. Still unsure? Call our experts or chat on WhatsApp — we're here to help with valuation, process and payments.</p>
          <div style={{ marginTop: "28px" }}><FaqBlock faqs={CORE_FAQS} prefix="faqpage" /></div>
        </div>
      </section>
      <section className="sec sec-gold-bg">
        <div className="ctr" style={{ maxWidth: "560px" }}>
          <h2 className="sec-title center">Have a Question?</h2>
          <p className="sec-desc center" style={{ margin: "0 auto 22px" }}>Transparent process · Free testing · Instant payment</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-gold" href={`tel:${PHONE}`}>📞 Call Our Experts</a>
            <a className="btn-outline" href={WA} target="_blank" rel="noreferrer">💬 Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}

export function ContactPage() {
  const [status, setStatus] = useState(null);
  const onSubmit = makeSubmitHandler((f) => f.item.value, setStatus);
  return (
    <section className="sec">
      <div className="ctr">
        <Crumbs items={[["Home", ""], ["Contact Us", null]]} />
        <div className="eyebrow">Contact Us</div>
        <h1 className="sec-title">Visit Our South Extension Branch or Get a Free Quote</h1>
        <div className="location-wrap">
          <div className="loc-info">
            <div className="loc-rows">
              <div className="loc-row"><strong>📍 Address</strong><span>{ADDRESS_LINE}</span></div>
              <div className="loc-row"><strong>📞 Phone</strong><span><a href={`tel:${PHONE}`}>{PHONE_D}</a> · {PHONE2_D}</span></div>
              <div className="loc-row"><strong>✉️ Email</strong><span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></div>
              <div className="loc-row"><strong>🕐 Hours</strong><span>Open all 7 days — {HOURS_D}</span></div>
              <div className="loc-row"><strong>🚇 Metro</strong><span>South Extension metro station (Pink Line)</span></div>
            </div>
            <div className="loc-btns">
              <a className="btn-gold" href={MAPS_URL} target="_blank" rel="noreferrer">Get Directions</a>
              <a className="btn-outline" href={WA} target="_blank" rel="noreferrer">💬 WhatsApp Us</a>
            </div>
            <div className="map-box" style={{ marginTop: "20px" }}>
              <iframe title="Bharat Gold Buyer location — Wazir Nagar, South Extension, New Delhi" src={MAP_EMBED} loading="lazy" style={{ border: 0, width: "100%", height: "100%", minHeight: "280px" }} allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div>
            <div className="hero-form-card">
              <div className="hf-head"><h2>Get a Free Quote</h2><p>We'll call you back with today's rate.</p></div>
              <form className="hero-form" onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Your Full Name" required />
                <input type="tel" name="phone" placeholder="Mobile Number" required pattern="[0-9]{10}" maxLength="10" />
                <select name="item" required defaultValue="">
                  <option value="" disabled>What do you want to sell?</option>
                  <option>Gold Jewellery</option><option>Silver Items</option><option>Diamond Jewellery</option>
                  <option>Gold / Silver Coins</option><option>Pledged Gold Release</option><option>Other</option>
                </select>
                <button type="submit" className="btn-gold" style={{ width: "100%" }}>Get Free Quote</button>
                <p className="form-note"><EnquiryStatus status={status} defaultText="No spam — we'll only call about your enquiry." /></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroForm };
