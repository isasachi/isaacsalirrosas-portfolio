import worldLanguageImage from '../../assets/images/world_language_app.png';
import synapseImage from '../../assets/images/synapseai_app.png';
import handmadeCraftsImage from '../../assets/images/handmadecrafts_app.png';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ title, description, titleKey, descriptionKey, technologies, image, link, viewProjectText }: {
  title: string;
  description: string;
  titleKey?: string;
  descriptionKey?: string;
  technologies: string[];
  image: string | any; // Updated to allow imported images
  link: string;
  viewProjectText: string;
}) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="aspect-video bg-gray-300 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{titleKey ? t(titleKey) : title}</h3>
        <p className="text-gray-600 mb-4">{descriptionKey ? t(descriptionKey) : description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-primary border border-primary rounded-md hover:bg-primary/10 transition-colors"
        >
          {viewProjectText}
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: "World Language Foundation Admin Dashboard",
      description: "A responsive admin dashboard with user authentication for managing World Language Foundation's operations.",
      titleKey: 'projects.project1.title',
      descriptionKey: 'projects.project1.description',
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
      image: worldLanguageImage,
      link: "https://github.com/isasachi/world_language_app"
    },
    {
      title: "Synapse AI Business Website",
      description: "A website for Synapse AI, a software development company, with real-time AI text generation demo",
      titleKey: 'projects.project2.title',
      descriptionKey: 'projects.project2.description',
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
      image: synapseImage,
      link: "https://github.com/isasachi/wdd231"
    },
    {
      title: "Handmade Crafts E-commerce Website",
      description: "An e-commerce website for handmade crafts with user authentication and products filtering.",
      titleKey: 'projects.project3.title',
      descriptionKey: 'projects.project3.description',
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      image: handmadeCraftsImage,
      link: "https://github.com/Wdd430-Team-7/Group_Project"
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
          {t('projects.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              viewProjectText={t('projects.viewProject')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
