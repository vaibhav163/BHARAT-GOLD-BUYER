// Each entry drives one locality/landing page: the React route (LocalityPage
// reads this by slug) AND the prerender script's <title>/meta/FAQ schema.
// Keep content genuinely distinct per entry — duplicate boilerplate across
// these pages is exactly what search engines penalize as doorway content.

export const localities = [
  {
    slug: 'gold-buyer-in-south-delhi',
    h1: 'Gold Buyer in South Delhi',
    metaTitle: 'Gold Buyer in South Delhi | Bharat Gold Buyer',
    metaDescription: 'Bharat Gold Buyer serves all of South Delhi — South Extension, Lajpat Nagar, Greater Kailash, Defence Colony & Saket — with certified gold buying and instant cash.',
    intro: [
      'Bharat Gold Buyer is a certified gold buyer serving South Delhi, with our branch located right at Wazir Nagar on the South Extension–Kotla Mubarakpur border.',
      'Whether you\u2019re in South Extension, Lajpat Nagar, Greater Kailash, Defence Colony or Saket, our branch is a short drive or walk away — and every piece of gold is tested on a German karat-meter machine before we quote a price, so the valuation you see is accurate, not guesswork.',
    ],
    areasServed: ['South Extension', 'South Extension Part I', 'Lajpat Nagar', 'Greater Kailash', 'Defence Colony', 'Saket', 'Kotla Mubarakpur', 'Wazir Nagar'],
    faq: [
      { q: 'Which South Delhi areas do you serve?', a: 'Our branch at Wazir Nagar serves South Extension, Lajpat Nagar, Greater Kailash, Defence Colony, Saket, and the surrounding South Delhi neighbourhoods.' },
      { q: 'Do I need an appointment to sell gold?', a: 'No appointment is needed — you can walk in with your gold during business hours for an on-the-spot karat-meter test and cash quote.' },
    ],
  },
  {
    slug: 'gold-buyer-in-south-extension',
    h1: 'Gold Buyer in South Extension',
    metaTitle: 'Gold Buyer in South Extension, Delhi | Bharat Gold Buyer',
    metaDescription: 'Sell gold in South Extension at Bharat Gold Buyer, right on the South Ext–Kotla Mubarakpur border. Certified karat-meter testing and instant cash payment.',
    intro: [
      'If you\u2019re in South Extension looking for a nearby gold buyer, our branch sits right at Wazir Nagar, on the South Extension–Kotla Mubarakpur border — a five-minute walk from South Extension Part I market for most local residents.',
      'We buy gold jewellery, coins, bars and scrap gold from South Extension Part I and Part II residents, with every item tested on a German karat-meter before we make an offer.',
    ],
    distance: 'Under 1 km from South Extension Part I market — a 5-minute walk for most residents.',
    faq: [
      { q: 'How close is Bharat Gold Buyer to South Extension?', a: 'Our branch is at Wazir Nagar, directly on the South Extension–Kotla Mubarakpur border — under a kilometre from South Extension Part I market.' },
      { q: 'What gold items do you buy in South Extension?', a: 'We buy gold jewellery (including broken or old-design pieces), gold coins, gold bars, and scrap gold from South Extension residents.' },
    ],
  },
  {
    slug: 'gold-buyer-in-south-extension-1',
    h1: 'Gold Buyer in South Extension Part I',
    metaTitle: 'Gold Buyer in South Extension Part 1, Delhi | Bharat Gold Buyer',
    metaDescription: 'Bharat Gold Buyer is a short walk from South Extension Part I market. Certified gold valuation and instant cash for jewellery, coins and scrap gold.',
    intro: [
      'Residents around South Extension Part I market are just a short walk from our Wazir Nagar branch, making us one of the closest certified gold buyers to this part of South Extension.',
      'We test every item on a German karat-meter in front of you before quoting a price, so there\u2019s no guesswork — you see exactly how your gold is valued.',
    ],
    distance: 'A short walk from South Extension Part I market.',
    faq: [
      { q: 'Is there a gold buyer near South Extension Part I market?', a: 'Yes — Bharat Gold Buyer\u2019s branch at Wazir Nagar is a short walk from South Extension Part I market.' },
      { q: 'How is my gold tested?', a: 'We use a German karat-meter machine for non-destructive purity testing, so your jewellery isn\u2019t cut or damaged during valuation.' },
    ],
  },
  {
    slug: 'gold-buyer-in-lajpat-nagar',
    h1: 'Gold Buyer in Lajpat Nagar',
    metaTitle: 'Gold Buyer in Lajpat Nagar, Delhi | Bharat Gold Buyer',
    metaDescription: 'Sell gold near Lajpat Nagar Central Market at Bharat Gold Buyer. Certified karat-meter purity testing and instant cash, minutes from Lajpat Nagar.',
    intro: [
      'Lajpat Nagar residents and shoppers at Lajpat Nagar Central Market are just a short drive from our Wazir Nagar branch, bordering South Extension.',
      'We buy gold jewellery, coins, bars and scrap gold, with transparent, certified karat-meter testing so you know exactly what you\u2019re being paid for before you agree to sell.',
    ],
    distance: 'Roughly 2 km from Lajpat Nagar Central Market — about a 10-minute drive.',
    faq: [
      { q: 'How far is Bharat Gold Buyer from Lajpat Nagar?', a: 'Our branch is about 2 km from Lajpat Nagar Central Market, roughly a 10-minute drive.' },
      { q: 'Do you buy old or broken gold jewellery?', a: 'Yes, we buy gold jewellery in any condition — including old designs and broken pieces — based on certified purity and weight.' },
    ],
  },
  {
    slug: 'gold-buyer-in-greater-kailash',
    h1: 'Gold Buyer in Greater Kailash',
    metaTitle: 'Gold Buyer in Greater Kailash, Delhi | Bharat Gold Buyer',
    metaDescription: 'Sell gold near Greater Kailash (GK1/GK2) at Bharat Gold Buyer. Certified karat-meter valuation and instant cash, a short drive from M Block Market.',
    intro: [
      'For residents of Greater Kailash-1 and Greater Kailash-2, our Wazir Nagar branch near South Extension is one of the closer certified gold buyers, just a short drive from M Block Market.',
      'Every piece of gold — jewellery, coins, bars or scrap — is tested on a German karat-meter before we quote a price, so you get a fair, transparent valuation.',
    ],
    distance: 'Roughly 3 km from M Block Market, GK1 — about a 10-12 minute drive.',
    faq: [
      { q: 'How far is Bharat Gold Buyer from Greater Kailash?', a: 'We\u2019re around 3 km from M Block Market, GK1 — roughly a 10-12 minute drive from most of Greater Kailash.' },
      { q: 'Do you buy gold coins and bars, not just jewellery?', a: 'Yes, we buy gold coins and gold bars in addition to jewellery, at rates based on current market value and certified purity.' },
    ],
  },
  {
    slug: 'gold-buyer-in-defence-colony',
    h1: 'Gold Buyer in Defence Colony',
    metaTitle: 'Gold Buyer in Defence Colony, Delhi | Bharat Gold Buyer',
    metaDescription: 'Sell gold near Defence Colony at Bharat Gold Buyer, a short drive across Ring Road. Certified karat-meter testing and instant cash payment.',
    intro: [
      'Defence Colony residents can reach our Wazir Nagar branch with a short drive across Ring Road into South Extension.',
      'We offer certified, non-destructive karat-meter testing on all gold jewellery, coins and scrap, and pay in cash on the spot once you accept our valuation.',
    ],
    distance: 'Roughly 2-2.5 km from Defence Colony Market — about a 10-minute drive.',
    faq: [
      { q: 'How do I get to Bharat Gold Buyer from Defence Colony?', a: 'It\u2019s a short drive across Ring Road into South Extension — roughly 2-2.5 km, about 10 minutes from Defence Colony Market.' },
      { q: 'Is the gold valuation process transparent?', a: 'Yes — we test your gold on a German karat-meter in front of you and explain the weight and purity before quoting a price.' },
    ],
  },
  {
    slug: 'gold-buyer-in-saket',
    h1: 'Gold Buyer in Saket',
    metaTitle: 'Gold Buyer in Saket, Delhi | Bharat Gold Buyer',
    metaDescription: 'Sell gold near Saket at Bharat Gold Buyer, a short drive from Select Citywalk. Certified karat-meter valuation and instant cash payment.',
    intro: [
      'If you\u2019re near Saket or Select Citywalk, our Wazir Nagar branch in South Extension is a straightforward drive up Press Enclave Road / Aurobindo Marg.',
      'We buy gold jewellery, coins, bars and scrap gold, testing every item on a German karat-meter so the price you\u2019re quoted reflects its actual purity.',
    ],
    distance: 'Roughly 5-6 km from Saket District Centre / Select Citywalk — about a 20-minute drive.',
    faq: [
      { q: 'How far is Bharat Gold Buyer from Saket?', a: 'We\u2019re roughly 5-6 km from Saket District Centre, about a 20-minute drive via Press Enclave Road / Aurobindo Marg.' },
      { q: 'Can I get an estimate before travelling from Saket?', a: 'Call us at +91 9990780499 and describe your gold items — we can give a rough estimate before you make the trip, with the final price confirmed after in-person karat-meter testing.' },
    ],
  },
  {
    slug: 'cash-for-gold-in-south-delhi',
    h1: 'Cash for Gold in South Delhi',
    metaTitle: 'Cash for Gold in South Delhi | Instant Payment | Bharat Gold Buyer',
    metaDescription: 'Get instant cash for gold in South Delhi at Bharat Gold Buyer. Walk in, get a certified karat-meter valuation, and walk out paid — no waiting for a cheque.',
    intro: [
      'Getting cash for gold at Bharat Gold Buyer is a simple, three-step process: walk in with your gold, we test it on a German karat-meter in front of you, and once you accept our quote, you\u2019re paid in cash on the spot — no cheque, no waiting.',
      'We serve walk-ins from across South Delhi, including South Extension, Lajpat Nagar, Greater Kailash, Defence Colony and Saket, at our Wazir Nagar branch.',
    ],
    faq: [
      { q: 'How quickly do I get paid?', a: 'Once you accept our valuation, payment is made in cash immediately — there\u2019s no waiting period.' },
      { q: 'Is the karat-meter test accurate?', a: 'Yes, the German karat-meter test is a certified, non-destructive method that measures purity without cutting or damaging your gold.' },
    ],
  },
  {
    slug: 'sell-gold-jewellery-in-south-delhi',
    h1: 'Sell Gold Jewellery in South Delhi',
    metaTitle: 'Sell Gold Jewellery in South Delhi | Bharat Gold Buyer',
    metaDescription: 'Sell gold jewellery of any design or condition in South Delhi at Bharat Gold Buyer. Necklaces, bangles, rings and broken pieces — certified valuation, instant cash.',
    intro: [
      'We buy gold jewellery in any condition — necklaces, bangles, earrings, rings, chains, and old or broken pieces — from customers across South Delhi.',
      'Every piece is weighed and tested for purity on a German karat-meter before we make an offer, so you\u2019re paid based on the actual gold content, not just appearance.',
    ],
    faq: [
      { q: 'Do you buy broken or damaged gold jewellery?', a: 'Yes, we buy gold jewellery in any condition, including broken pieces and old designs — valuation is based on gold weight and purity, not the piece\u2019s condition.' },
      { q: 'Do you buy gold jewellery with stones set in it?', a: 'Yes, we assess the gold component separately from any stones or gems set in the piece during valuation.' },
    ],
  },
  {
    slug: 'gold-buyer-near-me',
    h1: 'Gold Buyer Near Me',
    metaTitle: 'Gold Buyer Near Me in South Delhi | Bharat Gold Buyer',
    metaDescription: 'Searching for a gold buyer near you in South Delhi? Bharat Gold Buyer is at Wazir Nagar, South Extension — certified valuation and instant cash payment.',
    intro: [
      'If you\u2019re searching for a gold buyer near you in South Delhi, Bharat Gold Buyer\u2019s branch is located at Wazir Nagar, right on the South Extension–Kotla Mubarakpur border — easily reachable from South Extension, Lajpat Nagar, Greater Kailash, Defence Colony and Saket.',
      'Call ahead or simply walk in — every gold item is tested on a German karat-meter in front of you, and you\u2019re paid in cash the moment you accept our quote.',
    ],
    faq: [
      { q: 'Where exactly is Bharat Gold Buyer located?', a: '1515 Upper Ground Floor, Wazir Nagar, South Extension, Kotla Mubarakpur, New Delhi 110003.' },
      { q: 'What are your contact details?', a: 'Call +91 9990780499 or +91 9821598950, or email bharatgoldbuyer@gmail.com.' },
    ],
  },
];