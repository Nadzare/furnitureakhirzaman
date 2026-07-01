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
    <section id="layanan" className="relative py-24 bg-slate-50">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          subtitle="Layanan Kami"
          title="Layanan Interior Custom Untuk Semua Kebutuhan Anda"
          description="Kami merancang dan memproduksi interior berkualitas tinggi dengan sentuhan kemewahan yang disesuaikan secara khusus untuk hunian impian Anda."
          lightTheme={true}
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
                className="flex flex-col justify-between p-8 rounded-xl border border-slate-100 bg-white shadow-md shadow-slate-150/40 relative overflow-hidden group min-h-[280px] hover:border-gold/45 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="space-y-6">
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-lg text-gold border border-slate-100 group-hover:border-gold/30 group-hover:bg-gold-muted transition-colors duration-300 group-hover:scale-105 transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Text details */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-dark-deep group-hover:text-gold-dark transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-sans line-clamp-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card footer details / line indicator */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold-dark group-hover:text-gold transition-colors">
                    Desain Custom
                  </span>
                  <div className="w-6 h-[1.5px] bg-slate-200 group-hover:w-12 group-hover:bg-gold transition-all duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
