import { Metadata } from "next";
import { translations } from "../../locales"; // locales.ts dosyanızın gerçek yolu
import ContactPageClient from "./ContactPageClient";

type Props = {
  searchParams: Promise<{ hl?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { hl } = await searchParams;
  const lang = (hl === "en" || hl === "tr" ? hl : "tr");
  const t = translations[lang];

  return {
    title: `${t.titleContactPage || "İletişim"} | Scarlet Satellite`,
    description: t.descContactPage || "Projeleriniz ve altyapı talepleriniz için çekirdek ekibimizle doğrudan iletişim kanalları.",
  };
}

export default function ContactPage() {
  return <ContactPageClient />;
}