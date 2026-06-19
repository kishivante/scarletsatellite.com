import { Metadata } from "next";
import { translations } from "@/locales";
import ProjectsPageHome from "@/components/ProjectsPageHome";
import Footer from "@/components/Footer";

type Props = {
  searchParams: Promise<{ hl?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { hl } = await searchParams;
  const lang = (hl === "en" || hl === "tr" ? hl : "tr");
  const t = translations[lang];

  return {
    title: `${t.titleProjectsPage || "Projelerimiz"} | Scarlet Satellite`,
    description: t.descProjectsPage || "Geliştirdiğimiz yüksek performanslı projeler.",
  };
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <ProjectsPageHome />
      <Footer />
    </div>
  );
}