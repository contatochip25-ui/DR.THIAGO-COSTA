import React, { useEffect } from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import WhatToExpect from './components/WhatToExpect';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import TargetAudience from './components/TargetAudience';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

const App: React.FC = () => {
  // Simple effect to handle smooth scrolling if hash links are used
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900">
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <WhatToExpect />
        <Bio />
        <Gallery />
        <TargetAudience />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
};

export default App;