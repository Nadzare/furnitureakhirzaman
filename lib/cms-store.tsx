"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import {
  STATISTICS_DATA,
  SERVICES_DATA,
  PORTFOLIO_DATA,
  WORK_PROCESS_DATA,
  WHY_CHOOSE_US_DATA,
  TESTIMONIALS_DATA,
} from "./data";

// Types for Hero section
interface HeroData {
  subtitle: string;
  heading: string;
  headingHighlight: string;
  description: string;
  ctaText: string;
  ctaSecondaryText: string;
  backgroundImage: string;
  whatsappNumber: string;
  whatsappMessage: string;
}

// Types for About section
interface AboutData {
  subtitle: string;
  heading: string;
  description1: string;
  description2: string;
  highlights: string[];
  ctaText: string;
  images: { src: string; alt: string }[];
}

// Types for CTA section
interface CTAData {
  subtitle: string;
  heading: string;
  description: string;
  ctaText: string;
  backgroundImage: string;
  whatsappNumber: string;
  whatsappMessage: string;
}

// Types for Footer section
interface FooterData {
  brandDescription: string;
  serviceAreas: string;
  phone: string;
  email: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
}

interface CMSStore {
  hero: HeroData;
  about: AboutData;
  statistics: typeof STATISTICS_DATA;
  services: typeof SERVICES_DATA;
  portfolio: typeof PORTFOLIO_DATA;
  workProcess: typeof WORK_PROCESS_DATA;
  whyChooseUs: typeof WHY_CHOOSE_US_DATA;
  testimonials: typeof TESTIMONIALS_DATA;
  cta: CTAData;
  footer: FooterData;
  updateSection: <K extends keyof CMSStore>(section: K, data: CMSStore[K]) => void;
  resetSection: (section: string) => void;
  lastSaved: string | null;
}

const defaultHero: HeroData = {
  subtitle: "Interior Design, Build & Renovation",
  heading: "Wujudkan Interior Impian Anda Bersama",
  headingHighlight: "Furniture Akhir Zaman",
  description:
    "Kami menghadirkan solusi interior custom yang fungsional, estetis, dan berkualitas tinggi untuk rumah, apartemen, dan ruang komersial Anda.",
  ctaText: "Konsultasi Gratis",
  ctaSecondaryText: "Lihat Portofolio",
  backgroundImage:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80",
  whatsappNumber: "6289645646711",
  whatsappMessage:
    "Halo Furniture Akhir Zaman, saya tertarik untuk melakukan konsultasi gratis mengenai desain interior rumah/ruangan saya.",
};

const defaultAbout: AboutData = {
  subtitle: "Tentang Kami",
  heading: "Solusi Interior Custom Dengan Kualitas Terbaik",
  description1:
    "Furniture Akhir Zaman adalah perusahaan penyedia jasa interior design, build & renovation yang berkomitmen menghadirkan karya terbaik. Kami memadukan nilai estetika modern dengan fungsionalitas ruang yang tinggi.",
  description2:
    "Setiap proyek dikerjakan secara custom, disesuaikan dengan kebutuhan dan kepribadian pemilik hunian. Menggunakan material berkualitas pilihan serta detail pengerjaan yang rapi untuk menghasilkan interior berkelas dan tahan lama.",
  highlights: [
    "Desain Custom sesuai kebutuhan",
    "Material Berkualitas pilihan",
    "Tim profesional & berpengalaman",
    "Pengerjaan tepat waktu & rapi",
  ],
  ctaText: "Selengkapnya Tentang Kami",
  images: [
    {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&h=800&q=80",
      alt: "Luxury Living Room Project",
    },
    {
      src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&h=500&q=80",
      alt: "Premium Kitchen Design",
    },
    {
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=400&h=400&q=80",
      alt: "Luxury Master Bedroom Detail",
    },
  ],
};

const defaultCTA: CTAData = {
  subtitle: "Konsultasi Gratis Tanpa Komitmen",
  heading: "Siap Mewujudkan Interior Impian Anda?",
  description:
    "Diskusikan rencana interior Anda bersama desainer profesional kami secara langsung. Dapatkan estimasi anggaran dan visual awal gratis tanpa komitmen apa pun.",
  ctaText: "Konsultasi via WhatsApp",
  backgroundImage:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&h=1080&q=85",
  whatsappNumber: "6289645646711",
  whatsappMessage:
    "Halo Furniture Akhir Zaman, saya tertarik untuk berkonsultasi mengenai rencana pengerjaan interior / renovasi ruangan saya.",
};

