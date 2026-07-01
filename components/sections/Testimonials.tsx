"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";
import { TESTIMONIALS_DATA } from "../../lib/data";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const handleScroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by visible area width (paging scroll)
      const scrollAmount = dir === "left" 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="testimoni" className="relative py-24 bg-dark-deep overflow-hidden">
      {/* Background glow circles */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gold/3 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gold/3 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Section Title */}
        <SectionHeader
          subtitle="Testimoni"
          title="Apa Kata Klien Kami"
          description="Kepuasan klien adalah prioritas utama kami. Berikut adalah testimoni jujur dari mereka yang telah memercayakan interior mereka kepada kami."
        />

        {/* Carousel Outer Wrapper */}
        <div className="relative mt-12">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-[-20px] md:left-[-50px] lg:left-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-dark-card border border-white/10 text-white/80 hover:text-gold hover:border-gold/30 transition-all duration-300 shadow-xl cursor-pointer z-20"
            aria-label="Testimoni Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonials Horizontal Scroll Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            ref={scrollRef}
            className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6 pt-2 scroll-smooth"
          >
            {TESTIMONIALS_DATA.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                className="w-[290px] sm:w-[320px] md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-96px)/4)] flex-shrink-0 snap-start bg-white border border-soft-border p-6 md:p-8 rounded-2xl flex flex-col justify-between space-y-6 relative overflow-hidden group min-h-[350px] shadow-lg hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-4 relative z-10">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Quote Content */}
                  <p className="text-sm md:text-base font-sans italic text-txt-primary leading-relaxed font-light">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Client Profile */}
                <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-soft-border">
                  {/* Photo */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/30 flex-shrink-0 group-hover:border-gold/60 transition-colors duration-300">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>

                  {/* Details */}
                  <div className="leading-tight">
                    <h4 className="font-serif text-sm font-semibold text-txt-primary group-hover:text-gold transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] text-gold font-sans font-semibold tracking-wider mt-1 uppercase">
                      {testimonial.role}
                    </p>
                    <p className="text-[10px] text-txt-secondary font-sans tracking-wide mt-0.5">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-[-20px] md:right-[-50px] lg:right-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-dark-card border border-white/10 text-white/80 hover:text-gold hover:border-gold/30 transition-all duration-300 shadow-xl cursor-pointer z-20"
            aria-label="Testimoni Selanjutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
}
