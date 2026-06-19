"use client";

import { useLang } from "../../context/LanguageContext";
import { Mail, ShieldCheck, Terminal } from "lucide-react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen flex flex-col justify-between text-white bg-[#0d1117]">
      <main className="max-w-7xl mx-auto px-6 py-20 flex-1 w-full relative">
        
        {/* Arka Plan Parlaması */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-500/5 blur-[130px] rounded-full pointer-events-none z-0" />

        {/* Başlık Alanı */}
        <div className="relative z-10 mb-16 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500">
            {t.contact || "İletişim"}
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-4 tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {t.contactTitle || "Bizimle İletişime Geçin"}
          </h1>
          <p className="opacity-80 text-lg leading-relaxed">
            {t.contactDesc || "Projeleriniz, iş birlikleriniz veya teknik sorularınız için doğrudan çekirdek ekibe ulaşın."}
          </p>
        </div>

        {/* İletişim Blokları */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-20">
          
          {/* Sol Kart: Doğrudan İletişim */}
          <div className="border border-[#a1dbf011] bg-[#0d1117]/40 backdrop-blur-md p-8 rounded-xl flex flex-col gap-6">
            <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <Mail size={20} className="text-red-400" />
              {t.directContact || "Doğrudan Hat"}
            </h3>
            <p className="text-sm opacity-75 leading-relaxed">
              {t.mailDesc || "Formlarla vakit kaybetmeyin. E-posta adresimiz üzerinden bize anında ulaşabilirsiniz. uh... şey... mail sunucusu kurmayı unuttum..."}
            </p>
            <a
              href="mailto:contact@scarletsatellite.com"
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 rounded-lg text-sm font-semibold tracking-wide transition-colors font-mono"
            >
              contact@scarletsatellite.com
            </a>
          </div>

          {/* Sağ Kart: Güvenlik ve Altyapı Bilgisi */}
          <div className="border border-[#a1dbf011] bg-[#0d1117]/40 backdrop-blur-md p-8 rounded-xl flex flex-col gap-6">
            <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <ShieldCheck size={20} className="text-emerald-400" />
              {t.secureNetwork || "Güvenli Altyapı"}
            </h3>
            <p className="text-sm opacity-75 leading-relaxed">
              {t.networkDesc || "Tüm iletişim kanallarımız ve veri akışlarımız uçtan uca şifreli Scarlet ekosistemi sunucularında barındırılmaktadır."}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono pt-2 border-t border-[#1c2431]/40">
              <Terminal size={12} className="text-emerald-500/70" />
              <span>PGP Key: 0x9F3A4B... Ready</span>
            </div>
          </div>

        </div>

      </main>

      {/* Sayfa Sonu Boşluğu ve Footer */}
      <div className="w-full relative z-10">
        <Footer />
      </div>
    </div>
  );
}