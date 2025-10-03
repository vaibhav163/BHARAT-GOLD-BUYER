import React from 'react';
import { ChevronRight, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import './footer-section.css';

export default function FooterSection() {
  const quickLinks = [
    { name: "Home", href: "/home" },
    { name: "About Us", href: "/aboutus" },
    { name: "Our Blog", href: "/blog" },
    { name: "Contact Us", href: "/contactus" }
  ];

  const services = [
    { name: "Cash Against Gold", href: "/cash-against-gold" },
    { name: "Cash For Silver", href: "/cash-for-silver" },
    { name: "Cash For Diamond", href: "/cash-for-diamond" },
    { name: "Cash For Silver Gold Coins", href: "/cash-for-silver-gold-coins" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/17AHorta7c/", name: "Facebook" },
    { icon: Instagram, href: "https://maps.app.goo.gl/2SisYmVYCUaQmpSZ7", name: "Instagram" },
    { icon: Twitter, href: "https://maps.app.goo.gl/2SisYmVYCUaQmpSZ7", name: "Twitter" },
    { icon: Linkedin, href: "https://maps.app.goo.gl/2SisYmVYCUaQmpSZ7", name: "LinkedIn" },
    { icon: Youtube, href: "https://maps.app.goo.gl/2SisYmVYCUaQmpSZ7", name: "YouTube" }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-company">
          <div className="footer-logo">
            <div className="logo-circle">
              <span>BGB</span>
            </div>
            <div className="logo-text">
              <h3>BHARAT</h3>
              <h4>GOLD BUYER</h4>
            </div>
          </div>
          
          <p className="company-description">
            <strong>Bharat Gold Buyer</strong> is one of the most trusted and certified 
            gold, silver, and diamond buyers in <strong>Delhi NCR</strong>. We offer{' '}
            <strong>instant cash</strong> for your precious metals with{' '}
            <strong>transparent evaluation</strong> and <strong>top market rates</strong>.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="links-list">
            {quickLinks.map((link, index) => (
              <li key={index} className="link-item">
                <ChevronRight className="link-icon" />
                <a href={link.href} className="link-text">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-services">
          <h3 className="footer-heading">Our Services</h3>
          <ul className="links-list">
            {services.map((service, index) => (
              <li key={index} className="link-item">
                <ChevronRight className="link-icon" />
                <a href={service.href} className="link-text">{service.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3 className="footer-heading">Contact Info</h3>
          <div className="contact-list">
            <div className="contact-item">
              <Phone className="contact-icon" />
              <a href="tel:+919990780499" className="contact-text">+91 9990780499</a>
            </div>
            
            <div className="contact-item">
              <Phone className="contact-icon" />
              <a href="tel:+919821598950" className="contact-text">+91 9821598950</a>
            </div>
            
            <div className="contact-item">
              <Mail className="contact-icon" />
              <a href="mailto:bharatgoldbuyer@gmail.com" className="contact-text">
                bharatgoldbuyer@gmail.com
              </a>
            </div>
            
            <div className="contact-item">
              <Clock className="contact-icon" />
              <span className="contact-text">
                <a href='https://maps.app.goo.gl/2SisYmVYCUaQmpSZ7' target='_blank' rel='noreferrer' className='address-link'>
                  Open All 7 Days | 10:00 AM – 8:00 PM
                </a>
              </span>
            </div>
          </div>

          {/* Social Media */}
          <div className="social-media">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.name}
                >
                  <IconComponent className="social-icon" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            Copyright ©2025 <strong>BHARAT GOLD BUYER</strong>, All Rights Reserved. 
            Developed by <span className="developer"> Vaibhav Singh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}