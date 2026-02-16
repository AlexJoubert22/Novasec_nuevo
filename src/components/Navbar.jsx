import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Detect active section
            const sections = ['#hero', '#about', '#solutions', '#contact'];
            for (const sectionId of sections) {
                const element = document.querySelector(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Solutions", href: "#solutions" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-0 transition-all duration-300`}
            >
                <div
                    className={`
                        relative flex items-center justify-between pl-6 pr-2 py-2 rounded-full border border-white/10
                        backdrop-blur-xl bg-[#050505]/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
                        transition-all duration-500 ease-out
                        ${scrolled ? 'w-[90%] md:w-[60%] bg-[#050505]/80' : 'w-[95%] md:w-[75%]'}
                    `}
                >
                    {/* LOGO */}
                    <a
                        href="#hero"
                        onClick={(e) => scrollToSection(e, '#hero')}
                        className="font-bold text-xl tracking-tighter text-white flex items-center gap-2"
                    >
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        NOVASEC.
                    </a>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${isActive
                                            ? 'text-white bg-white/10'
                                            : 'text-white/70 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-2">
                        <a
                            href="mailto:contact@novasec.com?subject=Free%20Audit%20Request&body=I%20am%20interested%20in%20a%20free%20audit%20for%20my%20project.%20Here%20are%20my%20details:"
                            className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold text-xs hover:bg-gray-200 transition-all active:scale-95"
                        >
                            Start Free Audit
                            <ArrowUpRight className="w-3 h-3" />
                        </a>

                        {/* MOBILE MENU TOGGLE */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-24 left-4 right-4 z-40 p-2 rounded-[2rem] border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-2xl shadow-2xl md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="block w-full p-4 text-center text-lg font-medium text-white/90 hover:bg-white/5 rounded-2xl transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-[1px] bg-white/10 w-full my-2" />
                            <a
                                href="mailto:contact@novasec.com?subject=Free%20Audit%20Request&body=I%20am%20interested%20in%20a%20free%20audit%20for%20my%20project.%20Here%20are%20my%20details:"
                                className="block w-full p-4 text-center text-black font-bold bg-white rounded-2xl"
                            >
                                Start Free Audit
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
