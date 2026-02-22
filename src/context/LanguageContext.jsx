import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Try to get language from localStorage or browser settings, default to ES as per user preference implication
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('novasec_lang');
        return saved || 'es';
    });

    useEffect(() => {
        localStorage.setItem('novasec_lang', language);
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => (prev === 'es' ? 'en' : 'es'));
    };

    const t = (path) => {
        const keys = path.split('.');
        let result = translations[language];

        for (const key of keys) {
            if (result[key] === undefined) {
                console.warn(`Translation missing for key: ${path} in language: ${language}`);
                return path;
            }
            result = result[key];
        }

        return result;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
