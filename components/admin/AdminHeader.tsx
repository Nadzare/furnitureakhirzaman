"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCMS } from "@/lib/cms-store";
import { useAdminUI } from "@/components/admin/AdminUIContext";
import { Clock, Save, Menu, ExternalLink } from "lucide-react";

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
  const { toggleMobileSidebar } = useAdminUI();
  const title = PAGE_TITLES[pathname] || "Admin";

  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-[#E8E1D8] px-4 sm:px-6 md:px-8 py-3.5 md:py-4 flex items-center justify-between gap-3">
      {/* Left: Mobile Menu Toggle + Title */}
      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
        <button
          onClick={toggleMobileSidebar}
          aria-label="Buka Menu Navigasi"
          className="md:hidden p-2 -ml-1 rounded-lg text-[#3A2F26]/70 hover:text-[#3A2F26] hover:bg-[#3A2F26]/5 transition-colors cursor-pointer flex-shrink-0"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="min-w-0">
          <h1 className="font-serif text-lg sm:text-xl font-semibold text-[#3A2F26] tracking-tight truncate">
            {title}
          </h1>
          <p className="text-[10px] sm:text-[11px] font-sans text-[#3A2F26]/40 tracking-wide hidden xs:block">
            Content Management System
          </p>
        </div>
      </div>

      {/* Right: Status & Quick Live Site Link */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        {lastSaved && (
          <div
            className="flex items-center gap-1.5 text-xs font-sans text-[#3A2F26]/45 bg-[#F5F3F0] px-2.5 py-1 sm:py-1.5 rounded-full border border-[#E8E1D8]"
            title={`Terakhir disimpan: ${lastSaved}`}
          >
            <Clock className="w-3.5 h-3.5 text-[#B08B57]" />
            <span className="hidden sm:inline">Tersimpan: {lastSaved}</span>
            <span className="sm:hidden text-[11px] font-medium text-[#3A2F26]/70">Tersimpan</span>
            <Save className="w-3 h-3 text-[#B08B57]/70" />
          </div>
        )}

        <Link
          href="/"
          target="_blank"
          className="p-2 text-[#3A2F26]/40 hover:text-[#B08B57] hover:bg-[#B08B57]/10 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-sans font-medium"
          title="Buka Website di Tab Baru"
        >
          <ExternalLink className="w-4 h-4 text-[#3A2F26]/40" />
          <span className="hidden md:inline text-xs text-[#3A2F26]/60">Lihat Web</span>
        </Link>
      </div>
    </header>
  );
}
