import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Furniture Akhir Zaman | Jasa Desain Interior, Build & Renovasi Premium",
  description: "Wujudkan interior impian Anda bersama Furniture Akhir Zaman. Jasa Desain Interior, Custom Furniture, Kitchen Set, dan Renovasi Premium untuk area Purwokerto, Yogyakarta, dan Jakarta. Hubungi 0896-4564-6711.",
  keywords: [
    "Jasa Desain Interior Purwokerto",
    "Jasa Desain Interior Yogyakarta",
    "Jasa Desain Interior Jakarta",
    "Kitchen Set Purwokerto",
    "Kitchen Set Yogyakarta",
    "Kitchen Set Jakarta",
    "Custom Furniture Indonesia",
    "Renovasi Interior Mewah",
    "Furniture Akhir Zaman"
  ],
  authors: [{ name: "Furniture Akhir Zaman" }],
  creator: "Furniture Akhir Zaman",
  publisher: "Furniture Akhir Zaman",
  metadataBase: new URL("https://furnitureakhirzaman.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Furniture Akhir Zaman | Interior Design & Build Renovation",
    description: "Spesialis jasa desain & renovasi interior premium dengan sentuhan modern luxury. Melayani area Purwokerto, Yogyakarta, dan Jakarta.",
    url: "https://furnitureakhirzaman.com",
    siteName: "Furniture Akhir Zaman",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Furniture Akhir Zaman Modern Luxury Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture Akhir Zaman | Interior Design & Build Renovation",
    description: "Jasa desain & renovasi interior mewah di Purwokerto, Yogyakarta, dan Jakarta.",
    images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} font-sans h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased bg-dark-deep text-light-bg selection:bg-gold selection:text-dark-deep">
        {children}
      </body>
    </html>
  );
}
