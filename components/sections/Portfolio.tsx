"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";
import Lightbox from "../shared/Lightbox";
import { PORTFOLIO_DATA } from "../../lib/data";
import { PortfolioItem } from "../../types";

const CATEGORIES = [
  "Semua",
  "Kitchen Set",
  "Bedroom",
  "Living Room",
  "TV Backdrop",
  "Pantry",
  "Commercial"
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredProjects = activeCategory === "Semua"
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(project => project.category === activeCategory);

  const handleOpenProject = (project: PortfolioItem) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
  };

  return (
    <section id="portfolio" className="relative py-24 bg-dark-slate overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-gold/3 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Title */}
        <SectionHeader
          subtitle="Portofolio Kami"
          title="Hasil Karya Desain & Renovasi Interior Terbaik"
          description="Inspirasi ruang nyata yang dirancang secara detail dan dibangun dengan tingkat presisi tinggi untuk kenyamanan maksimal penghuninya."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-xs md:text-sm font-sans font-semibold tracking-wider rounded-full transition-all duration-300 border uppercase cursor-pointer ${
                  isActive
                    ? "bg-gold border-gold text-dark-deep shadow-lg shadow-gold/15"
                    : "bg-dark-deep border-white/5 text-slate-300 hover:text-gold hover:border-gold/30"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-white/5 bg-dark-deep shadow-xl shadow-black/20 zoom-image-container cursor-pointer"
                onClick={() => handleOpenProject(project)}
              >
                {/* Visual Image */}
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover zoom-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-deep/95 via-dark-deep/60 to-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                  
                  {/* Plus/Icon Decor */}
                  <div className="absolute top-4 right-4 p-2.5 bg-gold/90 text-dark-deep rounded-full transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75 shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Text labels */}
                  <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans line-clamp-2">
                      {project.location}
                    </p>
                    
                    <div className="pt-2 flex items-center gap-1.5 text-xs text-gold font-sans font-semibold tracking-wide">
                      <span>Lihat Detail Proyek</span>
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state (optional, just in case) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-dark-deep rounded-xl border border-white/5">
            <p className="text-slate-400 font-sans text-sm">Tidak ada proyek yang ditemukan dalam kategori ini.</p>
          </div>
        )}

      </div>

      {/* Shared Lightbox Component */}
      <AnimatePresence>
        {isLightboxOpen && (
          <Lightbox
            isOpen={isLightboxOpen}
            project={selectedProject}
            onClose={() => {
              setIsLightboxOpen(false);
              setSelectedProject(null);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
