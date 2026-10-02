"use client";

import { useCMS } from "@/lib/cms-store";
import Link from "next/link";
import {
  Sparkles,
  Info,
  Grid3X3,
  Briefcase,
  Settings,
  MessageSquareQuote,
  Megaphone,
  BarChart3,
  Footprints,
  ArrowRight,
  Globe,
  Layers,
} from "lucide-react";

const SECTION_CARDS = [
  {
    label: "Hero Section",
    description: "Heading utama, deskripsi, background image, dan tombol CTA.",
    href: "/admin/hero",
    icon: Sparkles,
    color: "#B08B57",
  },
  {
    label: "Tentang Kami",
    description: "Profil perusahaan, highlight keunggulan, dan gambar kolase.",
    href: "/admin/about",
    icon: Info,
    color: "#7C9A6E",
  },
  {
    label: "Statistik",
    description: "Angka pencapaian seperti proyek selesai dan tahun pengalaman.",
    href: "/admin/statistics",
    icon: BarChart3,
    color: "#6B8EC4",
  },
  {
    label: "Layanan",
    description: "Daftar layanan interior yang ditawarkan beserta deskripsi.",
    href: "/admin/services",
    icon: Grid3X3,
    color: "#C47A6B",
  },
  {
    label: "Portfolio",
    description: "Galeri proyek yang sudah dikerjakan dengan detail spesifikasi.",
    href: "/admin/portfolio",
    icon: Briefcase,
    color: "#9B7EC4",
  },
  {
    label: "Proses Kerja",
    description: "Timeline langkah pengerjaan dari konsultasi hingga serah terima.",
    href: "/admin/work-process",
    icon: Settings,
    color: "#C4A06B",
  },
  {
    label: "Keunggulan Kami",
    description: "Alasan klien memilih Furniture Akhir Zaman.",
    href: "/admin/why-choose-us",
    icon: Sparkles,
    color: "#6BC4B0",
  },
  {
    label: "Testimoni",
    description: "Review dan testimoni dari klien yang puas.",
    href: "/admin/testimonials",
    icon: MessageSquareQuote,
    color: "#C46B8E",
  },
  {
    label: "CTA Section",
    description: "Call-to-action untuk konversi visitor menjadi klien.",
    href: "/admin/cta",
    icon: Megaphone,
    color: "#B08B57",
  },
  {
    label: "Footer",
    description: "Informasi kontak, alamat, dan link media sosial.",
    href: "/admin/footer",
    icon: Footprints,
    color: "#7A8C6E",
  },
];

