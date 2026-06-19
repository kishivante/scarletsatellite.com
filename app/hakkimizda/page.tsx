"use client";

import { useLang } from "../../context/LanguageContext";
import TeamCard from "../../components/TeamCard";
import { teamMembers } from "../../components/teamData";
import Footer from "@/components/Footer";
import { Eye, Rocket } from "lucide-react";

export default function AboutPage() {
  const { t } = useLang();

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 text-white flex-1 relative min-h-screen">
      
      <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 mb-12 max-w-2xl">
        <span className="text-xs font-mono uppercase tracking-widest text-red-500">
          {t.about || "Hakkımızda"}
        </span>
        <h1 className="text-4xl font-bold mt-2 mb-4 tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          {t.aboutTitle || "Scarlet Satellite"}
        </h1>
        <p className="opacity-80 text-lg leading-relaxed">
          {t.aboutMainDesc || "Yüksek performanslı, optimize ve güvenli dijital sistemler üreten bağımsız bir yazılım ve teknoloji ekosistemiyiz."}
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {/* Misyon */}
        <div className="border border-[#a1dbf011] bg-[#0d1117]/30 backdrop-blur-md p-6 rounded-xl flex flex-col gap-3 transition-all duration-300 hover:border-red-500/10">
          <div className="flex items-center gap-2.5 text-red-400 font-bold tracking-wide">
            <Rocket size={18} className="text-red-500" />
            <h2 className="text-lg font-mono uppercase tracking-wider">{t.missionTitle || "Misyon"}</h2>
          </div>
          <p className="opacity-75 text-sm leading-relaxed font-sans">
            {t.missionDesc || "Karmaşık siber altyapıları, sunucu mimarilerini ve gerçek zamanlı veri akışlarını en optimize, güvenli ve erişilebilir standartlarda inşa ederek ekosisteme yön vermek."}
          </p>
        </div>

        {/* Vizyon */}
        <div className="border border-[#a1dbf011] bg-[#0d1117]/30 backdrop-blur-md p-6 rounded-xl flex flex-col gap-3 transition-all duration-300 hover:border-red-500/10">
          <div className="flex items-center gap-2.5 text-red-400 font-bold tracking-wide">
            <Eye size={18} className="text-red-500" />
            <h2 className="text-lg font-mono uppercase tracking-wider">{t.visionTitle || "Vizyon"}</h2>
          </div>
          <p className="opacity-75 text-sm leading-relaxed font-sans">
            {t.visionDesc || "Scarlet, Azure ve Amber uydu alt markalarımızla; yazılımdan donanıma, siber güvenlikten sınır bilişime kadar uçtan uca bağımsız ve küresel bir teknolojik altyapı ağı kurmak."}
          </p>
        </div>
      </div>

      <div className="relative z-10 mb-12 max-w-2xl border-t border-[#1c2431]/40 pt-12">
        <span className="text-xs font-mono uppercase tracking-widest text-red-500">
          {t.ecosystem || "Ekosistem"}
        </span>
        <h2 className="text-3xl font-bold mt-2 mb-4 tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          {t.aboutHeroTitle}
        </h2>
        <p className="opacity-80 text-base leading-relaxed">
          {t.aboutHeroDesc}
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {teamMembers.map((member) => (
        <TeamCard 
        key={member.id}
        name={member.name}
        location={member.location}
        role={t[member.roleKey as keyof typeof t] as string}
        bio={t[member.bioKey as keyof typeof t] as string}
        avatar={member.avatar}
        instagram={member.instagram}
        github={member.github}
        linkedin={member.linkedin}
        x={member.x}
        />
))}
      </div>

      <div className="mt-24 w-full relative z-10">
        <Footer />
      </div>

    </main>
  );
}