import React from 'react';
import { ArrowRight } from 'lucide-react';
import './service-section.css';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Cash Against Gold",
      description: "Get instant cash for your gold jewelry, ornaments, and gold items",
      image: "/api/placeholder/100/100",
      bgColor: "#F5E6A3"
    },
    {
      id: 2,
      title: "Cash For Silver", 
      description: "Convert your silver jewelry and items into immediate cash",
      image: "/api/placeholder/100/100",
      bgColor: "#E8D5C4"
    },
    {
      id: 3,
      title: "Cash For Diamond",
      description: "Premium rates for diamond jewelry and gemstones",
      image: "/api/placeholder/100/100", 
      bgColor: "#DDD5C7"
    },
    {
      id: 4,
      title: "Cash For Silver & Gold Coins",
      description: "Best prices for collectible and investment coins",
      image: "/api/placeholder/100/100",
      bgColor: "#E0D3C1"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <h2 className="services-title">Our Services: What We Buy</h2>
          <p className="services-description">
            We accept a wide range of precious metal and gemstone items, including:
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className="service-card" style={{ '--bg-color': service.bgColor }}>
              <div className="service-image">
                <div className="image-placeholder">
                  {/* Gold jewelry illustration */}
                  {service.id === 1 && (
                    <div className="gold-items">
                      <div className="necklace">💍</div>
                      <div className="money-stack">💰</div>
                    </div>
                  )}
                  
                  {/* Silver items illustration */}
                  {service.id === 2 && (
                    <div className="silver-items">
                      <div className="person-avatar">👩</div>
                    </div>
                  )}
                  
                  {/* Diamond illustration */}
                  {service.id === 3 && (
                    <div className="diamond-items">
                      <div className="diamond">💎</div>
                      <div className="hands">🤝</div>
                    </div>
                  )}
                  
                  {/* Coins illustration */}
                  {service.id === 4 && (
                    <div className="coin-items">
                      <div className="coins-stack">
                        <div className="coin"></div>
                        <div className="coin"></div>
                        <div className="coin"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
              
              <div className="service-arrow">
                <ArrowRight className="arrow-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}