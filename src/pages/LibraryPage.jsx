import React from 'react';
import { Search, Monitor, Smartphone, Globe } from 'lucide-react';

const LibraryPage = ({ t }) => {
    return (
        <div className="pt-16 min-h-screen">
            <div className="relative h-[550px] flex items-center justify-center text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000')`
                    }}
                ></div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        {t.libTitle}
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto">
                        {t.libSubtitle}
                    </p>

                    <div className="relative max-w-2xl mx-auto group">
                        <input
                            type="text"
                            placeholder={t.libSearch}
                            className="w-full py-5 px-8 pr-16 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/30 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BD1C23] transition-all"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#BD1C23] p-3 rounded-xl hover:scale-105 transition-transform">
                            <Search className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#BD1C23] rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-6 transition-transform">
                                <Monitor className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{t.libCard1}</h3>
                            <p className="text-gray-600 leading-relaxed">{t.libCard1Desc}</p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#BD1C23] rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-6 transition-transform">
                                <Smartphone className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{t.libCard2}</h3>
                            <p className="text-gray-600 leading-relaxed">{t.libCard2Desc}</p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#BD1C23] rounded-2xl flex items-center justify-center text-white mb-8 group-hover:rotate-6 transition-transform">
                                <Globe className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{t.libCard3}</h3>
                            <p className="text-gray-600 leading-relaxed">{t.libCard3Desc}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-16 text-[#001F3F]">Kutubxonamiz raqamlarda</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        {t.stats?.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <span className="text-5xl font-extrabold text-[#BD1C23] mb-3">{stat.n}</span>
                                <span className="text-gray-500 font-medium tracking-wide">{stat.t}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryPage;