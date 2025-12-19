import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';

const Books = ({ t }) => {
    const [activeFilter, setActiveFilter] = useState('all');

    const booksData = [
        {
            id: 1,
            category: "O'quv adabiyoti",
            title: "O'zbek tilining asoslari",
            author: "Abdulla Avloniy",
            desc: "O'zbek tilining grammatikasi va lug'ati haqida to'liq ma'lumot",
            img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600",
            status: "Mavjud"
        },
        {
            id: 2,
            category: "Badiiy adabiyot",
            title: "Yulduzli tunlar",
            author: "Pirimqul Qodirov",
            desc: "O'zbek adabiyotining eng yaxshi asarlaridan biri",
            img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600",
            status: "Mavjud"
        }
    ];

    return (
        <section className="py-20 px-4 md:px-16 bg-gray-50/50">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="text-[#BD1C23] text-3xl md:text-4xl font-bold mb-4">
                        {t.booksSectionTitle || "Kutubxona Kitoblari"}
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base mb-6">
                        {t.booksSectionDesc || "Eng sara kitoblar to'plami. Ilm-fan, badiiy adabiyot va boshqa sohalardagi kitoblarni topishingiz mumkin."}
                    </p>
                    <div className="w-16 h-1 bg-[#BD1C23] mx-auto rounded-full"></div>
                </div>

                <div className="max-w-2xl mx-auto mb-10 relative">
                    <input
                        type="text"
                        placeholder="Kitob nomi, muallif yoki mavzu bo'yicha qidiring..."
                        className="w-full py-4 px-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#BD1C23] outline-none shadow-sm transition-all"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {t.categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveFilter(cat.id)}
                            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all border ${activeFilter === cat.id
                                    ? 'bg-[#BD1C23] text-white border-[#BD1C23] shadow-lg'
                                    : 'bg-white text-gray-600 border-gray-100 hover:border-gray-300'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {booksData.map((book) => (
                        <div key={book.id} className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-50 group">
                            <div className="relative h-64 overflow-hidden">
                                <img src={book.img} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <span className="absolute top-4 right-4 bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                                    {book.status}
                                </span>
                            </div>

                            <div className="p-6">
                                <span className="text-[#BD1C23] text-[12px] font-medium mb-2 block">{book.category}</span>
                                <h3 className="text-[#002B49] text-xl font-bold mb-2 group-hover:text-[#BD1C23] transition-colors line-clamp-1">{book.title}</h3>
                                <p className="text-gray-400 text-sm mb-3">{book.author}</p>
                                <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2">{book.desc}</p>

                                <button className="flex items-center gap-2 text-[#BD1C23] font-bold text-sm hover:gap-4 transition-all">
                                    Batafsil <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="bg-[#BD1C23] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-[#a0181e] transition-all shadow-lg shadow-red-900/20">
                        Barcha kitoblarni ko'rish <ArrowRight size={20} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Books;