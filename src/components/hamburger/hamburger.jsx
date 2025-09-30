import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css'; // Import CSS Module
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerContainer}>
      {/* Hamburger Button (Fixed Position) */}
      <button
        className={`${styles.hamburgerButton} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>

      {/* Navigation Menu (Slides In/Out) */}
      <nav className={`${styles.menu} ${isOpen ? styles.visible : ''}`}>
        <ul className={styles.menuList}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/aboutus" onClick={toggleMenu}>About</Link></li>
          <li>Services</li>
          <li>
            <Link to="/cash-against-gold" onClick={toggleMenu}>Cash Against Gold</Link></li>
            <li><Link to="/cash-for-silver" onClick={toggleMenu}>Cash For Silver</Link></li>
            <li><Link to="/cash-for-diamond" onClick={toggleMenu}>Cash For Diamond</Link></li>
            <li><Link to="/sell-gold-coins" onClick={toggleMenu}>Sell Gold Coins</Link></li>
          <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
          <li><Link to="/contactus" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>

      {/* Overlay (Closes menu when clicked) */}
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </div>
  );
};

export default HamburgerMenu;