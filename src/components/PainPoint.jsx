import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, AlertOctagon, ServerCrash, Bug, ShieldAlert, XCircle } from 'lucide-react';

const ChaosCard = ({ children, className, speed = 1 }) => {
    return (
        <div className={`bg-red-950/20 backdrop-blur-sm border border-red-500/10 p-4 rounded-lg ${className}`}>
            {children}
        </div>
    )
}

const PainPoint = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} className="relative min-h-[150vh] bg-[#050505] flex items-center justify-center overflow-hidden py-32 z-30">

            {/* Background Chaos Grid - "The Wall" */}
            <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-20 pointer-events-none p-4">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="border border-red-900/10 rounded-lg flex items-center justify-center">
                        <span className="text-red-900/20 font-mono text-[10px]">{Math.random() > 0.5 ? 'ERROR_500' : 'CONNECTION_REFUSED'}</span>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center gap-20 relative z-10">

                {/* 1. STICKY CONTENT (Left) */}
                <div className="md:w-1/2 sticky top-32">
                    <motion.div style={{ opacity }}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                            <span className="text-red-500 font-mono text-sm tracking-widest">SYSTEM CRITICAL</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                            CAOS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                                DIGITAL.
                            </span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-lg">
                            Servidores caídos. Diseños amateur. Código espagueti. <br />
                            Mientras tu competencia avanza, tú estás apagando fuegos.
                        </p>
                    </motion.div>
                </div>

                {/* 2. CHAOS GALLERY (Right - Dense & Parallax) */}
                <div className="md:w-1/2 relative h-[80vh] w-full">

                    {/* Layer 1: Server Logs */}
                    <motion.div style={{ y: y2 }} className="absolute top-0 right-0 z-20 w-4/5">
                        <ChaosCard className="border-red-500/30 bg-black/60 shadow-2xl shadow-red-900/20">
                            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                                <span className="font-mono text-xs text-red-500">server_log.txt</span>
                                <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-500" /></div>
                            </div>
                            <div className="font-mono text-[10px] text-red-400/80 space-y-1">
                                <p>[CRITICAL] DB_CONNECTION_TIMEOUT</p>
                                <p>[ERROR] NullPointerException at Auth.js:402</p>
                                <p>[WARN] Memory usage at 98%</p>
                                <p>[FATAL] Kernel panic - not syncing</p>
                            </div>
                        </ChaosCard>
                    </motion.div>

                    {/* Layer 2: Visual Glitch */}
                    <motion.div style={{ y: y1 }} className="absolute top-40 left-0 z-10 w-3/5">
                        <ChaosCard className="h-40 flex items-center justify-center bg-red-900/10 border-red-500/20">
                            <ServerCrash size={64} className="text-red-600 opacity-50" />
                            <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtY2J6eHcycTZ5Z3J6eHcycTZ5Z3J6eHcycTZ5Z3J6eHcycTZ5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l4FGpP4wCX98kM/giphy.gif')] opacity-10 mix-blend-overlay" />
                        </ChaosCard>
                    </motion.div>

                    {/* Layer 3: Security Alert */}
                    <motion.div style={{ y: y3 }} className="absolute bottom-20 right-10 z-30 w-3/5">
                        <ChaosCard className="bg-red-500 text-white border-none shadow-[0_0_50px_rgba(239,68,68,0.4)]">
                            <div className="flex items-center gap-4">
                                <AlertOctagon size={40} className="stroke-2" />
                                <div>
                                    <h4 className="font-bold text-lg">BREACH DECTECTED</h4>
                                    <p className="text-xs text-white/80">Firewall disabled. IP leaked.</p>
                                </div>
                            </div>
                        </ChaosCard>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default PainPoint;
