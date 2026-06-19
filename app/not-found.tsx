"use client";

import Link from "next/link";
import { useLang } from "../context/LanguageContext";
import { Terminal, AlertTriangle, Home } from "lucide-react";
import Footer from "@/components/Footer";

export default function NotFound() {
  const { t, lang } = useLang();

  const getDynamicLink = (basePath: string) => {
    return `${basePath}?hl=${lang}`;
  };

  return (
    <div className="min-h-screen flex flex-col justify-between text-white bg-[#0d1117]">
      <main className="max-w-7xl mx-auto px-6 py-20 flex-1 w-full flex flex-col items-center justify-center relative">
        
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 blur-[140px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 border border-red-500/20 bg-[#0d1117]/60 backdrop-blur-md p-8 rounded-xl max-w-md w-full text-center shadow-2xl shadow-red-500/5 flex flex-col items-center gap-6">
          
          <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 relative">
            <Terminal size={24} />
            <AlertTriangle size={14} className="absolute bottom-2 right-2 text-amber-500 animate-pulse" />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-mono font-bold tracking-wider text-red-500">404</h1>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {t.notFoundTitle || "Bağlantı Kesildi"}
            </h2>
            <p className="text-sm opacity-75 leading-relaxed font-mono mt-2 bg-black/30 p-3 rounded-lg border border-[#1c2431]">
              {t.notFoundDesc || "Hata: İstenen sinyal veya koordinat ekosistem ağında bulunamadı."}
            </p>
          </div>

          <Link
            href={getDynamicLink("/")}
            className="inline-flex items-center justify-center gap-2 w-full py-3 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 rounded-lg text-sm font-semibold tracking-wide transition-colors font-sans cursor-pointer group"
          >
            <Home size={16} className="transition-transform group-hover:-translate-y-0.5" />
            {t.backToHome || "Üsse Geri Dön"}
          </Link>
        </div>

      </main>

      <div className="w-full relative z-10">
        <Footer />
      </div>
    </div>
  );
}