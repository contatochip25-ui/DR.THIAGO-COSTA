import React from 'react';
import { ArrowRight, MessageCircle, Lock, Users } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
        {/* Background decorative blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Wrapper Relative */}
        <div className="max-w-4xl mx-auto relative mt-16 lg:mt-12">

            {/* Avatar - Flutuante e responsivo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 lg:-top-16 z-50">
                <div className="p-1.5 rounded-full bg-white shadow-2xl">
                    <img 
                        src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiagofoto.jpg" 
                        alt="Dr. Thiago Costa" 
                        className="w-24 h-24 lg:w-28 lg:h-28 rounded-full object-cover object-top border-4 border-white bg-slate-200"
                    />
                </div>
            </div>

            {/* Card Principal */}
            <div className="bg-white/90 backdrop-blur-xl border border-slate-100 rounded-3xl shadow-2xl p-6 md:p-12 pt-16 md:pt-20 text-center relative z-20">
              
              {/* Top Badge */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 rounded-t-3xl"></div>

              <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight leading-tight">
                A orientação que você precisa <br/>está a um clique.
              </h2>
              
              <p className="text-base md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                O grupo é <span className="font-bold text-slate-800">100% gratuito</span> e será o canal oficial onde vou compartilhar as estratégias para sua virada de chave metabólica.
              </p>

              <div className="flex flex-col items-center gap-6 w-full">
                <div className="relative group w-full sm:w-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-200 animate-pulse"></div>
                    <a
                      href="https://whatsapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold px-6 py-4 lg:px-12 lg:py-6 rounded-xl text-lg lg:text-xl transition-all transform active:scale-95"
                    >
                      <MessageCircle className="w-6 h-6 lg:w-7 lg:h-7" />
                      <span className="whitespace-nowrap">ENTRAR NO GRUPO VIP</span>
                      <ArrowRight className="w-6 h-6 lg:w-7 lg:h-7 hidden sm:block" />
                    </a>
                </div>
                
                <div className="flex items-center justify-center gap-6 text-xs md:text-sm text-slate-500 mt-2">
                    <span className="flex items-center gap-1">
                        <Lock size={14} /> Dados Protegidos
                    </span>
                    <span className="flex items-center gap-1">
                        <Users size={14} /> Vagas Limitadas
                    </span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;