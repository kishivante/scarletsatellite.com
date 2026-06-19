"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

type TeamMemberProps = {
  name: string;
  role: string;
  location: string;
  bio: string;
  avatar?: string;
  instagram?: string;
  github?: string;
  linkedin?: string;
  x?: string;
};

export default function TeamCard({ 
  name, 
  role, 
  location, 
  bio, 
  avatar,
  instagram,
  github, 
  linkedin, 
  x 
}: TeamMemberProps) {
  const initials = name.split(" ").map(n => n[0]).join("").toUpperCase();

  return (
    <div className="group border border-[#a1dbf011] bg-[#0d1117]/40 backdrop-blur-md p-6 rounded-xl flex flex-col gap-4 transition-all duration-300 hover:border-red-500/20 hover:shadow-[0_0_20px_rgba(239,68,68,0.03)] mb-6 md:mb-0">
      
      {/* Üst Kısım: Profil Alanı ve İsim/Rol */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-red-500/5 border border-red-500/20 flex items-center justify-center font-mono text-red-400 font-bold tracking-wider relative overflow-hidden shrink-0 group-hover:bg-red-500/10 transition-colors">
          {avatar && avatar.trim() !== "" ? (
            <Image
              src={avatar}
              alt={`${name} Avatar`}
              fill
              sizes="3rem"
              className="object-cover"
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
            {name}
          </h3>
          <p className="text-xs font-mono text-gray-400 mt-0.5">{role}</p>
        </div>
      </div>

      {/* Orta Kısım: Biyografi */}
      <p className="opacity-75 text-sm leading-relaxed font-sans flex-1">
        {bio}
      </p>

      {/* Alt Kısım: Konum ve Sosyal Medya Bağlantıları */}
      <div className="flex items-center justify-between text-xs text-gray-500 font-mono pt-2 border-t border-[#1c2431]/40">
        {/* Sol Taraf: Konum */}
        <div className="flex items-center gap-1.5">
          <MapPin size={12} className="text-red-500/50" />
          <span>{location}</span>
        </div>

        {/* Sağ Taraf: Koşullu Sosyal Medya İkonları */}
        <div className="flex items-center gap-3 text-gray-500">
          {github && github.trim() !== "" && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5" />
            </a>
          )}
          {instagram && instagram.trim() !== "" && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="w-3.5 h-3.5" />
            </a>
          )}
          {linkedin && linkedin.trim() !== "" && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="w-3.5 h-3.5" />
            </a>
          )}
          {x && x.trim() !== "" && (
            <a href={x} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FontAwesomeIcon icon={faXTwitter} className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
}