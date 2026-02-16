import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds for counter
        const steps = 100;
        const intervalTime = duration / steps;

        let timer = setInterval(() => {
            setCount((prev) => {
                if (prev < 100) return prev + 1;
                clearInterval(timer);
                return 100;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (count === 100) {
            setTimeout(() => {
                onComplete();
            }, 500); // Wait a bit before starting reveal
        }
    }, [count, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void-black text-off-white overflow-hidden"
        >
            <div className="relative z-10 flex flex-col items-center">
                <motion.h1
                    className="text-9xl font-display font-bold tracking-tighter"
                    initial={{ opacity: 0.5, scale: 0.95 }}
                    animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [0.95, 1, 0.95],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    NOVASEC
                </motion.h1>
                <motion.div
                    className="mt-4 text-xl font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {count.toString().padStart(3, '0')}%
                </motion.div>
            </div>

            {/* Curtain Effect Overlay (This will slide out) */}
            {/* Note: We handle the actual "unmount" or transition in the parent usually, 
           but for a split curtain, we might need the parent to handle the layout or 
           have this component animate out with a split. 
           
           Let's implement the split here as an exit animation if we were controlling it fully,
           but since 'onComplete' triggers the parent to show content, we can animate these panels out.
       */}
        </motion.div>
    );
};

// A SplitReveal container to wrap the main content could be another approach, 
// but the prompt asks for the screen to split vertically revealing the Hero.
// Let's modify Preloader to handle the split animation itself before unmounting.

export const PreloaderOverlay = ({ onAnimationComplete }) => {
    const [counter, setCounter] = useState(0);
    const [startSplit, setStartSplit] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prev => {
                const next = prev + 1;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setStartSplit(true), 200);
                    return 100;
                }
                return next;
            });
        }, 20); // 20ms * 100 = 2000ms = 2s
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (startSplit) {
            setTimeout(() => {
                if (onAnimationComplete) onAnimationComplete();
            }, 1000); // content revealed
        }
    }, [startSplit, onAnimationComplete]);

    return (
        <div className={`fixed inset-0 z-[100] flex inset-0 pointer-events-none`}>
            {/* Left Curtain */}
            <motion.div
                initial={{ x: "0%" }}
                animate={startSplit ? { x: "-100%" } : { x: "0%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-1/2 h-full bg-void-black flex items-center justify-end border-r border-white/5 relative"
            >
                {/* Content on left half */}
                {!startSplit && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-4 text-right">
                        <h1 className="text-8xl md:text-9xl font-display font-bold tracking-tighter text-off-white">
                            NOVA
                        </h1>
                    </div>
                )}
            </motion.div>

            {/* Right Curtain */}
            <motion.div
                initial={{ x: "0%" }}
                animate={startSplit ? { x: "100%" } : { x: "0%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-1/2 h-full bg-void-black flex items-center justify-start border-l border-white/5 relative"
            >
                {/* Content on right half */}
                {!startSplit && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-4 text-left">
                        <h1 className="text-8xl md:text-9xl font-display font-bold tracking-tighter text-off-white">
                            SEC
                        </h1>
                        <div className="absolute top-full left-4 mt-2 font-mono text-sm text-white/50">
                            {counter}%
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    )
}

export default PreloaderOverlay;
