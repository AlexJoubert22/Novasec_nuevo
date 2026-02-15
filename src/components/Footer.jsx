import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    }

    const { x, y } = position;

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="relative px-12 py-6 bg-off-white text-void-black text-xl font-bold tracking-tight rounded-full overflow-hidden group"
        >
            <span className="relative z-10 group-hover:text-off-white transition-colors duration-300">{children}</span>
            <div className="absolute inset-0 bg-accent-glow scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full -z-0 origin-center" />
        </motion.button>
    )
}


const Footer = () => {
    return (
        <footer className="h-[80vh] flex flex-col items-center justify-center relative border-t border-white/5 bg-void-black">
            <div className="text-center space-y-12">
                <div className="overflow-hidden">
                    <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                        NOVASEC
                    </h2>
                </div>

                <MagneticButton>INICIAR EL CAMBIO</MagneticButton>

                <p className="text-white/40 font-mono text-sm max-w-md mx-auto mt-12">
                    Tecnología moderna con trato humano.<br /> Así trabajamos en NovaSec.
                </p>
            </div>

            <div className="absolute bottom-10 w-full flex justify-between px-10 text-xs font-mono text-white/20 uppercase tracking-widest">
                <span>© 2026 Novasec</span>
                <span>Madrid, ES</span>
            </div>
        </footer>
    );
};

export default Footer;
