import React from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../../assets/logo.png';
import './header.css';
import Toggler from '../toggler/toggler';
import Hamburger from '../hamburger/hamburger';
import Logo from '../../assets/logo.png';
import Home from '../../assets/home.png';
// import headerImage from '../../assets/header-image.png'; // Replace with your actual image path

const Header = () => {
  return (
    <div><div className="hero-container">
        <div className="hero-background">
          <img src={Home} alt="we buy gold and silver coins" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>

        {/* Navigation */}
        <nav className="hero-nav">
          <div className="nav-logo">
            <div className="logo-circle">
              <img src={logo} alt="Bharat Gold Buyer Logo" className="logo-image" />
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
          <h1 className="hero-title">Cash Against gold and silver coins</h1>
        </div>
      </div></div>
  )
}

export default Header