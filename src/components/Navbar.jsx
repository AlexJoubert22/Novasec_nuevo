import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const { language, setLanguage, toggleLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Detect active section
            const sections = [
                { id: '#hero', link: '#hero' },
                { id: '#about', link: '#about' },
                { id: '#solutions', link: '#solutions' },
                { id: '#services', link: '#solutions' },
                { id: '#our-capabilities', link: '#solutions' },
                { id: '#ready-to-start', link: '#contact' },
                { id: '#contact', link: '#contact' }
            ];

            let currentSection = '';

            const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;

            if (isAtBottom) {
                currentSection = '#contact';
            } else {
                for (const section of sections) {
                    const element = document.querySelector(section.id);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 200 && rect.bottom >= 150) {
                            currentSection = section.link;
                            break;
                        }
                    }
                }
            }
            setActiveSection(currentSection);
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

    const handleAuditClick = (e) => {
        if (e) e.preventDefault();
        window.location.href = "mailto:info@novasec.com?subject=Free%20Audit%20Request&body=I%20am%20interested%20in%20a%20free%20audit%20for%20my%20project.%20Here%20are%20my%20details:";
    };

    const navLinks = [
        { name: t('nav.about'), href: "#about" },
        { name: t('nav.solutions'), href: "#solutions" },
        { name: t('nav.contact'), href: "#ready-to-start" },
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
                    <div className="flex items-center gap-4">
                        {/* LANGUAGE SELECTOR */}
                        <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 font-mono text-[10px] tracking-tighter">
                            <button
                                onClick={() => setLanguage('es')}
                                className={`transition-all duration-300 ${language === 'es' ? 'text-white font-bold opacity-100' : 'text-white/30 hover:text-white/50'}`}
                            >
                                ES
                            </button>
                            <span className="w-[1px] h-3 bg-white/10" />
                            <button
                                onClick={() => setLanguage('en')}
                                className={`transition-all duration-300 ${language === 'en' ? 'text-white font-bold opacity-100' : 'text-white/30 hover:text-white/50'}`}
                            >
                                EN
                            </button>
                        </div>

                        <button
                            onClick={handleAuditClick}
                            className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold text-xs hover:bg-gray-200 transition-all active:scale-95 cursor-pointer"
                        >
                            {t('nav.cta')}
                            <ArrowUpRight className="w-3 h-3" />
                        </button>

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
                            <button
                                onClick={handleAuditClick}
                                className="block w-full p-4 text-center text-black font-bold bg-white rounded-2xl cursor-pointer"
                            >
                                {t('nav.cta')}
                            </button>

                            {/* MOBILE LANGUAGE SELECTOR */}
                            <div className="flex items-center justify-center gap-4 mt-6">
                                <button
                                    onClick={() => setLanguage('es')}
                                    className={`text-sm font-bold transition-colors ${language === 'es' ? 'text-white' : 'text-white/40'}`}
                                >
                                    ESPAÑOL
                                </button>
                                <div className="w-1 h-1 bg-white/20 rounded-full" />
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`text-sm font-bold transition-colors ${language === 'en' ? 'text-white' : 'text-white/40'}`}
                                >
                                    ENGLISH
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
