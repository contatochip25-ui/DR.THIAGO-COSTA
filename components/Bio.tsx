import React from 'react';
import { Instagram, Award, Stethoscope, GraduationCap } from 'lucide-react';

const Bio: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image - Authority & Social Proof */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
             <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-30 blur-lg"></div>
                <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl border border-white/20">
                    {/* Imagem de Autoridade - Dr. Thiago */}
                    <img 
                        src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago3.jpg" 
                        alt="Dr. Thiago Costa em evento médico" 
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                </div>
                {/* Stats Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-lg shadow-xl hidden md:block">
                    <p className="text-4xl font-bold text-blue-600">10+</p>
                    <p className="text-sm font-semibold text-slate-600 uppercase">Anos de<br/>Experiência</p>
                </div>
             </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-3">Quem será seu mentor</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Dr. Thiago Costa</h3>
            
            <p className="text-xl text-blue-100 mb-8 font-light leading-relaxed">
              Referência em <strong className="text-white font-semibold">Endocrinologia e Metabologia</strong>, o Dr. Thiago não acredita em atalhos perigosos.
            </p>
            
            <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                    <div className="bg-blue-800/50 p-3 rounded-lg border border-blue-700">
                        <Stethoscope className="text-blue-300 w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Prática Clínica Real</h4>
                        <p className="text-slate-300 text-sm">Milhares de pacientes atendidos e transformados através da regulação hormonal.</p>
                    </div>
                </div>
                
                <div className="flex items-start gap-4">
                    <div className="bg-blue-800/50 p-3 rounded-lg border border-blue-700">
                        <Award className="text-blue-300 w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Reconhecimento Nacional</h4>
                        <p className="text-slate-300 text-sm">Uma voz respeitada na medicina, focada em trazer a verdade científica para o público.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                    href="https://instagram.com/Dr.Thiago.costa" 
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-3 rounded-lg transition-all backdrop-blur-sm"
                >
                    <Instagram size={20} />
                    <span>@Dr.Thiago.costa</span>
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bio;