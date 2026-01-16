import React from 'react';
import { FlaskConical, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <FlaskConical className="w-6 h-6 text-teal-400" />
               <span className="text-2xl font-bold text-white">Dvran<span className="text-teal-400">Labs</span></span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Laboratorio de tecnología enfocado en la innovación y el desarrollo de soluciones digitales de alto impacto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Inicio</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#projects" className="hover:text-teal-400 transition-colors">Proyectos</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} DvranLabs. INNOVATION & TECHNOLOGY.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;