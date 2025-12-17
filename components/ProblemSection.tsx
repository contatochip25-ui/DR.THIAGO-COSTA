import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 md:order-1 relative group">
               {/* Imagem da Equipe - Humanização e Estrutura */}
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 group-hover:scale-[1.01]">
                  <img 
                    src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/dr-thiago-equipe.jpg" 
                    alt="Equipe Dr. Thiago Costa" 
                    className="w-full h-auto object-cover bg-slate-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90"></div>
                  
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium uppercase tracking-widest text-blue-300 mb-1">Estrutura Completa</p>
                    <p className="text-xl font-bold">Medicina de alta performance ao seu alcance.</p>
                  </div>
               </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <AlertCircle size={14} />
                Atenção aos sinais
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Você sente que seu corpo joga contra você?
              </h2>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  A maioria das pessoas acredita que não emagrece por falta de força de vontade. <strong className="text-slate-900">Isso é uma mentira</strong> que te contaram.
                </p>
                <p>
                  Se o seu metabolismo estiver "travado" por desequilíbrios hormonais ou inflamação, nenhuma dieta restritiva vai funcionar a longo prazo. Você apenas gera mais estresse para o organismo.
                </p>
                
                <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-sm mt-8">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="text-blue-600" size={20} />
                    A Visão do Dr. Thiago:
                  </h4>
                  <p className="text-slate-700 italic">
                    “Não tratamos apenas o peso. Tratamos a <span className="text-blue-600 font-bold">causa raiz</span>. Quando ajustamos a casa (seu corpo), a estética vem como consequência natural da saúde.”
                  </p>
                </div>

                <p className="text-sm text-slate-500 mt-4">
                  Neste grupo, vamos quebrar mitos e te mostrar o caminho da medicina baseada em evidências.
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