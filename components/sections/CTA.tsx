"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function CTA() {
  const handleWhatsApp = () => {
    const phoneNumber = "6289645646711";
    const message = encodeURIComponent(
      "Halo Furniture Akhir Zaman, saya tertarik untuk berkonsultasi mengenai rencana pengerjaan interior / renovasi ruangan saya."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="relative py-28 overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image with Parallax-like Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity transform scale-105 transition-transform duration-[6000ms] pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&h=1080&q=85')`,
        }}
      ></div>

      {/* Dark Luxury Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/90 via-black/85 to-dark-deep z-0"></div>
      <div className="absolute inset-0 bg-gold/5 mix-blend-overlay z-0 pointer-events-none"></div>

      {/* Background circular blur */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-gold/5 blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 w-full text-center relative z-10 space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-gold-muted border border-gold/25 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Konsultasi Gratis Tanpa Komitmen
          </span>
        </motion.div>

        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight"
          >
            Siap Mewujudkan <br className="hidden sm:inline" />
            Interior Impian Anda?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-slate-300 max-w-xl mx-auto font-sans leading-relaxed"
          >
            Diskusikan rencana interior Anda bersama desainer profesional kami secara langsung. Dapatkan estimasi anggaran dan visual awal gratis tanpa komitmen apa pun.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2.5 py-4 px-8 bg-gold hover:bg-gold-light text-dark-deep font-sans font-bold text-base rounded-lg transition-all duration-300 shadow-2xl shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-1 transform active:scale-98 cursor-pointer"
          >
            <Send className="w-5 h-5" />
            Konsultasi via WhatsApp
          </button>
        </motion.div>

      </div>
    </section>
  );
}
