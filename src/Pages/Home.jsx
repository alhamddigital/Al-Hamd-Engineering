import React, { Suspense } from 'react';
import HeroSection from '../Components/HeroSection';
import CategoryPlants from '../Components/CategoryPlants';
import About from '../Components/About';

// Lazy load the components
const Values = React.lazy(() => import('../Components/Values'));
const Clients = React.lazy(() => import('../Components/Clients'));
const Contact = React.lazy(() => import('../Components/Contact'));
const Footer = React.lazy(() => import('../Components/Footer'));

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoryPlants />
      <About />
      <Suspense fallback={<div>Loading Values Section...</div>}>
        <Values />
      </Suspense>
      <Suspense fallback={<div>Loading Clients Section...</div>}>
        <Clients />
      </Suspense>
      <Suspense fallback={<div>Loading Contact Section...</div>}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
