"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  lightTheme?: boolean;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  align = "center",
  lightTheme = false,
}: SectionHeaderProps) {
  const getAlignClasses = () => {
    switch (align) {
      case "left":
        return "text-left items-start";
      case "right":
        return "text-right items-end";
      case "center":
      default:
        return "text-center items-center";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col max-w-3xl mx-auto mb-16 ${getAlignClasses()}`}
    >
      <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-3 inline-flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block animate-pulse"></span>
        {subtitle}
      </span>
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-4 ${
          lightTheme ? "text-dark-deep" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            lightTheme ? "text-slate-600" : "text-slate-400"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
