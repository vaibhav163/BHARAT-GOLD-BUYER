import React ,{useEffect} from 'react';
import { ChevronRight, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import './footer-section.css';

export default function FooterSection() {
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
  const quickLinks = [
    { name: "Home", href: "/home" },
    { name: "About Us", href: "/aboutus" },
    { name: "Our Blog", href: "/blog" },
    { name: "Contact Us", href: "/contactus" }
  ];

  const services = [
    { name: "Cash Against Gold", href: "/cash-against-gold" },
    { name: "Cash For Silver", href: "/cash-for-silver" },
    { name: "Cash For Diamond", href: "/cash-for-diamond" },
    { name: "Cash For Silver Gold Coins", href: "/cash-for-silver-gold-coins" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/17AHorta7c/", name: "Facebook" },
    { icon: Instagram, href: "https://maps.app.goo.gl/2SisYmVYCUaQmpSZ7", name: "Instagram" },
    { icon: Twitter, href: "https://maps.app.goo.gl/2SisYmVYCUaQmpSZ7", name: "Twitter" },
    { icon: Linkedin, href: "https://maps.app.goo.gl/2SisYmVYCUaQmpSZ7", name: "LinkedIn" },
    { icon: Youtube, href: "https://maps.app.goo.gl/2SisYmVYCUaQmpSZ7", name: "YouTube" }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-company">
          <div className="footer-logo">
            <div className="logo-circle">
              <span>BGB</span>
            </div>
            <div className="logo-text">
              <h3>BHARAT</h3>
              <h4>GOLD BUYER</h4>
            </div>
          </div>
          
          <p className="company-description">
            <strong>Bharat Gold Buyer</strong> is one of the most trusted and certified 
            gold, silver, and diamond buyers in <strong>Delhi NCR</strong>. We offer{' '}
            <strong>instant cash</strong> for your precious metals with{' '}
            <strong>transparent evaluation</strong> and <strong>top market rates</strong>.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="links-list">
            {quickLinks.map((link, index) => (
              <li key={index} className="link-item">
                <ChevronRight className="link-icon" />
                <a href={link.href} className="link-text">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-services">
          <h3 className="footer-heading">Our Services</h3>
          <ul className="links-list">
            {services.map((service, index) => (
              <li key={index} className="link-item">
                <ChevronRight className="link-icon" />
                <a href={service.href} className="link-text">{service.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3 className="footer-heading">Contact Info</h3>
          <div className="contact-list">
            <div className="contact-item">
              <Phone className="contact-icon" />
              <a href="tel:+919990780499" className="contact-text">+91 9990780499</a>
            </div>
            
            <div className="contact-item">
              <Phone className="contact-icon" />
              <a href="tel:+919821598950" className="contact-text">+91 9821598950</a>
            </div>
            
            <div className="contact-item">
              <Mail className="contact-icon" />
              <a href="mailto:bharatgoldbuyer@gmail.com" className="contact-text">
                bharatgoldbuyer@gmail.com
              </a>
            </div>
            
            <div className="contact-item">
              <Clock className="contact-icon" />
              <span className="contact-text">
                <a href='https://maps.app.goo.gl/2SisYmVYCUaQmpSZ7' target='_blank' rel='noreferrer' className='address-link'>
                  Open All 7 Days | 10:00 AM – 8:00 PM
                </a>
              </span>
            </div>
          </div>

          {/* Social Media */}
          <div className="social-media">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.name}
                >
                  <IconComponent className="social-icon" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            Copyright ©2025 <strong>BHARAT GOLD BUYER</strong>, All Rights Reserved. 
            Developed by <span className="developer"> Vaibhav Singh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}