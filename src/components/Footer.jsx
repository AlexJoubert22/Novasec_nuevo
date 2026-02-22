import { Mail, Phone, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const handleAuditClick = (e) => {
        if (e) e.preventDefault();
        window.location.href = "mailto:info@novasec.com?subject=Free%20Audit%20Request&body=I%20am%20interested%20in%20a%20free%20audit%20for%20my%20project.%20Here%20are%20my%20details:";
    };

    return (
        <footer className="relative bg-[#050505] text-white pt-20 pb-10 overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">

                <div className="text-center mb-16">
                    <h2 id="ready-to-start" className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
                        {t('footer.ready')}
                    </h2>
                    <p className="text-white/50 text-lg">{t('footer.steps_subtitle')}</p>
                </div>

                {/* 3 STEPS PROCESS (Premium Neon Boxes) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-7xl mx-auto">

                    {/* STEP 01: CONTACT */}
                    <div className="group relative bg-neutral-900/50 border border-white/5 p-10 rounded-[2rem] flex flex-col justify-between h-[350px] overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                        <div className="absolute top-6 right-6 font-mono text-cyan-500/20 text-4xl font-bold group-hover:text-cyan-500/40 transition-colors">01</div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-cyan-500/30 group-hover:scale-110 transition-all duration-500">
                                <Mail className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-100 transition-colors">{t('footer.step1_title')}</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6 group-hover:text-cyan-100/80 transition-colors">
                                {t('footer.step1_desc')}
                            </p>
                        </div>
                        <div className="relative z-10 space-y-4">
                            <a href="mailto:info@novasec.com" className="block text-lg font-medium text-white/80 hover:text-cyan-400 transition-colors">info@novasec.com</a>

                            <a
                                href="https://wa.me/34620878858"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(37,211,102,0.2)] active:scale-95"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                </span>
                                <span>{t('footer.step1_wa')}</span>
                            </a>
                        </div>
                    </div>

                    {/* STEP 02: FREE AUDIT (Featured) */}
                    <div className="group relative bg-[#0a0a0a] border border-indigo-500/30 p-10 rounded-[2rem] flex flex-col justify-between h-[350px] overflow-hidden transition-all duration-500 hover:border-indigo-400 hover:shadow-[0_0_50px_rgba(99,102,241,0.25)] hover:-translate-y-2">
                        <div className="absolute top-6 right-6 font-mono text-indigo-500/20 text-4xl font-bold group-hover:text-indigo-500/40 transition-colors">02</div>
                        <div className="absolute inset-0 bg-indigo-500/5 blur-3xl" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30 group-hover:border-indigo-400 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500">
                                <ShieldCheck className="w-7 h-7 text-indigo-400 group-hover:text-indigo-200" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{t('footer.step2_title')}</h3>
                            <p className="text-indigo-200/60 text-sm leading-relaxed mb-6">
                                {t('footer.step2_desc')}
                            </p>
                        </div>

                        <button
                            onClick={handleAuditClick}
                            className="relative z-10 w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-50 hover:shadow-lg transition-all group-hover:scale-[1.02] cursor-pointer"
                        >
                            <span>{t('footer.step2_cta')}</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* STEP 03: VELOCITY */}
                    <div className="group relative bg-neutral-900/50 border border-white/5 p-10 rounded-[2rem] flex flex-col justify-between h-[350px] overflow-hidden transition-all duration-500 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]">
                        <div className="absolute top-6 right-6 font-mono text-amber-500/20 text-4xl font-bold group-hover:text-amber-500/40 transition-colors">03</div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-amber-500/30 group-hover:scale-110 transition-all duration-500">
                                <Zap className="w-6 h-6 text-white group-hover:text-amber-400 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-amber-100 transition-colors">{t('footer.step3_title')}</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-6 group-hover:text-amber-100/80 transition-colors">
                                {t('footer.step3_desc')}
                            </p>
                        </div>
                        <div className="relative z-10 p-4 bg-white/5 rounded-xl border border-white/5 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-colors">
                            <p className="text-xs text-white/60 font-mono group-hover:text-amber-200/80 italic">
                                "{t('footer.step3_quote')}"
                            </p>
                        </div>
                    </div>

                </div>

                {/* BOTTOM LINKS */}
                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <h2 className="text-2xl font-bold tracking-tighter">NOVASEC.</h2>
                    <div className="text-sm text-white/40">
                        {t('footer.rights')}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
