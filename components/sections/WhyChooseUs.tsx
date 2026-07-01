"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import { WHY_CHOOSE_US_DATA } from "../../lib/data";

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background decoration blur */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          subtitle="Kenapa Memilih Kami"
          title="Komitmen Kami Untuk Hasil Yang Sempurna"
          description="Kami menyatukan nilai seni, keahlian teknis tingkat tinggi, dan integritas kerja untuk memberikan kepuasan maksimal di setiap detail interior Anda."
          lightTheme={true}
        />

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {WHY_CHOOSE_US_DATA.map((benefit) => {
            const IconComponent = (Icons as any)[benefit.iconName] || Icons.Shield;

            return (
              <motion.div
                key={benefit.id}
                variants={cardVariants}
                className="p-8 rounded-xl border border-slate-100 bg-white shadow-md shadow-slate-150/40 relative overflow-hidden group flex flex-col justify-between min-h-[220px] hover:border-gold/45 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                {/* Gold glowing line border overlay */}
                <div className="absolute left-0 bottom-0 w-[3px] h-0 bg-gold group-hover:h-full transition-all duration-300"></div>

                <div className="space-y-4">
                  {/* Icon Container */}
                  <div className="text-gold w-10 h-10 flex items-center justify-center bg-slate-50 rounded-lg border border-slate-100 group-hover:border-gold/30 group-hover:bg-gold-muted transition-colors duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-semibold text-dark-deep group-hover:text-gold-dark transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <span className="text-[10px] uppercase font-bold text-gold-dark/40 group-hover:text-gold tracking-wider transition-colors duration-300 font-sans">
                    Standar Mewah
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
