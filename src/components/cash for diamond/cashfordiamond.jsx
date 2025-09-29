import React from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react';
import './cashfordiamond.css';
import SocialAndSearches from '../cash-against gold/SocialAndSearches';
import Footersection from '../footersection/Footer-section';
import Logo from '../../assets/logo.png';
import Toggler from '../toggler/toggler';
import cashfordiamond from '../../assets/cashfordiamond.png';
import { Link } from 'react-router-dom';
const CashForDiamond = () => {

  const services = [
    "Cash Against Gold",
    "Cash For Silver", 
    "Cash For Diamond",
    "Cash For Silver Gold Coins"
  ];

  return (
    <div className="header-section">
      <div className="hero-container">
        <div className="hero-background">
          <img src={cashfordiamond} alt="we buy silver" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>

        {/* Navigation */}
        <nav className="hero-nav">
          <div className="nav-logo">
            <div className="logo-circle">
              <img src={Logo} alt="Bharat Gold Buyer Logo" className="logo-image" />
            </div>
            <div className="logo-text">
              <h1>Bharat Gold Buyer</h1>
              <h2>GOLD BUYER</h2>
            </div>
          </div>
          
          <Toggler />
          </nav>
        {/* Hero Title */}
        <div className="hero-content">
          <h1 className="hero-title">Cash Against Diamond</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-container">
          {/* Left Side - Decorative Card */}
          <div className="decorative-card-section">
            <div>
              <div className="card-border">
                <img src={cashfordiamond} alt="we buy gold" className="hero-bg-image" />
            </div>
            </div>
            <div className='main-container-text'>
              <h1 style={{ color: '#DAA520', fontSize: '2rem',
                paddingBottom: '2rem'
               }}>Cash Against Diamond - Sell cash for diamond in Ghaziabad, Noida & Delhi ncr</h1>
              <p style={{ paddingBottom: '2rem' , fontSize: '18px', lineHeight: '1.6', margin: 0 }}>Are you looking to get <b>instant cash against your diamond</b> in Delhi, Noida, Gurgaon, Ghaziabad, Faridabad, or Greater Noida?
<b>Bharat Gold Buyer</b> offers trusted, reliable, and transparent cash-for-diamond services with multiple branches across the Delhi NCR area. Get the best value for your diamond assets without any hassle!</p>
            </div>
            <h1 style={{ color: '#DAA520', fontSize: '2rem',
                paddingBottom: '2rem'
               }} >Why Choose Sell Cash for Diamond in Noida, Gurgaon & Delhi NCR?</h1>
            <p style={{ paddingBottom: '2rem' , fontSize: '18px', lineHeight: '1.6', margin: 0 }} ><b>Bharat Gold Buyer</b> is your trusted partner for selling diamond in Noida, Gurgaon, and Delhi NCR. Our commitment to transparency, fair pricing, and customer satisfaction sets us apart. Experience a hassle-free process and get the best value for your diamond assets with us.</p>
            <ul style={{ paddingBottom: '2rem' , fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
              <li><b>Trusted and Reliable:</b> With years of expertise, we have earned a strong reputation in the precious metal buying industry.</li>
              <li><b>Transparent Process:</b> We ensure complete transparency in our transactions, providing you with a clear understanding of the valuation and pricing.</li>
              <li><b>Instant Cash:</b> Get immediate payment for your diamond, ensuring a quick and efficient selling experience.</li>
              <li><b>Expert Appraisal:</b> Our team of experts provides accurate and fair appraisals based on current market rates.</li>
              <li><b>Customer Satisfaction:</b> We prioritize customer satisfaction, ensuring a smooth and pleasant experience from start to finish.</li>
            </ul>
            {/* <h3 style={{ color: '#DAA520', fontSize: '1.5rem', paddingBottom: '1rem' }}>What Silver Items Do We Buy?</h3>
            <ol style={{ paddingBottom: '2rem' , fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
              <li><b>Visit Our Branch:</b> Bring your gold items to any of our conveniently located branches in Delhi NCR.</li>
              <li><b>Expert Appraisal:</b> Our experienced professionals will assess the quality and weight of your gold to provide an accurate valuation.</li>
              <li><b>Receive Instant Cash:</b> Once you agree to the offer, you will receive immediate payment for your gold items.</li>
              <li><b>Hassle-Free Process:</b> We ensure a smooth and transparent process, making it easy for you to sell your gold with confidence.</li>
            </ol>
            <h3 style={{ color: '#DAA520', fontSize: '1.5rem', paddingBottom: '1rem' }}>Benefits of Getting Cash Against Gold with Standard Gold Buyer in Ghaziabad</h3>
            <ul style={{ paddingBottom: '2rem' , fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
              <li><b>Quick Access to Funds:</b> Get immediate cash for your gold assets without any delays.</li>
              <li><b>Fair Market Value:</b> We offer competitive prices based on current market rates, ensuring you get the best value for your gold.</li>
              <li><b>Secure Transactions:</b> Our process is safe and secure, giving you peace of mind when selling your valuable items.</li>
              <li><b>Professional Service:</b>  Our team of experts is dedicated to providing excellent customer service and support throughout the process.</li>
            </ul>
            <h3 style={{ color: '#DAA520', fontSize: '1.5rem', paddingBottom: '1rem' }}>FAQs About Cash Against Gold in Delhi NCR</h3>
            <ul style={{ paddingBottom: '2rem' , fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
              <li><b>What types of gold items can I sell?</b>
                <p>You can sell various gold items, including jewelry, coins, and other gold valuables.</p>
              </li>
              <li><b>How is the value of my gold determined?</b>
                <p>The value of your gold is determined based on its weight, purity, and current market rates.</p>
              </li>
              <li><b>Is the process safe and secure?</b>
                <p>Yes, we prioritize your safety and ensure a secure transaction process.</p>
              </li>
              <li><b>How quickly can I get paid?</b>
                <p>Once you agree to the offer, you will receive instant cash for your gold items.</p>
              </li>
            </ul> */}
            {/* What Silver Items We Buy */}
      {/* Why Choose Us */}
      <h1
        style={{
          color: "#DAA520",
          fontSize: "2rem",
          paddingBottom: "2rem"
        }}
      >
        Why Choose Cash for Diamonds in Noida, Gurgaon & Delhi NCR?
      </h1>
      <p
        style={{
          paddingBottom: "2rem",
          fontSize: "18px",
          lineHeight: "1.6",
          margin: 0
        }}
      >
        <b>Bharat Gold Buyer</b> is your trusted partner for selling diamonds in
        Noida, Gurgaon, and Delhi NCR. Our commitment to transparency, fair
        pricing, and customer satisfaction sets us apart. Experience a
        hassle-free process and get the best value for your diamonds with us.
      </p>
      <ul
        style={{
          paddingBottom: "2rem",
          fontSize: "18px",
          lineHeight: "1.6",
          margin: 0
        }}
      >
        <li>
          <b>Trusted and Reliable:</b> With years of expertise, we have built a
          strong reputation in the precious stone and jewelry buying industry.
        </li>
        <li>
          <b>Multiple Branches:</b> Conveniently located outlets across Delhi NCR,
          including Noida, Gurgaon, Ghaziabad, Faridabad, and Greater Noida.
        </li>
        <li>
          <b>Transparent Process:</b> We ensure complete transparency in our
          transactions, providing you with a clear understanding of the valuation
          and pricing.
        </li>
        <li>
          <b>Instant Cash:</b> Get immediate payment for your diamonds, ensuring a
          quick and efficient selling experience.
        </li>
        <li>
          <b>Expert Appraisal:</b> Our gem experts provide accurate and fair
          appraisals based on current diamond market rates.
        </li>
        <li>
          <b>Customer Satisfaction:</b> We prioritize customer satisfaction,
          ensuring a smooth and pleasant experience from start to finish.
        </li>
      </ul>

      {/* What Diamonds We Buy */}
      <h1
        style={{
          color: "#DAA520",
          fontSize: "2rem",
          paddingBottom: "2rem"
        }}
      >
        What Diamond Items Do We Buy?
      </h1>
      <ul
        style={{
          paddingBottom: "2rem",
          fontSize: "18px",
          lineHeight: "1.6",
          margin: 0
        }}
      >
        <li>Diamond rings (solitaires, engagement rings, wedding bands)</li>
        <li>Diamond necklaces, pendants, and chains</li>
        <li>Diamond bangles, bracelets, and earrings</li>
        <li>Loose diamonds of all cuts and carats</li>
        <li>Broken, old, or unmounted diamond jewellery</li>
      </ul>
      <p
        style={{
          paddingBottom: "2rem",
          fontSize: "18px",
          lineHeight: "1.6",
          margin: 0
        }}
      >
        ✅ All diamonds are tested for authenticity, clarity, cut, and carat, and
        evaluated fairly according to live diamond market rates.
      </p>

      {/* How It Works */}
      <h1
        style={{
          color: "#DAA520",
          fontSize: "2rem",
          paddingBottom: "2rem"
        }}
      >
        How Does Our Cash Against Diamonds Service Work?
      </h1>
      <ol
        style={{
          paddingBottom: "2rem",
          fontSize: "18px",
          lineHeight: "1.6",
          margin: 0
        }}
      >
        <li>
          <b>Visit Our Branch:</b> Bring your diamond items to any of our
          conveniently located branches in Delhi NCR.
        </li>
        <li>
          <b>Expert Appraisal:</b> Our certified professionals will assess your
          diamonds based on cut, clarity, carat, and color to provide an accurate
          valuation.
        </li>
        <li>
          <b>Receive Instant Cash:</b> Once you accept the offer, you’ll receive
          immediate payment on the spot.
        </li>
        <li>
          <b>Hassle-Free Process:</b> Our smooth and transparent system makes
          selling your diamonds simple and worry-free.
        </li>
      </ol>

      {/* Benefits */}
      <h1
        style={{
          color: "#DAA520",
          fontSize: "2rem",
          paddingBottom: "2rem"
        }}
      >
        Benefits of Selling Diamonds with Bharat Gold Buyer
      </h1>
      <ul
        style={{
          paddingBottom: "2rem",
          fontSize: "18px",
          lineHeight: "1.6",
          margin: 0
        }}
      >
        <li>
          <b>Quick Access to Funds:</b> Get instant cash for your diamonds without
          delays.
        </li>
        <li>
          <b>Fair Market Value:</b> We offer competitive prices based on
          real-time diamond market trends.
        </li>
        <li>
          <b>Secure Transactions:</b> Your safety is our priority—transactions are
          safe and confidential.
        </li>
        <li>
          <b>Professional Service:</b> Our expert team is dedicated to making
          your experience seamless and professional.
        </li>
      </ul>
            <h3 style={{ color: '#DAA520', fontSize: '1.5rem', paddingBottom: '1rem' }}>Customer Satisfaction is Our Priority</h3>
            <p>At <b>Bharat Gold Buyer</b>, we are committed to providing exceptional service and ensuring customer satisfaction. Our transparent process, fair pricing, and expert appraisals make us the preferred choice for cash against gold in Delhi NCR. Visit us today and experience the difference!</p>
            <h3 style={{ color: '#DAA520', fontSize: '1.5rem', paddingBottom: '1rem' }}>Contact Bharat Gold Buyer – Delhi NCR’s Trusted Cash Against Gold Partner</h3>
            <p>Call us now at 9990780499 or 9821598950 to check today’s gold rates or visit your nearest branch for a free evaluation and instant cash payout.</p>
          </div>
          
          {/* Right Side - Services Info */}
          <div className="services-info">
            <h2 className="services-title">Our Services</h2>
            
            <p className="services-description">
              At <strong>Standard Gold Buyer</strong>, we specialize in 
              buying your precious metals and diamonds at the highest market value. 
              Whether you want to sell gold, silver, or diamond valuables, we make the process 
              quick, secure, and rewarding.
            </p>
            
            <div className="services-list">
                          {services.map((service, index) => (
                            <div className="service-item" key={index}>
                              <ChevronRight className="service-icon" />
                              <span className="service-name"><Link to={`/${service.replace(/\s+/g, '-').toLowerCase()}`}>{service}</Link></span>
                            </div>
                          ))}
                        </div>
            
            {/* Call to Action Box */}
            <div className="cta-box">
              
              <div className="cta-content">
                <h3 className="cta-title">Ready To Sell Your Valuables?</h3>
                <Link to="/contactus"><button className="cta-button">Contact Us</button></Link>
              </div>
            </div>
            {/* Social Links and Popular Searches */}
            <SocialAndSearches />
          </div>
        </div>
      </div>
      <Footersection />
    </div>
  );
}

export default CashForDiamond
