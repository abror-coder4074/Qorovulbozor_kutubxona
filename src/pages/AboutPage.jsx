import React from 'react';
import { Book, Monitor, Users, BookOpen, Clock, GraduationCap } from 'lucide-react';

const AboutPage = ({ t }) => {
    const serviceIcons = [
        <Book className="w-6 h-6" />,        
        <Monitor className="w-6 h-6" />,     
        <Users className="w-6 h-6" />,       
        <BookOpen className="w-6 h-6" />,    
        <Clock className="w-6 h-6" />,       
        <GraduationCap className="w-6 h-6" /> 
    ];

    return (
        <div className="pt-20 bg-white">
            <div className="bg-[#BD1C23] py-20 px-4 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    {t.aboutPageTitle}
                </h1>
                <p className="text-lg opacity-90 max-w-3xl mx-auto">
                    {t.aboutPageSubtitle}
                </p>
            </div>

            <div className="max-w-6xl mx-auto py-20 px-6 text-center">
                <h2 className="text-4xl font-bold text-[#001F3F] mb-10">
                    {t.aboutHistoryTitle}
                </h2>
                <div className="space-y-8 text-gray-600 text-lg leading-relaxed max-w-5xl mx-auto text-justify">
                    <p>{t.aboutFullText1}</p>
                    <p>{t.aboutFullText2}</p>
                    <p>{t.aboutFullText3}</p>
                </div>
            </div>

            <div className="py-16 border-y border-gray-100">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-[#001F3F] mb-12">
                        Kutubxonamiz raqamlarda
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {t.stats?.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-5xl font-bold text-[#BD1C23] mb-3">
                                    {stat.n}
                                </span>
                                <span className="text-gray-500 font-medium">
                                    {stat.t}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-24 px-6">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-white p-10 rounded-4xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50">
                        <div className="w-14 h-14 bg-[#BD1C23] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-red-200">
                            <BookOpen className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#001F3F] mb-5">{t.missionTitle}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{t.missionDesc}</p>
                    </div>

                    <div className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50">
                        <div className="w-14 h-14 bg-[#BD1C23] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-red-200">
                            <GraduationCap className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#001F3F] mb-5">{t.goalTitle}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{t.goalDesc}</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F9FB] py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-[#001F3F] text-center mb-16">
                        {t.ourServicesTitle}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {t.servicesList?.map((service, index) => (
                            <div key={index} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                <div className="w-16 h-16 bg-[#BD1C23] rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                                    {serviceIcons[index]}
                                </div>
                                <h4 className="text-2xl font-bold text-[#001F3F] mb-4">
                                    {service.title}
                                </h4>
                                <p className="text-gray-500 leading-relaxed text-base">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;