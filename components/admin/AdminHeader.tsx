"use client";

import { usePathname } from "next/navigation";
import { useCMS } from "@/lib/cms-store";
import { Clock, Save } from "lucide-react";

const PAGE_TITLES: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/hero": "Hero Section",
  "/admin/about": "Tentang Kami",
  "/admin/statistics": "Statistik",
  "/admin/services": "Layanan",
  "/admin/portfolio": "Portfolio",
  "/admin/work-process": "Proses Kerja",
  "/admin/why-choose-us": "Keunggulan Kami",
  "/admin/testimonials": "Testimoni",
  "/admin/cta": "CTA Section",
  "/admin/footer": "Footer",
};

export default function AdminHeader() {
  const pathname = usePathname();
  const { lastSaved } = useCMS();
  const title = PAGE_TITLES[pathname] || "Admin";

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-xl border-b border-[#E8E1D8] px-8 py-4 flex items-center justify-between">
      <div>
        <h1 className="font-serif text-xl font-semibold text-[#3A2F26] tracking-tight">
          {title}
        </h1>
        <p className="text-[11px] font-sans text-[#3A2F26]/30 mt-0.5 tracking-wide">
          Content Management System
        </p>
      </div>

      {lastSaved && (
        <div className="flex items-center gap-2 text-[#3A2F26]/35 text-xs font-sans">
          <Clock className="w-3.5 h-3.5" />
          <span>Tersimpan: {lastSaved}</span>
          <Save className="w-3.5 h-3.5 text-[#B08B57]/50 ml-1" />
        </div>
      )}
    </header>
  );
}
