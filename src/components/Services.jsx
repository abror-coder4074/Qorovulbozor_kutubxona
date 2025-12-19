import React from 'react';
import { Building2, Wifi, ArrowRight } from 'lucide-react';

const Services = ({ t }) => {
  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-[#BD1C23] text-3xl md:text-4xl font-bold mb-4 uppercase">
            {t.servicesTitle}
          </h2>
          <div className="w-20 h-1.5 bg-[#BD1C23] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="border border-gray-100 rounded-[30px] p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="text-[#BD1C23] mb-6 group-hover:scale-110 transition-transform origin-left">
              <Building2 size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-[#002B49] text-xl font-bold mb-4">
              {t.service1Title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {t.service1Desc}
            </p>
          </div>

          <div className="border border-gray-100 rounded-[30px] p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="text-[#BD1C23] mb-6 group-hover:scale-110 transition-transform origin-left">
              <Wifi size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-[#002B49] text-xl font-bold mb-4">
              {t.service2Title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {t.service2Desc}
            </p>
          </div>

        </div>

        <div className="flex justify-center">
          <button className="bg-[#BD1C23] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-[#a0181e] transition-all transform active:scale-95 shadow-lg shadow-red-900/10">
            {t.btnMore} <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;