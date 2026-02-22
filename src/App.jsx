import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import AboutUs from './components/AboutUs';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';
import Lenis from 'lenis';

function App() {
  const [loading, setLoading] = useState(true);

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
    <LanguageProvider>
      <div className="bg-[#050505] min-h-screen text-white selection:bg-indigo-500/30 font-sans">
        <div className="noise-overlay" />

        <AnimatePresence mode="wait">
          {loading && (
            <Preloader onAnimationComplete={() => setLoading(false)} />
          )}
        </AnimatePresence>

        {!loading && (
          <>
            <Navbar />
            <main>
              <Hero />
              <div className="relative z-30 bg-[#050505] shadow-[0_-50px_100px_rgba(5,5,5,1)] mt-[-50vh]">
                <AboutUs />
                <ProblemSolution />
                <BentoGrid />
                <Footer />
              </div>
            </main>
          </>
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
