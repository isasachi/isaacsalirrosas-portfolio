import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  changeLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Use useState to track the current language
  const [currentLanguage, setCurrentLanguage] = useState<Language>((i18n.language || 'en').split('-')[0] as Language);

  // Listen for language changes from i18n
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      const language = lng.split('-')[0] as Language;
      setCurrentLanguage(language);
      // Update HTML lang attribute
      document.getElementById('html-root')?.setAttribute('lang', language);
      console.log('Language changed event:', language);
    };

    // Add language change listener
    i18n.on('languageChanged', handleLanguageChanged);
    
    // Clean up listener on unmount
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  // Function to change language
  const changeLanguage = (newLanguage: Language) => {
    // Change i18next language
    i18n.changeLanguage(newLanguage)
      .then(() => {
        // Update state to trigger re-render
        setCurrentLanguage(newLanguage);
        // Update HTML lang attribute for SEO and accessibility
        document.getElementById('html-root')?.setAttribute('lang', newLanguage);
        console.log('Language changed to:', newLanguage);
      });
  };

  return (
    <LanguageContext.Provider value={{ 
      language: currentLanguage, 
      changeLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  const { t } = useTranslation();
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return {
    ...context,
    t
  };
};
