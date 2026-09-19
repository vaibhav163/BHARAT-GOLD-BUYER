import React from 'react';
import { Link } from 'react-router-dom';
import './locality.css';
import Footersection from '../footersection/Footer-section';
import Toggler from '../toggler/toggler';
import Logo from '../../assets/logo.webp';
import heroImage from '../../assets/home.webp';
import { localities } from '../../data/localities';
import { BUSINESS } from '../../data/business';

const LocalityPage = ({ slug }) => {
  const data = localities.find((l) => l.slug === slug);

  if (!data) {
    return (
      <div className="header-section">
        <div className="locality-content-section">
          <div className="locality-content-container">
            <p>Page not found. <Link to="/">Return home</Link>.</p>
          </div>
        </div>
        <Footersection />
      </div>
    );
  }

  return (
    <div className="header-section">
      <div className="hero-container">
        <div className="hero-background">
          <img src={heroImage} alt={data.h1} className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>

        <nav className="hero-nav">
          <div className="nav-logo">
            <div className="logo-circle">
              <img src={Logo} alt="Bharat Gold Buyer Logo" className="logo-image" />
            </div>
            <div className="logo-text">
              <h2 style={{ fontSize: '11px', margin: 0, color: '#FFD700' }}>{BUSINESS.name}</h2>
            </div>
          </div>
          <Toggler />
        </nav>

        <div className="hero-content">
          <h1 className="locality-hero-title">{data.h1}</h1>
        </div>
      </div>

      <div className="locality-content-section">
        <div className="locality-content-container">
          {data.distance && <div className="locality-distance">📍 {data.distance}</div>}

          {data.intro.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          {data.areasServed && (
            <div className="locality-areas-served">
              {data.areasServed.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          )}

          {data.faq && (
            <div className="locality-faq">
              <h2>Frequently Asked Questions</h2>
              {data.faq.map((item) => (
                <div className="locality-faq-item" key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          )}

          <div className="locality-cta">
            <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
          </div>
        </div>
      </div>

      <Footersection />
    </div>
  );
};

export default LocalityPage;