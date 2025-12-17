import React from 'react';
import { BookOpen, Activity, Compass, Shield } from 'lucide-react';

const benefits = [
  {
    icon: <Activity className="w-6 h-6 text-blue-600" />,
    title: "Visão Médica do Metabolismo",
    description: "Entenda como o equilíbrio do organismo impacta diretamente seus resultados e sua disposição diária."
  },
  {
    icon: <Compass className="w-6 h-6 text-blue-600" />,
    title: "Direcionamento Claro",
    description: "Chega de tentar adivinhar. Receba orientações organizadas para aplicar na sua rotina de forma sustentável."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: "Conteúdo Educativo",
    description: "Explicações em linguagem simples sobre como o seu corpo funciona e como jogar a favor dele."
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Ambiente Seguro",
    description: "Um espaço focado em saúde, sem promessas milagrosas ou julgamentos, guiado pela ética médica."
  }
];

const WhatToExpect: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            O que você vai encontrar no grupo
          </h2>
          <p className="text-slate-600">
            Uma abordagem baseada na ciência para quem busca constância e saúde real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-100 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center border border-slate-100">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Compliance Note */}
        <div className="mt-12 text-center">
            <p className="text-xs text-slate-400 bg-slate-50 inline-block px-4 py-2 rounded-full">
                ⚠️ Este grupo é informativo e não substitui uma consulta médica individual. Sem promessas de resultados garantidos.
            </p>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;