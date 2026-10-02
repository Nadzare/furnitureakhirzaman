"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { CMSProvider } from "@/lib/cms-store";
import { AdminUIProvider, useAdminUI } from "@/components/admin/AdminUIContext";

function AdminLayoutInner({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { isCollapsed } = useAdminUI();

  // If on login route, render full-screen without admin sidebar and header
  if (pathname === "/admin/login") {
    return <>{children}</>;
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
