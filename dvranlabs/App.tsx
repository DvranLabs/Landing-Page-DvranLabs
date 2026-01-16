import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        
        {/* Contact Section - Simple integration directly in App for MVP */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">¿Listo para innovar?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Únete a DvranLabs o colabora con nosotros en el próximo gran proyecto.
            </p>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-lg text-left">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Corporativo</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="mt-1 block w-full rounded-md border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6" 
                    placeholder="tu@empresa.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Mensaje</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="mt-1 block w-full rounded-md border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6" 
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;