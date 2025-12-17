import React from 'react';
import { BookOpen, Activity, Target, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Activity className="w-7 h-7 text-white" />,
    bg: "bg-blue-500",
    title: "Protocolo Metabólico",
    description: "Entenda a ciência por trás do emagrecimento real, sem o efeito sanfona que destrói sua saúde."
  },
  {
    icon: <Target className="w-7 h-7 text-white" />,
    bg: "bg-emerald-500",
    title: "Direcionamento Médico",
    description: "Chega de 'dicas de internet'. Tenha acesso a informações validadas por um especialista em endocrinologia."
  },
  {
    icon: <BookOpen className="w-7 h-7 text-white" />,
    bg: "bg-indigo-500",
    title: "Estratégias de Longevidade",
    description: "Como ajustar seu corpo para viver mais e com mais energia, regulando sono, hormônios e rotina."
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-white" />,
    bg: "bg-slate-700",
    title: "Ambiente Exclusivo",
    description: "Um grupo focado, sem spam. Apenas conteúdos de alto valor selecionados pelo Dr. Thiago e equipe."
  }
];

const WhatToExpect: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Conteúdo Premium</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            O que você vai desbloquear ao entrar
          </h2>
          <p className="text-slate-600 text-lg">
            Esqueça o que você já viu por aí. Este é um ambiente de <strong>Educação em Saúde</strong> de alto nível.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-5 p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:bg-white hover:border-blue-100 transition-all duration-300 group">
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${benefit.bg} shadow-lg shadow-blue-900/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Compliance & Trust Note */}
        <div className="mt-16 text-center">
            <div className="inline-block p-4 rounded-lg bg-blue-50 border border-blue-100 max-w-2xl mx-auto">
                <p className="text-xs md:text-sm text-blue-800 font-medium">
                    🩺 <strong>Nota de Ética Médica:</strong> Este grupo tem caráter informativo e educacional. O Dr. Thiago preza pela medicina baseada em evidências e não promete curas milagrosas.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;