import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Target, Eye, Shield, Cpu } from 'lucide-react';

const AboutUs = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // HORIZONTAL SCROLL & PARALLAX
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

    // SEAMLESS ENTRY TRANSITION (No Blur)
    // We start at Scale 1.2 (slightly zoomed) and Scale down to 1.
    // Opacity fades in.
    const containerScale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]);
    const containerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    // Active Card Index based on Scroll
    const [activeIndex, setActiveIndex] = useState(0);

    // Update active index based on scroll (approximate for 4 cards)
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.25) setActiveIndex(0);
        else if (latest < 0.50) setActiveIndex(1);
        else if (latest < 0.75) setActiveIndex(2);
        else setActiveIndex(3);
    });

    const features = [
        {
            icon: Target,
            title: "Precision Engineering",
            desc: "Every pixel is calculated. Performance is not an afterthought, it's the foundation.",
            color: "text-amber-400",
            bg: "group-hover:bg-amber-500/10",
            border: "group-hover:border-amber-500/30",
            glow: "from-amber-500/20"
        },
        {
            icon: Eye,
            title: "Visual Intelligence",
            desc: "We don't just design websites. We design brand perception mechanics.",
            color: "text-indigo-400",
            bg: "group-hover:bg-indigo-500/10",
            border: "group-hover:border-indigo-500/30",
            glow: "from-indigo-500/20"
        },
        {
            icon: Shield,
            title: "Cyber Resilience",
            desc: "Beauty with armor. Enterprise-grade security protocols woven into the UI.",
            color: "text-emerald-400",
            bg: "group-hover:bg-emerald-500/10",
            border: "group-hover:border-emerald-500/30",
            glow: "from-emerald-500/20"
        },
        {
            icon: Cpu,
            title: "Neural Automation",
            desc: "Systems that think. We integrate AI workflows to scale your operations.",
            color: "text-rose-400",
            bg: "group-hover:bg-rose-500/10",
            border: "group-hover:border-rose-500/30",
            glow: "from-rose-500/20"
        }
    ];

    return (
        <section ref={targetRef} id="about" className="relative h-[300vh] bg-[#050505] z-30">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* TRANSFORM WRAPPER FOR SEAMLESS ENTRY */}
                <motion.div
                    style={{
                        scale: containerScale,
                        opacity: containerOpacity
                    }}
                    className="w-full h-full flex flex-col justify-center relative origin-center pt-20 md:pt-24"
                >

                    {/* MANIFESTO & SUMMARY (Right Side on desktop, top on mobile) */}
                    <div className="absolute top-6 right-6 md:top-10 md:right-10 lg:top-20 lg:right-20 flex flex-col items-end z-20 mix-blend-difference gap-4 md:gap-10 max-w-[90vw] md:max-w-sm">

                        {/* Summary Paragraph */}
                        <div className="text-right">
                            <h4 className="text-white text-sm md:text-lg font-bold mb-2">The Invisible Force.</h4>
                            <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed hidden md:block">
                                Novasec operates at the intersection of aesthetic dominance and technical rigor.
                                We don't just build software; we engineer improvements to your bottom line.
                            </p>
                        </div>

                        {/* Technical Tag */}
                        <div className="text-right hidden md:block">
                            <div className="w-20 h-[1px] bg-white/20 mb-2 ml-auto" />
                            <p className="text-white/40 text-xs font-mono tracking-widest uppercase">
                                / manifesto_v2.0
                            </p>
                        </div>
                    </div>

                    <div className="container mx-auto px-8 md:px-12 lg:px-20 relative z-10 max-w-5xl">
                        <div className="mb-8 md:mb-12">
                            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-white mb-4 md:mb-6 leading-tight break-words">
                                WE ARE <br />
                                <span className={`text-transparent bg-clip-text bg-gradient-to-r transition-colors duration-1000 ${activeIndex === 0 ? "from-amber-300 to-orange-400" :
                                    activeIndex === 1 ? "from-indigo-300 to-cyan-400" :
                                        activeIndex === 2 ? "from-emerald-300 to-green-400" :
                                            "from-rose-300 to-pink-400"
                                    }`}>
                                    ARCHITECTS
                                </span>
                            </h2>
                        </div>
                    </div>

                    {/* PREMIUM HORIZONTAL SCROLL (Parallax Cards) */}
                    <div className="w-full pl-[5vw] md:pl-[20vw] lg:pl-[40vw]">
                        <motion.div style={{ x }} className="flex gap-6 md:gap-10 w-max px-4 md:px-10">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`w-[280px] md:w-[350px] lg:w-[400px] h-[450px] md:h-[500px] lg:h-[550px] bg-neutral-900/50 backdrop-blur-md border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col justify-between transition-all duration-700 group relative overflow-hidden ${feature.bg} ${feature.border}`}
                                >
                                    {/* Abstract shapes inside card */}
                                    <div className={`absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br ${feature.glow} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                    {/* Scroll Active highlight */}
                                    {activeIndex === index && (
                                        <div className={`absolute inset-0 border-2 ${feature.color.replace('text', 'border')} opacity-20 rounded-[1.5rem] md:rounded-[2rem] pointer-events-none`} />
                                    )}

                                    <div className="relative z-10">
                                        <div className={`w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 md:mb-8 border border-white/5 transition-all duration-500 group-hover:scale-110 ${feature.border}`}>
                                            <feature.icon className={`w-6 h-6 md:w-8 md:h-8 text-white/50 transition-colors duration-500 ${feature.color}`} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 tracking-tight">{feature.title}</h3>
                                        <div className={`w-10 h-[1px] bg-white/20 mb-4 md:mb-6 group-hover:w-20 transition-all duration-500 ${feature.bg.replace('bg-', 'bg-')}`} />
                                        <p className="text-base md:text-lg leading-relaxed font-light text-white/50">
                                            {feature.desc}
                                        </p>
                                    </div>

                                    <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/20 flex items-center justify-center">
                                            <div className="w-1 h-1 bg-white rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
