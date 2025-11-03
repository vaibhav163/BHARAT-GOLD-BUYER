import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './scroll-popup.css';

export default function ScrollPopupForm() {
  const form = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show popup after scrolling down 300px
      if (window.scrollY > 300 && !sessionStorage.getItem('popupShown')) {
        setIsVisible(true);
        sessionStorage.setItem('popupShown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!formData.name || !formData.phone || !formData.service) {
      setFormStatus('validation');
      setTimeout(() => setFormStatus(''), 5000);
      return;
    }
    
    setIsSubmitting(true);
    setFormStatus('');

    try {
      // EmailJS credentials
      const result = await emailjs.sendForm(
        'service_3osu5ci',        // Your Service ID
        'template_o85ywxv',       // Your Template ID
        form.current,
        'SiYNK32BUcvCsfqXz'       // Your Public Key
      );

      if (result.text === 'OK') {
        setFormStatus('success');
        setFormData({ name: '', phone: '', service: '' });
        
        // Close popup after 2 seconds on success
        setTimeout(() => {
          setIsVisible(false);
        }, 2000);
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

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="popup-overlay" onClick={handleClose}></div>
      
      {/* Popup Form */}
      <div className="popup-container">
        <button className="popup-close-btn" onClick={handleClose}>
          <X className="close-icon" />
        </button>
        
        <div className="popup-content">
          <div className="popup-header">
            <div className="popup-icon">💰</div>
            <h2 className="popup-title">Get Best Price for Your Gold!</h2>
            <p className="popup-subtitle">
              Fill in your details and get instant valuation from Bharat Gold Buyer
            </p>
          </div>
          
          <form ref={form} onSubmit={handleSubmit} className="popup-form">
            <div className="form-group">
              <label className="popup-label">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="popup-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="popup-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXXXXXXX"
                className="popup-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="popup-label">What do you want to sell?</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="popup-select"
                required
              >
                <option value="">Select Service</option>
                <option value="gold">Gold Jewelry</option>
                <option value="silver">Silver Items</option>
                <option value="diamond">Diamond Jewelry</option>
                <option value="coins">Gold/Silver Coins</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="popup-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Get Free Valuation'}
            </button>
            
            {formStatus === 'success' && (
              <div className="status-message success">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {formStatus === 'error' && (
              <div className="status-message error">
                Failed to send message. Please check console or try again.
              </div>
            )}
            {formStatus === 'validation' && (
              <div className="status-message error">
                Please fill in all required fields.
              </div>
            )}
            
            <p className="popup-disclaimer">
              🔒 Your information is safe and secure with us
            </p>
          </form>
        </div>
      </div>
    </>
  );
}