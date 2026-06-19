'use client';

import { useLang } from "@/context/LanguageContext";
import Image from "next/image";
import { Search, Globe, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function Navbar() {
  const { t } = useLang();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // URL  deki mevcut dili al yoksa varsayılan olarak tr yap
  const currentLang = searchParams.get('hl') || 'tr';

  // Dil değiştiğinde URL parametresini güncelleyen fonksiyon
  const changeLanguage = (lang: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('hl', lang);
    router.push(`${pathname}?${params.toString()}`);
  };

  // Menü linklerine tıklatıldığında mevcut dil parametresini korutur
  const getDynamicLink = (basePath: string) => {
    return `${basePath}?hl=${currentLang}`;
  };

  return (
    <header className="border-b border-[#1c2431] bg-[#0d1117]">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        
        {/* Sol Taraf: Logo ve Navigasyon */}
        <div className="flex items-center gap-10">
          <Link href={getDynamicLink("/")}>
            <Image
              src="/logo.svg" // public klasöründen çağırır
              alt="Scarlet Satellite Logo"
              width={50}
              height={50}
              className="cursor-pointer"
              loading="eager"
            />
          </Link>

          <nav className="hidden lg:flex gap-8 text-sm text-gray-300">
            <Link href={getDynamicLink("/")} className="hover:text-red-400 transition-colors">
              {t.home}
            </Link>
            <Link href={getDynamicLink("/hakkimizda")} className="hover:text-red-400 transition-colors">
              {t.about}
            </Link>
            <Link href={getDynamicLink("/projelerimiz")} className="hover:text-red-400 transition-colors">
              {t.projects}
            </Link>
            <a 
                href="https://blog.scarletsatellite.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors"
                >
                {t.blog}
            </a>
            <Link 
                href={getDynamicLink("/iletisim")} 
                className="hover:text-red-400 transition-colors inline-flex items-center gap-1.5 group"
                >
                <span>{t.contact}</span>
                <MoveUpRight 
                    size={14} 
                    className="text-gray-400 transition-colors group-hover:text-red-400/70 shrink-0" 
                />
            </Link>
          </nav>
        </div>

        {/* Arama Çubuğu ve Dil Seçici */}
        <div className="flex items-center gap-4">
          
          {/* Arama Çubuğu */}
            <div className="flex items-center gap-2 border border-[#2a3444] rounded-lg px-3 py-2 bg-[#161b22]">
                <Search size={16} className="text-gray-400" />
                <input
                placeholder={t.searchPlaceholder}
                className="bg-transparent outline-none w-60 focus:w-64 transition-all text-sm text-gray-200 placeholder-gray-500"
                />
            </div>

            <div className="relative flex items-center text-left group">
                <Globe 
                    size={16} 
                    className="absolute left-3 text-gray-400 pointer-events-none transition-colors group-hover:text-red-400/70" 
                />
                <select
                    value={currentLang}
                    onChange={(e) => changeLanguage(e.target.value)}
                    className="bg-[#161b22] text-gray-300 border border-[#2a3444] rounded-lg pr-10 pl-9 py-2 text-sm focus:outline-none focus:border-red-500/50 cursor-pointer font-sans h-[38px] transition-colors hover:border-[#303c50] appearance-none"
                >
                    <option value="tr" className="bg-[#161b22]">Türkçe</option>
                    <option value="en" className="bg-[#161b22]">English</option>
                </select>
                <span className="absolute right-3 pointer-events-none text-gray-500 text-[10px] select-none">▼</span>
            </div>
        </div>
      </div>
    </header>
  );
}