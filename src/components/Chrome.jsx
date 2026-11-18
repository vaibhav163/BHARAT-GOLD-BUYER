import React, { useState, useEffect } from "react";
import {
  PHONE, PHONE_D, PHONE2_D, WA, EMAIL, HOURS_D, MAPS_URL, ADDRESS_LINE,
  SERVICES, AREAS, POPULAR,
} from "../config.js";
import { makeSubmitHandler, EnquiryStatus } from "../lib/enquiry.jsx";
import CookieConsent from "./CookieConsent.jsx";

// Topbar + header per the owner's design guide: thin dark-brown topbar,
// white header, round gold BGB logo, services dropdown, gold quote button.
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span className="topbar-addr">📍 South Extension, New Delhi – 110003</span>
          <span>🕐 Open All 7 Days | {HOURS_D}</span>
          <a href={WA} target="_blank" rel="noreferrer">💬 {PHONE_D}</a>
          <a href={`tel:${PHONE}`}>📞 {PHONE2_D}</a>
          <a href={`mailto:${EMAIL}`}>✉️ {EMAIL}</a>
        </div>
      </div>
      <nav className="site-nav">
        <div className="nav-inner">
          <a className="logo" href="/" aria-label="Bharat Gold Buyer — home">
            <img src="/images/logo.png" alt="Bharat Gold Buyer logo" width="44" height="44" style={{ borderRadius: "50%" }} />
            <span className="logo-text">Bharat <span>Gold Buyer</span></span>
          </a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li className="dropdown">
              <a href="/what-we-buy">Our Services ▾</a>
              <div className="dropdown-menu">
                <a href="/sell-gold">🥇 Cash Against Gold</a>
                <a href="/sell-silver">🥈 Cash For Silver</a>
                <a href="/sell-diamonds">💎 Cash For Diamond</a>
                <a href="/sell-coins">🪙 Sell Gold &amp; Silver Coins</a>
                <a href="/release-pledged-gold">Release Pledged Gold</a>
                <a href="/gold-rate-today">Gold Rate Today</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="/our-locations">Our Locations ▾</a>
              <div className="dropdown-menu">
                <a href="/our-locations">South Extension Branch</a>
                <a href="/gold-buyer-in-south-extension">Gold Buyer in South Extension</a>
                <a href="/gold-buyer-in-lajpat-nagar">Gold Buyer in Lajpat Nagar</a>
                <a href="/gold-buyer-in-greater-kailash">Gold Buyer in Greater Kailash</a>
                <a href="/gold-buyer-in-defence-colony">Gold Buyer in Defence Colony</a>
                <a href="/gold-buyer-in-saket">Gold Buyer in Saket</a>
              </div>
            </li>
            <li><a href="/why-choose-us">Why Choose Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
          <a className="nav-phone nav-phone-desktop" href="/contact">Get a Free Quote</a>
          <button className="hamburger" aria-expanded={menuOpen} aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
        <div className={"mobile-menu" + (menuOpen ? " open" : "")} onClick={() => setMenuOpen(false)}>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/what-we-buy">What We Buy</a>
          <a href="/sell-gold">Cash Against Gold</a>
          <a href="/sell-silver">Cash For Silver</a>
          <a href="/sell-diamonds">Cash For Diamond</a>
          <a href="/sell-coins">Sell Gold &amp; Silver Coins</a>
          <a href="/gold-buyer-near-me">Gold Buyer Near Me</a>
          <a href="/instant-cash-for-gold">Instant Cash for Gold</a>
          <a href="/release-pledged-gold">Release Pledged Gold</a>
          <a href="/gold-rate-today">Gold Rate Today</a>
          <a href="/process">How It Works</a>
          <a href="/our-locations">Our Locations</a>
          <a href="/why-choose-us">Why Choose Us</a>
          <a href="/gallery">Gallery</a>
          <a href="/faq">FAQs</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact Us</a>
        </div>
      </nav>
    </>
  );
}

