import profileImage from '../../assets/images/isaac_profile_sm.jpg';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
              {t('hero.greeting')} <span className="text-primary">Isaac Salirrosas</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-600">
              {t('hero.role')}
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              {t('hero.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                {t('navigation.contact')}
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
              >
                {t('hero.cta')}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-300">
              {/* Replace with your profile image */}
              <img 
                src={profileImage} 
                alt="Isaac Salirrosas" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
