import React from 'react'
import Header from './header';
import FeaturesGridSection from './Featuregrid';
import Coup from './coup';
import DifferenceSection from './Differencesection';
import BranchesSection from './Branch-section';
import ServicesSection from './Servicesection';
import FAQSection from './FAQsection';
import FooterSection from '../footersection/Footer-section';

const Home = () => {
  return (
    <div>
        <Header />
        <FeaturesGridSection />
        <Coup />
        <DifferenceSection />
        <BranchesSection />
        <ServicesSection />
        <FAQSection />
        <FooterSection />
    </div>
  )
}

export default Home