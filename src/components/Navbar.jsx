import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar = ({ t, lang, setLang, showLang, setShowLang }) => {
    // navLinks massiviga "/management" manzili qo'shildi
    const navLinks = ["/", "/about-us", "/books", "/library", "/news", "/management"];

    return (
        <nav className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-4 md:px-16 py-4 bg-black/40 backdrop-blur-md border-b border-white/10">
            <Link to="/" className="flex items-center gap-2 cursor-pointer group">
                <div className="bg-[#BD1C23] text-white w-9 h-9 flex items-center justify-center rounded-lg font-bold group-hover:scale-110 transition-transform">K</div>
                <span className="text-white text-xl font-bold hidden sm:block">Kutubxona</span>
            </Link>

            <ul className="hidden lg:flex items-center gap-8 text-white/90 text-[14px] font-medium">
                {t.nav.map((item, i) => (
                    <li key={i}>
                        <Link
                            to={navLinks[i]}
                            className="cursor-pointer hover:text-[#BD1C23] transition duration-300"
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="relative">
                <button
                    onClick={() => setShowLang(!showLang)}
                    className="flex items-center gap-2 border border-white/20 rounded-md px-3 py-1.5 text-white text-sm bg-black/20 hover:bg-black/40 transition"
                >
                    <span className="uppercase font-bold tracking-widest">{lang}</span>
                    <ChevronDown size={14} />
                </button>
                {showLang && (
                    <div className="absolute right-0 mt-2 bg-white rounded shadow-2xl overflow-hidden text-black text-sm w-24 z-[101]">
                        {['uz', 'ru', 'en'].map(l => (
                            <div
                                key={l}
                                onClick={() => { setLang(l); setShowLang(false) }}
                                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer uppercase font-bold ${lang === l ? 'text-[#BD1C23]' : ''}`}
                            >
                                {l}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;