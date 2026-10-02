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
    <div className="space-y-8 max-w-6xl">
      {/* Welcome Banner */}
      <div className="relative bg-white border border-[#E8E1D8] rounded-2xl p-8 md:p-10 overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#B08B57]/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#B08B57]/10 border border-[#B08B57]/15 rounded-lg">
              <Layers className="w-5 h-5 text-[#B08B57]" />
            </div>
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#B08B57] uppercase">
              Content Management System
            </span>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#3A2F26] tracking-tight">
            Selamat Datang di Admin Panel
          </h2>

          <p className="text-sm font-sans text-[#3A2F26]/45 max-w-lg leading-relaxed">
            Kelola seluruh konten website Furniture Akhir Zaman dari sini.
            Setiap perubahan tersimpan otomatis dan langsung terlihat di
            halaman utama.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="space-y-1">
              <span className="text-2xl font-serif font-bold text-[#3A2F26]">
                {services.length}
              </span>
              <span className="block text-[10px] font-sans text-[#3A2F26]/30 uppercase tracking-wider">
                Layanan
              </span>
            </div>
            <div className="w-px h-12 bg-[#E8E1D8]" />
            <div className="space-y-1">
              <span className="text-2xl font-serif font-bold text-[#3A2F26]">
                {portfolio.length}
              </span>
              <span className="block text-[10px] font-sans text-[#3A2F26]/30 uppercase tracking-wider">
                Portfolio
              </span>
            </div>
            <div className="w-px h-12 bg-[#E8E1D8]" />
            <div className="space-y-1">
              <span className="text-2xl font-serif font-bold text-[#3A2F26]">
                {testimonials.length}
              </span>
              <span className="block text-[10px] font-sans text-[#3A2F26]/30 uppercase tracking-wider">
                Testimoni
              </span>
            </div>
            <div className="w-px h-12 bg-[#E8E1D8]" />
            <div className="space-y-1">
              <span className="text-2xl font-serif font-bold text-[#3A2F26]">
                10
              </span>
              <span className="block text-[10px] font-sans text-[#3A2F26]/30 uppercase tracking-wider">
                Section
              </span>
            </div>
          </div>

          {lastSaved && (
            <p className="text-[11px] font-sans text-[#3A2F26]/25 pt-2">
              Terakhir disimpan: {lastSaved}
            </p>
          )}
        </div>
      </div>

      {/* View Live Site */}
      <Link
        href="/"
        target="_blank"
        className="flex items-center justify-between bg-white border border-[#E8E1D8] rounded-xl px-6 py-4 group hover:border-[#B08B57]/30 transition-all duration-300 shadow-sm"
      >
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-[#B08B57]/50" />
          <div>
            <span className="text-sm font-sans font-semibold text-[#3A2F26]/70 group-hover:text-[#B08B57] transition-colors">
              Lihat Website Live
            </span>
            <span className="block text-[11px] font-sans text-[#3A2F26]/25">
              furnitureakhirzaman.com
            </span>
          </div>
        </div>
        <ArrowRight className="w-4 h-4 text-[#3A2F26]/20 group-hover:text-[#B08B57] group-hover:translate-x-1 transition-all" />
      </Link>

      {/* Section Cards Grid */}
      <div>
        <h3 className="font-serif text-lg font-semibold text-[#3A2F26]/80 mb-5 tracking-tight">
          Kelola Section
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTION_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-white border border-[#E8E1D8] rounded-xl p-6 hover:border-[#B08B57]/25 hover:shadow-md hover:shadow-[#B08B57]/5 transition-all duration-300 space-y-4 relative overflow-hidden shadow-sm"
              >
                {/* Accent glow */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: card.color }}
                />

                <div className="flex items-center gap-3 relative z-10">
                  <div
                    className="p-2 rounded-lg border transition-all duration-300"
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
                  <h4 className="font-sans text-sm font-semibold text-[#3A2F26]/70 group-hover:text-[#3A2F26] transition-colors">
                    {card.label}
                  </h4>
                </div>

                <p className="text-xs font-sans text-[#3A2F26]/35 leading-relaxed relative z-10">
                  {card.description}
                </p>

                <div className="flex items-center gap-1 text-[10px] font-sans font-semibold text-[#B08B57]/50 group-hover:text-[#B08B57] uppercase tracking-wider transition-colors relative z-10">
                  <span>Edit</span>
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
