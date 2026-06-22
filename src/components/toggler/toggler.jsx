import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { ChevronDown, ChevronRight } from 'lucide-react';
import Hamburger from "../hamburger/hamburger"

const Toggler = () => {
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