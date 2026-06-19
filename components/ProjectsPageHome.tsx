"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { Code, Shield, Cloud, Heart } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsPageHome() {
  const { t } = useLang();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeProject, setActiveProject] = useState("");

  const handleNotReadyProject = (projectName: string) => {
    setActiveProject(projectName);
    setIsPopupOpen(true);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 text-white flex-1 relative min-h-screen">
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold mb-3 tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          {t.projectsTitle}
        </h1>
        <p className="opacity-80 text-lg leading-relaxed">
          {t.projectsDesc}
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <ProjectCard
          title={t.sscpackerTitle}
          desc={t.sscpackerDesc}
          tag="Go / Security"
          icon={<Code size={20} />}
          color="red"
          link="https://github.com/scarletsatellite/ssc-packer"
          linkText={t.ProjectLink}
        />

        <ProjectCard
          title={t.heartsyncTitle}
          desc={t.heartsyncDesc}
          tag="Kotlin / Socket.io"
          icon={<Heart size={20} />}
          color="red"
          linkText={t.ProjectLink}
          onClick={() => handleNotReadyProject(t.heartsyncTitle)}
        />

        <ProjectCard
          title={t.skyshieldTitle}
          desc={t.skyshieldDesc}
          tag="Linux / DevOps"
          icon={<Cloud size={20} />}
          color="blue"
          linkText={t.ProjectLink}
          onClick={() => handleNotReadyProject(t.skyshieldTitle)}
        />

        <ProjectCard
          title={t.sentinelsdrTitle}
          desc={t.sentinelsdrDesc}
          tag="SDR / Python"
          icon={<Shield size={20} />}
          color="amber"
          linkText={t.ProjectLink}
          onClick={() => handleNotReadyProject(t.sentinelsdrTitle)}
        />
      </div>

      {isPopupOpen && (
        <ProjectModal
          activeProject={activeProject}
          status={t.popupStatus}
          desc={t.popupDesc}
          closeText={t.popupClose}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </main>
  );
}