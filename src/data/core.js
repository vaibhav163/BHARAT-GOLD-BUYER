import { HOURS_D, STREET, CITY, PHONE_D } from "../config.js";

// FAQs — the first seven are the old bharatgoldbuyer.com questions, with
// answers corrected to our SINGLE South Extension branch (the old site
// wrongly implied branches across Delhi NCR).
export const HOME_FAQS = [
  ["Do I need to make an appointment to visit a branch?",
   `No appointment is necessary. You can walk into our branch in South Extension, New Delhi — our only branch — any day during business hours (${HOURS_D}). Calling ahead on ${PHONE_D} helps if you are bringing many items.`],
  ["What types of gold items do you buy?",
   "We purchase all types of gold items including jewellery (rings, necklaces, bracelets, earrings, bangles and chains), gold coins, gold bars, broken or old gold jewellery, and any other gold items regardless of condition. We also buy silver items and diamond jewellery. Gold of all purities is accepted and tested in front of you."],
  ["How do you determine the price of my gold?",
   "We use a German Karat Meter machine that determines the exact purity of your gold without damaging it. Our pricing is based on the current market rate, the weight of your items, and their tested purity. You see the entire evaluation process and receive a transparent breakdown of the pricing before you decide."],
  ["Is there any charge for testing or evaluation?",
   "No, there are absolutely no charges for testing, evaluation, or consultation. Our expert evaluation is completely free, and you're under no obligation to sell. We believe in transparent, honest service with no hidden fees."],
  ["How soon will I get paid?",
   "Payment is instant. Once you accept our offer, you can choose to receive payment via cash, cheque, or bank transfer immediately, at the counter, in the same visit."],
  ["What documents do I need to sell my gold?",
   "You'll need a valid government-issued photo ID (Aadhaar Card, PAN Card, Driving License, or Passport) and address proof. For high-value transactions, additional documentation may be required as per government regulations — PAN is required for transactions of ₹2 lakh and above."],
  ["Is it safe to sell gold at Bharat Gold Buyer?",
   "Yes. We are an established gold buyer with a fixed branch at Wazir Nagar, South Extension. All transactions are conducted transparently at the counter, with proper documentation and receipts. Our premises are secure, and we follow all government regulations for precious metal trading."],
];

export const CORE_FAQS = [
  ...HOME_FAQS,
  ["What is today's gold buying rate in Delhi?",
   `Gold rates change daily with the market. We do not publish a fixed rate on this website because any printed number would be stale within hours. Call us on ${PHONE_D} for today's live gold buying rate before you visit, and your final valuation at the counter uses that day's rate.`],
  ["Can you help release my pledged gold?",
   "Yes. If your gold is pledged with a bank, NBFC or financier, we can help you settle the loan, release the gold and buy it from you, so you keep the difference between the gold's value and the loan dues. Bring your loan receipt or pawn ticket and we'll explain the exact steps. This is help with settling a loan you already have — we do not offer loans or financial advice."],
  ["What are your branch timings and where exactly are you?",
   `We are open all 7 days, ${HOURS_D}, at ${STREET}, ${CITY}. We have one branch only — in South Extension — and customers travel to us from across South Delhi and Delhi NCR.`],
];

const B = (slug, img, cat, date, read, title, h1, desc, paras) => ({ slug, img, cat, date, read, title, h1, desc, paras });

