import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Hero';
import DirectorMessage from '@/components/DirectorMsg';
import QuickLinks from '@/components/QuickLinks';

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <DirectorMessage />
      <QuickLinks />
    </div>
  );
};

export default App;