
import profileImage from '../../assets/images/isaac_profile_sm.jpg';
import resumePDF from '../../assets/resume.pdf';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
          {t('about.title')}
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-300">
              {/* Replace with another image of yourself */}
              <img 
                src={profileImage} 
                alt="About Me" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <p className="text-lg mb-6 text-gray-700">
              {t('about.description')}
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('about.skills')}</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>React</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>HTML/CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Git</span>
              </div>
            </div>
            
            <a 
              href={resumePDF} 
              download="Isaac_Salirrosas_Resume.pdf"
              className="inline-block px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors cursor-pointer"
            >
              {t('about.downloadResume', 'Download Resume')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
