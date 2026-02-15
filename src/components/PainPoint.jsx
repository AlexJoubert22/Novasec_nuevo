import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PainPoint = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.4], [0.4, 1, 0.4]);
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.6, 0.7], [0.4, 1, 0.4]);
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.9, 1], [0.4, 1, 0.4]);

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-void-black flex flex-col items-center justify-start p-10 mt-20">
            <div className="sticky top-1/3 flex flex-col items-start max-w-4xl">
                <h3 className="text-sm font-mono text-accent-glow mb-8 tracking-widest uppercase">El problema</h3>

                <div className="text-3xl md:text-5xl font-display font-medium leading-tight space-y-8 text-off-white">
                    <motion.p style={{ opacity: opacity1 }} className="transition-opacity duration-300">
                        Tienes un bar, una cafetería, una academia o un comercio.
                    </motion.p>
                    <motion.p style={{ opacity: opacity2 }} className="transition-opacity duration-300">
                        Sabes que estar en internet es importante, pero no tienes tiempo (ni ganas) de lidiar con cosas técnicas.
                    </motion.p>
                    <motion.p style={{ opacity: opacity3 }} className="transition-opacity duration-300 text-off-white">
                        Te entendemos perfectamente.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default PainPoint;
