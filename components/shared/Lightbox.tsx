"use client";

import { motion } from "framer-motion";
import { X, Calendar, MapPin, User, Layout, Send } from "lucide-react";
import Image from "next/image";
import { PortfolioItem } from "../../types";

interface LightboxProps {
  isOpen: boolean;
  project: PortfolioItem | null;
  onClose: () => void;
}

export default function Lightbox({ isOpen, project, onClose }: LightboxProps) {
  if (!isOpen || !project) return null;

  const handleWhatsAppInquiry = () => {
    const phoneNumber = "6289645646711"; // WhatsApp format
    const message = encodeURIComponent(
      `Halo Furniture Akhir Zaman, saya tertarik dengan portofolio proyek Anda: *${project.title}* (${project.category}) di *${project.location}*.\n\nBisa tolong berikan informasi estimasi biaya dan waktu pengerjaan untuk proyek serupa? Terima kasih.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
      {/* Backdrop Close Click */}
      <div className="absolute inset-0 cursor-zoom-out" onClick={onClose}></div>

      {/* Lightbox Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-dark-slate border border-gold/20 rounded-xl glass-card flex flex-col md:flex-row z-10 scrollbar-thin"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-gold bg-black/60 rounded-full border border-white/10 hover:border-gold/30 transition-all duration-300 shadow-lg cursor-pointer"
          aria-label="Tutup Detail Proyek"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Section: Image */}
        <div className="relative w-full md:w-3/5 min-h-[300px] md:min-h-[500px] bg-black">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          {/* Category Tag */}
          <div className="absolute bottom-6 left-6 px-4 py-1.5 bg-gold/90 text-dark-deep font-sans text-xs font-semibold tracking-wider uppercase rounded-md shadow-md">
            {project.category}
          </div>
        </div>

        {/* Right Section: Details */}
        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-dark-deep/90">
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white leading-tight mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mt-3">
                {project.description}
              </p>
            </div>

            <div className="border-t border-b border-white/5 py-5 space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 bg-dark-slate rounded-lg text-gold border border-gold/10">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Klien</p>
                  <p className="text-sm font-semibold">{project.client}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 bg-dark-slate rounded-lg text-gold border border-gold/10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Lokasi Proyek</p>
                  <p className="text-sm font-semibold">{project.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 bg-dark-slate rounded-lg text-gold border border-gold/10">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Tahun Selesai</p>
                  <p className="text-sm font-semibold">{project.year}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 bg-dark-slate rounded-lg text-gold border border-gold/10">
                  <Layout className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Luas Area</p>
                  <p className="text-sm font-semibold">{project.size}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4">
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-gold hover:bg-gold-light text-dark-deep font-sans font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-gold/25 transform active:scale-98 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Tanya Desain Ini via WhatsApp
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
