import React, { useState, useEffect } from 'react';
import styles from './HamburgerMenu.module.css'; // Import CSS Module
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5Q496FQM');`;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `(function(){
      document.addEventListener('click', function(e){
        if(e.target.closest('a[href^="tel:"]')){
          gtag('event', 'conversion', {'send_to': 'AW-17586452480/M5uDCKuj3occEIDw78FB'});
        }
      });
    })();`;
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.innerHTML = `var x = 0;
      var myVar = setInterval(function(){
        if(x == 0){
          try{
            if(document.querySelector('[class="status-message success"]')!=null && document.querySelector('[class="status-message success"]').innerText.indexOf("Message sent successfully")!=-1){
              gtag('event', 'conversion', {'send_to': 'AW-17586452480/6JJcCNjv1IccEIDw78FB'});
              clearInterval(myVar);
              x = 1;
            }
          }catch(e){}
        }
      }, 1000);`;
    document.body.appendChild(script3);
  }, []);
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