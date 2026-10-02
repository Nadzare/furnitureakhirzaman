"use client";

import { ReactNode } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { CMSProvider } from "@/lib/cms-store";

export default function AdminTemplate({ children }: { children: ReactNode }) {
  return (
    <CMSProvider>
      <div className="flex min-h-screen bg-[#F5F3F0]">
        <AdminSidebar />
        <div className="flex-1 ml-[260px] flex flex-col transition-all duration-300">
          <AdminHeader />
          <main className="flex-1 p-6 md:p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </CMSProvider>
  );
}
