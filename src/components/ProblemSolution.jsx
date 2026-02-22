import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProblemSolution = () => {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(1); // Default center active

    const solutions = [
        {
            id: 1,
            title: t('problem_solution.solutions.0.title'),
            subtitle: t('problem_solution.solutions.0.subtitle'),
            desc: t('problem_solution.solutions.0.desc'),
            icon: Zap,
            color: "from-amber-400 to-orange-500",
            bg: "bg-orange-500/5"
        },
        {
            id: 2,
            title: t('problem_solution.solutions.1.title'),
            subtitle: t('problem_solution.solutions.1.subtitle'),
            desc: t('problem_solution.solutions.1.desc'),
            icon: Layers,
            color: "from-indigo-400 to-cyan-500",
            bg: "bg-indigo-500/5"
        },
        {
            id: 3,
            title: t('problem_solution.solutions.2.title'),
            subtitle: t('problem_solution.solutions.2.subtitle'),
            desc: t('problem_solution.solutions.2.desc'),
            icon: ShieldCheck,
            color: "from-emerald-400 to-teal-500",
            bg: "bg-emerald-500/5"
        }
    ];

    return (
        <section id="solutions" className="py-40 bg-[#050505] relative z-30 overflow-hidden pb-60"> {/* Added pb-60 for connector space */}

            <div className="container mx-auto px-6 mb-20 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
                >
                    {t('problem_solution.title')} <br />
                    <span className="text-white/30 italic font-serif">{t('problem_solution.subtitle')}</span>
                </motion.h2>
            </div>

            <div className="max-w-7xl mx-auto min-h-[500px] md:h-[600px] flex flex-col md:flex-row gap-4 px-4 md:px-0 relative z-20">
                {solutions.map((item, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <motion.div
                            key={item.id}
                            onHoverStart={() => setActiveIndex(index)}
                            onClick={() => setActiveIndex(index)}
                            animate={{
                                flex: isActive ? 3 : 1,
                                opacity: isActive ? 1 : 0.4
                            }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                            className={`relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer border border-white/5 hover:border-white/10 transition-colors ${item.bg} min-h-[250px] md:min-h-0`}
                        >
                            {/* BACKGROUND GRADIENT GLOW */}
                            {isActive && (
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 blur-3xl`} />
                            )}

                            {/* VERTICAL TITLE (INACTIVE STATE) - Hidden on mobile */}
                            <div className={`absolute inset-0 md:flex items-center justify-center transition-opacity duration-300 hidden ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                                <h3 className="text-lg md:text-2xl font-bold text-white -rotate-90 tracking-widest whitespace-nowrap">
                                    {item.title.toUpperCase()}
                                </h3>
                            </div>

                            {/* HORIZONTAL TITLE (MOBILE INACTIVE STATE) - Visible only on mobile */}
                            <div className={`absolute inset-0 flex md:hidden items-center justify-center transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'} p-4`}>
                                <h3 className="text-xl font-bold text-white tracking-wider text-center">
                                    {item.title.toUpperCase()}
                                </h3>
                            </div>

                            {/* ACTIVE CONTENT */}
                            <div className={`absolute inset-0 p-6 md:p-10 flex flex-col justify-between transition-opacity duration-500 ${isActive ? 'opacity-100 delay-100' : 'opacity-0'}`}>
                                <div className="flex justify-between items-start">
                                    <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                                        <item.icon className="text-white w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center">
                                        <ArrowUpRight className="text-white w-3 h-3 md:w-4 md:h-4" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className={`text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-3 md:mb-4`}>
                                        {item.title}
                                    </h3>
                                    <h4 className="text-lg md:text-xl lg:text-2xl text-white mb-3 md:mb-4 font-light">
                                        {item.subtitle}
                                    </h4>
                                    <div className="w-16 md:w-20 h-[1px] bg-white/20 mb-4 md:mb-6" />
                                    <p className="text-sm md:text-base lg:text-lg text-white/60 max-w-lg leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* VISUAL CONNECTOR TO NEXT SECTION */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-transparent via-white/20 to-white/50" />
            <div className="absolute bottom-[200px] left-0 w-full h-[500px] bg-gradient-to-b from-[#050505] via-[#050505]/50 to-[#050505] pointer-events-none z-0" /> {/* Smooth fade */}

        </section>
    );
};

export default ProblemSolution;
