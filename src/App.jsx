import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Books from './components/Books';
import Services from './components/Services';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import LibraryPage from './pages/LibraryPage';
import ManagementPage from './pages/ManagementPage'; // Qo'shildi

const translations = {
  uz: {
    // Navga Raxbariyat qo'shildi
    nav: ["Bosh sahifa", "Biz haqida", "Kitoblarimiz", "Kutubxona", "Yangiliklar", "Raxbariyat"],
    heroTitle: "Bilim va Madaniyat Markazi",
    heroSubtitle: "Zamonaviy kutubxona tajribasi",
    heroDesc: "Minglab kitoblar, zamonaviy texnologiyalar va qulay muhitda bilim olish imkoniyati",
    btnEnter: "Kutubxonaga kirish",
    btnAbout: "Biz haqida",
    // Quva -> Qoravulbozor ga o'zgardi
    sectionTitle: "Qoravulbozor tuman Axborot kutubxona markazi",
    aboutText1: "O'zbekiston Respublikasi Prezidenti Sh.Mirziyoyevning 2019-yil 7-iyundagi «O'zbekiston Respublikasi aholisiga axborot kutubxona xizmati ko'rsatishni yanada takomillashtirish to'g'risida»gi PQ 4354-son qarori ijrosini ta'minlash maqsadida 2019-yil 1-noyabrdan Qoravulbozor tuman Axborot kutubxona markazi ish faoliyatini boshladi.",
    aboutText2: "Bizning kutubxona zamonaviy texnologiyalar va an'anaviy kutubxona xizmatlarini birlashtirgan holda, aholiga sifatli axborot xizmatlarini ko'rsatish maqsadida yaratilgan.",

    statsTitle: "Kutubxonamiz raqamlarda",
    stats: [
      { n: "10K+", t: "Yillik foydalanuvchilar" },
      { n: "85 000+", t: "Kitoblar fondi" },
      { n: "1+", t: "O'qish zallari" },
      { n: "15+", t: "Malakali xodimlar" }
    ],

    contactTitle: "Bog'lanish uchun ma'lumotlar",
    addressTitle: "Manzil",
    addressDesc: "Qoravulbozor tumani, Mustaqillik ko'chasi, 1-uy",
    phoneTitle: "Telefon",
    btnMore: "Batafsil ma'lumot",
    booksSectionTitle: "Kutubxona Kitoblari",
    booksSectionDesc: "Eng sara kitoblar to'plami. Ilm-fan, badiiy adabiyot va boshqa sohalardagi kitoblarni topishingiz mumkin.",
    categories: [
      { id: 'all', name: 'Barcha kitoblar' },
      { id: 'badiiy', name: 'Badiiy adabiyot' },
      { id: 'bolalar', name: 'Bolalar adabiyoti' },
      { id: 'jahon', name: 'Jahon adabiyoti' },
      { id: 'oqv', name: "O'quv adabiyoti" }
    ],
    servicesTitle: "Kutubxona xizmatlari",
    service1Title: "Zamonaviy o'quv zallari",
    service1Desc: "Qulay va zamonaviy jihozlangan o'quv zallari, individual va guruh bo'lib o'qish imkoniyatlari. Wi-Fi, elektr rozetkalari va konditsioner bilan ta'minlangan.",
    service2Title: "Internet va Wi-Fi",
    service2Desc: "Yuqori tezlikdagi internet va bepul Wi-Fi xizmati, elektron resurslardan foydalanish imkoniyati. Barcha o'quv zallarida mavjud.",
    footerDesc: "Qoravulbozor tuman Axborot kutubxona markazi - bilim va ma'rifat ulashamiz.",
    navTitle: "Navigatsiya",
    contactTitleShort: "Bog'lanish",
    workTimeTitle: "Ish vaqti:",
    workHours: "Soat 08:00 dan - 18:00 gacha",
    lunchHours: "Tushlik 12:00 dan - 13:00 gacha",
    holiday: "Dam olish kunisiz",
    subscribeTitle: "Yangiliklarga obuna bo'ling",
    subscribeDesc: "Eng so'nggi yangiliklar va e'lonlardan xabardor bo'ling.",
    emailPlaceholder: "Email manzilingiz",
    btnSubscribe: "Obuna",
    copyright: "Qoravulbozor tuman Axborot kutubxona markazi. Barcha huquqlar himoyalangan.",

    aboutPageTitle: "Qoravulbozor tuman Axborot kutubxona markazi",
    aboutPageSubtitle: "2019-yildan beri Qoravulbozor tuman aholisiga sifatli axborot xizmatlarini ko'rsatib kelmoqda",
    aboutHistoryTitle: "Tarix va rivojlanish",
    aboutFullText1: "Qoravulbozor tuman Axborot kutubxona markazi 2019-yil 1-noyabrdan PQ-4354 qarori asosida ish boshlagan.",
    aboutFullText2: "Kutubxonamiz zamonaviy texnologiyalarni an'anaviy xizmatlar bilan birlashtiradi.",
    aboutFullText3: "Bugungi kunda fondimizda 85,000 dan ortiq resurslar mavjud.",
    missionTitle: "Bizning vazifamiz",
    missionDesc: "Qoravulbozor tuman aholisiga sifatli axborot xizmatlarini ko'rsatish.",
    goalTitle: "Bizning maqsadimiz",
    goalDesc: "Aholining axborot ehtiyojlarini to'liq qondirish.",
    ourServicesTitle: "Xizmatlarimiz",
    servicesList: [
      { title: "Kitob berish xizmati", desc: "50,000 dan ortiq kitoblar, jurnallar va elektron resurslar." },
      { title: "Internet va kompyuter", desc: "Zamonaviy kompyuterlar va elektron kutubxona tizimi." },
      { title: "Maslahat xizmati", desc: "Tajribali kutubxonachilar tomonidan sifatli yordam." },
      { title: "O'quv zallari", desc: "Qulay va sokin muhitda o'qish uchun ideal joylar." },
      { title: "24/7 Online xizmat", desc: "Elektron tizim orqali 24 soat davomida resurslarga kirish." },
      { title: "Tadbir va darslar", desc: "Muntazam ravishda madaniy-ma'rifiy tadbirlar o'tkaziladi." }
    ],
    libTitle: "Qoravulbozor tuman Axborot kutubxona markazi",
    libSubtitle: "Bilim olish uchun barcha sharoitlar mavjud",
    libSearch: "Kitob nomi yoki muallifni kiriting...",
    libCard1: "Elektron kutubxona",
    libCard1Desc: "Masofadan turib mutolaa qilish imkoniyati.",
    libCard2: "QR-Kitoblar",
    libCard2Desc: "Skaner qilish orqali yuklab oling.",
    libCard3: "Xalqaro baza",
    libCard3Desc: "Dunyoning raqamli kutubxonalari bilan integratsiya.",

    // Raxbariyat uchun yangi matnlar
    managementTitle: "Markaz raxbariyati",
    managementSubtitle: "Qoravulbozor tuman Axborot kutubxona markazi mas'ul xodimlari",
    positionDirector: "Direktor",
    managementContact: "Qabul vaqti:",
    managementEmail: "Email:",
    managementPhone: "Tel:",
  },
  ru: {
    nav: ["Главная", "О нас", "Наши книги", "Библиотека", "Новости", "Руководство"],
    // ... Ruscha tarjimalarda ham Quva -> Караулбазар deb o'zgartiring (vaqt tejash uchun qisqartirildi)
    libTitle: "Информационно-библиотечный центр Караулбазарского района",
    managementTitle: "Руководство центра",
  },
  en: {
    nav: ["Home", "About us", "Our books", "Library", "News", "Management"],
    // ... Inglizcha tarjimalarda ham Quva -> Qorovulbozor deb o'zgartiring
    libTitle: "Qorovulbozor District Information Library Center",
    managementTitle: "Center Management",
  }
};

function App() {
  const [lang, setLang] = useState('uz');
  const [showLang, setShowLang] = useState(false);
  const t = translations[lang];

  return (
    <Router>
      <div className="antialiased selection:bg-[#BD1C23] selection:text-white min-h-screen flex flex-col">
        <Navbar
          t={t}
          lang={lang}
          setLang={setLang}
          showLang={showLang}
          setShowLang={setShowLang}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero t={t} />
                <About t={t} />
                <Books t={t} />
                <Services t={t} />
              </>
            } />
            <Route path="/about-us" element={<AboutPage t={t} />} />
            <Route path="/books" element={<div className="pt-32 px-16"><Books t={t} /></div>} />
            <Route path="/library" element={<LibraryPage t={t} />} />
            <Route path="/news" element={<div className="pt-32 text-center text-3xl font-bold">Yangiliklar bo'limi</div>} />
            <Route path="/management" element={<ManagementPage t={t} />} />
          </Routes>
        </main>
        <Footer t={t} />
      </div>
    </Router>
  );
}

export default App;