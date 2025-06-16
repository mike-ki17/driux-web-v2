import React from 'react';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import MaintenancePlans from './components/MaintenancePlans';
import ContactForm from './components/ContactForm';
import TrustSection from './components/TrustSection';
import FinalCTA from './components/FinalCTA';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <ServicesSection />
      <MaintenancePlans />
      <TrustSection />
      <ContactForm />
      <FinalCTA />
      <WhatsAppButton />
    </div>
  );
}

export default App;