import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative blob */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Avatar - Proximity Trigger */}
          <div className="flex justify-center mb-6">
            <div className="p-1 rounded-full bg-gradient-to-tr from-blue-500 to-green-500 shadow-lg">
                <img 
                    src="/dr-thiago-hero.jpeg" 
                    alt="Dr. Thiago Costa" 
                    className="w-20 h-20 rounded-full object-cover object-top border-4 border-white bg-slate-200"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/100x100/e2e8f0/475569?text=Dr";
                    }}
                />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Dê o primeiro passo com orientação correta.
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            O grupo é gratuito, silencioso (somente administradores enviam mensagens) e focado em entregar qualidade para sua saúde.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-5 rounded-xl text-xl transition-all shadow-lg hover:shadow-green-600/30 transform hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              Quero Entrar no Grupo VIP
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-sm text-slate-400 mt-4">
              Ao clicar, você será redirecionado para o WhatsApp de forma segura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;