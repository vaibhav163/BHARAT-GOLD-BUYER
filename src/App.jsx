import React, { useEffect } from 'react';
import { Route, Routes ,Link } from 'react-router-dom';
import Home from './components/home-header/home';
import Aboutus from './components/about-us/Aboutus';
import Blog from './components/blog/Blog';
import CashAgainstGoldHeader from './components/cash-against gold/CashAgainstGold';
import Contactus from './components/contactus/contact-us';
import Cashfordiamond from './components/cash for diamond/cashfordiamond';
import Cashforsilver from './components/cash for silver/Cashforsilver';
import Cellgold from './components/cash for silver gold coins/Cashforcoins';
import './App.css';
import GeocodingMap from './components/geocoding/geocodingMap';
import GoldBuyerLandingPage from './components/home-header/GoldBuyerLandingPage';
import ScrollPopupForm from './components/scrollpopup/scrollPopUpForxm';
import { Analytics } from "@vercel/analytics/react"
// import Toggler from './components/toggler/toggler';
function App() {
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
    <>
      {/* <GoldBuyerLandingPage /> */}
      <ScrollPopupForm />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutus' element={<Aboutus />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/cash-against-gold' element={<CashAgainstGoldHeader />} />
      <Route path='/contactus' element={<Contactus />} />
      <Route path="cash-for-silver" element={<Cashforsilver />} />
      <Route path='/cash-for-diamond' element={<Cashfordiamond />} />
      <Route path='/sell-gold-coins' element={<Cellgold />} />
    </Routes>
    <Analytics/>
    {/* <GeocodingMap /> */}
    </>
  );
}

export default App;
