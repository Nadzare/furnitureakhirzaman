"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Sparkles,
  Info,
  Grid3X3,
  Briefcase,
  Settings,
  MessageSquareQuote,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  BarChart3,
  Footprints,
} from "lucide-react";

const SIDEBAR_ITEMS = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Hero Section",
    href: "/admin/hero",
    icon: Sparkles,
  },
  {
    label: "Tentang Kami",
    href: "/admin/about",
    icon: Info,
  },
  {
    label: "Statistik",
    href: "/admin/statistics",
    icon: BarChart3,
  },
  {
    label: "Layanan",
    href: "/admin/services",
    icon: Grid3X3,
  },
  {
    label: "Portfolio",
    href: "/admin/portfolio",
    icon: Briefcase,
  },
  {
    label: "Proses Kerja",
    href: "/admin/work-process",
    icon: Settings,
  },
  {
    label: "Keunggulan",
    href: "/admin/why-choose-us",
    icon: Sparkles,
  },
  {
    label: "Testimoni",
    href: "/admin/testimonials",
    icon: MessageSquareQuote,
  },
  {
    label: "CTA Section",
    href: "/admin/cta",
    icon: Megaphone,
  },
  {
    label: "Footer",
    href: "/admin/footer",
    icon: Footprints,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-full z-30 flex flex-col bg-white border-r border-[#E8E1D8] shadow-sm transition-all duration-300 ${
        collapsed ? "w-[72px]" : "w-[260px]"
      }`}
    >
      {/* Brand */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-[#E8E1D8] min-h-[72px]">
        <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-lg">
          <Image
            src="/images/logfur.png"
            alt="Logo"
            fill
            className="object-cover scale-110"
          />
        </div>
        {!collapsed && (
          <div className="flex flex-col leading-none overflow-hidden">
            <span className="font-serif text-[13px] font-bold tracking-[0.06em] text-[#3A2F26]">
              FURNITURE
            </span>
            <span className="font-serif text-[9px] font-bold tracking-[0.1em] text-[#3A2F26]/60 mt-0.5">
              AKHIR ZAMAN
            </span>
            <span className="text-[9px] font-sans text-[#B08B57] tracking-wider mt-1 uppercase font-semibold">
              CMS Panel
            </span>
          </div>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1 scrollbar-none">
        {!collapsed && (
          <span className="text-[10px] font-sans font-semibold text-[#3A2F26]/30 uppercase tracking-[0.15em] px-3 mb-2 block">
            Kelola Konten
          </span>
        )}
        {SIDEBAR_ITEMS.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href + "/"));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans font-medium transition-all duration-200 group relative ${
                isActive
                  ? "bg-[#B08B57]/10 text-[#B08B57] border border-[#B08B57]/15"
                  : "text-[#3A2F26]/60 hover:text-[#3A2F26] hover:bg-[#3A2F26]/5 border border-transparent"
              }`}
              title={collapsed ? item.label : undefined}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#B08B57] rounded-r-full" />
              )}
              <Icon
                className={`w-[18px] h-[18px] flex-shrink-0 ${
                  isActive
                    ? "text-[#B08B57]"
                    : "text-[#3A2F26]/35 group-hover:text-[#3A2F26]/60"
                } transition-colors`}
              />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="border-t border-[#E8E1D8] px-2 py-3 space-y-2">
        {/* View Site */}
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans font-medium text-[#3A2F26]/40 hover:text-[#B08B57] hover:bg-[#B08B57]/5 transition-all group"
          title={collapsed ? "Lihat Website" : undefined}
        >
          <ExternalLink className="w-[18px] h-[18px] flex-shrink-0 text-[#3A2F26]/25 group-hover:text-[#B08B57] transition-colors" />
          {!collapsed && <span>Lihat Website</span>}
        </Link>

        {/* Collapse Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans font-medium text-[#3A2F26]/35 hover:text-[#3A2F26]/60 hover:bg-[#3A2F26]/5 transition-all cursor-pointer"
        >
          {collapsed ? (
            <ChevronRight className="w-[18px] h-[18px] flex-shrink-0" />
          ) : (
            <>
              <ChevronLeft className="w-[18px] h-[18px] flex-shrink-0" />
              <span>Ciutkan Sidebar</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
