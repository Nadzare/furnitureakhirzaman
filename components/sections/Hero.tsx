"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import Image from "next/image";

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
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden bg-dark-deep"
    >
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-6 space-y-6 md:space-y-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-gold-muted border border-gold/20 rounded-full w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping"></span>
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-gold uppercase">
              Interior Design, Build & Renovation
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white tracking-tight"
            >
              Wujudkan Interior Impian Anda Bersama <br />
              <span className="text-gold relative inline-block">
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
              Kami menghadirkan solusi interior custom yang fungsional, estetis, dan berkualitas tinggi untuk rumah, apartemen, dan ruang komersial Anda di wilayah Purwokerto, Yogyakarta, dan Jakarta.
            </motion.p>
          </div>

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
              className="group flex items-center justify-center gap-2 py-3.5 px-7 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 text-white font-sans font-semibold text-sm rounded-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              Lihat Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Media Column */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[500px] aspect-[4/5] md:aspect-[4/5] rounded-lg overflow-hidden border border-gold/10 shadow-2xl group shadow-black/60"
          >
            {/* Dark luxury overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-deep/80 via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gold/5 mix-blend-overlay z-10 pointer-events-none"></div>

            {/* Overlap Borders */}
            <div className="absolute inset-4 border border-white/10 rounded pointer-events-none z-25 group-hover:border-gold/30 transition-colors duration-500"></div>

            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&h=1250&q=95"
              alt="Premium Living Room Interior Design"
              fill
              className="object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {/* Float badge */}
            <div className="absolute bottom-8 right-8 bg-dark-slate/90 backdrop-blur-md border border-gold/20 py-3 px-5 rounded-lg z-20 flex items-center gap-3">
              <span className="font-serif text-3xl font-bold text-gold">7+</span>
              <div className="text-[10px] uppercase tracking-widest text-slate-300 font-sans font-semibold leading-tight">
                Tahun
                <br />
                Karya Terbaik
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
