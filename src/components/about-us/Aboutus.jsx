import React , { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import './aboutus.css';
import SocialAndSearches from '../cash-against gold/SocialAndSearches';
import Footersection from '../footersection/Footer-section';
import Logo from '../../assets/logo.png';
import Toggler from '../toggler/toggler';
import aboutus from '../../assets/aboutus.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
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
  return (
    <div className="header-section">
      <div className="hero-container">
        <div className="hero-background">
          <img src={aboutus} alt="we buy silver" className="hero-bg-image" />
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
          <h1 className="hero-title">ABOUT US</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="content-container">
          {/* Left Side - Decorative Card */}
          <div className="decorative-card-section">
            <div className="card-border">
              <img src={aboutus} alt="we buy gold" className="hero-bg-image" />
            </div>
          </div>
          {/* Right Side - Services Info */}
        </div>
      </div>
      <Footersection />
    </div>
  );
}

export default AboutUs;
