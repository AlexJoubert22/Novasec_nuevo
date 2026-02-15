import React from 'react';
import { motion } from 'framer-motion';
import { Check, Code, ToggleRight } from 'lucide-react';

const Card = ({ children, className }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/10 transition-colors duration-500 ${className}`}
    >
        {children}
    </motion.div>
);

const ToggleSwitch = () => (
    <div className="relative w-24 h-12 bg-white/10 rounded-full p-1 flex items-center shadow-inner">
        <motion.div
            className="w-10 h-10 bg-accent-glow rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5)]"
            initial={{ x: 0 }}
            animate={{ x: 48 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2, ease: "easeInOut" }}
        />
    </div>
);

const CodeVisual = () => (
    <div className="space-y-2 opacity-50">
        <div className="h-2 w-3/4 bg-white/20 rounded"></div>
        <div className="h-2 w-1/2 bg-white/20 rounded"></div>
        <div className="h-2 w-full bg-white/20 rounded"></div>
        <div className="h-2 w-2/3 bg-white/20 rounded"></div>
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-4 flex items-center text-green-400"
        >
            <Check size={24} />
        </motion.div>
    </div>
)

const BentoGrid = () => {
    return (
        <section className="py-32 px-4 max-w-7xl mx-auto">
            <div className="mb-20 text-center">
                <h2 className="text-sm font-mono text-accent-glow mb-4 tracking-widest uppercase">La Solución</h2>
                <h3 className="text-4xl md:text-5xl font-display font-medium">Simple. Directo. Premium.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                {/* Card 1: The Promise */}
                <Card className="md:col-span-2">
                    <div>
                        <ToggleSwitch />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold mb-2">Sin aprender nada raro.</h4>
                        <p className="text-white/60">En NovaSec nos especializamos en llevar negocios como el tuyo a internet con un solo switch.</p>
                    </div>
                </Card>

                {/* Card 2: The Method */}
                <Card className="md:col-span-1 bg-gradient-to-br from-white/5 to-white/0">
                    <CodeVisual />
                    <div className="mt-8">
                        <h4 className="text-xl font-bold mb-2">Código invisible.</h4>
                        <p className="text-white/60 text-sm">Creamos tu web, la ponemos online y la mantenemos.</p>
                    </div>
                </Card>

                {/* Card 3: The Vibe */}
                <Card className="md:col-span-3 flex flex-row items-center justify-center gap-10">
                    <div className="text-center max-w-2xl">
                        <h4 className="text-3xl md:text-4xl font-display font-bold mb-4">No somos una gran consultora.</h4>
                        <p className="text-xl text-white/60">Somos tu equipo cercano.</p>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default BentoGrid;
