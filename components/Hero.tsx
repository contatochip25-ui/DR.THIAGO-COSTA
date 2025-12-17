import React from 'react';
import { ShieldCheck, Lock, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-8 pb-12 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background Decor - Mais sutil e premium */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-blue-50/80 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute top-40 -left-20 w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] bg-slate-50/80 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Text Content - ORDER 1 (Primeiro no Mobile e Desktop) */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1">
            
            {/* Social Proof Badge */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 mb-6">
               <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Membro" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
               <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-100">
                  <div className="flex">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                  <span className="text-[10px] lg:text-xs text-slate-600 ml-1 font-bold tracking-tight uppercase">+2.000 vidas</span>
               </div>
            </div>

            {/* Headline Poderosa */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Pare de lutar contra a balança. <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                Ajuste seu Metabolismo.
              </span>
            </h1>

            {/* Subheadline Persuasiva */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
              O segredo não é "fechar a boca", é corrigir a rota hormonal. Receba a estratégia médica do Dr. Thiago Costa para retomar o controle do seu corpo.
            </p>

            {/* CTA High Conversion */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
              <a
                href="https://whatsapp.com" // Link do grupo
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-[1.02] shadow-xl shadow-green-500/30 ring-4 ring-green-100"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
                Quero Acessar o Grupo VIP
              </a>
            </div>
            
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs lg:text-sm text-slate-500">
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"><ShieldCheck size={14} className="text-blue-600" /> Médico Especialista</span>
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"><Lock size={14} className="text-blue-600" /> Grupo Silencioso</span>
            </div>
          </div>

          {/* Image Content - Authority Visual - ORDER 2 (Segundo no Mobile) */}
          <div className="w-full lg:w-1/2 order-2 relative mt-8 lg:mt-0 flex flex-col items-center">
             <div className="relative rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl border-4 border-white w-full max-w-[340px] lg:max-w-md mx-auto transition-transform duration-500 hover:scale-[1.01]">
                {/* Imagem Otimizada */}
                <img 
                  src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago1.jpg" 
                  alt="Dr. Thiago Costa - Referência em Endocrinologia" 
                  className="w-full h-auto object-cover object-top bg-slate-200"
                />
                
                {/* Floating Authority Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 text-left">
                   <p className="text-slate-900 font-bold text-base">Dr. Thiago Costa</p>
                   <p className="text-blue-600 text-xs font-bold uppercase tracking-wider">Endocrinologia & Metabologia</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;