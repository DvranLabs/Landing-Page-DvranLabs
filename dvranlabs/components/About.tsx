import React from 'react';
import { Microscope, Cpu, Zap, Layers } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Calidad Técnica',
    description: 'No comprometemos el código. Construimos bases sólidas, escalables y mantenibles para el futuro.',
    icon: Layers,
  },
  {
    title: 'Velocidad de Iteración',
    description: 'Experimentamos rápido. La agilidad nos permite validar hipótesis y encontrar soluciones eficientes.',
    icon: Zap,
  },
  {
    title: 'Adopción Temprana',
    description: 'Estamos siempre a la vanguardia, integrando las últimas tecnologías para obtener ventajas competitivas.',
    icon: Microscope,
  },
  {
    title: 'Inteligencia Artificial',
    description: 'Integramos modelos de IA para potenciar capacidades y automatizar procesos complejos.',
    icon: Cpu,
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-20">
          <div>
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">¿Qué es DvranLabs?</h2>
            <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Más que una agencia,<br />
              <span className="text-teal-600">un espacio de creación.</span>
            </p>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              DvranLabs es un laboratorio de tecnología (Tech Lab) enfocado en la innovación. 
              No somos solo una agencia de software; somos un espacio de experimentación.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Nos dedicamos a explorar las fronteras tecnológicas, combinando un desarrollo de software robusto con las capacidades emergentes de la Inteligencia Artificial para construir productos que resuelvan problemas reales de forma eficiente.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 relative">
             <div className="absolute inset-0 bg-teal-500 rounded-2xl transform rotate-3 opacity-20"></div>
             <img 
               src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
               alt="Lab Environment" 
               className="relative rounded-2xl shadow-2xl w-full object-cover h-96 hover:scale-[1.01] transition-transform duration-500"
             />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-teal-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;