const defaultFooter: FooterData = {
  brandDescription:
    "Perusahaan kontraktor desain interior custom, pembuatan furniture build-in, dan renovasi yang berdedikasi menciptakan kesempurnaan hunian premium di Purwokerto, Yogyakarta, dan Jakarta.",
  serviceAreas: "Purwokerto, Yogyakarta, Jakarta",
  phone: "0896-4564-6711",
  email: "furnitureakhirzaman@gmail.com",
  instagramUrl: "https://instagram.com/furnitureakhirzaman",
  facebookUrl: "#",
  youtubeUrl: "#",
};

const CMS_STORAGE_KEY = "faz-cms-data";

const CMSContext = createContext<CMSStore | null>(null);

export function CMSProvider({ children }: { children: ReactNode }) {
  const [hero, setHero] = useState<HeroData>(defaultHero);
  const [about, setAbout] = useState<AboutData>(defaultAbout);
  const [statistics, setStatistics] = useState(STATISTICS_DATA);
  const [services, setServices] = useState(SERVICES_DATA);
  const [portfolio, setPortfolio] = useState(PORTFOLIO_DATA);
  const [workProcess, setWorkProcess] = useState(WORK_PROCESS_DATA);
  const [whyChooseUs, setWhyChooseUs] = useState(WHY_CHOOSE_US_DATA);
  const [testimonials, setTestimonials] = useState(TESTIMONIALS_DATA);
  const [cta, setCta] = useState<CTAData>(defaultCTA);
  const [footer, setFooter] = useState<FooterData>(defaultFooter);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CMS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.hero) setHero(parsed.hero);
        if (parsed.about) setAbout(parsed.about);
        if (parsed.statistics) setStatistics(parsed.statistics);
        if (parsed.services) setServices(parsed.services);
        if (parsed.portfolio) setPortfolio(parsed.portfolio);
        if (parsed.workProcess) setWorkProcess(parsed.workProcess);
        if (parsed.whyChooseUs) setWhyChooseUs(parsed.whyChooseUs);
        if (parsed.testimonials) setTestimonials(parsed.testimonials);
        if (parsed.cta) setCta(parsed.cta);
        if (parsed.footer) setFooter(parsed.footer);
        if (parsed.lastSaved) setLastSaved(parsed.lastSaved);
      }
    } catch {
      // ignore parse errors
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (!isLoaded) return;
    const timestamp = new Date().toLocaleString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    const data = {
      hero,
      about,
      statistics,
      services,
      portfolio,
      workProcess,
      whyChooseUs,
      testimonials,
      cta,
      footer,
      lastSaved: timestamp,
    };
    localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(data));
    setLastSaved(timestamp);
  }, [hero, about, statistics, services, portfolio, workProcess, whyChooseUs, testimonials, cta, footer, isLoaded]);

  const updateSection = useCallback(<K extends keyof CMSStore>(section: K, data: CMSStore[K]) => {
    const setters: Record<string, (val: any) => void> = {
      hero: setHero,
      about: setAbout,
      statistics: setStatistics,
      services: setServices,
      portfolio: setPortfolio,
      workProcess: setWorkProcess,
      whyChooseUs: setWhyChooseUs,
      testimonials: setTestimonials,
      cta: setCta,
      footer: setFooter,
    };
    const setter = setters[section as string];
    if (setter) setter(data);
  }, []);

  const resetSection = useCallback((section: string) => {
    const defaults: Record<string, any> = {
      hero: defaultHero,
      about: defaultAbout,
      statistics: STATISTICS_DATA,
      services: SERVICES_DATA,
      portfolio: PORTFOLIO_DATA,
      workProcess: WORK_PROCESS_DATA,
      whyChooseUs: WHY_CHOOSE_US_DATA,
      testimonials: TESTIMONIALS_DATA,
      cta: defaultCTA,
      footer: defaultFooter,
    };
    const defaultData = defaults[section];
    if (defaultData) {
      updateSection(section as any, defaultData);
    }
  }, [updateSection]);

  return (
    <CMSContext.Provider
      value={{
        hero,
        about,
        statistics,
        services,
        portfolio,
        workProcess,
        whyChooseUs,
        testimonials,
        cta,
        footer,
        updateSection,
        resetSection,
        lastSaved,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const ctx = useContext(CMSContext);
  if (!ctx) throw new Error("useCMS must be used within CMSProvider");
  return ctx;
}