export function LeadPopup() {
  const [status, setStatus] = useState(null);
  const [open, setOpen] = useState(false);
  // Popup behaviour wired INSIDE React (not the external /js/main.js), so it
  // works identically in `npm run dev` and in the prerendered production
  // build, on desktop and mobile: auto-opens once per browser session,
  // 5 seconds after the homepage loads.
  useEffect(() => {
    let shown = false;
    try { shown = !!sessionStorage.getItem("bgb_popup_shown"); } catch (e) {}
    if (shown) return undefined;
    const t = setTimeout(() => {
      setOpen(true);
      try { sessionStorage.setItem("bgb_popup_shown", "1"); } catch (e) {}
    }, 5000);
    return () => clearTimeout(t);
  }, []);
  const close = () => setOpen(false);
  const onSubmit = makeSubmitHandler(
    (form) => "Free Gold Valuation Request — wants to sell: " + ((form.item && form.item.value) || "Gold Jewellery"),
    setStatus,
    () => setTimeout(close, 1500)
  );
  return (
    <div className={"popup-overlay" + (open ? " open" : "")} id="lead-popup" role="dialog" aria-modal="true" aria-labelledby="popup-title"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="popup-modal">
        <button className="popup-close" aria-label="Close popup" onClick={close}>×</button>
        <div className="popup-head">
          <div className="p-tag">Free &amp; No Obligation</div>
          <h3 id="popup-title">Get Your Free Gold Valuation</h3>
          <p>Find out what your gold is worth at today's rate.</p>
        </div>
        <div className="popup-body">
          <form id="lead-popup-form" onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="tel" name="phone" placeholder="Mobile Number" required pattern="[0-9]{10}" maxLength="10" />
            <select name="item" defaultValue="Gold Jewellery" aria-label="What do you want to sell?">
              <option>Gold Jewellery</option>
              <option>Silver Items</option>
              <option>Diamond Jewellery</option>
              <option>Gold / Silver Coins</option>
              <option>Other</option>
            </select>
            <button type="submit" className="btn-gold">Get Free Valuation</button>
          </form>
          <p className="popup-note" id="popup-status"><EnquiryStatus status={status} defaultText="We'll call you back — no spam, ever." /></p>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <>
      <section className="cta-band" id="contact-cta">
        <div className="eyebrow center">Get In Touch</div>
        <h2 className="sec-title center" style={{ maxWidth: "640px" }}>Ready to Sell Your Gold?</h2>
        <p style={{ fontSize: "16px", color: "var(--gray)", marginBottom: "28px", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
          Walk in to our South Extension branch or call now. Free German Karat Meter valuation, no obligation, instant payment when you accept.
        </p>
        <div className="cta-phone">📞 {PHONE_D}</div>
        <div className="cta-phone-label">Call or WhatsApp — open all 7 days, {HOURS_D}</div>
        <div className="cta-btns">
          <a className="btn-gold" href={`tel:${PHONE}`} style={{ fontSize: "16px", padding: "15px 40px" }}>Call Now</a>
          <a className="btn-outline" href={WA} target="_blank" rel="noreferrer" style={{ fontSize: "16px", padding: "14px 40px" }}>💬 WhatsApp Us</a>
          <a className="btn-outline" href={MAPS_URL} target="_blank" rel="noreferrer" style={{ fontSize: "16px", padding: "14px 40px" }}>📍 Get Directions</a>
        </div>
      </section>
      <footer>
        <div className="footer-grid">
          <div>
            <div className="footer-brand">BHARAT <span>GOLD BUYER</span></div>
            <p className="footer-desc">
              Sell gold, silver, diamonds and coins with transparent German Karat Meter valuation and instant payment at our South Extension, Delhi branch. Sona Lao, Paise Pao.
            </p>
            <p className="footer-desc">
              🛡️ Transparent Process &nbsp;·&nbsp; 🔬 Purity Testing<br />
              ⚡ Instant Payment &nbsp;·&nbsp; 👨‍💼 Trusted Buyers
            </p>
          </div>
          <div className="f-col">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/blog">Our Blog</a>
            <a href="/contact">Contact Us</a>
            <a href="/faq">FAQs</a>
            <a href="/sitemap">Sitemap</a>
          </div>
          <div className="f-col">
            <h4>Our Services</h4>
            {SERVICES.slice(0, 4).map(([u, n]) => (<a key={u} href={"/" + u}>{n}</a>))}
            <a href="/what-we-buy">What We Buy</a>
            <a href="/process">How It Works</a>
          </div>
          <div className="f-col">
            <h4>Contact &amp; Visit Us</h4>
            <p className="footer-desc">📍 Our Branch (South Extension)<br />{ADDRESS_LINE}</p>
            <p className="footer-desc">
              📞 <a href={`tel:${PHONE}`}>{PHONE_D}</a><br />
              📞 <a href="tel:+919821598950">{PHONE2_D}</a><br />
              ✉️ <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
              🕐 Open Daily: {HOURS_D}
            </p>
          </div>
        </div>
        <div className="footer-areas">
          <strong>Areas We Serve:</strong>{" "}
          {AREAS.map(([u, n], i) => (
            <React.Fragment key={u}>{i > 0 ? " | " : ""}<a href={"/" + u}>{n}</a></React.Fragment>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Bharat Gold Buyer. All Rights Reserved. | {ADDRESS_LINE}</span>
          <button type="button" className="cookie-settings-link"
            onClick={() => window.dispatchEvent(new CustomEvent("bgb-cookie-settings"))}>
            🍪 Cookie Settings
          </button>
        </div>
      </footer>
      <div className="floating">
        <a className="fab fab-wa" href={WA} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">💬</a>
        <a className="fab fab-ph" href={`tel:${PHONE}`} aria-label="Call us">📞</a>
      </div>
      <div className="sticky-call">
        <a href={`tel:${PHONE}`} className="sc-call">📞 Call {PHONE_D}</a>
        <a href={WA} target="_blank" rel="noreferrer" className="sc-wa">💬 WhatsApp</a>
      </div>
    </>
  );
}

export default function Layout({ children, popup = false }) {
  return (
    <>
      <Header />
      <main id="main">
        {popup ? <LeadPopup /> : null}
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
