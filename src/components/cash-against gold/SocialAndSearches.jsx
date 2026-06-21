import React ,{useEffect} from 'react';
import styles from './SocialAndSearches.module.css'; // Import CSS Module

const SocialAndSearches = () => {
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
  const socialLinks = [
    { icon: 'f', url: '#' }, // You might replace 'f' with Font Awesome icons or SVGs
    { icon: 'i', url: '#' },
    { icon: 't', url: '#' },
    { icon: 'l', url: '#' },
    { icon: 'y', url: '#' },
  ];

  const popularSearches = [
    "Reliable gold buyers Delhi NCR",
    "Best gold buyer near me",
    "Best Gold jewellery buyers Noida",
    "Diamond jewellery selling Gurgaon",
    "Sell old gold in Delhi",
    "Cash for silver coins NCR",
    "Sell broken gold jewellery Delhi",
    "Instant gold valuation Delhi NCR",
    "Trusted gold buyers Faridabad",
    "Cash for silver Delhi NCR",
    "Cash for gold Delhi",
    "Gold buyer Delhi NCR",
    "Sell gold for cash Noida",
    "Instant cash for gold Gurgaon",
    "Gold buying Ghaziabad",
    "Cash against gold Faridabad",
    "Sell silver for cash Delhi",
    "Cash for diamond Delhi NCR",
    "Sell gold coins Delhi",
    "Silver coin buyer Delhi NCR",
    "Where to sell gold in Delhi NCR for best price",
    "How to get instant cash for gold jewellery in Noida",
    "Best place to sell silver coins in Gurgaon",
    "How to sell diamond jewellery safely in Delhi NCR",
    "Reliable cash for gold services near me",
    "Sell gold coins for highest value in Delhi NCR",
    "Top gold buyers in Ghaziabad with instant payment",
    "Cash for gold Delhi"
  ];

  return (
    <div className={styles.container}>
      {/* Follow Us Section */}
      <h2 className={styles.sectionTitle}>Follow Us</h2>
      <div className={styles.socialLinks}>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={styles.socialIcon}
            aria-label={`Follow us on ${link.icon}`} // Accessibility
          >
            {/* In a real app, you'd use a proper icon library like Font Awesome here */}
            {link.icon.toUpperCase()}
          </a>
        ))}
      </div>

      {/* Popular Searches Section */}
      <h2 className={styles.sectionTitle}>Popular Searches</h2>
      <ul className={styles.popularSearchesList}>
        {popularSearches.map((search, index) => (
          <li key={index} className={styles.searchItem}>
            <span className={styles.bullet}></span> {/* Custom bullet point */}
            <a href="#" className={styles.searchLink}> {/* Example link, replace with actual */}
              {search}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialAndSearches;