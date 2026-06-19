"use client";

import { X } from "lucide-react";

type ProjectModalProps = {
  activeProject: string;
  status: string;
  desc: string;
  closeText: string;
  onClose: () => void;
};

export default function ProjectModal({
  activeProject,
  status,
  desc,
  closeText,
  onClose,
}: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 transition-all duration-300 px-4">
      <div className="border border-[#a1dbf022] bg-[#0d1117] p-6 rounded-xl max-w-sm w-full relative shadow-2xl shadow-red-500/5 animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col gap-2 mt-2">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500">
            {status}
          </span>

          <h4 className="text-xl font-bold text-white">
            {activeProject}
          </h4>

          <p className="text-sm opacity-75 leading-relaxed mt-1">
            <strong>{activeProject}</strong> {desc}
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 rounded-lg text-sm font-medium transition-colors cursor-pointer"
        >
          {closeText}
        </button>
      </div>
    </div>
  );
}