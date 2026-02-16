import React, { useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import AboutUs from './components/AboutUs';
import BentoGrid from './components/BentoGrid'; // Stacking Services + Summary
import Footer from './components/Footer';
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-indigo-500/30 font-sans">
      <div className="noise-overlay" />

      <Preloader />

      <Navbar />

      <main>
        {/* PARALLAX HERO (Fixed/Sticky behind) */}
        <Hero />

        {/* RELATIVE CONTENT (Slides Over Hero) 
            Use negative margin to pull content up over the "fading" hero 
        */}
        <div className="relative z-30 bg-[#050505] shadow-[0_-50px_100px_rgba(5,5,5,1)] mt-[-50vh]">
          <AboutUs />
          <ProblemSolution />
          <BentoGrid /> {/* Includes Services Stack & Summary Grid */}
        </div>
      </main>

      <div id="contact" className="relative z-30 bg-[#050505]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
