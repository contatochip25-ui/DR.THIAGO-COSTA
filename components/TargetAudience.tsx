import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            Para quem é este grupo?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* THIS IS FOR YOU */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green-500">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Você deve entrar se:
              </h3>
              <ul className="space-y-4">
                {[
                  "Busca clareza e direção médica confiável",
                  "Quer entender seu metabolismo de verdade",
                  "Já tentou várias abordagens sem consistência",
                  "Valoriza a saúde a longo prazo, não atalhos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* THIS IS NOT FOR YOU */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-slate-300">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                Este grupo NÃO é para:
              </h3>
              <ul className="space-y-4">
                {[
                  "Quem procura soluções mágicas ou imediatas",
                  "Quem espera promessas de cura ou resultados irreais",
                  "Quem não está disposto a rever hábitos",
                  "Busca apenas dicas genéricas sem base médica"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-500 text-sm">{item}</span>
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