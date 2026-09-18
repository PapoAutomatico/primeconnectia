import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { ContactSchedule } from './components/ContactSchedule';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingChat } from './components/FloatingChat';
import { PricingPlan } from './types';

export function App() {
  const [selectedPlanForDemo, setSelectedPlanForDemo] = useState<PricingPlan | null>(null);

  const handleOpenSchedule = () => {
    const el = document.getElementById('agendamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlanForDemo(plan);
    const el = document.getElementById('agendamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white">
      {/* Top Header with Logo */}
      <Header onOpenSchedule={handleOpenSchedule} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with WhatsApp Simulator */}
        <Hero onOpenSchedule={handleOpenSchedule} />

        {/* How it Works & Pillars */}
        <Features />

        {/* Detailed Subscription Plans & Custom Servers */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Fast Contact & Demo Scheduling */}
        <ContactSchedule initialPlan={selectedPlanForDemo} />

        {/* Blog & AI Advantages */}
        <Blog onOpenSchedule={handleOpenSchedule} />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Chat for Immediate Support */}
      <FloatingChat />
    </div>
  );
}

export default App;
