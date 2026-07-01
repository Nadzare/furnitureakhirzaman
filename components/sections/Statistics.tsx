"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { STATISTICS_DATA } from "../../lib/data";

export default function Statistics() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
    <section className="relative py-12 bg-dark-deep border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {STATISTICS_DATA.map((stat) => {
            // Dynamically resolve lucide icons
            const IconComponent = (Icons as any)[stat.iconName] || Icons.HelpCircle;

            return (
              <motion.div
                key={stat.id}
                variants={cardVariants}
                className="glass-card flex flex-col md:flex-row items-center md:items-start gap-4 p-6 rounded-xl relative overflow-hidden group"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                {/* Icon Container */}
                <div className="p-3 bg-dark-slate rounded-lg text-gold border border-gold/15 group-hover:border-gold/40 transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Text Details */}
                <div className="text-center md:text-left space-y-1">
                  <span className="block font-serif text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-gold transition-colors duration-300">
                    {stat.value}
                  </span>
                  <span className="block text-xs md:text-sm text-slate-400 font-sans tracking-wide">
                    {stat.label}
                  </span>
                  {stat.subLabel && (
                    <span className="block text-[10px] text-gold/70 font-semibold tracking-wider font-sans">
                      {stat.subLabel}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
