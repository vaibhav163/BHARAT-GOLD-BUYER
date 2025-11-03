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
// import Toggler from './components/toggler/toggler';
function App() {
  useEffect(() => {
    // Your effect logic here
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
    {/* <GeocodingMap /> */}
    </>
  );
}

export default App;
