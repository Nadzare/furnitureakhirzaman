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
    <section className="relative py-28 overflow-hidden bg-light-bg flex items-center justify-center border-t border-b border-soft-border">
      {/* Background Image with Light Blend */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07] mix-blend-luminosity transform scale-105 transition-transform duration-[6000ms] pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&h=1080&q=85')`,
        }}
      ></div>

      {/* Background circular blur */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-gold/5 blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 w-full text-center relative z-10 space-y-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-gold-muted border border-gold/20 rounded-full"
        >
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
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-txt-primary leading-tight tracking-tight"
          >
            Siap Mewujudkan <br className="hidden sm:inline" />
            Interior Impian Anda?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-txt-secondary max-w-xl mx-auto font-sans leading-relaxed"
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
            className="flex items-center justify-center gap-2.5 py-4 px-8 bg-gold hover:bg-gold-dark text-white font-sans font-bold text-base rounded-lg transition-all duration-300 shadow-xl shadow-gold/15 hover:shadow-gold/35 hover:-translate-y-1 transform active:scale-98 cursor-pointer border border-gold hover:border-gold-dark"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.251-1.378a9.804 9.804 0 0 0 4.74 1.226h.004c5.457 0 9.905-4.447 9.91-9.909a9.811 9.811 0 0 0-2.904-6.931zm-7.009 15.393h-.004a8.17 8.17 0 0 1-4.167-1.146l-.299-.178-3.098.813.827-3.02-.195-.311a8.18 8.18 0 0 1-1.253-4.303c.004-4.51 3.684-8.188 8.2-8.188a8.176 8.176 0 0 1 5.793 2.399c1.55 1.55 2.403 3.61 2.402 5.793-.004 4.512-3.684 8.191-8.2 8.191zm4.498-6.143c-.246-.123-1.46-.72-1.687-.803-.227-.082-.393-.123-.558.123-.165.247-.64.803-.784.968-.145.165-.29.185-.536.062a7.56 7.56 0 0 1-1.998-1.23 8.328 8.328 0 0 1-1.383-1.722c-.145-.247-.015-.38.108-.503.111-.11.246-.288.37-.432.123-.144.165-.247.247-.412.082-.165.042-.31-.02-.432-.062-.124-.558-1.347-.764-1.842-.2-.486-.402-.412-.558-.412h-.474c-.165 0-.433.062-.66.31-.227.246-.867.844-.867 2.06 0 1.215.887 2.388.986 2.52.1.134 1.747 2.666 4.233 3.738 2.486 1.072 2.486.715 2.93.674.444-.04.146-.6.187-.803z" />
            </svg>
            Konsultasi via WhatsApp
          </button>
        </motion.div>

      </div>
    </section>
  );
}
