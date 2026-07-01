"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";
import { TESTIMONIALS_DATA } from "../../lib/data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right

  const slideNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      slideNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    })
  };

  const currentTestimonial = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimoni" className="relative py-24 bg-dark-deep overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold/3 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Section Title */}
        <SectionHeader
          subtitle="Testimoni"
          title="Apa Kata Klien Kami"
          description="Kepuasan klien adalah prioritas utama kami. Berikut adalah testimoni jujur dari mereka yang telah memercayakan interior mereka kepada kami."
        />

        {/* Carousel Outer Wrapper */}
        <div className="relative mt-8 min-h-[320px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              variants={slideVariants as any}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-dark-slate/40 border border-gold/15 p-8 md:p-12 rounded-2xl glass-card flex flex-col items-center text-center space-y-6 shadow-2xl relative"
            >
              {/* Quote Icon Decor */}
              <Quote className="w-12 h-12 text-gold/15 absolute top-6 left-6" />

              {/* Star Rating */}
              <div className="flex items-center gap-1.5 justify-center">
                {Array.from({ length: currentTestimonial.rating }).map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote Content */}
              <blockquote className="text-base md:text-lg lg:text-xl font-sans italic text-slate-100 leading-relaxed font-light px-2 md:px-8">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Client Profile */}
              <div className="flex flex-col items-center space-y-2.5">
                
                {/* Photo */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/50 shadow-md">
                  <Image
                    src={currentTestimonial.imageUrl}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>

                {/* Details */}
                <div>
                  <h4 className="font-serif text-base font-semibold text-white">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-xs text-gold font-sans font-semibold tracking-wide mt-0.5">
                    {currentTestimonial.role} — <span className="text-slate-400 font-medium">{currentTestimonial.location}</span>
                  </p>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={slidePrev}
            className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-dark-slate/90 border border-white/5 text-slate-400 hover:text-gold hover:border-gold/30 transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Testimoni Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={slideNext}
            className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-dark-slate/90 border border-white/5 text-slate-400 hover:text-gold hover:border-gold/30 transition-all duration-300 shadow-xl cursor-pointer"
            aria-label="Testimoni Selanjutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {TESTIMONIALS_DATA.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive ? "bg-gold scale-125" : "bg-white/20 hover:bg-gold/45"
                }`}
                aria-label={`Pilih slide testimoni ${index + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
