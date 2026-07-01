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
    <footer id="kontak" className="relative bg-dark-deep border-t border-txt-secondary/30 pt-20 pb-8 text-light-bg/75">
      
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold/3 blur-[90px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-txt-secondary/30">
        
        {/* Brand Information Column */}
        <div className="lg:col-span-4 space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Logo Icon */}
            <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden">
              <Image
                src="/images/logofurniture.png"
                alt="Furniture Akhir Zaman Icon"
                fill
                className="object-cover scale-110"
              />
            </div>
            {/* Logo Text */}
            <div className="flex flex-col justify-center leading-none">
              <span className="font-serif text-sm font-bold tracking-[0.08em] text-white">
                FURNITURE
              </span>
              <span className="font-serif text-[10px] font-bold tracking-[0.12em] text-white/90 mt-1">
                AKHIR ZAMAN
              </span>
            </div>
          </div>

          <p className="text-sm text-light-bg/70 leading-relaxed font-sans mt-4 max-w-sm">
            Perusahaan kontraktor desain interior custom, pembuatan furniture build-in, dan renovasi yang berdedikasi menciptakan kesempurnaan hunian premium di Purwokerto, Yogyakarta, dan Jakarta.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/furnitureakhirzaman"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-dark-card hover:bg-gold hover:text-white rounded-lg border border-white/5 hover:border-gold transition-all duration-300"
              aria-label="Instagram Furniture Akhir Zaman"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 bg-dark-card hover:bg-gold hover:text-white rounded-lg border border-white/5 hover:border-gold transition-all duration-300"
              aria-label="Facebook Furniture Akhir Zaman"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2.5 bg-dark-card hover:bg-gold hover:text-white rounded-lg border border-white/5 hover:border-gold transition-all duration-300"
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
          <ul className="space-y-3 text-sm font-sans text-light-bg/85">
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
          <ul className="grid grid-cols-1 gap-3 text-sm font-sans text-light-bg/85">
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
          
          <ul className="space-y-4 text-sm font-sans text-light-bg/85">
            {/* Service Cities */}
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs text-light-bg/50 uppercase tracking-wider">Area Layanan</p>
                <p className="text-sm font-semibold text-white">Purwokerto, Yogyakarta, Jakarta</p>
              </div>
            </li>

            {/* Phone */}
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs text-light-bg/50 uppercase tracking-wider">WhatsApp</p>
                <a href="tel:089645646711" className="text-sm font-semibold text-white hover:text-gold transition-colors">
                  0896-4564-6711
                </a>
              </div>
            </li>

            {/* Email */}
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs text-light-bg/50 uppercase tracking-wider">Email Resmi</p>
                <a href="mailto:furnitureakhirzaman@gmail.com" className="text-sm font-semibold text-white hover:text-gold transition-colors">
                  furnitureakhirzaman@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyrights / Back To Top */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-light-bg/60">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Furniture Akhir Zaman. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6">
          <p>
            Designed with <span className="text-gold">❤</span> for Excellence.
          </p>
          <button
            onClick={handleScrollTop}
            className="p-2 bg-dark-card hover:bg-gold hover:text-white rounded-full border border-white/5 hover:border-gold transition-all duration-300 cursor-pointer shadow-lg"
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
        <svg
          className="w-6 h-6 fill-current transition-transform duration-300"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.251-1.378a9.804 9.804 0 0 0 4.74 1.226h.004c5.457 0 9.905-4.447 9.91-9.909a9.811 9.811 0 0 0-2.904-6.931zm-7.009 15.393h-.004a8.17 8.17 0 0 1-4.167-1.146l-.299-.178-3.098.813.827-3.02-.195-.311a8.18 8.18 0 0 1-1.253-4.303c.004-4.51 3.684-8.188 8.2-8.188a8.176 8.176 0 0 1 5.793 2.399c1.55 1.55 2.403 3.61 2.402 5.793-.004 4.512-3.684 8.191-8.2 8.191zm4.498-6.143c-.246-.123-1.46-.72-1.687-.803-.227-.082-.393-.123-.558.123-.165.247-.64.803-.784.968-.145.165-.29.185-.536.062a7.56 7.56 0 0 1-1.998-1.23 8.328 8.328 0 0 1-1.383-1.722c-.145-.247-.015-.38.108-.503.111-.11.246-.288.37-.432.123-.144.165-.247.247-.412.082-.165.042-.31-.02-.432-.062-.124-.558-1.347-.764-1.842-.2-.486-.402-.412-.558-.412h-.474c-.165 0-.433.062-.66.31-.227.246-.867.844-.867 2.06 0 1.215.887 2.388.986 2.52.1.134 1.747 2.666 4.233 3.738 2.486 1.072 2.486.715 2.93.674.444-.04.146-.6.187-.803z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out font-sans font-bold text-xs tracking-wider uppercase pl-0 group-hover:pl-2 leading-none whitespace-nowrap">
          Hubungi Kami
        </span>
      </motion.button>

    </footer>
  );
}
