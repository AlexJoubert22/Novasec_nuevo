import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    const revealVariant = {
        hidden: { y: "100%" },
        visible: {
            y: "0%",
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 2.6 // Wait for preloader
            }
        }
    };

    const revealVariant2 = {
        hidden: { y: "100%" },
        visible: {
            y: "0%",
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 2.8
            }
        }
    };


    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-void-black"
        >
            {/* Spotlight Effect */}
            <div
                className="absolute pointer-events-none w-[600px] h-[600px] bg-accent-glow rounded-full mix-blend-soft-light filter blur-3xl opacity-20"
                style={{
                    transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
                    transition: "transform 0.1s ease-out"
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center max-w-6xl px-4">
                <div className="overflow-hidden mb-2 p-2">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={revealVariant}
                        className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-off-white leading-tight"
                    >
                        Tu negocio merece <br /> estar en internet.
                    </motion.h1>
                </div>

                <div className="overflow-hidden p-2">
                    <motion.h2
                        initial="hidden"
                        animate="visible"
                        variants={revealVariant2}
                        className="text-2xl md:text-4xl font-display font-medium tracking-tight text-white/80"
                    >
                        Nosotros hacemos que sea fácil.
                    </motion.h2>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1 }}
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
