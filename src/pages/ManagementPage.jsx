import React from 'react';
import { Mail, Phone, Calendar } from 'lucide-react';
import Photo from "../../public/Qoravulbozordirektori.jpg"

const ManagementPage = ({ t }) => {
    const staff = [
        {
            id: 1,
            name: {
                uz: "Yuldasheva Sharofat Turdimamatova",
                ru: "Юлдашева Шарофат Турдимаматова",
                en: "Yuldasheva Sharofat Turdimamatova"
            },
            role: t.positionDirector,
            image: Photo,
            reception: "Dushanba - Juma, 09:00 - 11:00",
            email: "director@qorovulbozorkutubxona.uz",
            phone: "+998 55 312 60 34"
        },
        // {
        //     id: 2,
        //     name: {
        //         uz: "Karimova Zilola",
        //         ru: "Каримова Зилола",
        //         en: "Karimova Zilola"
        //     },
        //     role: t.positionDeputy,
        //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&fit=crop",
        //     reception: "Seshanba - Shanba, 14:00 - 16:00",
        //     email: "deputy@qorovulbozorkutubxona.uz",
        //     phone: "+998 65 364 12 35"
        // }
    ];

    const currentLang = t.nav[0] === "Bosh sahifa" ? "uz" : t.nav[0] === "Главная" ? "ru" : "en";

    return (
        <div className="pt-24 min-h-screen bg-[#F9FAFB]">
            <div className="bg-[#BD1C23] py-20 px-4 text-center text-white shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    {t.managementTitle}
                </h1>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                    {t.managementSubtitle}
                </p>
            </div>

            <div className="max-w-7xl mx-auto py-20 px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
                    {staff.map((person) => (
                        <div
                            key={person.id}
                            className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={person.image}
                                    alt={person.name[currentLang]}
                                    className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="p-10 relative">
                                <div className="absolute -top-8 left-10 bg-[#BD1C23] text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                                    {person.role}
                                </div>

                                <h3 className="text-2xl font-bold text-[#001F3F] mb-6 mt-2">
                                    {person.name[currentLang]}
                                </h3>

                                <div className="space-y-5">
                                    <div className="flex items-start gap-4 text-gray-600 group/item">
                                        <div className="bg-red-50 p-2 rounded-lg group-hover/item:bg-[#BD1C23] group-hover/item:text-white transition-colors">
                                            <Calendar className="w-5 h-5 shrink-0" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold uppercase text-gray-400">{t.managementContact}</span>
                                            <span className="text-sm font-medium">{person.reception}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 text-gray-600 group/item">
                                        <div className="bg-red-50 p-2 rounded-lg group-hover/item:bg-[#BD1C23] group-hover/item:text-white transition-colors">
                                            <Mail className="w-5 h-5 shrink-0" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold uppercase text-gray-400">{t.managementEmail}</span>
                                            <span className="text-sm font-medium underline decoration-red-200">{person.email}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 text-gray-600 group/item">
                                        <div className="bg-red-50 p-2 rounded-lg group-hover/item:bg-[#BD1C23] group-hover/item:text-white transition-colors">
                                            <Phone className="w-5 h-5 shrink-0" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold uppercase text-gray-400">{t.managementPhone}</span>
                                            <span className="text-sm font-bold text-[#001F3F]">{person.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManagementPage;