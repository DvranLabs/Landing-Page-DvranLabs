import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-900 to-slate-900"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-teal-400 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
          <Sparkles className="w-4 h-4 mr-2" />
          <span>Innovation & Technology</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 max-w-4xl leading-tight">
          Explorando las fronteras <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
            Tecnológicas
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-4 text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Somos un Tech Lab enfocado en el desarrollo de soluciones digitales de alto impacto. 
          Combinamos software robusto con Inteligencia Artificial para resolver problemas reales.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a href="#projects" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-slate-900 bg-teal-400 hover:bg-teal-500 transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)]">
            Ver Proyectos
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a href="#about" className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-base font-bold rounded-lg text-white hover:bg-slate-800 transition-all duration-300">
            Conoce el Lab
          </a>
        </div>

        {/* Tech Stack Hints */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 w-full max-w-3xl">
          <p className="text-sm text-slate-500 mb-4 font-mono uppercase tracking-widest">Powered By</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple Text Placeholders for logos for clean code */}
             <span className="text-lg font-bold text-slate-300">Artificial Intelligence</span>
             <span className="text-lg font-bold text-slate-300">React</span>
             <span className="text-lg font-bold text-slate-300">Cloud Computing</span>
             <span className="text-lg font-bold text-slate-300">Big Data</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;