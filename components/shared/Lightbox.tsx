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
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-gold hover:bg-gold-dark text-white font-sans font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-gold/20 border border-gold hover:border-gold-dark transform active:scale-98 cursor-pointer"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.251-1.378a9.804 9.804 0 0 0 4.74 1.226h.004c5.457 0 9.905-4.447 9.91-9.909a9.811 9.811 0 0 0-2.904-6.931zm-7.009 15.393h-.004a8.17 8.17 0 0 1-4.167-1.146l-.299-.178-3.098.813.827-3.02-.195-.311a8.18 8.18 0 0 1-1.253-4.303c.004-4.51 3.684-8.188 8.2-8.188a8.176 8.176 0 0 1 5.793 2.399c1.55 1.55 2.403 3.61 2.402 5.793-.004 4.512-3.684 8.191-8.2 8.191zm4.498-6.143c-.246-.123-1.46-.72-1.687-.803-.227-.082-.393-.123-.558.123-.165.247-.64.803-.784.968-.145.165-.29.185-.536.062a7.56 7.56 0 0 1-1.998-1.23 8.328 8.328 0 0 1-1.383-1.722c-.145-.247-.015-.38.108-.503.111-.11.246-.288.37-.432.123-.144.165-.247.247-.412.082-.165.042-.31-.02-.432-.062-.124-.558-1.347-.764-1.842-.2-.486-.402-.412-.558-.412h-.474c-.165 0-.433.062-.66.31-.227.246-.867.844-.867 2.06 0 1.215.887 2.388.986 2.52.1.134 1.747 2.666 4.233 3.738 2.486 1.072 2.486.715 2.93.674.444-.04.146-.6.187-.803z" />
              </svg>
              Tanya Desain Ini via WhatsApp
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
