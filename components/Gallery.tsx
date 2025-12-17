import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago1.jpg",
    "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago2.jpg",
    "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago3.jpg",
    "https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiagofoto.jpg"
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Bastidores</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            Vivendo a Medicina na Prática
          </h2>
          <p className="text-slate-600 mt-4">
            Um pouco da nossa rotina, eventos e compromisso com a excelência médica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div key={index} className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              {/* Overlay de gradiente no hover */}
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-all duration-300 z-10"></div>
              
              <img 
                src={img} 
                alt={`Registro Dr. Thiago Costa ${index + 1}`} 
                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Ícone decorativo */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-blue-600 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;