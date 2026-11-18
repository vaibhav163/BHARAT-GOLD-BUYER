import React from "react";
import { PHONE_D } from "../config.js";
import { AreaPage } from "../components/Layouts.jsx";
import { CORE_FAQS as F } from "../data/core.js";

function make(area, neighbourhoods, reach, extraPara, faqExtra) {
  return function Page() {
    return (
      <AreaPage
        area={area}
        intro={`Customers from ${area} sell gold, silver, diamonds and coins at Bharat Gold Buyer — our single branch in South Extension, New Delhi. Free German Karat Meter testing, a transparent valuation at the day's rate, and instant payment in the same visit.`}
        neighbourhoods={neighbourhoods}
        reach={reach}
        extraPara={extraPara}
        faqs={faqExtra}
        faqPrefix={"area-" + area.replace(/\s+/g, "-").toLowerCase()}
      />
    );
  };
}

export const DelhiPage = make("Delhi", ["South Delhi", "Central Delhi", "West Delhi", "East Delhi", "North Delhi"], "Our branch is in <strong>South Extension Part I, South Delhi</strong>, close to the South Extension metro station on the Pink Line and just off the Ring Road (Mahatma Gandhi Road). From most of South Delhi the branch is a short drive; from other parts of Delhi, the metro to South Extension station is usually the simplest route.", "Delhi customers often call us first for the day's rate, then travel in \u2014 the testing and valuation at the counter are free, so the trip is worth it for larger quantities.", [
      ["Do you have a branch in Delhi?", "No — our only branch is at 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. Customers from Delhi travel to us there, and this page exists to help you reach that branch. We never claim a branch we don't have."],
      ["Can I get an estimate on call before travelling from Delhi?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's rate. The final figure is confirmed after the free German Karat Meter test at the branch.`],
      F[1], F[4]]);

export const SouthDelhiPage = make("South Delhi", ["South Extension", "Lajpat Nagar", "Greater Kailash", "Defence Colony", "Saket", "Hauz Khas", "Kalkaji", "Malviya Nagar", "Kotla Mubarakpur"], "We are <strong>in South Delhi itself</strong> \u2014 at Wazir Nagar, South Extension Part I, minutes from Lajpat Nagar, Defence Colony and Greater Kailash, and close to the South Extension metro station (Pink Line). Most South Delhi neighbourhoods reach us within a short drive.", "Because we are your local South Delhi buyer, you can get a free valuation, go home and think it over, and return another day \u2014 testing costs nothing and there is no obligation.", [
      ["Do you have a branch in South Delhi?", "No — our only branch is at 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. Customers from South Delhi travel to us there, and this page exists to help you reach that branch. We never claim a branch we don't have."],
      ["Can I get an estimate on call before travelling from South Delhi?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's rate. The final figure is confirmed after the free German Karat Meter test at the branch.`],
      F[1], F[4]]);

export const SouthExtensionPage = make("South Extension", ["South Extension Part I", "South Extension Part II", "Wazir Nagar", "Kotla Mubarakpur"], "We are <strong>in South Extension Part I itself</strong> \u2014 at 1515, Upper Ground Floor, Wazir Nagar, on the South Extension\u2013Kotla Mubarakpur border. If you live in South Extension, you can simply walk in; the South Extension metro station (Pink Line) is the nearest station.", "This is our home neighbourhood and our only branch \u2014 the address on this page is the shop itself, not a collection point.", [
      ["Do you have a branch in South Extension?", "No — our only branch is at 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. Customers from South Extension travel to us there, and this page exists to help you reach that branch. We never claim a branch we don't have."],
      ["Can I get an estimate on call before travelling from South Extension?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's rate. The final figure is confirmed after the free German Karat Meter test at the branch.`],
      F[1], F[4]]);

export const SouthExtensionPartIPage = make("South Extension Part I", ["Wazir Nagar", "Kotla Mubarakpur", "South Extension Part II", "Andrews Ganj"], "Our branch is <strong>in South Extension Part I</strong> \u2014 1515, Upper Ground Floor, Wazir Nagar, Kotla Mubarakpur. Residents of Part I can walk in any day; the South Extension metro station (Pink Line) serves the area.", "If you are searching for a gold buyer in South Extension Part I, this branch is the shop you are looking for \u2014 one branch, at this address.", [
      ["Do you have a branch in South Extension Part I?", "No — our only branch is at 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. Customers from South Extension Part I travel to us there, and this page exists to help you reach that branch. We never claim a branch we don't have."],
      ["Can I get an estimate on call before travelling from South Extension Part I?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's rate. The final figure is confirmed after the free German Karat Meter test at the branch.`],
      F[1], F[4]]);

export const LajpatNagarPage = make("Lajpat Nagar", ["Lajpat Nagar I", "Lajpat Nagar II", "Lajpat Nagar III", "Lajpat Nagar IV", "Amar Colony", "Vinobapuri"], "Lajpat Nagar adjoins South Extension \u2014 our branch at Wazir Nagar is a <strong>short drive or auto ride</strong> from Lajpat Nagar market areas, and the Pink Line connects Lajpat Nagar station to South Extension station in one stop.", "Many Lajpat Nagar customers combine a market trip with a free valuation at our counter \u2014 testing takes minutes and there is no obligation to sell.", [
      ["Do you have a branch in Lajpat Nagar?", "No — our only branch is at 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. Customers from Lajpat Nagar travel to us there, and this page exists to help you reach that branch. We never claim a branch we don't have."],
      ["Can I get an estimate on call before travelling from Lajpat Nagar?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's rate. The final figure is confirmed after the free German Karat Meter test at the branch.`],
      F[1], F[4]]);

export const GreaterKailashPage = make("Greater Kailash", ["Greater Kailash I", "Greater Kailash II", "Chittaranjan Park", "Alaknanda", "Kailash Colony"], "Greater Kailash is a <strong>short drive</strong> from our South Extension branch via the Ring Road, and the metro (Magenta/Grey line connections to the Pink Line) also links the area to South Extension station.", "For larger family sets, call ahead for the day's rate \u2014 the free valuation at the counter will confirm the exact figure before you decide.", [
      ["Do you have a branch in Greater Kailash?", "No — our only branch is at 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. Customers from Greater Kailash travel to us there, and this page exists to help you reach that branch. We never claim a branch we don't have."],
      ["Can I get an estimate on call before travelling from Greater Kailash?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's rate. The final figure is confirmed after the free German Karat Meter test at the branch.`],
      F[1], F[4]]);

export const DefenceColonyPage = make("Defence Colony", ["Defence Colony", "Lajpat Nagar", "Andrews Ganj", "Jangpura"], "Defence Colony sits right next to South Extension \u2014 our Wazir Nagar branch is a <strong>few minutes' drive</strong> away, just across the Ring Road side of Kotla Mubarakpur.", "Being this close, many Defence Colony customers get a free valuation first and decide at leisure \u2014 there is never any charge or obligation.", [
      ["Do you have a branch in Defence Colony?", "No — our only branch is at 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. Customers from Defence Colony travel to us there, and this page exists to help you reach that branch. We never claim a branch we don't have."],
      ["Can I get an estimate on call before travelling from Defence Colony?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's rate. The final figure is confirmed after the free German Karat Meter test at the branch.`],
      F[1], F[4]]);

export const SaketPage = make("Saket", ["Saket", "Malviya Nagar", "Pushp Vihar", "Sheikh Sarai", "Khirki Extension"], "From Saket, reach us by road via Malviya Nagar and Hauz Khas towards South Extension, or by metro \u2014 the Yellow Line to AIIMS connects to the Pink Line for <strong>South Extension station</strong>, a short walk/auto ride from our branch.", "The drive is worth it for the machine-tested valuation: purity on screen, the day's rate stated, and payment in the same visit.", [
      ["Do you have a branch in Saket?", "No — our only branch is at 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. Customers from Saket travel to us there, and this page exists to help you reach that branch. We never claim a branch we don't have."],
      ["Can I get an estimate on call before travelling from Saket?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's rate. The final figure is confirmed after the free German Karat Meter test at the branch.`],
      F[1], F[4]]);

export const KotlaMubarakpurPage = make("Kotla Mubarakpur", ["Wazir Nagar", "Kotla Mubarakpur", "South Extension Part I", "Bhishma Pitamah Marg area"], "Our branch is <strong>in Kotla Mubarakpur itself</strong> \u2014 at Wazir Nagar, South Extension Part I. If you live in Kotla, we are your neighbourhood gold buyer; simply walk in any day between 10 AM and 8 PM.", "This page describes our actual locality \u2014 the branch address and this area are the same place.", [
      ["Do you have a branch in Kotla Mubarakpur?", "No — our only branch is at 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. Customers from Kotla Mubarakpur travel to us there, and this page exists to help you reach that branch. We never claim a branch we don't have."],
      ["Can I get an estimate on call before travelling from Kotla Mubarakpur?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's rate. The final figure is confirmed after the free German Karat Meter test at the branch.`],
      F[1], F[4]]);

export const HauzKhasPage = make("Hauz Khas", ["Hauz Khas Village", "Hauz Khas Enclave", "Safdarjung Enclave", "Green Park", "SDA Market area"], "Hauz Khas reaches South Extension by a <strong>short drive</strong> across South Delhi, or by metro \u2014 the Yellow Line to AIIMS, then the Pink Line one stop to South Extension station.", "Call for the day's rate before you set out, and the free counter valuation will confirm your figure in minutes.", [
      ["Do you have a branch in Hauz Khas?", "No — our only branch is at 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. Customers from Hauz Khas travel to us there, and this page exists to help you reach that branch. We never claim a branch we don't have."],
      ["Can I get an estimate on call before travelling from Hauz Khas?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's rate. The final figure is confirmed after the free German Karat Meter test at the branch.`],
      F[1], F[4]]);

export const NehruPlacePage = make("Nehru Place", ["Nehru Place", "Kalkaji", "Okhla", "East of Kailash", "Sant Nagar"], "From Nehru Place, our branch is a <strong>short drive</strong> via Lajpat Nagar towards South Extension, or by metro \u2014 the Violet Line to Lajpat Nagar connects to the Pink Line for South Extension station.", "Office-goers from Nehru Place often visit after work \u2014 we are open until 8 PM, all 7 days.", [
      ["Do you have a branch in Nehru Place?", "No — our only branch is at 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. Customers from Nehru Place travel to us there, and this page exists to help you reach that branch. We never claim a branch we don't have."],
      ["Can I get an estimate on call before travelling from Nehru Place?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's rate. The final figure is confirmed after the free German Karat Meter test at the branch.`],
      F[1], F[4]]);

export const KalkajiPage = make("Kalkaji", ["Kalkaji", "Govindpuri", "Tughlakabad Extension", "CR Park", "Alaknanda"], "Kalkaji is a <strong>short drive</strong> from South Extension via Lajpat Nagar, and the Violet Line (Kalkaji Mandir station) to Lajpat Nagar plus the Pink Line brings you to South Extension station by metro.", "Bring your ID and your items \u2014 testing, valuation and payment are all completed in a single visit.", [
      ["Do you have a branch in Kalkaji?", "No — our only branch is at 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. Customers from Kalkaji travel to us there, and this page exists to help you reach that branch. We never claim a branch we don't have."],
      ["Can I get an estimate on call before travelling from Kalkaji?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's rate. The final figure is confirmed after the free German Karat Meter test at the branch.`],
      F[1], F[4]]);

export const MalviyaNagarPage = make("Malviya Nagar", ["Malviya Nagar", "Shivalik", "Begumpur", "Khirki Extension", "Saket"], "From Malviya Nagar, drive via Hauz Khas towards South Extension, or take the Yellow Line (Malviya Nagar station) to AIIMS and change to the Pink Line for <strong>South Extension station</strong>.", "We are open all 7 days until 8 PM, so an evening visit after the day's work is easy to plan.", [
      ["Do you have a branch in Malviya Nagar?", "No — our only branch is at 1515, Upper Ground Floor, Wazir Nagar, South Extension Part I, Kotla Mubarakpur, New Delhi 110003. Customers from Malviya Nagar travel to us there, and this page exists to help you reach that branch. We never claim a branch we don't have."],
      ["Can I get an estimate on call before travelling from Malviya Nagar?", `Yes. Call us on ${PHONE_D} with your item's approximate weight and karat (from a hallmark or bill, if you have one) and we'll give you an indicative value at the day's rate. The final figure is confirmed after the free German Karat Meter test at the branch.`],
      F[1], F[4]]);

