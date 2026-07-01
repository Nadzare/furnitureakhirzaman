"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

const HIGHLIGHTS = [
  "Desain Custom sesuai kebutuhan",
  "Material Berkualitas pilihan",
  "Tim profesional & berpengalaman",
  "Pengerjaan tepat waktu & rapi"
];

export default function About() {
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
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="tentang-kami"
      className="relative py-24 bg-dark-slate overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Image Collage */}
        <div className="lg:col-span-6 relative h-[450px] sm:h-[600px] w-full flex items-center justify-center">
          
          {/* Main Back Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute left-0 top-0 w-3/5 h-[80%] rounded-lg overflow-hidden border border-white/5 shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&h=800&q=80"
              alt="Luxury Living Room Project"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </motion.div>

          {/* Overlapping Top Right Image */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-0 top-8 w-1/2 h-[55%] rounded-lg overflow-hidden border border-gold/10 shadow-2xl z-10"
          >
            <Image
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&h=500&q=80"
              alt="Premium Kitchen Design"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </motion.div>

          {/* Overlapping Bottom Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-12 bottom-0 w-[45%] h-[45%] rounded-lg overflow-hidden border border-white/10 shadow-2xl z-20"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark-deep/50 to-transparent z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=400&h=400&q=80"
              alt="Luxury Master Bedroom Detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw"
            />
          </motion.div>

          {/* Small Decorative Gold Frame */}
          <div className="absolute left-[35%] bottom-[15%] w-24 h-24 border-2 border-gold/30 rounded -z-10 pointer-events-none"></div>
        </div>

        {/* Right Column: Descriptions & Points */}
        <div className="lg:col-span-6 space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase block">
              Tentang Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
              Solusi Interior Custom <br />
              Dengan Kualitas Terbaik
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-sans mt-4">
              <strong>Furniture Akhir Zaman</strong> adalah perusahaan penyedia jasa interior design, build & renovation yang berkomitmen menghadirkan karya terbaik. Kami memadukan nilai estetika modern dengan fungsionalitas ruang yang tinggi.
            </p>
            <p className="text-base text-slate-400 leading-relaxed font-sans">
              Setiap proyek dikerjakan secara custom, disesuaikan dengan kebutuhan dan kepribadian pemilik hunian. Menggunakan material berkualitas pilihan serta detail pengerjaan yang rapi untuk menghasilkan interior berkelas dan tahan lama.
            </p>
          </motion.div>

          {/* Value Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {HIGHLIGHTS.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm font-medium font-sans">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Action Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4"
          >
            <button
              onClick={() => handleScrollTo("portfolio")}
              className="group inline-flex items-center gap-2 py-3 px-6 bg-gold hover:bg-gold-light text-dark-deep font-sans font-semibold text-sm rounded-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-gold/25"
            >
              Selengkapnya Tentang Kami
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
