import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import PreloaderOverlay from './components/Preloader';
import Hero from './components/Hero';
import PainPoint from './components/PainPoint';
import BentoGrid from './components/BentoGrid';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-void-black min-h-screen text-off-white selection:bg-white selection:text-black">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Preloader */}
      <PreloaderOverlay onAnimationComplete={() => setLoading(false)} />

      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <PainPoint />
        <BentoGrid />
        <Timeline />
        <Footer />
      </main>
    </div>
  );
}

export default App;
