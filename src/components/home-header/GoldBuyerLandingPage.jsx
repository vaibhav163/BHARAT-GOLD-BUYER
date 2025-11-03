// src/components/GoldBuyerLandingPage.jsx
import React, { useState } from 'react';
import './GoldBuyerLandingPage.css'; // This will be our CSS file

// Import your static assets (replace with your actual paths)
import logoImage from '../../assets/logo.png'; // e.g., Bharat Gold Buyer logo
import backgroundImage from '../../assets/cashforgold.png'; // The main background image
import happyClientsImage1 from '../../assets/aboutus.png'; // Image for happy client avatar
import happyClientsImage2 from '../../assets/aboutus.png'; // Image for happy client avatar
import happyClientsImage3 from '../../assets/aboutus.png'; // Image for happy client avatar
import weBuyGoldAdImage from '../../assets/wearebuyinggold.png'; // The smaller ad image

const GoldBuyerLandingPage = () => {
    // Example of using useState for dynamic content or interactions
    // const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [clientCount, setClientCount] = useState(6); // Dynamic client count if needed

    const handleGetStartedClick = () => {
        // Implement your logic for "Let's Get Started"
        console.log("Get Started clicked!");
        // e.g., navigate to a form, open a modal
    };

    const handleAdReadMore = () => {
        // Implement your logic for the smaller ad's "Read More"
        console.log("Ad Read More clicked!");
    };

    return (
        <div className="landing-page-container">
            {/* Background Image Overlay */}
            <div className="background-overlay" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

            {/* Header / Navigation Bar */}
            <header className="header">
                <div className="logo-section">
                    <img src={logoImage} alt="Standard Gold Buyer Logo" className="brand-logo" />
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">What We Buy</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><button className="contact-button">Contact Us</button></li>
                    </ul>
                </nav>
            </header>

            {/* Main Hero Section */}
            <main className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Sell Gold For Instant Cash In Delhi NCR</h1>

                    <div className="cta-buttons">
                        <button className="get-started-button" onClick={handleGetStartedClick}>
                            Let's Get Started
                            <span className="arrow-icon">→</span>
                        </button>
                    </div>

                    <p className="trusted-text">
                        // Trusted Gold, Silver & Diamond Buyers - Get Maximum Value Today !
                    </p>
                </div>

                {/* Right-aligned elements in Hero */}
                <div className="hero-side-elements">
                    <div className="happy-clients">
                        <div className="client-avatars">
                            <img src={happyClientsImage1} alt="Client 1" className="client-avatar" />
                            <img src={happyClientsImage2} alt="Client 2" className="client-avatar" />
                            <img src={happyClientsImage3} alt="Client 3" className="client-avatar" />
                            <div className="more-clients-placeholder">+K</div> {/* Use dynamic 'clientCount' here if desired */}
                        </div>
                        <span className="client-count">{clientCount}+K Happy Clients</span>
                    </div>

                    <div className="small-ad-card">
                        <img src={weBuyGoldAdImage} alt="We are buyers of gold" className="ad-image" />
                        <div className="ad-content">
                            <p className="ad-title">SONA LAO PAISE PAO</p>
                            <button className="read-more-button" onClick={handleAdReadMore}>
                                Read More
                                <span className="arrow-icon">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* You might have other sections here like About Us, Services, Testimonials etc. */}
            {/* Example:
            <section id="about" className="about-section">
                <h2>About Us</h2>
                <p>Learn more about Bharat Gold Buyer...</p>
            </section>
            */}
        </div>
    );
};

export default GoldBuyerLandingPage;