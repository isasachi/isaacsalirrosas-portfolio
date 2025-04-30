import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language.split('-')[0]);
  const { t } = useTranslation();
  
  // Update language state when i18n language changes
  useEffect(() => {
    const handleLanguageChanged = () => {
      setCurrentLanguage(i18n.language.split('-')[0]);
      console.log('Language updated in Header:', i18n.language);
    };
    
    i18n.on('languageChanged', handleLanguageChanged);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    console.log('Toggling language from', currentLanguage, 'to', newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">Isaac Salirrosas</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="text-gray-700 hover:text-primary transition-colors">{t('navigation.home')}</a>
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">{t('navigation.about')}</a>
          <a href="#projects" className="text-gray-700 hover:text-primary transition-colors">{t('navigation.projects')}</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">{t('navigation.contact')}</a>
          <button 
            onClick={toggleLanguage} 
            className="ml-2 px-3 py-1 bg-primary text-gray-700 rounded-md hover:bg-primary-dark transition-colors"
            aria-label={`Switch to ${currentLanguage === 'en' ? 'Spanish' : 'English'}`}
          >
            {currentLanguage === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">{t('navigation.home')}</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">{t('navigation.about')}</a>
            <a href="#projects" className="text-gray-700 hover:text-primary transition-colors">{t('navigation.projects')}</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">{t('navigation.contact')}</a>
            <div className="flex items-center pt-2">
              <span className="text-gray-700 mr-2">{t('navigation.language')}:</span>
              <button 
                onClick={toggleLanguage} 
                className="px-3 py-1 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                aria-label={`Switch to ${currentLanguage === 'en' ? 'Spanish' : 'English'}`}
              >
                {currentLanguage === 'en' ? 'ES' : 'EN'}
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
