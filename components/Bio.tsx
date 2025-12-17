import React from 'react';
import { Instagram } from 'lucide-react';

const Bio: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Image - Authority & Social Proof */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
             <div className="relative group">
                {/* Reduced rotation from rotate-6 to rotate-2 for more authority/stability */}
                <div className="absolute inset-0 bg-blue-600 rounded-xl transform rotate-2 scale-105 opacity-20 group-hover:rotate-1 transition-transform duration-500"></div>
                <div className="relative w-72 md:w-80 rounded-xl overflow-hidden shadow-2xl border-4 border-blue-800/50">
                    {/* 
                       ATENÇÃO: A imagem deve estar salva como 'dr-thiago-event.jpeg' na pasta pública/raiz
                    */}
                    <img 
                        src="/dr-thiago-event.jpeg" 
                        alt="Dr. Thiago Costa em evento médico" 
                        className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105 bg-blue-800 min-h-[400px]"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://placehold.co/400x500/1e40af/93c5fd?text=Foto+Evento+N%C3%A3o+Encontrada";
                        }}
                    />
                </div>
             </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Dr. Thiago Costa</h2>
            <p className="text-blue-300 text-lg mb-6 font-medium">Médico Endocrinologista</p>
            
            <div className="space-y-4 text-blue-100 leading-relaxed mb-8 text-lg opacity-90">
              <p>
                Minha missão é trazer a medicina para a prática, ajudando pacientes a ajustarem sua rota metabólica com segurança e ciência.
              </p>
              <p>
                Acredito que a saúde metabólica não se constrói com extremismos, mas com estratégia individualizada e constância. 
              </p>
              <p>
                Neste grupo, compartilho minha visão profissional para quem deseja parar de andar em círculos e assumir o controle da própria saúde.
              </p>
            </div>

            <a 
                href="https://instagram.com/Dr.Thiago.costa" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white border border-blue-700 bg-blue-800/50 hover:bg-blue-800 px-6 py-3 rounded-lg transition-all hover:border-blue-500"
            >
                <Instagram size={20} />
                <span className="font-medium">Acompanhe no Instagram</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bio;