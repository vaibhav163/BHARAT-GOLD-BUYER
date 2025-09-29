import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css'; // Import CSS Module

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
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>

      {/* Overlay (Closes menu when clicked) */}
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </div>
  );
};

export default HamburgerMenu;