"use client";

import { ReactNode, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { CMSProvider } from "@/lib/cms-store";
import { AdminUIProvider, useAdminUI } from "@/components/admin/AdminUIContext";
import { Loader2 } from "lucide-react";

function AdminLayoutInner({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isCollapsed } = useAdminUI();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    if (pathname === "/admin/login") return;

    if (typeof window !== "undefined") {
      const hasLocalAuth = localStorage.getItem("faz_auth") === "true";
      const hasCookieAuth = document.cookie
        .split("; ")
        .some((row) => row.startsWith("faz_auth=true"));

      if (!hasLocalAuth && !hasCookieAuth) {
        setIsAuthenticated(false);
        router.replace("/admin/login");
      } else {
        setIsAuthenticated(true);
      }
    }
  }, [pathname, router]);

  // If on login route, render full-screen without admin sidebar and header
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // Prevent flash of protected admin content while verifying authentication
  if (isAuthenticated !== true) {
    return (
      <div className="min-h-screen bg-[#F8F6F2] flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#E8E1D8] bg-white p-1 shadow-2xs">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/images/logfur.png"
                alt="Logo Furniture Akhir Zaman"
                fill
                className="object-cover scale-110"
                priority
              />
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-sans text-[#3A2F26]/60">
            <Loader2 className="w-4 h-4 animate-spin text-[#B08B57]" />
            <span>Memverifikasi akses administrator...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F5F3F0] relative overflow-x-hidden">
      <AdminSidebar />
      <div
        className={`flex-1 flex flex-col min-w-0 max-w-full transition-all duration-300 ease-in-out ml-0 ${
          isCollapsed ? "md:ml-[72px]" : "md:ml-[260px]"
        }`}
      >
        <AdminHeader />
        <main className="flex-1 p-3.5 sm:p-6 md:p-8 overflow-y-auto overflow-x-hidden min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function AdminTemplate({ children }: { children: ReactNode }) {
  return (
    <CMSProvider>
      <AdminUIProvider>
        <AdminLayoutInner>{children}</AdminLayoutInner>
      </AdminUIProvider>
    </CMSProvider>
  );
}
