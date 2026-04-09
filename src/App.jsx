import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Testimonials />
      </main>
      <FloatingActions />
      <Footer />
    </>
  );
}

export default App;
