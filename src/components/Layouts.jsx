import React from "react";
import { PHONE, PHONE_D, WA, HOURS_D, MAPS_URL, ADDRESS_LINE } from "../config.js";
import {
  Crumbs, FaqBlock, ProcessSteps, AreasSection, ServicesSection, ServiceHero, EmptyState,
} from "./Blocks.jsx";

export function ServicePage({
  crumbItems, h1, intro, bullets, detailH2, paras, faqs, faqPrefix, extraAfterParas = null, formOptions,
}) {
  return (
    <>
      <ServiceHero h1={h1} intro={intro} bullets={bullets} formOptions={formOptions} />
      <section className="sec">
        <div className="ctr">
          <Crumbs items={crumbItems} />
          <div className="content-page">
            <h2>{detailH2}</h2>
            {paras.map((p, i) => (<p key={i} dangerouslySetInnerHTML={{ __html: p }} />))}
            {extraAfterParas}
            <h2>What We Accept</h2>
            <ul className="sell-bullets">
              {bullets.map((b, i) => (<li key={i}><span className="dot"></span>{b}</li>))}
            </ul>
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
          <h2 className="sec-title">Common Questions</h2>
          <FaqBlock faqs={faqs} prefix={faqPrefix || "svc"} />
        </div>
      </section>
      <AreasSection />
    </>
  );
}

// Area page — honest framing: ONE branch in South Extension; this page is
// for customers who travel from `area` to that branch.
export function AreaPage({ area, slug, intro, neighbourhoods, reach, extraPara, faqs, faqPrefix }) {
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={[["Home", ""], [`Gold Buyer in ${area}`, null]]} />
          <div className="eyebrow">Gold Buyer for {area} — Branch in South Extension</div>
          <h1 className="sec-title">Gold Buyer in {area} — Sell Gold at Our South Extension Branch</h1>
          <p className="sec-desc">{intro}</p>
          <p className="sec-desc" style={{ marginTop: "10px" }}>
            <strong>Please note:</strong> Bharat Gold Buyer has one branch only — at {ADDRESS_LINE}. We do not have a branch in {area}; customers from {area} travel to our South Extension branch, and this page explains how to reach us and what happens at the counter.
          </p>
          <div style={{ textAlign: "center", marginBottom: "8px" }}>
            <a className="btn-gold" href={`tel:${PHONE}`}>📞 Call {PHONE_D}</a>{" "}
            <a className="btn-outline" href={MAPS_URL} target="_blank" rel="noreferrer">📍 Get Directions</a>
          </div>
        </div>
      </section>
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow">Neighbourhoods</div>
          <h2 className="sec-title">Customers Visit Us From Across {area}</h2>
          {neighbourhoods && neighbourhoods.length ? (
            <div className="chip-list">{neighbourhoods.map((n) => (<span className="chip" key={n}>{n}</span>))}</div>
          ) : (
            <EmptyState icon="📍" title="Serving the whole area" text={`Customers from across ${area} visit our South Extension branch — walk in any day.`} />
          )}
          <div className="content-page" style={{ marginTop: "26px" }}>
            <h2>How to Reach Our South Extension Branch From {area}</h2>
            <p dangerouslySetInnerHTML={{ __html: reach }} />
            <p>{extraPara}</p>
            <h2>Why Sellers From {area} Choose Bharat Gold Buyer</h2>
            <ul>
              <li><strong>German Karat Meter testing</strong> — exact purity on screen, zero damage to jewellery.</li>
              <li><strong>Transparent valuation</strong> — weight and the day's rate shown, calculation explained.</li>
              <li><strong>Instant payment</strong> — cash, cheque or bank transfer in the same visit, with a receipt.</li>
              <li><strong>Easy to reach</strong> — South Extension, near the South Extension metro station (Pink Line), open 7 days ({HOURS_D}).</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="ctr">
          <div className="eyebrow">How It Works</div>
          <h2 className="sec-title">How to Sell Your Gold in 3 Easy Steps</h2>
          <ProcessSteps />
        </div>
      </section>
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="eyebrow">FAQs</div>
          <h2 className="sec-title">Selling Gold From {area} — Questions</h2>
          <FaqBlock faqs={faqs} prefix={faqPrefix || "area"} />
        </div>
      </section>
      <ServicesSection />
    </>
  );
}

export function GuidePage({
  crumbItems, eyebrow, h1, intro, sections, faqs, faqPrefix, related,
  showAreas = false, showServices = false,
}) {
  return (
    <>
      <section className="sec">
        <div className="ctr">
          <Crumbs items={crumbItems} />
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="sec-title">{h1}</h1>
          <p className="sec-desc">{intro}</p>
          <div style={{ textAlign: "center", marginBottom: "8px" }}>
            <a className="btn-gold" href={`tel:${PHONE}`}>📞 Call {PHONE_D}</a>{" "}
            <a className="btn-outline" href={WA} target="_blank" rel="noreferrer">💬 WhatsApp Us</a>{" "}
            <a className="btn-outline" href={MAPS_URL} target="_blank" rel="noreferrer">📍 Get Directions</a>
          </div>
        </div>
      </section>
      <section className="sec sec-gold-bg">
        <div className="ctr">
          <div className="content-page">
            {sections.map((s, i) => (
              <React.Fragment key={i}>
                <h2>{s.h2}</h2>
                {(s.paras || []).map((p, j) => (<p key={j} dangerouslySetInnerHTML={{ __html: p }} />))}
                {s.bullets ? (<ul>{s.bullets.map((b, j) => (<li key={j} dangerouslySetInnerHTML={{ __html: b }} />))}</ul>) : null}
                {s.table || null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="ctr">
          <div className="eyebrow">How It Works</div>
          <h2 className="sec-title">How to Sell Your Gold in 3 Easy Steps</h2>
          <ProcessSteps />
        </div>
      </section>
      {faqs ? (
        <section className="sec sec-gold-bg">
          <div className="ctr">
            <div className="eyebrow">FAQs</div>
            <h2 className="sec-title">Common Questions</h2>
            <FaqBlock faqs={faqs} prefix={faqPrefix || "guide"} />
          </div>
        </section>
      ) : null}
      {related ? (
        <section className="sec">
          <div className="ctr">
            <div className="eyebrow">Keep Exploring</div>
            <h2 className="sec-title">Related Pages</h2>
            {related.length === 0 ? (
              <EmptyState icon="➡️" title="More guides coming soon" text="Browse our services and areas pages from the menu above in the meantime." />
            ) : (
            <div className="buy-cards">
              {related.map(([u, t, d]) => (
                <div className="buy-card" key={u}>
                  <div className="buy-card-icon">➡️</div>
                  <div><h3>{t}</h3><p>{d}</p><a href={u}>View details →</a></div>
                </div>
              ))}
            </div>)}
          </div>
        </section>
      ) : null}
      {showAreas ? <AreasSection /> : null}
      {showServices ? <ServicesSection /> : null}
    </>
  );
}
