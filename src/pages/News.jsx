import React from 'react';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

const News = ({ t }) => {
  return (
    <section className="py-20 bg-gray-50 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="text-[#BD1C23]" size={24} />
              <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">AKM Hayoti</span>
            </div>
            <h2 className="text-[#002B49] text-3xl md:text-5xl font-black uppercase">
              {t.newsTitle}
            </h2>
          </div>
          <button className="bg-[#BD1C23] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#96161b] transition-all flex items-center gap-3 shadow-lg shadow-red-200">
            {t.newsBtn} <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.newsData.map((item) => (
            <div key={item.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2">
                  <Calendar size={14} className="text-[#BD1C23]" />
                  {/* <span className="text-[12px] font-bold text-[#002B49]">20.12.2025</span> */}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-[#002B49] text-xl font-bold mb-4 line-clamp-2 leading-tight group-hover:text-[#BD1C23] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                   <button className="text-[#BD1C23] font-extrabold text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                     Batafsil 
                     <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                   </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#002B49] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#BD1C23] rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#BD1C23]">Tafsilotlar</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <p className="text-gray-300 leading-relaxed text-lg">
                “Tashabbusli byudjet”ning 2023 yil 1-mavsumida mazkur axborot-kutubxona markazi 1 mlrd 200 mln so‘m mablag‘ yutib olib, yangi bino qurishga kirishgan edi. Tuman mahalliy byudjetidan qo‘shimcha 650 mln so‘m mablag‘ ajratildi. Buning natijasida yangidan zamonaviy axborot-kutubxona markazi qad rostladi.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Bugungi kunda kutubxonada 45 mingta kitob fondi va 2 mingta elektron kitoblar mavjud. Direktor Sharofat Yuldasheva ta'kidlaganidek: "Yangi sharoitlar kunlik qatnovni 100 nafarga yetkazish imkonini beradi".
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default News;