import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

const activeProjects: Project[] = [
  {
    id: 1,
    title: 'AI Customer Core',
    description: 'Sistema de atención al cliente automatizado utilizando modelos LLM avanzados para respuestas contextuales en tiempo real.',
    tags: ['AI', 'Python', 'React'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    status: 'Active'
  },
  {
    id: 2,
    title: 'FinTech Dashboard',
    description: 'Plataforma de visualización de datos financieros de alta frecuencia con arquitectura serverless.',
    tags: ['Next.js', 'Finance', 'AWS'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    status: 'Beta'
  },
  {
    id: 3,
    title: 'HealthGuard App',
    description: 'Aplicación móvil para monitoreo remoto de pacientes, integrando IoT y análisis predictivo.',
    tags: ['React Native', 'IoT', 'Health'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    status: 'Active'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            🚀 Proyectos Activos
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Innovación aplicada en desarrollo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="relative h-48 overflow-hidden group">
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-teal-400 text-xs font-bold px-2 py-1 rounded">
                  {project.status}
                </div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium bg-teal-50 text-teal-700 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-6 flex-1">{project.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                   <button className="flex items-center text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors">
                     <Github className="w-4 h-4 mr-2" /> Code
                   </button>
                   <button className="flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                     Ver Demo <ExternalLink className="w-4 h-4 ml-2" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500">
            ¿Tienes una idea desafiante? <a href="#contact" className="text-teal-600 font-bold hover:underline">Conversemos.</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;