"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proses Kerja", href: "#proses" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section tracking
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let currentSection = "beranda";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80; // height of fixed navbar
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

  const handleCTAClick = () => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById("kontak");
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-soft-border py-4 shadow-sm"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, "#beranda")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            {/* Logo Icon */}
            <div className="relative h-10 w-10 md:h-11 md:w-11 flex-shrink-0 overflow-hidden">
              <Image
                src="/images/logfur.png"
                alt="Furniture Akhir Zaman Icon"
                fill
                priority
                className="object-cover scale-110"
              />
            </div>
            {/* Logo Text */}
            <div className="flex flex-col justify-center leading-none">
              <span className={`font-serif text-sm md:text-base font-bold tracking-[0.08em] transition-colors duration-300 ${
                isScrolled ? "text-txt-primary group-hover:text-gold" : "text-white group-hover:text-gold"
              }`}>
                FURNITURE
              </span>
              <span className={`font-serif text-[10px] md:text-[11px] font-bold tracking-[0.12em] transition-colors duration-300 mt-1 ${
                isScrolled ? "text-txt-primary group-hover:text-gold" : "text-white/90 group-hover:text-gold"
              }`}>
                AKHIR ZAMAN
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 py-1.5 cursor-pointer ${
                    isActive
                      ? "text-gold"
                      : isScrolled
                      ? "text-txt-primary hover:text-gold"
                      : "text-white/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={handleCTAClick}
              className="group flex items-center gap-2 py-2 px-5 bg-gold hover:bg-gold-dark border border-gold hover:border-gold-dark text-white font-sans font-semibold text-xs tracking-wider uppercase rounded-md transition-all duration-300 cursor-pointer"
            >
              Konsultasi Gratis
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors focus:outline-none cursor-pointer ${
              isScrolled ? "text-txt-primary hover:text-gold" : "text-white hover:text-gold"
            }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 right-0 z-35 bg-dark-deep/98 backdrop-blur-xl flex flex-col justify-center px-8 md:px-12 lg:hidden pt-20"
          >
            <div className="flex flex-col gap-6 items-center">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-serif text-2xl tracking-wide py-2 transition-all cursor-pointer ${
                      isActive ? "text-gold font-semibold" : "text-white/80 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <button
                onClick={handleCTAClick}
                className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-6 bg-gold text-dark-deep font-sans font-semibold text-sm rounded-lg transition-all shadow-lg hover:shadow-gold/20 cursor-pointer"
              >
                Konsultasi Gratis
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
