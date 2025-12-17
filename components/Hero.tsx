import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-12 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute top-20 -left-20 w-72 h-72 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <ShieldCheck size={16} className="text-blue-600" />
              <span>Grupo Exclusivo de Orientação Médica</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Talvez o problema nunca tenha sido falta de esforço, <span className="text-blue-600">mas de direção.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Participe do grupo gratuito guiado pelo Dr. Thiago Costa e receba orientações médicas sobre saúde metabólica, equilíbrio do organismo e ajuste corporal.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://whatsapp.com" // Replace with actual group link
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-600/20"
              >
                Entrar no Grupo Gratuito
                <ArrowRight size={20} />
              </a>
            </div>
            
            <p className="mt-4 text-sm text-slate-400">
              Acesso 100% seguro e sem compromisso.
            </p>
          </div>

          {/* Image Content - Authority Visual */}
          <div className="order-1 lg:order-2 relative flex flex-col items-center">
             {/* Removed rotation for a more solid, serious presentation of the magazine cover */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-sm lg:max-w-md mx-auto transition-transform duration-500">
                {/* 
                   ATENÇÃO: A imagem deve estar salva como 'dr-thiago-hero.jpeg' na pasta pública/raiz
                */}
                <img 
                  src="/dr-thiago-hero.jpeg" 
                  alt="Dr. Thiago Costa - Médico Endocrinologista" 
                  className="w-full h-auto object-cover bg-slate-200 min-h-[300px]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="flex items-center justify-center w-full h-64 bg-slate-100 text-slate-400 text-center p-4">Imagem não encontrada.<br/>Verifique se dr-thiago-hero.jpeg está na pasta pública.</div>';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                  <p className="font-semibold text-sm">Dr. Thiago Costa</p>
                  <p className="text-xs opacity-90">Médico Endocrinologista | @Dr.Thiago.costa</p>
                </div>
             </div>
             {/* Decor blob behind image */}
             <div className="absolute -z-10 top-10 right-0 w-full h-full bg-blue-100 rounded-full filter blur-3xl opacity-50 transform translate-x-10 translate-y-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;