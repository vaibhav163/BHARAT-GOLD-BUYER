import React  from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import './cash-against-gold-header.css';
import SocialAndSearches from './SocialAndSearches';
import cashforgold from '../../assets/cashforgold.png';
import Footersection from '../footersection/Footer-section';
import {Link} from 'react-router-dom';
import Hamburger from "../hamburger/hamburger"
import Logo from '../../assets/logo.png';
import Toggler from '../toggler/toggler';

export default function CashAgainstGoldHeader() {

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
          <img src={cashforgold} alt="we buy gold" className="hero-bg-image" />
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
          <h1 className="hero-title">Cash Against Gold</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-container">
          {/* Left Side - Decorative Card */}
          <div className="decorative-card-section">
            <div>
              <div className="card-border">
                <img src={cashforgold} alt="we buy gold" className="hero-bg-image" />
            </div>
            </div>
            <div className='main-container-text'>
              <h1 style={{ color: '#DAA520', fontSize: '2rem',
                paddingBottom: '2rem'
               }}>Cash Against Gold - Sell cash for gold in Ghaziabad, Noida & Delhi ncr</h1>
              <p style={{ paddingBottom: '2rem' , fontSize: '18px', lineHeight: '1.6', margin: 0 }}>Are you looking to get <b>instant cash against your gold</b> in Delhi, Noida, Gurgaon, Ghaziabad, Faridabad, or Greater Noida?
<b>Bharat Gold Buyer</b> offers trusted, reliable, and transparent cash-for-gold services with multiple branches across the Delhi NCR area. Get the best value for your gold assets without any hassle!</p>
            </div>
            <h1 style={{ color: '#DAA520', fontSize: '2rem',
                paddingBottom: '2rem'
               }} >Why Choose Sell Cash for gold in Noida, Gurgaon & Delhi NCR?</h1>
            <p style={{ paddingBottom: '2rem' , fontSize: '18px', lineHeight: '1.6', margin: 0 }} ><b>Bharat Gold Buyer</b> is your trusted partner for selling gold in Noida, Gurgaon, and Delhi NCR. Our commitment to transparency, fair pricing, and customer satisfaction sets us apart. Experience a hassle-free process and get the best value for your gold assets with us.</p>
            <ul style={{ paddingBottom: '2rem' , fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
              <li><b>Trusted and Reliable:</b> With years of experience, we have built a reputation for trust and reliability in the gold buying industry.</li>
              <li><b>Multiple Branches:</b> Conveniently located branches across Delhi NCR, including Noida, Gurgaon, Ghaziabad, Faridabad, and Greater Noida.</li>
              <li><b>Transparent Process:</b> We ensure complete transparency in our transactions, providing you with a clear understanding of the valuation and pricing.</li>
              <li><b>Instant Cash:</b> Get immediate payment for your gold, ensuring a quick and efficient selling experience.</li>
              <li><b>Expert Appraisal:</b> Our team of experts provides accurate and fair appraisals based on current market rates.</li>
              <li><b>Customer Satisfaction:</b> We prioritize customer satisfaction, ensuring a smooth and pleasant experience from start to finish.</li>
            </ul>
            <h3 style={{ color: '#DAA520', fontSize: '1.5rem', paddingBottom: '1rem' }}>How Does Our Cash Against Gold Service Work?</h3>
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
                <Link to="/contactus"><button className="cta-button">Contact us</button></Link>
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