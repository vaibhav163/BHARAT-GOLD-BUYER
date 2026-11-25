// import emailjs from "@emailjs/browser";
// import { showToast } from "./toast.jsx";

// // Bharat Gold Buyer's OWN EmailJS account (service_k4bgdoq / template_1rxzq8m,
// // from the old bharatgoldbuyer.com site code — NOT the shared Ace/Eldeco/ATS
// // account). Forms are wired here, inside React, so they work identically in
// // `npm run dev` and in the prerendered production build.
// export const EMAILJS_PUBLIC_KEY = "SiYNK32BUcvCsfqXz";
// export const EMAILJS_SERVICE_ID = "service_k4bgdoq";
// export const EMAILJS_TEMPLATE_ID = "template_1rxzq8m";
// export const WHATSAPP_NUMBER = "919990780499";

// let inited = false;
// function ensureInit() {
//   if (!inited) {
//     emailjs.init(EMAILJS_PUBLIC_KEY);
//     inited = true;
//   }
// }

// export function sourcePage() {
//   if (typeof window === "undefined") return "";
//   return window.location.pathname.replace(/\//g, "") || "index.html";
// }

// export function track(event, label) {
//   if (typeof window === "undefined") return;
//   window.dataLayer = window.dataLayer || [];
//   window.dataLayer.push({ event, label: label || "" });
//   if (typeof window.gtag === "function") window.gtag("event", event, { event_label: label || "" });
// }

// export function showThankYou(msg) {
//   if (typeof document === "undefined") return;
//   let ty = document.getElementById("thankyou-overlay");
//   if (!ty) {
//     ty = document.createElement("div");
//     ty.id = "thankyou-overlay";
//     ty.className = "thankyou-overlay";
//     ty.innerHTML =
//       '<div class="thankyou-card"><div class="ty-check">✓</div><h3>Thank You!</h3><p class="ty-msg"></p></div>';
//     document.body.appendChild(ty);
//   }
//   ty.querySelector(".ty-msg").textContent = msg;
//   ty.classList.add("show");
//   setTimeout(() => ty.classList.remove("show"), 2600);
// }

// export function whatsappFallbackUrl(name, phone, item) {
//   const text =
//     "Hi! I am " + name + " (" + phone + "). I want to sell: " + item +
//     ". (via " + (typeof window !== "undefined" ? window.location.pathname : "") + ")";
//   return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
// }

// // Sends one enquiry. Resolves on EmailJS success, rejects on failure.
// // Params match the v2 static site's main.js exactly.
// export async function sendEnquiry({ name, phone, item }) {
//   ensureInit();
//   const page = sourcePage();
//   const params = {
//     name,
//     mobile: phone,
//     email: "Not Provided",
//     message: "Website enquiry (" + page + ") — wants to sell: " + item,
//     from_name: name,
//     phone,
//     item_to_sell: item,
//     source_page: page,
//   };
//   const res = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
//   track("enquiry_submit", page);
//   return res;
// }

// // React hook-free submit handler factory.
// // `getItem(form)` extracts the item/message string from the form.
// // `setStatus` receives: { state: "sending" } | { state: "ok" } |
// // { state: "fail", name, phone, item }.
// // `afterSuccess` optional (e.g. close the lead popup).
// export function makeSubmitHandler(getItem, setStatus, afterSuccess) {
//   return async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = (form.name.value || "").trim();
//     const phone = (form.phone.value || "").trim();
//     const item = getItem(form);
//     setStatus({ state: "sending" });
//     try {
//       await sendEnquiry({ name, phone, item });
//       setStatus({ state: "ok" });
//       showThankYou("We've got your details — our team will call you shortly.");
//       showToast("Enquiry sent! Our team will call you shortly.", "success");
//       form.reset();
//       if (afterSuccess) afterSuccess();
//     } catch (err) {
//       setStatus({ state: "fail", name, phone, item });
//       showToast("Could not send online — tap the WhatsApp link below the form instead.", "error");
//     }
//   };
// }

// // Renders the status line under a form, matching v2 copy.
// import React from "react";
// export function EnquiryStatus({ status, defaultText }) {
//   if (!status) return <>{defaultText}</>;
//   if (status.state === "sending") return <>Sending…</>;
//   if (status.state === "ok") return <>✅ Sent! Our team will call you shortly.</>;
//   if (status.state === "fail")
//     return (
//       <>
//         Could not send online.{" "}
//         <a href={whatsappFallbackUrl(status.name, status.phone, status.item)} target="_blank" rel="noreferrer">
//           Tap here to WhatsApp us instead →
//         </a>
//       </>
//     );
//   return <>{defaultText}</>;
// }








import emailjs from "@emailjs/browser";
import { showToast } from "./toast.jsx";

