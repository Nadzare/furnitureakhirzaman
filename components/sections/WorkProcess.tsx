"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import { WORK_PROCESS_DATA } from "../../lib/data";

export default function WorkProcess() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section id="proses" className="relative py-24 bg-dark-deep overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/3 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <SectionHeader
          subtitle="Proses Kerja"
          title="Alur Pengerjaan Yang Sistematis & Terstruktur"
          description="Komitmen kami untuk memberikan hasil akhir terbaik diwujudkan melalui alur kerja profesional yang terarah dari awal hingga akhir."
        />

        {/* Timeline Container */}
        <div className="relative mt-8">
          
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[1.5px] border-t border-dashed border-gold/30 z-0"></div>

          {/* Timeline Grid (Desktop Horizontal, Mobile Vertical) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10"
          >
            {WORK_PROCESS_DATA.map((step, index) => {
              const IconComponent = (Icons as any)[step.iconName] || Icons.HelpCircle;

              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center space-y-4 group"
                >
                  
                  {/* Step Node */}
                  <div className="relative">
                    
                    {/* Ring Pulse Overlay */}
                    <div className="absolute inset-0 bg-gold/15 rounded-full scale-100 group-hover:scale-130 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>

                    {/* Node Circle */}
                    <div className="w-[88px] h-[88px] rounded-full bg-dark-slate border-2 border-gold flex items-center justify-center text-gold relative z-10 shadow-lg group-hover:bg-gold group-hover:text-dark-deep transition-all duration-300">
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gold text-dark-deep font-sans text-[10px] font-bold flex items-center justify-center border border-dark-deep z-20 group-hover:bg-white group-hover:text-dark-deep transition-colors duration-300">
                      {step.stepNumber}
                    </div>

                  </div>

                  {/* Connecting Line - Mobile/Tablet (Visible on small screens, between grids) */}
                  {index < WORK_PROCESS_DATA.length - 1 && (
                    <div className="lg:hidden w-[1.5px] h-8 border-l border-dashed border-gold/30 my-2"></div>
                  )}

                  {/* Title & Description */}
                  <div className="space-y-2 pt-2">
                    <h3 className="font-serif text-lg font-semibold text-white group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed px-4 md:px-0">
                      {step.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
