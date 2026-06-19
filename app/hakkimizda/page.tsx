import { Metadata } from "next";
import { translations } from "../../locales";
import AboutPageClient from "./AboutPageClient";

type Props = {
  searchParams: Promise<{ hl?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { hl } = await searchParams;
  const lang = (hl === "en" || hl === "tr" ? hl : "tr");
  const t = translations[lang];

  return {
    title: `${t.titleAboutPage || "Hakkımızda"} | Scarlet Satellite`,
    description: t.descAboutPage || "Ekosistemimiz, misyonumuz, vizyonumuz ve arkasındaki çekirdek kadro.",
  };
}

export default function AboutPage() {
  return <AboutPageClient />;
}