'use client';

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faTerminal } from "@fortawesome/free-solid-svg-icons/faTerminal";

export default function Footer() {
  const { t, lang } = useLang(); // Sözlük entegrasyonu
  const currentYear = new Date().getFullYear();

  const getDynamicLink = (basePath: string) => {
    return `${basePath}?hl=${lang}`;
  };

  return (
    <footer className="border-t border-[#1c2431] bg-[#0d1117] relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[150px] bg-red-500/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-[#1c2431] pb-12">
          
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="Scarlet Satellite Logo" width={38} height={38} />
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Scarlet Satellite
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs font-sans">
              {t.footerDesc}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-gray-400 tracking-wider font-mono">{t.ecosystem}</span>
            <ul className="flex flex-col gap-2 text-sm text-gray-500">
              <li><span className="text-red-400/80 font-medium">Scarlet</span> — {t.scarletfooter}</li>
              <li><span className="text-blue-400/80 font-medium">Azure</span> — {t.azurefooter}</li>
              <li><span className="text-amber-400/80 font-medium">Amber</span> — {t.amberfooter}</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-gray-400 tracking-wider font-mono">{t.navi}</span>
            <ul className="flex flex-col gap-2 text-sm">
                <li><Link href={getDynamicLink("/")} className="text-gray-500 hover:text-red-400 transition-colors">{t.home}</Link></li>
                <li><Link href={getDynamicLink("/hakkimizda")} className="text-gray-500 hover:text-red-400 transition-colors">{t.about}</Link></li>
                <li><Link href={getDynamicLink("/projelerimiz")} className="text-gray-500 hover:text-red-400 transition-colors">{t.projects}</Link></li>
                <li>
                    <a 
                        href="https://blog.scarletsatellite.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-500 hover:text-red-400 transition-colors"
                    >
                        {t.blog}
                    </a>
                </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase font-mono">{t.connectfooter}</span>
            <div className="flex items-center gap-4 text-gray-500 mt-1">
              <a href="https://github.com/scarletsatellite" target="_blank" className="hover:text-white transition-colors"><FontAwesomeIcon icon={faGithub} className="w-4.5 h-4.5" /></a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400 transition-colors"><FontAwesomeIcon icon={faLinkedin} className="w-4.5 h-4.5" /></a>
              <a href="https://x.com" target="_blank" className="hover:text-white transition-colors"><FontAwesomeIcon icon={faXTwitter} className="w-4.5 h-4.5" /></a>
              <a href="https://www.instagram.com/kishivante/" target="_blank" className="hover:text-white transition-colors"><FontAwesomeIcon icon={faInstagram} className="w-4.5 h-4.5" /></a>
            </div>
            <span className="text-xs text-gray-600 font-mono mt-2 flex items-center gap-1.5">
              <FontAwesomeIcon icon={faTerminal} className="w-3 h-3 text-gray-500" /> status: {t.production_ready}
            </span>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-gray-500 font-mono">
          <div>
            © {currentYear} Scarlet Satellite. {t.allrights}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 border border-[#1c2431] bg-[#161b22] px-2.5 py-1 rounded-md text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Next.js 15 {t.Ready}</span>
            </div>
            <div className="text-gray-600 select-none">|</div>
            <div>
              {t.DesignedBy} <span className="text-gray-400 font-sans font-medium">Scarlet Studio</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}