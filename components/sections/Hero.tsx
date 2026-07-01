"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import * as Icons from "lucide-react";
import Image from "next/image";
import { STATISTICS_DATA } from "../../lib/data";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "6289645646711";
    const message = encodeURIComponent(
      "Halo Furniture Akhir Zaman, saya tertarik untuk melakukan konsultasi gratis mengenai desain interior rumah/ruangan saya."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-dark-deep"
    >
      {/* Background Full Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
          alt="Premium Living Room Interior Design"
          fill
          priority
          className="object-cover"
        />
        {/* Dark luxury vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-deep/95 via-dark-deep/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gold/5 mix-blend-overlay"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 w-full z-10 flex-1 flex flex-col justify-start pt-4 md:pt-6">
        {/* Content Box */}
        <div className="max-w-2xl space-y-6 md:space-y-8 pb-8">
          
          {/* Subtitle Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping"></span>
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Interior Design, Build & Renovation
            </span>
          </motion.div>

          {/* Heading and Description */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white tracking-tight"
            >
              Wujudkan <br />
              Interior Impian Anda <br />
              Bersama <br />
              <span className="text-gold relative inline-block mt-1">
                Furniture Akhir Zaman
                <span className="absolute bottom-1 left-0 right-0 h-1 bg-gold/15 -z-10"></span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed text-slate-300 max-w-xl font-sans"
            >
              Kami menghadirkan solusi interior custom yang fungsional, estetis, dan berkualitas tinggi untuk rumah, apartemen, dan ruang komersial Anda.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2.5 py-3.5 px-7 bg-gold hover:bg-gold-light text-dark-deep font-sans font-semibold text-sm rounded-lg transition-all duration-300 shadow-xl shadow-gold/10 hover:shadow-gold/25 hover:-translate-y-0.5 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Konsultasi Gratis
            </button>
            <button
              onClick={() => handleScrollTo("portfolio")}
              className="group flex items-center justify-center gap-2 py-3.5 px-7 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/45 text-white font-sans font-semibold text-sm rounded-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Lihat Portofolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Integrated Statistics Bar at the bottom */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 w-full z-10 mt-auto">
        <div className="border-t border-white/10 pt-8 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {STATISTICS_DATA.map((stat) => {
              const IconComponent = (Icons as any)[stat.iconName] || Icons.HelpCircle;

              return (
                <div key={stat.id} className="flex items-center gap-4 group">
                  {/* Icon Wrapper */}
                  <div className="p-3 bg-dark-slate/60 backdrop-blur-md rounded-lg text-gold border border-gold/15 group-hover:border-gold/50 transition-colors duration-300 flex-shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Text details */}
                  <div className="space-y-0.5">
                    <span className="block font-serif text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-gold transition-colors duration-300">
                      {stat.value}
                    </span>
                    <span className="block text-xs text-slate-300 font-sans tracking-wide leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
