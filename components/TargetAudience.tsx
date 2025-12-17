import React from 'react';
import { Check, X } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            Este grupo foi desenhado para quem?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* THIS IS FOR YOU */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-green-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <Check size={20} strokeWidth={3} />
                </span>
                Você deve entrar se:
              </h3>
              <ul className="space-y-6">
                {[
                  "Já tentou de tudo e o peso sempre volta",
                  "Sente cansaço excessivo e metabolismo lento",
                  "Quer entender a raiz do problema com um médico",
                  "Busca um processo seguro, sem loucuras",
                  "Está disposto(a) a aprender e aplicar"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* THIS IS NOT FOR YOU */}
            <div className="bg-slate-100 p-8 md:p-10 rounded-3xl border border-slate-200 relative overflow-hidden opacity-90">
               <div className="absolute top-0 left-0 w-full h-1 bg-slate-400"></div>
              <h3 className="text-2xl font-bold text-slate-500 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center">
                    <X size={20} strokeWidth={3} />
                </span>
                Não é para você se:
              </h3>
              <ul className="space-y-6">
                {[
                  "Procura pílulas mágicas ou emagrecimento do dia para a noite",
                  "Não quer mudar hábitos de vida",
                  "Acredita em promessas sensacionalistas",
                  "Não valoriza orientação médica profissional"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                     <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center mt-0.5">
                        <X className="w-3.5 h-3.5 text-slate-500" strokeWidth={3} />
                    </div>
                    <span className="text-slate-500 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;