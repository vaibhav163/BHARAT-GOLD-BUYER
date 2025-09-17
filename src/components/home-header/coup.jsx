import React from 'react';
import './about-section.css';

export default function Coup() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side - Image and Rating */}
        <div className="about-left">
          <div className="rating-badge">
            <div className="stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span className="rating-text">(5/5)</span>
          </div>
          
          <div className="couple-image">
           <img src="https://standardgolbuyers.in/wp-content/uploads/2025/08/home-4th-Slider-Image.webp" alt="Happy Couple" />
            </div>
          </div>

        {/* Center - Main Content */}
        <div className="about-center">
          <h2 className="about-title">
            Best Gold, Silver &<br />
            Diamond Buyer In Delhi<br />
            Ncr
          </h2>
          
          <h3 className="about-subtitle">
            Sona Lao, Paise Pao – Trusted Gold Buyers Near you
          </h3>
          
          <div className="about-text">
            <p>
              <strong>sell gold for instant cash?</strong> Bharat Gold Buyer, we are 
              recognized as one of the best gold buyers in Delhi NCR, we are 
              offering you the highest market value for gold, silver, and 
              diamonds. are you search for cash for gold near me, or need a 
              reliable place to sell gold in Delhi, Noida, Ghaziabad, Gurgaon, 
              or Faridabad, we make the process quick, secure, and 
              transparent.
            </p>
            
            <p>
              multiple branches across Delhi NCR, we provide professional 
              evaluation,instant payouts, and complete trust in every 
              transaction. Our team ensures that you get the best price for 
              your gold with no hidden charges. Choose Bharat Gold Buyer 
              for a safe and profitable way to your gold into cash.
            </p>
            
            <p>
              Sell gold today and get instant cash with Bharat Gold Buyer 
              your most trusted gold, silver, and diamond buyer near you.
            </p>
          </div>
          
          <button className="learn-more-btn">Learn More</button>
        </div>

        {/* Right Side - Process Visual */}
        <div className="about-right">
          <img src="https://standardgolbuyers.in/wp-content/uploads/2025/08/ab-e1754643970320.jpg" alt="Process Visual" className="process-image" />
        </div>
        </div>
    </section>
  );
}