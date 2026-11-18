import React from "react";
import { PHONE, PHONE_D, EMAIL, HOURS_D, MAPS_URL, MAP_EMBED, ADDRESS_LINE, IMG, AREAS } from "../config.js";
import {
  HeroForm, TrustStrip, TrustChips, ProcessSteps, AreasSection, ServicesSection, FaqBlock, SkeletonImg,
} from "../components/Blocks.jsx";
import { HOME_FAQS } from "../data/core.js";

export default function HomePage() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-tag">— Trusted Gold Buyer in Delhi —</div>
            <h1 className="hero-title">Cash Against <span className="gold">Gold, Silver</span> and Diamonds</h1>
            <p className="hero-subtitle">
              Get a fair value for your gold, silver, diamonds and coins with free German Karat Meter purity testing, transparent valuation and instant payment at our South Extension branch. Sona Lao, Paise Pao.
            </p>
            <div className="hero-btns">
              <a className="btn-gold" href={MAPS_URL} target="_blank" rel="noreferrer">📍 Locate Our Branch</a>
              <a className="btn-outline" href={`tel:${PHONE}`}>📞 Call Now</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="img-box">
              <SkeletonImg className="skel-fill" src={IMG.hero} alt="Gold jewellery and cash — sell gold, silver and diamonds at Bharat Gold Buyer, South Extension, Delhi" eager width="600" height="450" />
            </div>
          </div>
        </div>
      </section>
      <TrustStrip />
      <section className="sec" style={{ paddingTop: "36px", paddingBottom: "36px" }}>
        <div className="ctr"><TrustChips /></div>
      </section>

      <section className="sec" id="about">
        <div className="ctr">
          <div className="eyebrow">About Bharat Gold Buyer</div>
          <h2 className="sec-title">Best Gold, Silver &amp; Diamond Buyer in Delhi NCR</h2>
          <div className="sell-now-wrap">
            <div>
              <div className="img-box">
                <SkeletonImg className="skel-fill" src={IMG.about} alt="Gold bangle and diamond ring — Bharat Gold Buyer, South Extension, Delhi" width="500" height="375" />
              </div>
              <p style={{ marginTop: "12px", fontSize: "13px", color: "var(--gray)" }}>⭐⭐⭐⭐⭐ Rated by customers on Google — visit us and judge the process yourself.</p>
            </div>
            <div>
              <p style={{ fontSize: "15px", color: "var(--gray)", lineHeight: "1.8" }}>
                <strong>Sona Lao, Paise Pao — Trusted Gold Buyers Near You.</strong> Looking to sell gold for instant cash? Bharat Gold Buyer is a trusted gold, silver and diamond buyer in Delhi NCR, offering fair market value for your gold, silver and diamonds. If you are searching for cash for gold near me, or a reliable place to sell gold in South Delhi, we make the process quick, secure and transparent.
              </p>
              <p style={{ fontSize: "15px", color: "var(--gray)", lineHeight: "1.8", marginTop: "12px" }}>
                Our single branch at Wazir Nagar, South Extension, provides professional evaluation, instant payouts and complete transparency in every transaction — with no hidden charges. Customers travel to us from across South Delhi and Delhi NCR.
              </p>
              <ul className="sell-bullets" style={{ marginTop: "16px" }}>
                <li><span className="dot"></span><strong>Fair &amp; Transparent Valuation</strong> — get the right price for your jewellery, calculated in front of you.</li>
                <li><span className="dot"></span><strong>Certified Testing</strong> — purity checked on a German Karat Meter machine, without damaging your jewellery.</li>
                <li><span className="dot"></span><strong>Instant Payment</strong> — receive cash, cheque or bank transfer in the same visit, once you accept.</li>
              </ul>
              <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a className="btn-gold" href="/contact">Get Instant Cash for Your Gold →</a>
                <a className="btn-outline" href={MAPS_URL} target="_blank" rel="noreferrer">📍 Find Our Branch</a>
              </div>
            </div>
          </div>
          <div className="chip-list" style={{ marginTop: "30px" }}>
            <span className="chip">📍 Delhi NCR Coverage</span>
            <span className="chip">👨‍💼 Experienced &amp; Trained Staff</span>
            <span className="chip">🛡️ No Hidden Charges</span>
            <span className="chip">💎 Deals in Gold, Silver &amp; Diamonds</span>
          </div>
        </div>
      </section>

      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow center">How It Works</div>
          <h2 className="sec-title center">How to Sell Your Gold in 3 Easy Steps</h2>
          <p className="sec-desc center" style={{ margin: "0 auto 30px" }}>A simple, transparent and secure process to get a fair value for your gold, silver or diamonds.</p>
          <ProcessSteps />
          <div style={{ textAlign: "center", marginTop: "26px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn-gold" href={`tel:${PHONE}`}>📞 Call Now</a>
            <a className="btn-outline" href={MAPS_URL} target="_blank" rel="noreferrer">📍 Get Directions</a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="ctr">
          <div className="eyebrow center">Our Gold Buying Services</div>
          <h2 className="sec-title center">What We Buy</h2>
          <p className="sec-desc center" style={{ margin: "0 auto 30px" }}>We purchase a wide range of valuable items and offer a fair, transparent price for each.</p>
          <div className="buy-cards">
            {[
              [IMG.gold, "Gold Jewellery", "Rings, chains, bangles, necklaces, earrings and more.", "/sell-gold", "Sell Gold Jewellery →"],
              [IMG.silver, "Silver Items", "Bangles, coins, utensils, plates, articles and more.", "/sell-silver", "Sell Silver Items →"],
              [IMG.diamond, "Diamond Jewellery", "Diamond rings, earrings, pendants, bracelets and more.", "/sell-diamonds", "Sell Diamond Jewellery →"],
              [IMG.coins, "Gold & Silver Coins", "Gold coins, silver coins and commemorative coins.", "/sell-coins", "Sell Coins →"],
            ].map(([img, t, d, u, link], i) => (
              <div className="buy-card" key={i}>
                <SkeletonImg src={img} alt={t + " — Bharat Gold Buyer, Delhi"} className="skel-auto" style={{ width: "84px", borderRadius: "12px" }} />
                <div><h3>{t}</h3><p>{d}</p><a href={u}>{link}</a></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-dark">
        <div className="ctr">
          <div className="eyebrow center">Our Technology Advantage</div>
          <h2 className="sec-title center">Why We Are Different From Other Gold Jewellery Buyers</h2>
          <p className="sec-desc center" style={{ margin: "0 auto 30px" }}>We use a German Karat Meter Machine for accurate, non-destructive and internationally trusted purity testing.</p>
          <div className="compare-wrap">
            <div className="compare-col bad">
              <h3>❌ Oldest Method To Test The Purity</h3>
              <ul className="compare-list">
                <li>❌ Results can be inaccurate — purity is judged by eye on a touchstone</li>
                <li>❌ Often gives a lower value than the actual purity</li>
                <li>❌ Scratches your jewellery and uses acid</li>
                <li>❌ Still used by many buyers in the market</li>
              </ul>
            </div>
            <div className="compare-col good">
              <h3>✅ German Karat Meter Machine</h3>
              <ul className="compare-list">
                <li>✅ Internationally certified and trusted testing technology</li>
                <li>✅ Non-destructive test that keeps your jewellery safe</li>
                <li>✅ Gives an exact purity value (e.g. 22K = 91.6%) for a fair, transparent price</li>
                <li>✅ Result shown to you on screen, in front of you</li>
              </ul>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: "22px" }}><a href="/blog-german-karat-meter-vs-old-purity-test">Read the full comparison →</a></p>
        </div>
      </section>

      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow">Gold Rate Today</div>
          <h2 className="sec-title">Today's Gold Rate — and How Your Price Is Calculated</h2>
          <div className="sell-now-wrap">
            <div className="img-box">
              <SkeletonImg className="skel-fill" src={IMG.chart} alt="Gold rate — call Bharat Gold Buyer for today's live gold buying rate in Delhi" width="500" height="375" />
            </div>
            <div>
              <p style={{ fontSize: "15px", color: "var(--gray)", lineHeight: "1.8" }}>
                Your payout = <strong>net pure-gold weight × today's market rate</strong>. Purity decides the pure weight: 24K is 99.9% pure, 22K is 91.6%, 18K is 75% and 14K is 58.5%. Rates change daily, so we never print a stale number here — call us for today's live rate, then watch the same calculation happen in front of you at the counter.
              </p>
              <ul className="sell-bullets">
                <li><span className="dot"></span>Free German Karat Meter purity test — know the exact karat</li>
                <li><span className="dot"></span>Valuation at the day's market rate, explained line by line</li>
                <li><span className="dot"></span>No obligation — walk away if the offer doesn't suit you</li>
              </ul>
              <div style={{ marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a className="btn-gold" href={`tel:${PHONE}`}>📞 Call for Today's Rate</a>
                <a className="btn-outline" href="/gold-rate-today">How the Rate Works →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AreasSection />

      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow">Our Branch</div>
          <h2 className="sec-title">Our Branch — Find Us in South Extension, Delhi NCR</h2>
          <div className="location-wrap">
            <div className="loc-info">
              <p style={{ fontSize: "15px", color: "var(--gray)", lineHeight: "1.8", marginBottom: "16px" }}>
                Our Delhi branch sits at Wazir Nagar, on the South Extension–Kotla Mubarakpur border — an easy walk-in for customers from South Extension, Kotla Mubarakpur, Wazir Nagar and nearby Lajpat Nagar looking for a trusted local gold buyer in South Delhi. This is our only branch.
              </p>
              <div className="loc-rows">
                <div className="loc-row"><strong>📍 Delhi Branch</strong><span>{ADDRESS_LINE}</span></div>
                <div className="loc-row"><strong>📞 Phone / WhatsApp</strong><span><a href={`tel:${PHONE}`}>{PHONE_D}</a></span></div>
                <div className="loc-row"><strong>✉️ Email</strong><span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></div>
                <div className="loc-row"><strong>🕐 Branch Timings</strong><span>Open all 7 days — {HOURS_D}</span></div>
                <div className="loc-row"><strong>🚇 Metro</strong><span>South Extension metro station (Pink Line) is the nearest station.</span></div>
              </div>
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

      <section className="sec">
        <div className="ctr">
          <div className="eyebrow center">FAQs</div>
          <h2 className="sec-title center">Frequently Asked Questions</h2>
          <p className="sec-desc center" style={{ margin: "0 auto 30px" }}>Quick answers to common queries about selling gold, silver and diamonds at Bharat Gold Buyer.</p>
          <FaqBlock faqs={HOME_FAQS} prefix="home" />
          <p style={{ textAlign: "center", marginTop: "22px" }}><a href="/faq">Read all FAQs →</a></p>
        </div>
      </section>

      <section className="sec sec-gold-bg" id="enquire">
        <div className="ctr" style={{ maxWidth: "560px" }}>
          <div className="eyebrow center">Free Quote</div>
          <h2 className="sec-title center">Get a Free Quote for Your Gold</h2>
          <p className="sec-desc center" style={{ margin: "0 auto 26px" }}>Tell us what you want to sell — we'll call you back with today's rate. No spam, no obligation.</p>
          <HeroForm />
        </div>
      </section>
    </>
  );
}
