import React from 'react';
import { ArrowRight, MessageCircle, Lock, Users } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative blob */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-100 rounded-3xl shadow-2xl p-8 md:p-12 text-center overflow-hidden relative">
          
          {/* Top Badge */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500"></div>

          {/* Avatar - Proximity Trigger */}
          <div className="flex justify-center -mt-20 mb-6">
            <div className="p-1.5 rounded-full bg-white shadow-xl">
                <img 
                    src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/dr-thiago-reconhecimento-jpeg.jpg" 
                    alt="Dr. Thiago Costa" 
                    className="w-24 h-24 rounded-full object-cover object-top border-4 border-white bg-slate-200"
                />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            A orientação que você precisa <br/>está a um clique.
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            O grupo é <span className="font-bold text-slate-800">100% gratuito</span> e será o canal oficial onde vou compartilhar as estratégias para sua virada de chave metabólica.
          </p>

          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-200 animate-pulse"></div>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold px-12 py-6 rounded-xl text-xl transition-all transform active:scale-95"
                >
                  <MessageCircle className="w-7 h-7" />
                  ENTRAR NO GRUPO VIP AGORA
                  <ArrowRight className="w-7 h-7" />
                </a>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500 mt-2">
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
    </section>
  );
};

export default FinalCTA;