export default function AdminDashboard() {
  const { lastSaved, services, portfolio, testimonials } = useCMS();

  return (
    <div className="space-y-6 sm:space-y-8 max-w-6xl min-w-0">
      {/* Welcome Banner */}
      <div className="relative bg-white border border-[#E8E1D8] rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 overflow-hidden shadow-xs">
        <div className="absolute top-0 right-0 w-[240px] sm:w-[300px] h-[240px] sm:h-[300px] bg-[#B08B57]/5 blur-[80px] sm:blur-[100px] pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-2 sm:p-2.5 bg-[#B08B57]/10 border border-[#B08B57]/15 rounded-lg">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#B08B57]" />
            </div>
            <span className="text-[10px] font-sans font-semibold tracking-[0.18em] text-[#B08B57] uppercase">
              Content Management System
            </span>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-[#3A2F26] tracking-tight">
            Selamat Datang di Admin Panel
          </h2>

          <p className="text-xs sm:text-sm font-sans text-[#3A2F26]/50 max-w-lg leading-relaxed">
            Kelola seluruh konten website Furniture Akhir Zaman dari sini.
            Setiap perubahan tersimpan otomatis dan langsung terlihat di
            halaman utama website.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-6 pt-3 sm:pt-4">
            <div className="bg-[#F8F6F2] sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border border-[#E8E1D8] sm:border-0 sm:border-r sm:border-[#E8E1D8] sm:pr-6 space-y-0.5">
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#3A2F26]">
                {services.length}
              </span>
              <span className="block text-[10px] font-sans text-[#3A2F26]/40 uppercase tracking-wider font-semibold">
                Layanan
              </span>
            </div>

            <div className="bg-[#F8F6F2] sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border border-[#E8E1D8] sm:border-0 sm:border-r sm:border-[#E8E1D8] sm:pr-6 space-y-0.5">
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#3A2F26]">
                {portfolio.length}
              </span>
              <span className="block text-[10px] font-sans text-[#3A2F26]/40 uppercase tracking-wider font-semibold">
                Portfolio
              </span>
            </div>

            <div className="bg-[#F8F6F2] sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border border-[#E8E1D8] sm:border-0 sm:border-r sm:border-[#E8E1D8] sm:pr-6 space-y-0.5">
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#3A2F26]">
                {testimonials.length}
              </span>
              <span className="block text-[10px] font-sans text-[#3A2F26]/40 uppercase tracking-wider font-semibold">
                Testimoni
              </span>
            </div>

            <div className="bg-[#F8F6F2] sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border border-[#E8E1D8] sm:border-0 space-y-0.5">
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#3A2F26]">
                10
              </span>
              <span className="block text-[10px] font-sans text-[#3A2F26]/40 uppercase tracking-wider font-semibold">
                Section
              </span>
            </div>
          </div>

          {lastSaved && (
            <p className="text-[11px] font-sans text-[#3A2F26]/35 pt-1">
              Terakhir disimpan: {lastSaved}
            </p>
          )}
        </div>
      </div>

      {/* View Live Site Card */}
      <Link
        href="/"
        target="_blank"
        className="flex items-center justify-between bg-white border border-[#E8E1D8] rounded-xl px-4 sm:px-6 py-3.5 sm:py-4 group hover:border-[#B08B57]/35 transition-all duration-300 shadow-xs"
      >
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-[#B08B57]/60" />
          <div>
            <span className="text-sm font-sans font-semibold text-[#3A2F26]/80 group-hover:text-[#B08B57] transition-colors block">
              Lihat Website Live
            </span>
            <span className="text-[11px] font-sans text-[#3A2F26]/35">
              furnitureakhirzaman.com
            </span>
          </div>
        </div>
        <ArrowRight className="w-4 h-4 text-[#3A2F26]/30 group-hover:text-[#B08B57] group-hover:translate-x-1 transition-all" />
      </Link>

      {/* Section Cards Grid */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="font-serif text-base sm:text-lg font-semibold text-[#3A2F26]/80 tracking-tight">
          Kelola Section Website
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {SECTION_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-white border border-[#E8E1D8] rounded-xl p-4 sm:p-5 hover:border-[#B08B57]/30 hover:shadow-md hover:shadow-[#B08B57]/5 transition-all duration-300 space-y-3 relative overflow-hidden shadow-xs flex flex-col justify-between"
              >
                {/* Accent glow */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: card.color }}
                />

                <div className="space-y-2 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="p-2 rounded-lg border transition-all duration-300 flex-shrink-0"
                      style={{
                        backgroundColor: `${card.color}10`,
                        borderColor: `${card.color}20`,
                      }}
                    >
                      <Icon
                        className="w-4 h-4 transition-colors"
                        style={{ color: card.color }}
                      />
                    </div>
                    <h4 className="font-sans text-sm font-semibold text-[#3A2F26]/80 group-hover:text-[#3A2F26] transition-colors truncate">
                      {card.label}
                    </h4>
                  </div>

                  <p className="text-xs font-sans text-[#3A2F26]/40 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-sans font-semibold text-[#B08B57]/60 group-hover:text-[#B08B57] uppercase tracking-wider transition-colors pt-2 border-t border-[#E8E1D8]/50 relative z-10">
                  <span>Edit Konten</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
