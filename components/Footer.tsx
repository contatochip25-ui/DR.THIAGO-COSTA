import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-sm border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold text-lg mb-1">Dr. Thiago Costa</h3>
            <p className="text-slate-500">Endocrinologia e Metabologia</p>
          </div>
          
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Dr. Thiago Costa. Todos os direitos reservados.</p>
            <p className="mt-2 text-xs text-slate-600 max-w-md mx-auto md:mx-0 md:ml-auto">
              Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;