"use client";

import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, ArrowUp, Send } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proses Kerja", href: "#proses" },
  { label: "Testimoni", href: "#testimoni" }
];

const SERVICES_LIST = [
  "Interior Design",
  "Kitchen Set",
  "Bedroom",
  "Living Room",
  "TV Backdrop",
  "Walk In Closet",
  "Renovasi Interior",
  "Custom Furniture"
];

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
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

  const handleWhatsApp = () => {
    const phoneNumber = "6289645646711";
    const message = encodeURIComponent(
      "Halo Furniture Akhir Zaman, saya ingin berkonsultasi mengenai kebutuhan desain interior / pengerjaan furniture custom."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="kontak" className="relative bg-dark-deep border-t border-white/5 pt-20 pb-8 text-slate-400">
      
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold/3 blur-[90px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
        
        {/* Brand Information Column */}
        <div className="lg:col-span-4 space-y-6">
          {/* Logo */}
          <div className="relative h-10 w-44 md:h-12 md:w-52">
            <Image
              src="/images/logofurniture.jpg"
              alt="Furniture Akhir Zaman"
              fill
              className="object-contain object-left rounded-sm"
            />
          </div>

          <p className="text-sm text-slate-400 leading-relaxed font-sans mt-4 max-w-sm">
            Perusahaan kontraktor desain interior custom, pembuatan furniture build-in, dan renovasi yang berdedikasi menciptakan kesempurnaan hunian premium di Purwokerto, Yogyakarta, dan Jakarta.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/furnitureakhirzaman"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-dark-slate hover:bg-gold hover:text-dark-deep rounded-lg border border-white/5 hover:border-gold transition-all duration-300"
              aria-label="Instagram Furniture Akhir Zaman"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 bg-dark-slate hover:bg-gold hover:text-dark-deep rounded-lg border border-white/5 hover:border-gold transition-all duration-300"
              aria-label="Facebook Furniture Akhir Zaman"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 bg-dark-slate hover:bg-gold hover:text-dark-deep rounded-lg border border-white/5 hover:border-gold transition-all duration-300"
              aria-label="Youtube Furniture Akhir Zaman"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 space-y-6 lg:pl-4">
          <h3 className="font-serif text-white font-semibold text-base tracking-wide border-b border-gold/20 pb-3 w-fit pr-6">
            Pintasan
          </h3>
          <ul className="space-y-3 text-sm font-sans">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="hover:text-gold transition-colors block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services List Column */}
        <div className="lg:col-span-3 space-y-6">
          <h3 className="font-serif text-white font-semibold text-base tracking-wide border-b border-gold/20 pb-3 w-fit pr-6">
            Layanan Kami
          </h3>
          <ul className="grid grid-cols-1 gap-3 text-sm font-sans">
            {SERVICES_LIST.map((service, index) => (
              <li key={index}>
                <span className="hover:text-gold transition-colors block cursor-default">
                  • {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts & Areas Column */}
        <div className="lg:col-span-3 space-y-6">
          <h3 className="font-serif text-white font-semibold text-base tracking-wide border-b border-gold/20 pb-3 w-fit pr-6">
            Kontak Kami
          </h3>
          
          <ul className="space-y-4 text-sm font-sans text-slate-300">
            {/* Service Cities */}
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Area Layanan</p>
                <p className="text-sm font-semibold text-white">Purwokerto, Yogyakarta, Jakarta</p>
              </div>
            </li>

            {/* Phone */}
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">WhatsApp</p>
                <a href="tel:089645646711" className="text-sm font-semibold text-white hover:text-gold transition-colors">
                  0896-4564-6711
                </a>
              </div>
            </li>

            {/* Email */}
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Email Resmi</p>
                <a href="mailto:furnitureakhirzaman@gmail.com" className="text-sm font-semibold text-white hover:text-gold transition-colors">
                  furnitureakhirzaman@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyrights / Back To Top */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Furniture Akhir Zaman. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6">
          <p>
            Designed with <span className="text-gold">❤</span> for Excellence.
          </p>
          <button
            onClick={handleScrollTop}
            className="p-2 bg-dark-slate hover:bg-gold hover:text-dark-deep rounded-full border border-white/5 hover:border-gold transition-all duration-300 cursor-pointer shadow-lg"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer group hover:shadow-[#25D366]/40"
        aria-label="Konsultasi WhatsApp Sekarang"
      >
        <Send className="w-6 h-6 rotate-45 mr-0 group-hover:rotate-0 transition-transform duration-300" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out font-sans font-bold text-xs tracking-wider uppercase pl-0 group-hover:pl-2 leading-none whitespace-nowrap">
          Hubungi Kami
        </span>
      </motion.button>

    </footer>
  );
}
