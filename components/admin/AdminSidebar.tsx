"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useAdminUI } from "@/components/admin/AdminUIContext";
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
  X,
  LogOut,
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
  const router = useRouter();
  const {
    isMobileOpen,
    closeMobileSidebar,
    isCollapsed,
    toggleCollapsed,
  } = useAdminUI();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("faz_auth");
      document.cookie =
        "faz_auth=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    closeMobileSidebar();
    router.push("/admin/login");
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <div
        onClick={closeMobileSidebar}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-[#2C2118]/60 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 h-full z-50 md:z-30 flex flex-col bg-white border-r border-[#E8E1D8] shadow-2xl md:shadow-sm transition-all duration-300 ease-in-out ${
          /* Mobile Drawer: fixed width 280px, slide in/out */
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } w-[280px] max-w-[85vw] md:translate-x-0 ${
          /* Desktop behavior: collapsible width */
          isCollapsed ? "md:w-[72px]" : "md:w-[260px]"
        }`}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between px-4 py-4 md:py-5 border-b border-[#E8E1D8] min-h-[68px] md:min-h-[72px]">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/images/logfur.png"
                alt="Logo"
                fill
                className="object-cover scale-110"
              />
            </div>
            {/* Show title on mobile, or on desktop when not collapsed */}
            <div
              className={`flex flex-col leading-none overflow-hidden ${
                isCollapsed ? "md:hidden" : "flex"
              }`}
            >
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
          </div>

          {/* Close Button on Mobile */}
          <button
            onClick={closeMobileSidebar}
            aria-label="Tutup Menu"
            className="md:hidden p-2 -mr-1 rounded-lg text-[#3A2F26]/40 hover:text-[#3A2F26] hover:bg-[#3A2F26]/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto py-3 md:py-4 px-2.5 md:px-2 space-y-1 scrollbar-none">
          <span
            className={`text-[10px] font-sans font-semibold text-[#3A2F26]/30 uppercase tracking-[0.15em] px-3 mb-2 block ${
              isCollapsed ? "md:hidden" : "block"
            }`}
          >
            Kelola Konten
          </span>
          {SIDEBAR_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href + "/"));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileSidebar}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans font-medium transition-all duration-200 group relative ${
                  isActive
                    ? "bg-[#B08B57]/10 text-[#B08B57] border border-[#B08B57]/15"
                    : "text-[#3A2F26]/65 hover:text-[#3A2F26] hover:bg-[#3A2F26]/5 border border-transparent"
                } ${isCollapsed ? "md:justify-center md:px-0" : ""}`}
                title={isCollapsed ? item.label : undefined}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#B08B57] rounded-r-full" />
                )}
                <Icon
                  className={`w-[18px] h-[18px] flex-shrink-0 ${
                    isActive
                      ? "text-[#B08B57]"
                      : "text-[#3A2F26]/40 group-hover:text-[#3A2F26]/70"
                  } transition-colors`}
                />
                <span
                  className={`truncate ${
                    isCollapsed ? "md:hidden" : "inline"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="border-t border-[#E8E1D8] px-2.5 md:px-2 py-3 space-y-1.5">
          {/* View Site */}
          <Link
            href="/"
            target="_blank"
            onClick={closeMobileSidebar}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans font-medium text-[#3A2F26]/50 hover:text-[#B08B57] hover:bg-[#B08B57]/5 transition-all group ${
              isCollapsed ? "md:justify-center md:px-0" : ""
            }`}
            title={isCollapsed ? "Lihat Website" : undefined}
          >
            <ExternalLink className="w-[18px] h-[18px] flex-shrink-0 text-[#3A2F26]/30 group-hover:text-[#B08B57] transition-colors" />
            <span className={isCollapsed ? "md:hidden" : "inline"}>
              Lihat Website
            </span>
          </Link>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-sans font-medium text-red-600/60 hover:text-red-600 hover:bg-red-50 transition-all cursor-pointer ${
              isCollapsed ? "md:justify-center md:px-0" : ""
            }`}
            title={isCollapsed ? "Keluar" : undefined}
          >
            <LogOut className="w-[18px] h-[18px] flex-shrink-0 text-red-500/60" />
            <span className={isCollapsed ? "md:hidden" : "inline"}>
              Keluar
            </span>
          </button>

          {/* Desktop Collapse Toggle (hidden on mobile) */}
          <button
            onClick={toggleCollapsed}
            className="hidden md:flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans font-medium text-[#3A2F26]/40 hover:text-[#3A2F26]/70 hover:bg-[#3A2F26]/5 transition-all cursor-pointer"
            title={isCollapsed ? "Bentangkan Sidebar" : "Ciutkan Sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="w-[18px] h-[18px] flex-shrink-0 mx-auto" />
            ) : (
              <>
                <ChevronLeft className="w-[18px] h-[18px] flex-shrink-0" />
                <span>Ciutkan Sidebar</span>
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
