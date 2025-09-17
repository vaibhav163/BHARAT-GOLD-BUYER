import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './faq-section.css';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ open by default

  const faqs = [
    {
      id: 0,
      question: "Do I Need To Make An Appointment To Visit A Branch?",
      answer: "No appointment is necessary. You can walk into any of our branches in Delhi, Noida, Gurgaon, Ghaziabad, Faridabad, and Greater Noida during business hours."
    },
    {
      id: 1,
      question: "What Types Of Gold Items Do You Buy?",
      answer: "We purchase all types of gold items including jewelry (rings, necklaces, bracelets, earrings), gold coins, gold bars, broken or old gold jewelry, gold dental work, and any other gold items regardless of condition. We accept gold of all purities from 8K to 24K."
    },
    {
      id: 2,
      question: "How Do You Determine The Price Of My Gold?",
      answer: "We use state-of-the-art electronic testing machines that determine the exact purity of your gold without damaging it. Our pricing is based on current market rates, the weight of your items, and their purity. You'll see the entire evaluation process and receive a transparent breakdown of the pricing."
    },
    {
      id: 3,
      question: "Is There Any Charge For Testing Or Evaluation?",
      answer: "No, there are absolutely no charges for testing, evaluation, or consultation. Our expert evaluation is completely free, and you're under no obligation to sell. We believe in transparent, honest service with no hidden fees."
    },
    {
      id: 4,
      question: "How Soon Will I Get Paid?",
      answer: "Payment is instant! Once you accept our offer, you can choose to receive payment via cash, cheque, or bank transfer immediately. We pride ourselves on providing the fastest, most convenient payment process in Delhi NCR."
    },
    {
      id: 5,
      question: "What Documents Do I Need To Sell My Gold?",
      answer: "You'll need a valid government-issued photo ID (Aadhaar Card, PAN Card, Driving License, or Passport) and address proof. For high-value transactions, additional documentation may be required as per government regulations."
    },
    {
      id: 6,
      question: "Is It Safe To Sell Gold At Bharat Gold Buyer?",
      answer: "Absolutely! We are a licensed and registered gold buyer with multiple established branches. All transactions are conducted transparently, with proper documentation and receipts. Our premises are secure, and we follow all government regulations for precious metal trading."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? -1 : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left Side - Title and Image */}
        <div className="faq-left">
          <h2 className="faq-title">
            Frequently Asked<br />
            Questions
          </h2>
          
          <div className="faq-image">
            <img 
              src="https://standardgolbuyers.in/wp-content/uploads/2025/08/money-gold.webp" 
              alt="Money and Gold Coins" 
              className="money-gold-image"
            />
          </div>
        </div>

        {/* Right Side - FAQ List */}
        <div className="faq-right">
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} className={`faq-item ${openFAQ === faq.id ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={openFAQ === faq.id}
                >
                  <div className="question-icon">
                    {openFAQ === faq.id ? (
                      <ChevronUp className="chevron" />
                    ) : (
                      <ChevronDown className="chevron" />
                    )}
                  </div>
                  <span className="question-text">{faq.question}</span>
                </button>
                
                <div className={`faq-answer ${openFAQ === faq.id ? 'open' : ''}`}>
                  <div className="answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}