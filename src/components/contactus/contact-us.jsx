import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactus.css';
import Footersection from '../footersection/Footer-section';
import Logo from '../../assets/logo.png';
import Toggler from '../toggler/toggler';
import contactus from '../../assets/contactus.png';
import { Link } from 'react-router-dom';



const ContactUs = () => {
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   phone: '',
  //   service: '',
  //   helpType: '',
  //   email: '',
  //   message: ''
  // });
  const form = useRef();
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
   const contactInfo = [
    {
      icon: "📞",
      title: "Phone Number",
      info: "+91 9990780499",
      link: "tel:+919990780499",
    },
    {
      icon: "📞",
      title: "Phone Number",
      info: "+91 95999633093",
      link: "tel:+9195999633093",
    },
    {
      icon: "✉️",
      title: "Email Address",
      info: "bharatgoldbuyer@gmail.com",
      link: "mailto:bharatgoldbuyer@gmail.com",
    },
    {
      icon: "🕐",
      title: "Work Hour",
      info: "7 Days Open 10 AM to 7 PM",
      link: "https://maps.app.goo.gl/fCWVriF2375CN8YA7",
    }
  ];
   const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields are filled
    // if (!formData.firstName || !formData.lastName || !formData.phone || 
    //     !formData.service || !formData.helpType || !formData.email || !formData.message) {
    //   setFormStatus('validation');
    //   setTimeout(() => setFormStatus(''), 5000);
    //   return;
    // }
    setIsSubmitting(true);
    setFormStatus('');
  try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.sendForm(
        'service_k4bgdoq',        // Replace with your EmailJS Service ID
        'template_1rxzq8m',       // Replace with your EmailJS Template ID
        form.current,
        'SiYNK32BUcvCsfqXz'         // Replace with your EmailJS Public Key
      );

      if (result.text === 'OK') {
        setFormStatus('success');
        form.current.reset();
      }
    } catch (error) {
      console.error('Email send error:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setFormStatus('');
      }, 5000);
    }
  };
  // const blogPosts = [
  //   {
  //     id: 1,
  //     image: ,
  //     alt: "Blog Image 1",
  //     title: "Why Choosing A Local Gold Buyer In Noida And Delhi NCR Makes All The Difference",
  //     description: "When it comes to selling your gold, silver, or diamonds, one thing matters as much as price — location. Choosing a local, certified gold buyer can save you time, offer better security, and help you get the maximum value for your valuables. At Standard Gold Buyer, we've created a strong local presence across Delhi NCR [...]",
  //     bgColor: "#F5F2EF"
  //   },
  //   {
  //     id: 2,
  //     image: ,
  //     alt: "Blog Image 2  ",
  //     title: "Where To Sell Gold For Instant Cash In Ghaziabad & Delhi NCR – A Location-Wise Guide",
  //     description: "Looking for a trusted place to sell your gold, silver, or diamond items in Delhi NCR? Choosing the right location isn't just about convenience— it's about trust, safety, and getting the maximum value for your jewellery. That's why Standard Gold Buyer is the preferred destination across Delhi, Noida, Gurgaon, Ghaziabad, Faridabad, and Greater Noida. Let's explore [...]",
  //     bgColor: "#F5F2EF"
  //   },
  //   {
  //     id: 3,
  //     image: ,
  //     alt: "Blog Image 3",
  //     title: "Best Gold Buyer In Delhi NCR – How To Get The Best Price For Your Gold In Delhi NCR",
  //     description: "How to Get the Best Price for Your Gold in Delhi NCR (Delhi | Noida | Gurgaon | Ghaziabad | Faridabad | Greater Noida) If you're planning to sell your gold and get instant cash, choosing the right gold buyer in Delhi NCR is crucial. With fluctuating gold rates and a growing number of buyers, [...]",
  //     bgColor: "#F5F2EF",
  //     // textColor: "white",
  //     // descriptionColor: "#F5F2EF"
  //   }
  // ];
  return (
    <div className="header-section">
      <div className="hero-container">
        <div className="hero-background">
          <img src={contactus} alt="we buy silver" className="hero-bg-image" />
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
          <h1 className="hero-title">CONTACT US</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <section className="contact-form-section">
      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="contact-info-grid">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-info-card">
              <a href={item.link} style={{ textDecoration: 'none', color: 'inherit' }} >
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-details">
                <h3 className="contact-title">{item.title}</h3>
                <p className="contact-info">{item.info}</p>
              </div>
              </a>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="form-wrapper">
          <h2 className="form-heading">Send Us Message</h2>
          <p className="form-subheading">
            We're here to help you sell your gold, silver, or diamonds with ease and confidence. 
            Whether you have a question, want to know today's gold price, or are ready to visit us 
            for a quick valuation — we're just a call or message away.
          </p>

          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  placeholder="First Name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="services" className="form-label">Services</label>
                <select
                  id="services"
                  name="service"
                  required
                  className="form-select"
                >
                  <option value="">Select Here</option>
                  <option value="cash-against-gold">Cash Against Gold</option>
                  <option value="cash-for-silver">Cash For Silver</option>
                  <option value="cash-for-diamond">Cash For Diamond</option>
                  <option value="cash-for-coins">Cash For Silver Gold Coins</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="help" className="form-label">How can we help</label>
                <select
                  id="help"
                  name="help_type"
                  required
                  className="form-select"
                >
                  <option value="">Select Here</option>
                  <option value="valuation">Get Valuation</option>
                  <option value="price-inquiry">Price Inquiry</option>
                  <option value="visit-branch">Visit Branch</option>
                  <option value="other">Other Query</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="4"
                required
                className="form-textarea"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>

            {/* Status Messages */}
            {formStatus === 'success' && (
              <div className="status-message success">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {formStatus === 'error' && (
              <div className="status-message error">
                Failed to send message. Please try again or contact us directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
      </div>
      <Footersection />
    </div>

  );
}

export default ContactUs;