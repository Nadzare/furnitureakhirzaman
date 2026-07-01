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
        {/* Dark Walnut overlays (fading to transparent on the right side for clear image visibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-deep/90 via-dark-deep/30 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-transparent to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gold/5 mix-blend-overlay z-0"></div>
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
              <span className="text-[#EBC582] relative inline-block mt-1 font-bold">
                Furniture Akhir Zaman
                <span className="absolute bottom-1.5 left-0 right-0 h-[2.5px] bg-[#EBC582]/20 -z-10"></span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed text-light-bg/90 max-w-xl font-sans"
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
              className="flex items-center justify-center gap-2.5 py-3.5 px-7 bg-gold hover:bg-gold-dark text-white font-sans font-semibold text-sm rounded-lg transition-all duration-300 shadow-xl shadow-gold/10 hover:shadow-gold/25 hover:-translate-y-0.5 cursor-pointer border border-gold hover:border-gold-dark"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.251-1.378a9.804 9.804 0 0 0 4.74 1.226h.004c5.457 0 9.905-4.447 9.91-9.909a9.811 9.811 0 0 0-2.904-6.931zm-7.009 15.393h-.004a8.17 8.17 0 0 1-4.167-1.146l-.299-.178-3.098.813.827-3.02-.195-.311a8.18 8.18 0 0 1-1.253-4.303c.004-4.51 3.684-8.188 8.2-8.188a8.176 8.176 0 0 1 5.793 2.399c1.55 1.55 2.403 3.61 2.402 5.793-.004 4.512-3.684 8.191-8.2 8.191zm4.498-6.143c-.246-.123-1.46-.72-1.687-.803-.227-.082-.393-.123-.558.123-.165.247-.64.803-.784.968-.145.165-.29.185-.536.062a7.56 7.56 0 0 1-1.998-1.23 8.328 8.328 0 0 1-1.383-1.722c-.145-.247-.015-.38.108-.503.111-.11.246-.288.37-.432.123-.144.165-.247.247-.412.082-.165.042-.31-.02-.432-.062-.124-.558-1.347-.764-1.842-.2-.486-.402-.412-.558-.412h-.474c-.165 0-.433.062-.66.31-.227.246-.867.844-.867 2.06 0 1.215.887 2.388.986 2.52.1.134 1.747 2.666 4.233 3.738 2.486 1.072 2.486.715 2.93.674.444-.04.146-.6.187-.803z" />
              </svg>
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

      {/* Integrated Statistics Bar at the bottom inside Hero overlay */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 w-full z-10 mt-auto pb-6">
        <div className="border-t border-white/10 pt-8">
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
                  <div className="p-3 bg-dark-card/60 backdrop-blur-md rounded-lg text-gold border border-gold/15 group-hover:border-gold/30 transition-colors duration-300 flex-shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Text details */}
                  <div className="space-y-0.5">
                    <span className="block font-serif text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-gold transition-colors duration-300">
                      {stat.value}
                    </span>
                    <span className="block text-xs text-light-bg/75 font-sans tracking-wide leading-tight">
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
