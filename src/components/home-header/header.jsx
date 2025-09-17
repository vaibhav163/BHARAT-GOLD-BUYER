import React, { useState } from 'react';
import { ChevronDown, ArrowRight, ChevronRight } from 'lucide-react';
import './header.css';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="main-container">
      {/* Background decorative elements */}
      <div className="bg-decorations">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
        <div className="decoration decoration-3"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo-circle">
            <span>BGB</span>
          </div>
          <div className="logo-text">
            <h1>BHARAT</h1>
            <h2>GOLD BUYER</h2>
          </div>
        </div>

        <div className="nav-menu">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About Us</a>
          <div className={`dropdown ${dropdownOpen ? 'active' : ''}`}>
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="nav-link dropdown-btn"
            >
              <span>What We Buy</span>
              <ChevronDown className="dropdown-arrow" />
            </button>
            <div className="dropdown-content">
              <a href="#">Gold Jewelry</a>
              <a href="#">Silver Items</a>
              <a href="#">Diamonds</a>
              <a href="#">Coins</a>
            </div>
          </div>
          <a href="#" className="nav-link">Blog</a>
          <button className="contact-btn">Contact Us</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Left Content */}
        <div className="content-left">
          <h1 className="main-heading">
            Sell Gold<br />
            For Instant<br />
            Cash In<br />
            <span className="highlight">Delhi NCR</span>
          </h1>
          
          <div className="cta-buttons">
            <button className="primary-btn">Let's Get Started</button>
            <button className="arrow-btn">
              <ArrowRight className="arrow-icon" />
            </button>
          </div>

          <p className="tagline">
            // Trusted Gold, Silver &<br />
            Diamond Buyers - Get<br />
            <span className="highlight">Maximum Value Today !</span>
          </p>
        </div>

        {/* Right Content */}
        <div className="content-right">
          {/* Happy Clients */}
          <div className="happy-clients">
            <div className="client-avatars">
              <div className="avatar avatar-1">👩</div>
              <div className="avatar avatar-2">👨</div>
              <div className="avatar avatar-3">👩</div>
              <div className="avatar avatar-plus">+</div>
            </div>
            <div className="client-stats">
              <div className="stats-number">6+K</div>
              <div className="stats-label">Happy Clients</div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-icon">
                <div className="gold-text">We are buying</div>
                <div className="gold-word">GOLD</div>
              </div>
              <div className="testimonial-info">
                <h3>SONA LAO</h3>
                <h4>PAISE PAO</h4>
                <button className="read-more">
                  <span>Read More</span>
                  <ChevronRight className="read-more-arrow" />
                </button>
              </div>
            </div>
          </div>

          {/* Floating coins */}
          <div className="floating-coins">
            <div className="coin coin-1"></div>
            <div className="coin coin-2"></div>
            <div className="coin coin-3"></div>
          </div>
        </div>
      </main>

      {/* Background overlay */}
      <div className="bg-overlay">
        <div className="overlay-gradient"></div>
        <div className="jewelry-pattern pattern-1"></div>
        <div className="jewelry-pattern pattern-2"></div>
      </div>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn">
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  );
}