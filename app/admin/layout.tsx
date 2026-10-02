import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin CMS | Furniture Akhir Zaman",
  description: "Content Management System untuk mengelola konten website Furniture Akhir Zaman.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
