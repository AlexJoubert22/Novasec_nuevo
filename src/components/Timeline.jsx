import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TimelineNode = ({ title, detail, align = "left" }) => (
    <div className={`flex w-full ${align === "left" ? "justify-end pr-10" : "justify-start pl-10"} relative mb-32`}>
        <div className={`w-1/2 ${align === "left" ? "text-right" : "text-left"}`}>
            <h3 className="text-sm font-mono text-accent-glow mb-2 uppercase tracking-widest">{title}</h3>
            <p className="text-2xl md:text-3xl font-display font-bold">{detail}</p>
        </div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 bg-off-white rounded-full border-4 border-void-black z-10" />
    </div>
)

const Timeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section ref={containerRef} className="relative py-40 min-h-screen">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2">
                <motion.div
                    style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                    className="w-full h-full bg-accent-glow shadow-[0_0_20px_rgba(79,70,229,0.5)]"
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col">
                <TimelineNode
                    title="HOY"
                    detail="Tu presencia digital sin esfuerzo. Tu web lista en días, no en meses."
                    align="left"
                />
                <TimelineNode
                    title="MAÑANA"
                    detail="Tecnología que te hace eficiente. Automatización, Chatbots IA y Ciberseguridad."
                    align="right"
                />
            </div>
        </section>
    );
};

export default Timeline;
