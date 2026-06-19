'use client';

import { useLang } from "@/context/LanguageContext";
import { translations } from '../locales'; // Sözlük

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { MoveUpRight } from "lucide-react";

export default function Sectioner() {
  const { t } = useLang();

  const searchParams = useSearchParams();
  const lang = (searchParams.get('hl') as 'tr' | 'en') || 'tr';
  
  // Seçili dile ait metinleri çekiyoruz
  const currentLocale = translations[lang];
  const phrases = currentLocale.phrases;

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);

  // Dil değiştiğinde daktiloyu sıfırla ki senkronize kalsın
  useEffect(() => {
    setDisplayedText("");
    setIsDeleting(false);
    setCurrentPhraseIndex(0);
  }, [lang]);

  useEffect(() => {
    const currentFullText = phrases[currentPhraseIndex];
    if (!currentFullText) return;

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        setTypingSpeed(40);

        if (displayedText === currentFullText) {
          setTypingSpeed(3000);
          setIsDeleting(true);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        setTypingSpeed(20);

        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, typingSpeed, phrases]);

  return (
    <section className="relative overflow-hidden w-full">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none z-0">
        <div className="w-full h-full rounded-full bg-radial-gradient bg-[radial-gradient(circle,_rgba(239,68,68,0.15)_0%,_rgba(239,68,68,0.05)_40%,_transparent_70%)] blur-[60px]"></div>
      </div>
      {/* Hero Section */}
      <section className="h-90 flex items-center justify-center">
        <div className="flex items-center justify-center flex-cols h-full w-full max-w-7xl px-6">
          <div className="flex flex-col md:flex-row gap-8 border border-[#a1dbf022] shadow-md shadow-gray-500/30 rounded-lg p-6 w-full justify-between items-center">
            <div className="flex flex-col gap-4 max-w-2xl min-h-[140px] md:min-h-[100px]">
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                {currentLocale.heroTitle}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed font-mono">
                {displayedText}
                <span className="inline-block w-[3px] h-5 ml-1 bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]"></span>
              </p>
            </div>
            <div className="flex items-center justify-center shrink-0">
              <div className="flex justify-center items-center">
                <a
                href="https://nodejs.org/en/about/previous-releases"
                target="_blank"
                className="button-main"
                >
                  <div className="font-semibold">{t.MoreInfo}</div>
                  <div className="text-xs text-gray-400 flex items-center justify-center">
                    {t.MoreInfoClick}
                    <MoveUpRight size={14} />
                  </div>
                </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      <br />
          
      {/* Alt Kartlar Bölümü */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Azure */}
          <div className="border border-[#a1dbf022] rounded-lg p-6 transition-all hover:border-blue-500/30">
            <h5 className="mb-2 text-2xl font-semibold text-blue-400">Azure Satellite</h5>
            <p className="text-gray-400">{t.azureDesc}</p>
          </div>

          {/* Scarlet */}
          <div className="border border-[#a1dbf022] rounded-lg p-6 transition-all hover:border-red-500/30">
            <h5 className="mb-2 text-2xl font-semibold text-red-400">Scarlet Satellite</h5>
            <p className="text-gray-400">{t.scarletDesc}</p>
          </div>

          {/* Amber */}
          <div className="border border-[#a1dbf022] rounded-lg p-10 transition-all hover:border-amber-500/30">
            <h5 className="mb-2 text-2xl font-semibold text-amber-400">Amber Satellite</h5>
            <p className="text-gray-400">{t.amberDesc}</p>
          </div>
        </div>
      </section>
    </section>
  );
}