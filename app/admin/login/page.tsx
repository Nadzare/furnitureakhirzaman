"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Lock,
  Mail,
  ArrowRight,
  ArrowLeft,
  Eye,
  EyeOff,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Loader2,
  KeyRound,
  Sparkles,
} from "lucide-react";

const DEMO_EMAIL = "admin@furnitureakhirzaman.com";
const DEMO_PASSWORD = "admin";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fillDemoCredentials = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
    setErrorMessage(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email.trim() || !password.trim()) {
      setErrorMessage("Silakan masukkan email dan kata sandi.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const normalizedEmail = email.trim().toLowerCase();
      if (
        (normalizedEmail === DEMO_EMAIL || normalizedEmail === "admin@faz.com") &&
        (password === DEMO_PASSWORD || password === "admin123")
      ) {
        setIsSuccess(true);
        if (typeof window !== "undefined") {
          localStorage.setItem("faz_auth", "true");
          if (rememberMe) {
            localStorage.setItem("faz_remember_email", normalizedEmail);
          }
        }
        setTimeout(() => {
          router.push("/admin");
        }, 600);
      } else {
        setIsLoading(false);
        setErrorMessage(
          "Kredensial tidak valid. Silakan gunakan akun demo yang tertera."
        );
      }
    }, 450);
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F3F0] text-[#3A2F26] flex flex-col justify-between p-3 sm:p-5 selection:bg-[#B08B57] selection:text-white relative">
      {/* Top Bar */}
      <header className="w-full max-w-4xl mx-auto flex items-center justify-between py-1 px-1">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#3A2F26]/60 hover:text-[#B08B57] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Website</span>
        </Link>

        <div className="inline-flex items-center gap-1.5 text-[10px] font-sans font-semibold tracking-wider text-[#B08B57] uppercase bg-white border border-[#E8E1D8] px-2.5 py-1 rounded-full shadow-2xs">
          <ShieldCheck className="w-3 h-3 text-[#B08B57]" />
          <span>Portal Admin CMS</span>
        </div>
      </header>

      {/* Main Container - Compact 2-column box with white base */}
      <main className="flex-1 flex items-center justify-center py-2 sm:py-4">
        <div className="w-full max-w-[820px] bg-white border border-[#E8E1D8] rounded-2xl shadow-xl shadow-[#3A2F26]/5 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* Left Visual Column */}
          <div className="md:col-span-5 relative bg-[#2C2118] text-white p-5 sm:p-6 flex flex-col justify-between overflow-hidden min-h-[160px] md:min-h-[460px]">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                alt="Interior Design"
                fill
                className="object-cover opacity-35"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#231A12] via-[#231A12]/80 to-[#231A12]/40" />
            </div>

            {/* Top Brand with Logo */}
            <div className="relative z-10 space-y-2.5">
              <div className="inline-flex p-1.5 bg-white/10 rounded-xl border border-white/15 backdrop-blur-xs">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                  <Image
                    src="/images/logfur.png"
                    alt="Logo Furniture Akhir Zaman"
                    fill
                    className="object-cover scale-110"
                    priority
                  />
                </div>
              </div>

              <div>
                <h2 className="font-serif text-sm font-bold tracking-[0.08em] text-white">
                  FURNITURE AKHIR ZAMAN
                </h2>
                <p className="text-[9px] font-sans tracking-[0.18em] text-[#C4A26F] uppercase font-semibold mt-0.5">
                  Interior Design & Build
                </p>
              </div>
            </div>

            {/* Bottom Content (hidden on small mobile to keep compact) */}
            <div className="relative z-10 hidden md:block space-y-2 pt-6">
              <div className="flex items-center gap-1.5 text-[#C4A26F] text-[10px] font-sans font-semibold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>Content Management</span>
              </div>
              <p className="font-serif text-sm text-white/90 leading-snug">
                Kelola portofolio, layanan, dan konten interior secara terpadu.
              </p>
              <p className="text-[10px] font-sans text-white/40 pt-1 border-t border-white/10 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C4A26F]" />
                <span>Sistem Terenkripsi & Aman</span>
              </p>
            </div>
          </div>

          {/* Right Form Column - White Base & Compact */}
          <div className="md:col-span-7 bg-white p-5 sm:p-6 md:p-7 flex flex-col justify-center space-y-3.5">
            {/* Header info */}
            <div>
              <h1 className="font-serif text-xl sm:text-2xl font-bold text-[#3A2F26] tracking-tight">
                Masuk ke Panel Admin
              </h1>
              <p className="text-xs font-sans text-[#3A2F26]/50 mt-0.5">
                Masukkan kredensial administrator Anda untuk melanjutkan.
              </p>
            </div>

            {/* Compact Demo Account Bar */}
            <div className="p-2.5 bg-[#FAF7F2] border border-[#B08B57]/25 rounded-xl text-xs font-sans space-y-1">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-[11px] font-semibold text-[#B08B57] uppercase tracking-wider">
                  <KeyRound className="w-3.5 h-3.5" />
                  Akun Demo
                </span>
                <button
                  type="button"
                  onClick={fillDemoCredentials}
                  className="text-[11px] font-semibold text-[#B08B57] hover:text-[#917043] underline underline-offset-2 transition-colors cursor-pointer"
                >
                  Isi Otomatis
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-1 text-[10.5px] text-[#3A2F26]/75">
                <div>
                  <span className="text-[#3A2F26]/40">Email:</span>{" "}
                  <code className="bg-white px-1.5 py-0.5 rounded border border-[#E8E1D8] font-mono text-[#3A2F26]">
                    admin@furnitureakhirzaman.com
                  </code>
                </div>
                <div>
                  <span className="text-[#3A2F26]/40">Sandi:</span>{" "}
                  <code className="bg-white px-1.5 py-0.5 rounded border border-[#E8E1D8] font-mono text-[#3A2F26]">
                    admin
                  </code>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 text-xs font-sans text-red-700">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{errorMessage}</span>
              </div>
            )}

            {/* Success Message */}
            {isSuccess && (
              <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-xs font-sans text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Autentikasi berhasil. Mengalihkan...</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Email */}
              <div className="space-y-1">
                <label className="block text-xs font-sans font-semibold text-[#3A2F26]/75">
                  Alamat Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#3A2F26]/40">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@furnitureakhirzaman.com"
                    className="w-full bg-[#FAF9F7] focus:bg-white border border-[#E8E1D8] rounded-lg pl-9 pr-3 py-2 text-base sm:text-sm font-sans text-[#3A2F26] placeholder-[#3A2F26]/30 focus:outline-none focus:border-[#B08B57] focus:ring-1 focus:ring-[#B08B57]/20 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-sans font-semibold text-[#3A2F26]/75">
                    Kata Sandi
                  </label>
                  <button
                    type="button"
                    onClick={fillDemoCredentials}
                    className="text-[10.5px] font-sans text-[#B08B57] hover:text-[#917043] transition-colors cursor-pointer"
                  >
                    Gunakan sandi demo
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#3A2F26]/40">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan kata sandi..."
                    className="w-full bg-[#FAF9F7] focus:bg-white border border-[#E8E1D8] rounded-lg pl-9 pr-10 py-2 text-base sm:text-sm font-sans text-[#3A2F26] placeholder-[#3A2F26]/30 focus:outline-none focus:border-[#B08B57] focus:ring-1 focus:ring-[#B08B57]/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Sembunyikan sandi" : "Lihat sandi"}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#3A2F26]/40 hover:text-[#3A2F26] transition-colors cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between pt-0.5">
                <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-sans text-[#3A2F26]/65">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-[#E8E1D8] text-[#B08B57] focus:ring-[#B08B57]/30 cursor-pointer accent-[#B08B57]"
                  />
                  <span>Ingat saya di perangkat ini</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || isSuccess}
                className="w-full mt-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-sans font-semibold text-sm text-white bg-[#B08B57] hover:bg-[#917043] active:scale-[0.99] transition-all duration-200 cursor-pointer shadow-md shadow-[#B08B57]/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Memverifikasi...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Berhasil Masuk</span>
                  </>
                ) : (
                  <>
                    <span>Masuk ke Panel Admin</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto py-1 text-center text-[11px] font-sans text-[#3A2F26]/40">
        Furniture Akhir Zaman &copy; {new Date().getFullYear()}. Seluruh Hak Cipta Dilindungi.
      </footer>
    </div>
  );
}
