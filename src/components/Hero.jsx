import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import heroBg from '../assets/fondo_hero.jpeg';

const Hero = () => {
    const { t } = useLanguage();
    const containerRef = useRef(null);

    // Mapeamos el scroll del contenedor
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // PARALLAX & ZOOM INTENSO (Deep Space Effect)
    // Sync with AboutUs Entry:
    // AboutUs starts at Scale 1.2, Blur 20px. 
    // Hero ends at Scale 1.2, Blur 20px.
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);
    const blur = useTransform(scrollYProgress, [0, 0.5, 1], ["0px", "0px", "20px"]); // Start blurring late

    // Staggered Text Animation
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const item = {
        hidden: { y: 100, opacity: 0, rotate: 5 },
        show: {
            y: 0, opacity: 1, rotate: 0,
            transition: { type: "spring", damping: 20, stiffness: 100 }
        }
    };

    return (
        <section ref={containerRef} id="hero" className="relative h-[200vh] w-full overflow-hidden bg-[#050505]">

            {/* STICKY CONTENT CONTAINER */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* BACKGROUND IMAGE WITH PARALLAX & BLUR */}
                <motion.div
                    style={{ scale, y, opacity, filter: useTransform(blur, value => `blur(${value})`) }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={heroBg}
                        alt="Deep Space Background"
                        className="w-full h-full object-cover opacity-80"
                    />
                    {/* FADE TO BLACK GRADIENT (Bottom) */}
                    <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10" />
                </motion.div>

                {/* TEXT CONTENT */}
                <div className="relative z-20 text-center px-4 mix-blend-screen flex flex-col items-center">
                    <motion.div style={{ filter: useTransform(blur, value => `blur(${value})`) }}>

                        {/* FRAMED TITLE CONTAINER */}
                        <div className="relative inline-block border-[1px] border-white/20 p-8 md:p-14 backdrop-blur-sm bg-white/[0.02]">
                            {/* Decorative Corners */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white" />

                            <motion.h1
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="text-6xl md:text-[10rem] font-bold tracking-tighter text-white leading-[0.85]"
                            >
                                {"NOVASEC".split("").map((char, i) => (
                                    <motion.span key={i} variants={item} className="inline-block origin-bottom">
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h1>
                        </div>

                        {/* SUBTITLE */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="text-base md:text-xl lg:text-3xl text-white/80 mt-8 md:mt-12 font-light tracking-wide font-serif italic px-4"
                        >
                            {t('hero.subtitle')}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
