import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, useInView } from 'framer-motion';
import {
    Cpu, Globe, MessageSquare, Search, RefreshCw, PenTool, BarChart3, ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// This array can now be removed from top-level if we move it inside BentoGrid or keep it but it needs translations
// I'll move it inside BentoGrid or pass t to it.
// I've already moved it inside BentoGrid in previous chunks.

const Card = ({ i, title, desc, icon: Icon, color, textColor, shadowColor, progress, range, targetScale, t, scrollToContact }) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className="flex flex-col relative w-[90vw] md:w-[85vw] lg:w-[1000px] h-[400px] md:h-[450px] lg:h-[500px] rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 lg:p-12 origin-top border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden z-20"
            >
                {/* BACKGROUND BLOB - STRONGER */}
                <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-30 mix-blend-screen ${color}`} />

                <div className="flex flex-col md:flex-row h-full gap-6 md:gap-12 relative z-10">
                    <div className="w-full md:w-1/2 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4 mb-6 md:mb-8">
                                <div className="p-2 md:p-3 bg-white/5 rounded-xl border border-white/10">
                                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
                                    {t('bento_grid.service')} {t(`bento_grid.services.${i}.id`)}
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 md:mb-6 text-white">
                                {title}
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl text-white/60 leading-relaxed font-light">
                                {desc}
                            </p>
                        </div>
                        <div
                            onClick={scrollToContact}
                            className="flex items-center gap-2 text-sm font-medium cursor-pointer group w-max text-white mt-4 md:mt-0"
                        >
                            <span className="group-hover:text-white/80 transition-colors">{t('bento_grid.start_project')}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>

                    {/* ICON CONTAINER - GLOW AURA */}
                    <div className="w-full md:w-1/2 relative h-[200px] md:h-full rounded-2xl overflow-hidden bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-500">
                        {/* Inner Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

                        <Icon
                            className={`w-40 h-40 transition-all duration-500 ${textColor}`}
                            style={{
                                filter: `drop-shadow(0 0 40px ${shadowColor}) drop-shadow(0 0 10px ${shadowColor})`, // Double shadow for intense glow
                                opacity: 1
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

const BentoGrid = () => {
    const { t } = useLanguage();
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "-10%" });

    const services = [
        {
            icon: Cpu,
            title: t('bento_grid.services.0.title'),
            shortLabel: t('bento_grid.services.0.shortLabel'),
            desc: t('bento_grid.services.0.desc'),
            color: "bg-cyan-500",
            textColor: "text-cyan-400",
            shadowColor: "rgba(34, 211, 238, 0.8)",
            id: "01"
        },
        {
            icon: Globe,
            title: t('bento_grid.services.1.title'),
            shortLabel: t('bento_grid.services.1.shortLabel'),
            desc: t('bento_grid.services.1.desc'),
            color: "bg-indigo-500",
            textColor: "text-indigo-400",
            shadowColor: "rgba(129, 140, 248, 0.8)",
            id: "02"
        },
        {
            icon: MessageSquare,
            title: t('bento_grid.services.2.title'),
            shortLabel: t('bento_grid.services.2.shortLabel'),
            desc: t('bento_grid.services.2.desc'),
            color: "bg-fuchsia-500",
            textColor: "text-fuchsia-400",
            shadowColor: "rgba(232, 121, 249, 0.8)",
            id: "03"
        },
        {
            icon: Search,
            title: t('bento_grid.services.3.title'),
            shortLabel: t('bento_grid.services.3.shortLabel'),
            desc: t('bento_grid.services.3.desc'),
            color: "bg-pink-500",
            textColor: "text-pink-400",
            shadowColor: "rgba(244, 114, 182, 0.8)",
            id: "04"
        },
        {
            icon: RefreshCw,
            title: t('bento_grid.services.4.title'),
            shortLabel: t('bento_grid.services.4.shortLabel'),
            desc: t('bento_grid.services.4.desc'),
            color: "bg-rose-500",
            textColor: "text-rose-400",
            shadowColor: "rgba(251, 113, 133, 0.8)",
            id: "05"
        },
        {
            icon: PenTool,
            title: t('bento_grid.services.5.title'),
            shortLabel: t('bento_grid.services.5.shortLabel'),
            desc: t('bento_grid.services.5.desc'),
            color: "bg-orange-500",
            textColor: "text-orange-400",
            shadowColor: "rgba(251, 146, 60, 0.8)",
            id: "06"
        },
        {
            icon: BarChart3,
            title: t('bento_grid.services.6.title'),
            shortLabel: t('bento_grid.services.6.shortLabel'),
            desc: t('bento_grid.services.6.desc'),
            color: "bg-yellow-400",
            textColor: "text-yellow-300",
            shadowColor: "rgba(253, 224, 71, 0.8)",
            id: "07"
        }
    ];

    const handleAuditClick = (e) => {
        if (e) e.preventDefault();
        window.location.href = "mailto:info@novasec.com?subject=Free%20Audit%20Request&body=I%20am%20interested%20in%20a%20free%20audit%20for%20my%20project.%20Here%20are%20my%20details:";
    };

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const [activeCard, setActiveCard] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Map scroll progress to card index
        // 0-85% for cards, 85%+ for summary
        const adjustedProgress = latest / 0.85; // Normalize to 0-1 for card range
        const rawIndex = Math.floor(adjustedProgress * services.length);
        const index = Math.max(0, Math.min(rawIndex, services.length - 1));
        setActiveCard(index);
    });

    // FADE & HEADER LOGIC 
    const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
    const headerY = useTransform(scrollYProgress, [0, 0.05], [0, -500]); // Move WAY UP
    const headerScale = useTransform(scrollYProgress, [0, 0.05], [1, 0.5]);

    // Summary Reveal
    const summaryOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
    const summaryPointerEvents = useTransform(scrollYProgress, (val) => val > 0.9 ? 'auto' : 'none');

    // PRECISE SCROLL LOGIC
    const scrollToCard = (index) => {
        if (!containerRef.current) return;

        const sectionTop = containerRef.current.offsetTop;
        const sectionHeight = containerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Calculate scrollable range
        const scrollableDistance = sectionHeight - viewportHeight;

        // Each card occupies 1/7th of the scrollable distance
        const cardScrollDistance = scrollableDistance / services.length;

        // Target middle of the card's scroll range (50% through its segment)
        const targetScrollY = sectionTop + (cardScrollDistance * index) + (cardScrollDistance * 0.5);

        window.scrollTo({
            top: targetScrollY,
            behavior: 'smooth'
        });
    };

    const scrollToContact = () => {
        const footerElement = document.querySelector('footer');
        if (footerElement) footerElement.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section ref={containerRef} id="services" className="relative bg-[#050505] z-30">

            {/* FIXED HEADER (Fades Out & Moves Up) */}
            <motion.div
                style={{ opacity: headerOpacity, scale: headerScale, y: headerY }}
                className="pt-32 pb-10 text-center sticky top-0 bg-[#050505] z-0 pointer-events-none w-full origin-top"
            >
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-none">
                    {t('bento_grid.header')} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-serif italic">
                        {t('bento_grid.header_span')}
                    </span>
                </h2>
                <div className="w-[1px] h-20 bg-gradient-to-b from-white/50 to-transparent mx-auto mt-10" />
            </motion.div>


            {/* PROGRESS INDICATORS (Context Aware & Interactive) */}
            <AnimatePresence>
                {isInView && (
                    <>
                        {/* LEFT COUNTER */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-8 items-center mix-blend-difference pointer-events-none"
                        >
                            <div className="text-white/40 font-mono text-xs rotate-180" style={{ writingMode: 'vertical-rl' }}>
                                {t('bento_grid.index_label')}
                            </div>
                            <div className="text-4xl font-bold text-white tabular-nums">
                                0{activeCard + 1}
                            </div>
                            <div className="w-[1px] h-12 bg-white/20" />
                            <div className="text-xs font-mono text-white/40">
                                / 0{services.length}
                            </div>
                        </motion.div>

                        {/* RIGHT CYBER-SPINE NAV */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end pointer-events-none"
                        >
                            {/* SPINE LINE */}
                            <div className="absolute right-[7px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none" />

                            {/* NODES */}
                            <div className="relative flex flex-col gap-8 pointer-events-auto">
                                {services.map((s, i) => {
                                    const isActive = activeCard === i;
                                    return (
                                        <div
                                            key={i}
                                            className="relative flex items-center justify-end gap-4 group cursor-pointer"
                                            onClick={() => scrollToCard(i)}
                                        >
                                            {/* LABEL (Always visible but dimmed) */}
                                            <motion.div
                                                animate={{
                                                    opacity: isActive ? 1 : 0.3,
                                                    x: isActive ? 0 : 8,
                                                }}
                                                className="flex items-center gap-2"
                                            >
                                                <span
                                                    className={`text-xs font-mono tracking-wider transition-all duration-300 ${isActive ? 'text-white font-bold' : 'text-white/50'
                                                        }`}
                                                    style={{
                                                        textShadow: isActive ? `0 0 8px ${s.shadowColor}` : 'none'
                                                    }}
                                                >
                                                    {s.id} {s.shortLabel}
                                                </span>
                                            </motion.div>

                                            {/* NODE (Diamond shape) */}
                                            <motion.div
                                                animate={{
                                                    scale: isActive ? 1.8 : 1,
                                                    rotate: 45,
                                                    backgroundColor: isActive ? s.shadowColor.replace('0.8)', '1)') : 'rgba(255,255,255,0.15)',
                                                    boxShadow: isActive ? `0 0 20px ${s.shadowColor}, 0 0 40px ${s.shadowColor.replace('0.8', '0.4')}` : 'none',
                                                }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="w-4 h-4 transition-all duration-300 group-hover:scale-125"
                                                style={{
                                                    backgroundColor: isActive ? s.shadowColor.replace('0.8)', '1)') : undefined
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>


            {/* STACKING CARDS */}
            <div className="relative pb-[50vh] z-10">
                {services.map((service, i) => {
                    const targetScale = 1 - ((services.length - i) * 0.05);
                    return <Card
                        key={i}
                        i={i}
                        {...service}
                        progress={scrollYProgress}
                        range={[i * (1 / services.length), 1]}
                        targetScale={targetScale}
                        t={t}
                        scrollToContact={scrollToContact}
                    />
                })}
            </div>

            {/* SUMMARY GRID REVEAL (Bright & Glowing) */}
            <div className="h-screen sticky top-0 flex items-center justify-center pointer-events-none z-20">
                <motion.div
                    style={{ opacity: summaryOpacity, pointerEvents: summaryPointerEvents }}
                    className="relative w-full max-w-6xl px-4"
                >
                    {/* ENHANCED GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-purple-500/10 blur-[100px] rounded-full" />

                    <div className="bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-8 md:p-12 shadow-[0_0_50px_rgba(255,255,255,0.05)] relative overflow-hidden">

                        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        <div className="relative z-10 text-center mb-10">
                            <h3 id="our-capabilities" className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{t('bento_grid.capabilities_title')}</h3>
                            <p className="text-indigo-200/60 font-light">{t('bento_grid.capabilities_subtitle')}</p>
                        </div>

                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {services.map((s, i) => (
                                <div key={i} className={`p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3 text-center hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 ${i === 6 ? 'md:col-span-2' : ''}`}>
                                    {/* Icon in Summary also gets color */}
                                    <div className={`w-10 h-10 rounded-full ${s.color} bg-opacity-20 flex items-center justify-center shadow-[0_0_10px_${s.shadowColor.replace('0.8', '0.3')}]`}>
                                        <s.icon className={`w-5 h-5 ${s.textColor}`} style={{ filter: `drop-shadow(0 0 5px ${s.shadowColor})` }} />
                                    </div>
                                    <span className="text-xs md:text-sm font-bold text-white/90">{s.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="relative z-10 md:col-span-4 mt-8 text-center">
                            <button
                                onClick={scrollToContact}
                                className="px-8 md:px-10 py-3 md:py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-indigo-100 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] pointer-events-auto cursor-pointer"
                            >
                                {t('bento_grid.cta_transformation')}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="h-[50vh]" />

        </section>
    );
};

export default BentoGrid;
