import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { ChevronDown, ChevronRight } from 'lucide-react';
import Hamburger from "../hamburger/hamburger"

const Toggler = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div><div className="hamburger-sign" ><Hamburger /></div>
          <div className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/aboutus" className="nav-link">About Us</Link>
            <div className={`nav-dropdown ${dropdownOpen ? 'active' : ''}`}>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="nav-link dropdown-btn"
              >
                <span>What We Buy</span>
                <ChevronDown className="dropdown-arrow" />
              </button>
              <div className="dropdown-content">
                <Link to="/cash-against-gold">Gold Jewelry</Link>
                <Link to="/cash-for-silver">Silver Items</Link>
                <Link to="/cash-for-diamond">Diamonds</Link>
                <Link to="/sell-gold-coins">Coins</Link>
              </div>
            </div>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contactus"><button className="contact-btn">Contact Us</button></Link>
          </div></div>
  )
}

export default Toggler