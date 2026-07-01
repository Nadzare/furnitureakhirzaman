"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import { SERVICES_DATA } from "../../lib/data";

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section id="layanan" className="relative py-24 bg-dark-deep">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-[350px] h-[350px] rounded-full bg-gold/3 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <SectionHeader
          subtitle="Layanan Kami"
          title="Layanan Interior Custom Untuk Semua Kebutuhan Anda"
          description="Kami merancang dan memproduksi interior berkualitas tinggi dengan sentuhan kemewahan yang disesuaikan secara khusus untuk hunian impian Anda."
        />

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {SERVICES_DATA.map((service) => {
            // Resolve icon dynamically
            const IconComponent = (Icons as any)[service.iconName] || Icons.PenTool;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="glass-card flex flex-col justify-between p-8 rounded-xl border border-white/5 bg-dark-slate/30 relative overflow-hidden group min-h-[280px]"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gold/15 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="space-y-6">
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 flex items-center justify-center bg-dark-slate rounded-lg text-gold border border-gold/15 group-hover:border-gold/50 transition-colors duration-300 group-hover:scale-105 transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Text details */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans line-clamp-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card footer details / line indicator */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold/80 group-hover:text-gold transition-colors">
                    Desain Custom
                  </span>
                  <div className="w-6 h-[1.5px] bg-white/20 group-hover:w-12 group-hover:bg-gold transition-all duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