// Bharat Gold Buyer's OWN EmailJS account (service_k4bgdoq / template_1rxzq8m,
// from the old bharatgoldbuyer.com site code — NOT the shared Ace/Eldeco/ATS
// account). Forms are wired here, inside React, so they work identically in
// `npm run dev` and in the prerendered production build.
export const EMAILJS_PUBLIC_KEY = "SiYNK32BUcvCsfqXz";
export const EMAILJS_SERVICE_ID = "service_k4bgdoq";
export const EMAILJS_TEMPLATE_ID = "template_1rxzq8m";
export const WHATSAPP_NUMBER = "919990780499";

let inited = false;
function ensureInit() {
  if (!inited) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    inited = true;
  }
}

export function sourcePage() {
  if (typeof window === "undefined") return "";
  return window.location.pathname.replace(/\//g, "") || "index.html";
}

export function track(event, label) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, label: label || "" });
  if (typeof window.gtag === "function") window.gtag("event", event, { event_label: label || "" });
}

export function showThankYou(msg) {
  if (typeof document === "undefined") return;
  let ty = document.getElementById("thankyou-overlay");
  if (!ty) {
    ty = document.createElement("div");
    ty.id = "thankyou-overlay";
    ty.className = "thankyou-overlay";
    ty.innerHTML =
      '<div class="thankyou-card"><div class="ty-check">✓</div><h3>Thank You!</h3><p class="ty-msg"></p></div>';
    document.body.appendChild(ty);
  }
  ty.querySelector(".ty-msg").textContent = msg;
  ty.classList.add("show");
  setTimeout(() => ty.classList.remove("show"), 2600);
}

// TEMPORARY DIAGNOSTIC (remove after the EmailJS fix): turns the EmailJS
// rejection into a readable on-screen line, so one test enquiry shows exactly
// which value failed without opening DevTools. No keys are shown on screen.
export function emailjsDiagnostic(err) {
  const status = err && err.status ? "HTTP " + err.status : "";
  const text = (err && (err.text || err.message)) || String(err || "unknown error");
  return [status, text].filter(Boolean).join(" — ");
}

export function whatsappFallbackUrl(name, phone, item) {
  const text =
    "Hi! I am " + name + " (" + phone + "). I want to sell: " + item +
    ". (via " + (typeof window !== "undefined" ? window.location.pathname : "") + ")";
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
}

// Sends one enquiry. Resolves on EmailJS success, rejects on failure.
// Params match the v2 static site's main.js exactly.
export async function sendEnquiry({ name, phone, item }) {
  ensureInit();
  const page = sourcePage();
  const params = {
    name,
    mobile: phone,
    email: "Not Provided",
    message: "Website enquiry (" + page + ") — wants to sell: " + item,
    from_name: name,
    phone,
    item_to_sell: item,
    source_page: page,
  };
  const res = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
  track("enquiry_submit", page);
  return res;
}

// React hook-free submit handler factory.
// `getItem(form)` extracts the item/message string from the form.
// `setStatus` receives: { state: "sending" } | { state: "ok" } |
// { state: "fail", name, phone, item }.
// `afterSuccess` optional (e.g. close the lead popup).
export function makeSubmitHandler(getItem, setStatus, afterSuccess) {
  return async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = (form.name.value || "").trim();
    const phone = (form.phone.value || "").trim();
    const item = getItem(form);
    setStatus({ state: "sending" });
    try {
      await sendEnquiry({ name, phone, item });
      setStatus({ state: "ok" });
      showThankYou("We've got your details — our team will call you shortly.");
      showToast("Enquiry sent! Our team will call you shortly.", "success");
      form.reset();
      if (afterSuccess) afterSuccess();
    } catch (err) {
      // Temporary diagnostic: keep the exact EmailJS rejection so the form
      // can show it on screen (see EnquiryStatus below).
      const diag = emailjsDiagnostic(err);
      if (typeof console !== "undefined") console.error("[Bharat EmailJS diagnostic]", err);
      setStatus({ state: "fail", name, phone, item, diag });
      showToast("Could not send online — tap the WhatsApp link below the form instead.", "error");
    }
  };
}

// Renders the status line under a form, matching v2 copy.
import React from "react";
export function EnquiryStatus({ status, defaultText }) {
  if (!status) return <>{defaultText}</>;
  if (status.state === "sending") return <>Sending…</>;
  if (status.state === "ok") return <>✅ Sent! Our team will call you shortly.</>;
  if (status.state === "fail")
    return (
      <>
        Could not send online.{" "}
        <a href={whatsappFallbackUrl(status.name, status.phone, status.item)} target="_blank" rel="noreferrer">
          Tap here to WhatsApp us instead →
        </a>
        {status.diag ? (
          <>
            <br />
            <span>
              Diagnostic (temporary): EmailJS error — {status.diag} (service {EMAILJS_SERVICE_ID}, template{" "}
              {EMAILJS_TEMPLATE_ID})
            </span>
          </>
        ) : null}
      </>
    );
  return <>{defaultText}</>;
}
