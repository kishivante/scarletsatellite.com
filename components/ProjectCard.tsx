"use client";

import { MoveUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ProjectColor = "red" | "blue" | "amber";

type ProjectCardProps = {
  title: string;
  desc: string;
  tag: string;
  icon: ReactNode;
  color: ProjectColor;
  linkText: string;
  link?: string;
  onClick?: () => void;
};

const colorClasses = {
  red: {
    text: "text-red-400",
    hoverText: "group-hover:text-red-300",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    hoverBorder: "hover:border-red-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(239,68,68,0.07)]",
  },
  blue: {
    text: "text-blue-400",
    hoverText: "group-hover:text-blue-300",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.07)]",
  },
  amber: {
    text: "text-amber-400",
    hoverText: "group-hover:text-amber-300",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    hoverBorder: "hover:border-amber-500/30",
    shadow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.07)]",
  },
};

export default function ProjectCard({
  title,
  desc,
  tag,
  icon,
  color,
  linkText,
  link,
  onClick,
}: ProjectCardProps) {
  const c = colorClasses[color];

  return (
    <div
      className={`group border border-[#a1dbf022] bg-[#0d1117]/60 backdrop-blur-md p-6 rounded-xl flex flex-col justify-between h-auto transition-all duration-300 ${c.hoverBorder} ${c.shadow}`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className={`p-2 ${c.bg} rounded-lg ${c.text}`}>
            {icon}
          </div>

          <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
            {tag}
          </span>
        </div>

        <h3 className={`text-2xl font-bold ${c.text} mb-3 ${c.hoverText} transition-colors`}>
          {title}
        </h3>

        <p className="opacity-75 text-sm leading-relaxed mb-6 font-sans">
          {desc}
        </p>
      </div>

      <div className="mt-auto">
        {link ? (
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${c.text} inline-flex items-center gap-1.5 text-sm font-medium transition-opacity duration-200 hover:opacity-80`}
            >
            {linkText}
            <MoveUpRight
                size={14}
                className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
            </a>
        ) : (
            <button
            type="button"
            onClick={onClick}
            className={`${c.text} inline-flex items-center gap-1.5 text-sm font-medium transition-opacity duration-200 hover:opacity-80 cursor-pointer`}
            >
            {linkText}
            <MoveUpRight
                size={14}
                className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
            </button>
        )}
        </div>
    </div>
  );
}