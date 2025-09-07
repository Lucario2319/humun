import React from 'react';
import HeroSection from '@/components/Hero';
import DirectorMessage from '@/components/DirectorMsg';
import QuickLinks from '@/components/QuickLinks';

// Main App Component
const App = () => {
  return (
    <>
      <HeroSection />
      <DirectorMessage />
      <QuickLinks />
    </>
  );
};

export default App;