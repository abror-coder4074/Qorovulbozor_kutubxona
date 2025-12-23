import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Hero = ({ t }) => {
    return (
        <section className="relative h-screen min-h-150 w-full flex flex-col">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://storage.kun.uz/source/3/xdzeqQvxOevYkg7uJhUXAFaFCdMi5ehh.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-white text-4xl md:text-7xl font-bold mb-4 animate-fade-in">{t.heroTitle}</h1>
                <h3 className="text-white/80 text-lg md:text-2xl mb-6 font-light">{t.heroSubtitle}</h3>
                <p className="text-white/60 max-w-2xl mb-10 text-sm md:text-base leading-relaxed">{t.heroDesc}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        to="/library"
                        className="bg-[#BD1C23] text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#a0181e] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-900/20"
                    >
                        {t.btnEnter} <ArrowRight size={18} />
                    </Link>

                    <Link
                        to="/about-us"
                        className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all transform hover:scale-105"
                    >
                        {t.btnAbout} <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

            <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition hidden md:block"><ChevronLeft size={44} /></button>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition hidden md:block"><ChevronRight size={44} /></button>
        </section>
    );
};

export default Hero;