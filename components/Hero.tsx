import React from 'react';
import { ShieldCheck, ArrowRight, Lock, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-8 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background Decor - Mais sutil e premium */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-50/80 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-slate-50/80 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
            
            {/* Social Proof Badge */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 mb-6">
               <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Membro" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
               <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs text-slate-500 ml-1 font-medium">(+2.000 vidas impactadas)</span>
               </div>
            </div>

            {/* Headline Poderosa & Blindada */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Pare de lutar contra a balança. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                Aprenda a ajustar seu Metabolismo.
              </span>
            </h1>

            {/* Subheadline Persuasiva */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              O segredo não é "fechar a boca", é corrigir a rota hormonal. Entre no Grupo VIP e receba a estratégia médica do Dr. Thiago Costa para retomar o controle do seu corpo com saúde e ciência.
            </p>

            {/* CTA High Conversion */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://whatsapp.com" // Link do grupo
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-5 rounded-xl text-lg transition-all transform hover:scale-[1.02] shadow-xl shadow-green-500/30 ring-4 ring-green-100"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
                Quero Acessar o Grupo VIP
              </a>
            </div>
            
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-blue-600" /> Médico Especialista</span>
              <span className="flex items-center gap-1.5"><Lock size={16} className="text-blue-600" /> Grupo Silencioso</span>
            </div>
          </div>

          {/* Image Content - Authority Visual */}
          <div className="order-1 lg:order-2 relative flex flex-col items-center">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-sm lg:max-w-md mx-auto transition-transform duration-500 hover:shadow-3xl">
                {/* Imagem de Autoridade Solo - Dr. Thiago */}
                <img 
                  src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/dr-thiago-reconhecimento-jpeg.jpg" 
                  alt="Dr. Thiago Costa - Referência em Endocrinologia" 
                  className="w-full h-auto object-cover bg-slate-200 min-h-[450px]"
                />
                
                {/* Floating Authority Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100">
                   <p className="text-slate-900 font-bold text-sm">Dr. Thiago Costa</p>
                   <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider">Endocrinologia & Metabologia</p>
                </div>
             </div>
             
             {/* Abstract Medical Element */}
             <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-transparent rounded-full opacity-40 blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;