export const BLOGS = [
  B("blog-how-gold-price-is-calculated", "/images/blog-4.webp", "Selling Guide", "2026-11-04", "6 min read",
    "How Is the Price of Your Gold Calculated? | Bharat Gold Buyer Blog, Delhi",
    "How Is the Price of Your Gold Calculated?",
    "Weight × purity × today's rate — the full gold price formula explained with the BIS purity table and a worked example, so you can verify any buyer's maths yourself in Delhi.",
    [
      "Every honest gold purchase in India rests on one simple formula, and once you know it, no buyer can hide behind a single unexplained number again. Whether you sell in South Delhi, Karol Bagh or anywhere else in the country, the arithmetic is the same: the weight of your item, the purity of its gold, and the market rate of pure gold on that day. Everything else — stories, pressure, vague deductions — is noise around those three numbers.",
      "## The formula",
      "**Payout = net weight of pure gold × today's rate per gram of pure gold.** Your item's total weight is first converted into pure-gold weight using its tested purity. A 22-karat piece is 91.6% pure gold, so a 10 gram 22K chain contains 9.16 grams of pure gold. That 9.16 grams — not the full 10 grams — is what is multiplied by the day's pure-gold rate to arrive at your payout.",
      "## The purity table (BIS)",
      "The Bureau of Indian Standards purity grades you will meet most often are: 24K at 99.9% pure (coins and bars), 22K at 91.6% (the classic Indian jewellery standard, hallmarked 916), 18K at 75% (common for diamond jewellery, hallmarked 750), and 14K at 58.5% (lighter everyday jewellery). Older, unhallmarked jewellery can test anywhere on this scale, which is exactly why a machine test matters more than a guess or a stamp alone.",
      "## A worked example (illustrative numbers only)",
      "Suppose — purely as an illustration, not a quote — the day's pure-gold rate is ₹7,500 per gram, and you bring a 22K bangle weighing 12 grams. Pure-gold weight = 12 × 0.916 = 10.992 grams. Payout = 10.992 × ₹7,500 = ₹82,440. If the same bangle tested at 20K (83.3%) instead, the pure weight would be about 10 grams and the payout about ₹75,000. Same bangle, same scale — the purity reading alone changed the value by thousands of rupees. This is why you should always see the purity figure before you discuss price.",
      "## Where the daily rate comes from",
      "The rate follows the international gold price, converted into rupees at the day's exchange rate, plus local market factors and duties. It changes every day and sometimes within the day. That is why Bharat Gold Buyer does not print a fixed rate on this website — any number printed here would be stale by tomorrow. Call us on the day you plan to visit and we will tell you the live rate we are buying at.",
      "## What can legitimately reduce the figure",
      "Stones, enamel and non-gold parts are not gold, so their weight is not paid as gold — though set diamonds are valued separately and added. Springs inside bangles and clasps are likewise not gold. What should never appear is an unexplained percentage cut labelled simply 'wastage' or 'melting' on an XRF-tested purchase. If a buyer cannot show you weight, purity and rate as three separate numbers, the final figure cannot be verified — and unverifiable numbers are where sellers lose money.",
      "## How to verify any buyer's maths",
      "Ask three questions: What is the net weight? What purity did the test show? Which rate are you applying? Then multiply them yourself on your phone. At our South Extension branch the German Karat Meter shows the purity on screen, the scale sits in front of you, and we state the day's rate before calculating — so the verification takes you less than a minute.",
      'Read our <a href="/gold-rate-today">gold rate today page</a> for the same formula in short form, or walk into our Wazir Nagar, South Extension branch for a free on-screen valuation. Testing costs nothing and there is no obligation to sell.',
    ]),
  B("blog-documents-needed-to-sell-gold", "/images/blog-5.webp", "Selling Guide", "2026-11-08", "6 min read",
    "Documents Needed to Sell Gold in India | Bharat Gold Buyer Blog, Delhi",
    "Documents Needed to Sell Gold in India",
    "Aadhaar, the PAN limit of ₹2 lakh, address proof and the purchase bill — exactly which documents you need to sell gold, silver or diamonds in Delhi, and what happens without a bill.",
    [
      "Selling gold is a regulated transaction in India, and the paperwork exists to protect you as much as the buyer. A documented sale proves the jewellery was yours, that you sold it voluntarily, and exactly what you were paid — your safeguard if a question ever arises later. The good news is that the document list is short. Most customers who walk into our South Extension branch complete everything with a single photo ID.",
      "## Always required: one government photo ID",
      "Any one valid government-issued photo ID is accepted: Aadhaar Card, PAN Card, Driving License or Passport. The ID is used for the KYC record attached to your invoice. The name on the ID should be the seller's own name — you must be the rightful owner of the items you sell, and an adult. If you are selling on behalf of a family member, it is cleaner for that person to be present with their ID.",
      "## Address proof",
      "Carry an address proof as well — for most people the Aadhaar Card covers both identity and address in a single document. A passport or driving licence with a current address also works. Keeping the address on the invoice current matters because the invoice is your permanent record of the transaction.",
      "## For transactions of ₹2 lakh and above: PAN card",
      "Once a transaction crosses the regulatory threshold of ₹2 lakh, a PAN card becomes mandatory. This is a legal requirement that applies to every genuine buyer in India, not a rule of our shop. If your sale is likely to cross that figure and you do not carry your PAN, the buyer legally cannot complete the purchase — so check before you travel, especially if you are bringing a full jewellery set.",
      "## Helpful but optional: the purchase bill",
      "Many customers worry that old or inherited gold cannot be sold without its original bill. It can. The bill helps establish where an item came from, but it is not compulsory, and it does not decide the price — tested purity and weight do. Most family gold in India has changed hands across generations without paperwork; a genuine buyer tests the metal, not the file. Bring the bill if you have it, and do not let its absence stop you.",
      "## Extra documents for pledged gold",
      'If your gold is pledged against a loan, bring the loan receipt or pawn ticket and the lender details along with your ID. Those papers let us calculate exactly what is owed, help you settle and release the gold, and buy it from you in the same process. See our <a href="/release-pledged-gold">release pledged gold page</a> for how that works step by step.',
      "## What you receive: the invoice",
      "Documentation runs both ways. For every purchase we complete, you receive a proper invoice recording what was sold, its tested purity and weight, and the amount paid. Keep it with your records. A buyer who offers cash with no ID check and no invoice is asking you to carry all the risk of the transaction — that is a strong reason to walk to a different counter.",
      "That is the complete list. One photo ID, address proof, PAN if the sale is ₹2 lakh or above, and the pawn ticket only if the gold is pledged. Bring those to our branch at Wazir Nagar, South Extension, and the rest — free German Karat Meter testing, valuation and payment — takes a single visit.",
    ]),
  B("blog-questions-before-selling-gold", "/images/blog-2.webp", "Selling Guide", "2026-10-20", "6 min read",
    "Top Questions to Ask Before Selling Your Gold | Bharat Gold Buyer Blog, Delhi",
    "Top Questions to Ask Before Selling Your Gold Jewellery",
    "Testing method, deductions, which rate, ID and invoice, payment timing — the exact questions to ask any gold buyer in Delhi before you hand over your jewellery.",
    [
      "Selling gold is a once-in-a-decade decision for most families, and the difference between a careful sale and a careless one can run into thousands of rupees on a single set. The protection is not haggling — it is asking the right questions before your jewellery leaves your hands. Ask every buyer these questions, including us. A transparent buyer will welcome them; a buyer who gets irritated by them has told you something important.",
      "## 1. How will you test the purity?",
      "The answer you want is a German Karat Meter (XRF) test, done in front of you, with the purity shown on a screen and your jewellery completely undamaged. The old touchstone-and-acid method scratches the piece and only estimates purity — and an estimate always seems to land in the buyer's favour. If a buyer wants to take your gold 'inside' for testing, decline. Testing you cannot watch is testing you cannot trust.",
      "## 2. What deductions will you make — all of them?",
      "Ask for every deduction by name and amount before you agree: stones, wastage, melting, service charges. Then compare buyers on the final payable amount, not the headline rate. A buyer quoting a slightly higher rate with heavy hidden deductions can pay you less than a buyer quoting the standard rate with none. At Bharat Gold Buyer, the calculation is weight × tested purity × the day's rate, shown to you line by line.",
      "## 3. Which rate are you using, and whose rate is it?",
      "It should be today's live market rate, stated openly at the counter. Gold rates change daily, so a buyer quietly using an older, lower rate keeps the difference. Ask the question directly: 'What is the per-gram rate you are applying to my purity?' Write it down and compare it the same day at a second buyer — rates are only comparable within the same day.",
      "## 4. What ID do you need, and will I get an invoice?",
      "A genuine buyer asks for a photo ID — and PAN for transactions of ₹2 lakh and above — and issues a proper invoice recording the items, purity, weight and amount paid. This documentation protects you: it is your proof of a legitimate sale. No-ID, no-invoice offers may sound convenient, but they leave you with no record and usually a lower price as well.",
      "## 5. How and when will I be paid?",
      "The right answer is: in this visit, as soon as you accept, by a mode you choose — cash, cheque or bank transfer. Payment 'tomorrow', or after the gold is 'sent for melting', means your gold is gone while your money is still a promise. At our South Extension branch, payment is completed at the counter before you leave, whichever mode you pick.",
      "## 6. What if I don't like the offer?",
      "Testing and valuation should be free, with no obligation. You are entitled to hear the number, think about it, compare it, and walk out with your jewellery if it does not suit you — at no charge. Any buyer who makes you feel that a free test has created a debt of gratitude is using pressure, not service. Ask this question on the phone before you even visit.",
      "Keep these six questions in your pocket and the process becomes simple arithmetic instead of a negotiation you have to win. At Bharat Gold Buyer in South Extension, every one of them is answered before you decide — German Karat Meter testing on screen, the day's rate stated, the calculation shown, and instant payment with an invoice when you accept.",
    ]),
  B("blog-german-karat-meter-vs-old-purity-test", "/images/blog-3.webp", "Gold Testing Guide", "2026-10-28", "6 min read",
    "German Karat Meter vs Old Touchstone Purity Test | Bharat Gold Buyer Blog",
    "German Karat Meter vs the Old Touchstone Test: Which Purity Test Protects You?",
    "How the traditional touchstone-and-acid test compares with German Karat Meter (XRF) testing — accuracy, damage, and why the method decides what you get paid for your gold in Delhi.",
    [
      "Before a single rupee is discussed, every gold sale turns on one number: purity. A two-karat error on a heavy set can quietly move thousands of rupees from your side of the counter to the buyer's. Yet most sellers never ask how that number was produced. There are two methods you will meet in Delhi — the centuries-old touchstone test still used by many buyers, and the German Karat Meter we use at Bharat Gold Buyer. They are not equal, and the difference lands directly in your payout.",
      "## How the old touchstone test works",
      "In the traditional method, the jeweller rubs your item against a black touchstone to leave a metal streak, then applies acids of known strength and judges the reaction by eye. It is cheap, portable and fast — which is why it survives. But it has three serious weaknesses: it physically scratches your jewellery, it reads only the surface of the metal, and its result is an experienced guess rather than a measurement. Two testers can honestly read the same streak differently.",
      "## Why an estimate costs you money",
      "When purity is estimated, the estimate protects the person making it. A buyer who is unsure whether a piece is 22K or a shade under will price it at the lower figure — the risk of being wrong is priced into your payout. Surface reading creates a second problem: plated or surface-enriched pieces can read better than their core, while honest old jewellery with surface wear can read worse. Either way, you are negotiating against an opinion, not a fact.",
      "## How the German Karat Meter works",
      "A Karat Meter uses X-ray fluorescence (XRF): the machine directs X-rays at the item and analyses the reflected signal to measure its exact metal composition. The result appears on a screen as a precise figure — for example 22K, 91.6% — in front of you. Nothing is rubbed, scratched, cut, heated or dissolved. Your jewellery comes off the machine exactly as it went on, and the reading is a measurement you can see, photograph and compare at another counter.",
      "## Side by side",
      "**Accuracy:** touchstone gives an approximate karat by eye; the Karat Meter gives a measured percentage. **Damage:** touchstone scratches the piece and uses acid; XRF is completely non-destructive. **Transparency:** a touchstone verdict happens in the tester's head; the Karat Meter shows its result on a screen. **Speed:** both are quick, so speed is no reason to accept the older method. On every point that affects your money or your jewellery, the machine wins.",
      "## What this means at the counter",
      "Because the purity is measured and displayed, the rest of the calculation becomes simple and checkable: pure-gold weight = item weight × measured purity, and payout = pure-gold weight × the day's rate. There is no step where you must simply trust. If you later visit another buyer, you already know your exact purity and weight, so you can compare final offers on equal terms — the strongest position a seller can be in.",
      "## Our advice before you sell anywhere",
      "Insist on a machine test, in front of you, before discussing price — and treat any refusal as your answer about that buyer. At Bharat Gold Buyer, South Extension, every item is tested on the German Karat Meter free of charge, with the result on screen and no obligation to sell. If our offer does not suit you, you take your jewellery home undamaged, knowing exactly what it is — and that knowledge alone is worth the visit.",
    ]),
  B("blog-why-gold-prices-are-high", "/images/blog-1.webp", "Gold Market Guide", "2026-10-12", "6 min read",
    "Why Gold Prices Are at an All-Time High | Bharat Gold Buyer Blog, Delhi",
    "Why Gold Prices Are at an All-Time High",
    "Central-bank buying, currency moves and safe-haven demand — what is driving gold rates to record levels, and what it means if you are holding old jewellery in Delhi.",
    [
      "Gold has been trading near record levels, and customers at our South Extension counter ask the same question almost every day: why is gold so high, and should I sell now? We cannot predict prices — nobody honestly can — but we can explain what has pushed the rate to where it is, and how to think clearly about jewellery you already own. Understanding the drivers helps you decide with facts instead of headlines.",
      "## Central banks are buying — a lot",
      "The single biggest structural driver is demand from the world's central banks, which have been adding gold to their reserves at a pace not seen in decades. Central banks buy for the very long term and are not sensitive to price the way retail buyers are, so their steady demand puts a firm floor under the market. When the largest buyers in the world treat gold as essential insurance, the price reflects it.",
      "## Safe-haven demand in uncertain times",
      "Gold has been a refuge asset for centuries, and periods of geopolitical tension, trade disputes and financial uncertainty reliably push investors towards it. Each new wave of uncertainty adds buyers who are not looking for quick profit but for safety — and safety demand does not disappear when a headline fades; it tends to stay in the metal. This is a major reason rallies in recent years have held instead of collapsing back.",
      "## The rupee makes Indian prices higher still",
      "Gold is priced globally in dollars, so the Indian rate depends on two things: the dollar price of gold and the rupee's exchange rate. When the rupee weakens, the same ounce of gold costs more rupees even if the dollar price stands still. Indian sellers therefore often see record domestic rates driven by both engines at once — a strong global price and a softer rupee — which is why rates here can hit new highs even in weeks when international news seems quiet.",
      "## What this means if you hold old gold",
      "Jewellery bought five, ten or twenty years ago was purchased at a fraction of today's rate. A 22K set sitting unworn in a locker may now be worth several times its purchase price in metal value alone. That does not automatically mean you should sell — sentimental pieces and family heirlooms carry value no rate can measure — but it does mean the 'small amount' you imagine your old gold to be may be a serious sum, and guessing is a poor way to find out.",
      "## How to check your position — free",
      "The useful step is not a decision; it is a number. Bring the pieces in for a free German Karat Meter test, see the exact purity and weight, and hear today's valuation calculated in front of you. Then decide at home, with the real figure in hand, whether selling serves your plans — a loan to settle, an expense to meet, or simply converting unworn jewellery into money that works harder.",
      "## A final thought on timing",
      "People often ask whether they should wait for prices to rise further. That is a prediction nobody can make honestly — rates can move either way, and they move daily. What you can control is the quality of your sale whenever you choose to make it: machine-tested purity, a stated rate, a verified calculation and documented instant payment. A fair sale at today's rate is worth more than a careless sale at any rate.",
      "One honest caution: high prices also attract careless selling. At record rates, the gap between a transparent valuation and a sloppy one is worth more than ever, so compare final payable amounts, insist on machine testing, and never accept a price you cannot verify. At Bharat Gold Buyer in South Extension, testing and valuation are free and carry no obligation — the numbers first, the decision yours.",
    ]),

B("can-i-sell-gold-without-bill-in-delhi", "/images/blog-6.webp", "Selling Guide", "2026-11-25", "8 min read",
    "Can I Sell Gold Without Bill in Delhi? A Complete Guide | Bharat Gold Buyer",
    "Can I Sell Gold Without Bill in Delhi?",
    "Yes, you can sell old, inherited, broken or unhallmarked gold jewellery without an original purchase bill. Learn about gold purity testing, KYC requirements, valuation, payment methods and where to sell gold in Delhi.",
    [
      "Do you have old gold jewellery lying at home without its original purchase bill? It could be an old family necklace, broken gold jewellery, inherited ornaments or wedding jewellery that you no longer use. One common question is: Can I sell gold without a bill in Delhi? The answer is yes. Not having the original purchase invoice does not automatically mean your gold cannot be sold. However, the gold buyer must perform appropriate purity testing, identity verification and ownership checks as required by applicable laws.",
      
      "At Bharat Gold Buyer, South Extension, Delhi, we make selling old gold simple and transparent. Our professionals use German Karat Meter technology to test gold purity without damaging your jewellery. You receive an immediate valuation, and payment is made once you accept the offer and complete the necessary verification.",
      
      "## Where to Sell Gold Without Bill in Delhi?",
      "If you are searching for where to sell gold without a bill in Delhi, you will find several local gold buyers and jewellery shops. However, choosing the right buyer is more important than simply looking for the highest quoted price. A legitimate gold buyer should explain the complete valuation process and allow you to make your decision without pressure.",
      
      "Before selling your jewellery, check these important things:",
      "1. Gold should be tested for purity using appropriate testing equipment.",
      "2. The buyer should explain the gold valuation process clearly.",
      "3. You should have enough time to review the offer without pressure to sell.",
      "4. The payment method and transaction receipt should be clearly explained.",
      "At Bharat Gold Buyer, South Extension, Delhi, you can get your jewellery tested and receive an assessment before deciding whether to sell.",
      
      "## How Does the Gold Selling Process Work Without an Invoice?",
      "If you are selling gold for the first time without an original purchase bill, the process may seem confusing. However, the process is straightforward when you choose a professional gold buyer.",
      
      "## Step 1: Bring Your Gold Jewellery",
      "Visit a gold buying establishment with your old necklaces, chains, rings, bangles, wedding jewellery, inherited ornaments or broken gold jewellery. You can inquire about the selling process even if you do not have the original purchase invoice.",
      
      "## Step 2: Gold Purity Testing",
      "The purity of your gold is tested to determine its actual gold content. At Bharat Gold Buyer, we use German Karat Meter technology for non-destructive purity testing. This allows us to check the karat of your jewellery without damaging it. Your jewellery may contain 18K, 20K or 22K gold, and the purity directly affects its value.",
      
      "## Step 3: Weight Measurement and Valuation",
      "After purity testing, your gold is weighed and valued. The final valuation depends on several factors, including gold purity, net gold weight, the prevailing market gold rate and applicable valuation adjustments. An ornament made of 22-karat gold will have a different value from an 18-karat ornament of the same weight.",
      
      "## Step 4: Receive Your Quotation",
      "Once the evaluation is complete, the buyer provides you with a price quotation. You have the right to understand the valuation and ask questions about the calculation. Getting your jewellery tested or receiving a quotation does not mean you are required to sell it. The final decision is completely yours.",
      
      "## Step 5: Complete Verification and Receive Payment",
      "After accepting the offer, the necessary identity and ownership verification is completed. Depending on the transaction, the buyer may request Aadhaar Card, PAN Card where appropriate, other government-issued identification, address proof or supporting ownership documents. If you are selling inherited jewellery, relevant family or inheritance documents may help establish ownership.",
      "At Bharat Gold Buyer, payment is made through cash, cheque or bank transfer as applicable under prevailing law, after acceptance and verification. The documentation requirements may vary depending on the nature and value of the transaction. Not having a purchase bill does not exempt you from KYC, tax or other legal obligations.",
      
      "## Can You Sell Old, Broken or Unhallmarked Gold Without a Bill?",
      "Yes, old gold jewellery can be sold without its original purchase invoice. Broken gold chains, damaged bangles, old rings, wedding jewellery, unhallmarked ornaments and inherited family jewellery can also be evaluated for their gold content.",
      "Even if your jewellery does not carry a hallmark, a professional purity test may help determine its actual gold content. The value is calculated based on the purity and net weight of the gold rather than simply the appearance or condition of the jewellery.",
      
      "## How Is the Value of Old Gold Calculated?",
      "Understanding gold valuation helps you make a better selling decision. Gold jewellery is generally valued according to its purity, net gold weight and the prevailing market rate. Since jewellery commonly contains 18K to 22K gold, its value depends on the actual gold content rather than the total weight of the ornament.",
      
      "## 1. Gold Purity",
      "Purity refers to the percentage of actual gold present in your jewellery. For example, 22-karat gold contains more gold than 18-karat gold. Therefore, two ornaments with identical weights can have different values depending on their purity.",
      
      "## 2. Net Gold Weight",
      "The net gold weight is important when calculating the value of jewellery. Non-gold components, such as stones and other materials, are not included in the gold weight. This is why the total weight of an ornament may differ from the weight used for gold valuation.",
      
      "## 3. Gold Market Rate",
      "The prevailing market rate of gold also affects the final valuation. Since gold rates fluctuate regularly, the value of your jewellery can change from one day to another. A reliable buyer should explain the applicable rate and how it is used in the final calculation.",
      
      "## Why Choose Bharat Gold Buyer to Sell Gold Without Bill in Delhi?",
      "Selling family jewellery is an important decision, and customers deserve a transparent and comfortable experience. At Bharat Gold Buyer, South Extension, we focus on trust, clear communication and a straightforward valuation process.",
      
      "Here are some of the conveniences we offer:",
      "- German Karat Meter: Technology to check the purity of your gold jewellery.",
      "- Free Gold Testing and Valuation: Get your jewellery assessed before deciding to sell.",
      "- Transparent Pricing: Understand the purity, weight and valuation process.",
      "- Instant Payment: Receive payment after accepting the offer and completing verification, through applicable payment methods.",
      "- No Obligation to Sell: You are free to accept or reject our quotation.",
      "- Knowledgeable Staff: Our trained professionals help you understand the gold evaluation and selling process.",
      
      "We understand that selling gold should not be a stressful experience. Whether you have inherited jewellery, broken ornaments, old wedding jewellery or unused family gold, our team is here to help you understand its value before making a decision.",
      
      "## Visit Bharat Gold Buyer, South Extension, Delhi",
      "If you are looking for a reliable place to sell gold without a bill in Delhi, visit Bharat Gold Buyer for professional purity testing and transparent valuation.",
      "Bharat Gold Buyer",
      "Address: South Extension, New Delhi - 110003",
      "Opening Hours: Monday to Saturday, 10 AM to 8 PM",
      "Phone: +91 9821598950",
      "Mobile: +91 9990780499",
      "Website: https://www.bharatgoldbuyer.com/",
      
      "## Frequently Asked Questions (FAQs)",
      
      "## 1. Can I sell gold in Delhi without an original purchase bill?",
      "Yes. You can sell old gold jewellery without the original purchase invoice. However, the buyer must complete the necessary identity and ownership verification as required by applicable laws.",
      
      "## 2. Can I sell inherited gold jewellery without a purchase receipt?",
      "Yes, inherited jewellery can be sold without an original purchase invoice. Depending on the circumstances, the buyer may request supporting family or inheritance-related documents to establish your ownership.",
      
      "## 3. Can I sell broken gold jewellery without a bill?",
      "Yes. Broken chains, damaged bangles, old rings and other unused gold jewellery can be evaluated based on their actual purity and net gold weight.",
      
      "## 4. Is a hallmark necessary for selling old gold?",
      "No. Old hallmarked and unhallmarked gold jewellery can be evaluated for its gold content through appropriate purity testing.",
      
      "## 5. How is gold purity checked at Bharat Gold Buyer?",
      "We use German Karat Meter technology to check gold purity. This non-destructive testing method helps determine the purity of your jewellery without damaging it.",
      
      "## 6. Will I get the same price as today's gold market rate?",
      "The final amount depends on the purity of your jewellery, net gold weight, prevailing market gold rate and applicable valuation adjustments. The buyer should explain the calculation before you decide whether to accept the offer.",
      
      "## 7. Do I have to sell my gold after getting it tested?",
      "No. You can get your gold tested, understand its estimated value and review the quotation without any obligation to sell. The final decision is yours.",
      
      "## 8. Where can I sell gold without a bill near South Extension, Delhi?",
      "You can visit Bharat Gold Buyer, South Extension, New Delhi - 110003, for professional gold purity testing and valuation. Call +91 9821598950 for assistance.",
      
      "Not having an original gold purchase bill should not stop you from understanding the value of your jewellery. Visit Bharat Gold Buyer in South Extension, Delhi, for transparent gold testing, clear valuation and a hassle-free selling experience."
    ]),

];
