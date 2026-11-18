import React, { useState, useRef, useEffect } from "react";
import { PHONE, PHONE_D, WA, HOURS_D, AREAS, MAPS_URL, IMG } from "../config.js";
import { CORE_FAQS } from "../data/core.js";
import { makeSubmitHandler, EnquiryStatus } from "../lib/enquiry.jsx";

export function SkeletonImg({ src, alt, className = "", style, eager = false, width, height }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const im = ref.current;
    if (im && im.complete && im.naturalWidth > 0) setLoaded(true);
  }, []);
  return (
    <div className={`skel-img${loaded ? " loaded" : ""} ${className}`} style={style} aria-busy={!loaded}>
      <img ref={ref} src={src} alt={alt} width={width} height={height}
        loading={eager ? "eager" : "lazy"} decoding="async"
        {...(eager ? { fetchpriority: "high" } : {})}
        onLoad={() => setLoaded(true)} />
    </div>
  );
}

export function EmptyState({ icon = "🔍", title = "Nothing here yet", text = "" }) {
  return (
    <div className="empty-state" role="status">
      <div className="empty-icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function HeroForm({ options } = {}) {
  const opts = options || [
    "Gold Jewellery", "Silver Items", "Diamond Jewellery",
    "Gold / Silver Coins", "Pledged Gold Release", "Other",
  ];
  const [status, setStatus] = useState(null);
  const onSubmit = makeSubmitHandler((f) => f.item.value, setStatus);
  return (
    <div className="hero-form-card" id="hero-form-card">
      <div className="hf-head">
        <h2>Get a Free Quote</h2>
        <p>Tell us what you're selling — we'll call you back with today's rate.</p>
      </div>
      <form className="hero-form" id="hero-form" onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="tel" name="phone" placeholder="Mobile Number" required pattern="[0-9]{10}" maxLength="10" />
        <select name="item" required defaultValue="">
          <option value="" disabled>What do you want to sell?</option>
          {opts.map((o) => (<option key={o} value={o}>{o}</option>))}
        </select>
        <button type="submit" className="btn-gold" style={{ width: "100%" }}>Get Free Quote</button>
        <p className="form-note" id="hero-form-status"><EnquiryStatus status={status} defaultText="No spam — we'll only call about your enquiry." /></p>
      </form>
    </div>
  );
}

export function Crumbs({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map(([n, u], i) => (
        <React.Fragment key={i}>
          {i > 0 ? " › " : ""}
          {u !== null && u !== undefined && i < items.length - 1 ? <a href={"/" + u}>{n}</a> : <span>{n}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

export function FaqBlock({ faqs, prefix = "fa" }) {
  return (
    <div className="faq-grid">
      {faqs.map(([q, a], i) => {
        const id = `${prefix}-${i}`;
        return (
          <div className="faq-item" key={i}>
            <button className="faq-q" aria-expanded="false" aria-controls={id}>{q}<span>⌄</span></button>
            <div className="faq-a" id={id}><p dangerouslySetInnerHTML={{ __html: a }} /></div>
          </div>
        );
      })}
    </div>
  );
}

export function TrustStrip() {
  const items = [
    ["German", "Karat Meter Testing"], ["100%", "Transparent Process"],
    ["Instant", "Cash / Cheque / Transfer"], ["Free", "Testing & Valuation"],
    ["7 Days", "Open All Week"], ["Zero", "Damage Testing"],
    ["1 Branch", "South Extension, Delhi"], ["No", "Obligation to Sell"],
  ];
  const doubled = [...items, ...items];
  return (
    <div className="trust-strip" aria-hidden="true">
      <div className="trust-track" data-doubled="true">
        {doubled.map(([a, b], i) => (
          <div className="trust-item" key={i}><div><div className="ti-num">{a}</div><div className="ti-lbl">{b}</div></div></div>
        ))}
      </div>
    </div>
  );
}

// The 4 trust points from the design guide, shown under the hero.
export function TrustChips() {
  const items = [
    ["👨‍💼", "Certified & Trained Staff", "Evaluations by experienced, trained professionals."],
    ["🔬", "Advanced Testing Technology", "German Karat Meter — non-destructive, accurate purity testing."],
    ["🛡️", "Transparent Process", "Testing to pricing, explained clearly before you decide."],
    ["⚡", "Instant Payments", "Cash, cheque or bank transfer — paid once you accept our offer."],
  ];
  return (
    <div className="features-scroll"><div className="features-grid">
      {items.map(([icon, t, s], i) => (
        <div className="feat-card" key={i} style={{ width: "230px", textAlign: "left" }}>
          <div className="feat-icon">{icon}</div><div className="feat-title">{t}</div><div className="feat-sub">{s}</div>
        </div>
      ))}
    </div></div>
  );
}

export function WhyUs() {
  const feats = [
    ["🏆", "Trusted Delhi Buyer", "Fixed branch in South Extension"],
    ["🔬", "German Karat Meter", "Purity shown live on screen"],
    ["🛡️", "Zero Damage", "No acid, no scratching, no melting"],
    ["💳", "Instant Payment", "Cash / Cheque / Bank Transfer"],
    ["🧾", "Proper Invoice", "Every sale documented"],
    ["⚖️", "Weighed in Front of You", "Certified scale at the counter"],
    ["👨‍💼", "Trained Staff", "Experienced evaluators"],
    ["🆓", "Free Valuation", "No obligation to sell"],
    ["📅", "7 Days Open", HOURS_D],
    ["🔒", "Safe & Secure", "Established high-street branch"],
  ];
  return (
    <div className="features-scroll"><div className="features-grid">
      {feats.map(([icon, t, s], i) => (
        <div className="feat-card" key={i}><div className="feat-icon">{icon}</div><div className="feat-title">{t}</div><div className="feat-sub">{s}</div></div>
      ))}
    </div></div>
  );
}

// Guide process: sell your gold in 3 easy steps.
export function ProcessSteps() {
  const steps = [
    ["Visit Our Branch", "Bring your gold, silver or diamond items and one valid photo ID to our South Extension branch — 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. No appointment needed."],
    ["Get Your Gold Evaluated", "We test purity on the German Karat Meter in front of you, weigh the item at the counter, and give you a fair, transparent price at the day's market rate — the full calculation explained."],
    ["Receive Instant Payment", "Accept our offer and get paid in the same visit via cash, cheque or bank transfer, with a proper receipt. If you don't accept, you take your items back — free, no obligation."],
  ];
  return (
    <div className="process-steps">
      {steps.map(([t, d], i) => (
        <div className="p-step" key={i}><div className="p-num">{i + 1}</div><h3>{t}</h3><p>{d}</p></div>
      ))}
    </div>
  );
}

export function AreasSection({ title = "Areas We Serve — One Branch in South Extension" } = {}) {
  return (
    <section className="sec">
      <div className="ctr">
        <div className="eyebrow">Areas We Serve</div>
        <h2 className="sec-title">{title}</h2>
        <p className="sec-desc">We have <strong>one branch</strong> — in South Extension. Customers travel to us from these areas for German Karat Meter testing, a transparent valuation and instant payment.</p>
        {AREAS.length === 0 ? (
          <EmptyState icon="📍" title="Areas coming soon" text="Call us to check how to reach our South Extension branch." />
        ) : (
        <div className="buy-cards">
          {AREAS.map(([u, n]) => (
            <div className="buy-card" key={u}>
              <div className="buy-card-icon">📍</div>
              <div><h3>Gold Buyer for {n}</h3><p>Customers from {n} visit our single South Extension branch — free purity testing and instant payment.</p><a href={"/" + u}>View details →</a></div>
            </div>
          ))}
        </div>)}
      </div>
    </section>
  );
}

const SERVICE_CARDS = [
  ["sell-gold", "🥇", "Cash Against Gold", "Sell gold jewellery — with or without hallmark or bill, old, new or broken — valued at the day's market rate."],
  ["sell-silver", "🥈", "Cash For Silver", "Silver jewellery, utensils, articles and coins weighed in front of you and valued transparently."],
  ["sell-diamonds", "💎", "Cash For Diamond", "Diamond rings, solitaires and set jewellery evaluated carefully by trained staff."],
  ["sell-coins", "🪙", "Gold & Silver Coins", "Gold and silver coins — investment, temple and commemorative — valued by weight, purity and the day's rate."],
  ["release-pledged-gold", "🔓", "Release Pledged Gold", "Gold pledged against a loan? We help you settle, release it and keep the difference."],
  ["gold-rate-today", "📈", "Gold Rate Today", "How today's rate is set — and how your payout is calculated from it. Call for today's live rate."],
];

export function ServicesSection() {
  return (
    <section className="sec">
      <div className="ctr">
        <div className="eyebrow">What We Buy</div>
        <h2 className="sec-title">Sell Gold, Silver, Diamonds &amp; Coins</h2>
        <div className="buy-cards">
          {SERVICE_CARDS.map(([u, icon, t, d]) => (
            <div className="buy-card" key={u}>
              <div className="buy-card-icon">{icon}</div>
              <div><h3>{t}</h3><p>{d}</p><a href={"/" + u}>View details →</a></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceHero({ h1, intro, bullets, formOptions }) {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-tag">📍 South Extension, New Delhi</div>
            <h1 className="hero-title" style={{ fontSize: "42px", lineHeight: "1.15" }}>{h1}</h1>
            <p className="hero-subtitle">{intro}</p>
            <ul className="hero-bullets">{bullets.slice(0, 3).map((b, i) => <li key={i}>{b}</li>)}</ul>
            <div className="hero-btns">
              <a className="btn-gold" href={`tel:${PHONE}`}>📞 Call {PHONE_D}</a>
              <a className="btn-outline" href={WA} target="_blank" rel="noreferrer">💬 WhatsApp Us</a>
            </div>
          </div>
          <div className="hero-right"><HeroForm options={formOptions} /></div>
        </div>
      </section>
      <TrustStrip />
    </>
  );
}

export { CORE_FAQS };
export { MAPS_URL };
export { IMG };
