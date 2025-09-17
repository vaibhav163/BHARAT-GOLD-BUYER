import React from 'react';
import Header from './components/home-header/header';
// import { Route, Routes ,Link } from 'react-router-dom';
import FeaturesGridSection from './components/home-header/Featuregrid';
import Coup from './components/home-header/coup';
import BranchesSection from './components/home-header/Branch-section';
import ServicesSection from './components/home-header/Servicesection';
import FAQSection from './components/home-header/FAQsection';
import FooterSection from './components/footersection/Footer-section';
import DifferenceSection from './components/home-header/Differencesection';

function App() {

  return (
    <>
    <Header />
    <FeaturesGridSection />
    <Coup />
    <BranchesSection />
    <ServicesSection />
    <FAQSection />
    <FooterSection />
    <DifferenceSection />
    </>
  );
}

export default App;
