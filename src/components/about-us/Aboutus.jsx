import React from 'react';
import { ChevronRight } from 'lucide-react';
import './aboutus.css';
import SocialAndSearches from '../cash-against gold/SocialAndSearches';
import Footersection from '../footersection/Footer-section';
import Logo from '../../assets/logo.png';
import Toggler from '../toggler/toggler';
import aboutus from '../../assets/aboutus.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="header-section">
      <div className="hero-container">
        <div className="hero-background">
          <img src={aboutus} alt="we buy silver" className="hero-bg-image" />
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
          <h1 className="hero-title">ABOUT US</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-container">
          {/* Left Side - Decorative Card */}
          <div className="decorative-card-section">
            <div className="card-border">
              <img src={aboutus} alt="we buy gold" className="hero-bg-image" />
            </div>
          </div>
          {/* Right Side - Services Info */}
        </div>
      </div>
      <Footersection />
    </div>
  );
}

export default AboutUs;
