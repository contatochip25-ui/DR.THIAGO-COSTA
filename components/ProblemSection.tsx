import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 md:order-1 relative">
               {/* Image Strategy: Human connection & Real Environment */}
               <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  {/* 
                     ATENÇÃO: Usando URL absoluta do GitHub para garantir carregamento
                  */}
                  <img 
                    src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/dr-thiago-equipe.jpg" 
                    alt="Equipe Dr. Thiago Costa" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 bg-slate-200 min-h-[300px]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // Fallback visual se falhar
                      target.src = "https://placehold.co/600x400/e2e8f0/475569?text=Carregando+Equipe...";
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <p className="text-slate-800 font-medium text-xs uppercase tracking-wide">Ambiente Médico & Acolhedor</p>
                    </div>
                  </div>
               </div>
               
               {/* Floating Badge */}
               <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl border border-blue-50 hidden lg:block">
                  <p className="text-blue-600 font-bold text-lg">100%</p>
                  <p className="text-slate-500 text-xs">Foco em você</p>
               </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Por que criamos este grupo?
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  A internet está cheia de informações contraditórias. Você tenta uma coisa, depois outra, e muitas vezes o corpo simplesmente não responde como esperado.
                </p>
                <p>
                  Isso gera cansaço mental e a sensação equivocada de que o problema é a sua disciplina.
                </p>
                <p className="font-medium text-blue-900 border-l-4 border-blue-600 pl-4 py-1 bg-blue-50/50 rounded-r-lg">
                  “Você não está sozinho. Muitas vezes, o que falta não é força de vontade, mas uma estratégia metabólica que respeite a biologia do seu corpo.”
                </p>
                <p>
                  O objetivo deste grupo é silenciar o ruído externo e trazer <strong>clareza médica</strong> sobre o que realmente funciona para a construção de uma rotina mais leve e um organismo equilibrado.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;