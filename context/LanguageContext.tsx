'use client';

import { createContext, useContext, ReactNode, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { translations } from '../locales';

// TypeScript tipi için
type LangType = 'tr' | 'en';

const LanguageContext = createContext<{
  lang: LangType;
  t: typeof translations['tr'];
} | null>(null);

function LanguageProviderInner({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const lang = (searchParams.get('hl') as LangType) || 'tr';
  
  // Eğer sözlükte o dil yoksa varsayılan olarak tr'ye dön
  const t = translations[lang] || translations['tr'];

  return (
    <LanguageContext.Provider value={{ lang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Suspense hatası almamak için sarmallıyoruz
export function LanguageProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <LanguageProviderInner>{children}</LanguageProviderInner>
    </Suspense>
  );
}

// Özel hook: Bunu dilediğin her yerde çağırabilirsin
export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang context provider içinde kullanılmalıdır!');
  return context;
};