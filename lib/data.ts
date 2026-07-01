import { ServiceItem, PortfolioItem, WorkProcessStep, WhyChooseUsItem, TestimonialItem } from "../types";

export const STATISTICS_DATA = [
  { id: "stat-1", value: "500+", label: "Proyek Selesai", iconName: "FolderGit2" },
  { id: "stat-2", value: "7+", label: "Tahun Pengalaman", iconName: "Award" },
  { id: "stat-3", value: "3", label: "Kota Layanan", subLabel: "PWT - YOG - JKT", iconName: "MapPin" },
  { id: "stat-4", value: "100%", label: "Kepuasan Klien", iconName: "Users2" }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "serv-1",
    title: "Interior Design",
    description: "Perancangan desain interior eksklusif mulai dari konsep visual 3D, pemilihan material, tata letak ruang, hingga detail teknis pencahayaan.",
    iconName: "PenTool"
  },
  {
    id: "serv-2",
    title: "Kitchen Set",
    description: "Pembuatan kitchen set premium custom yang menggabungkan nilai ergonomis tinggi dengan visual mewah dan material tahan lama.",
    iconName: "ChefHat"
  },
  {
    id: "serv-3",
    title: "Bedroom",
    description: "Desain kamar tidur utama dan anak yang nyaman dengan penataan fungsional, pemilihan warna menenangkan, dan custom wardrobe elegan.",
    iconName: "BedDouble"
  },
  {
    id: "serv-4",
    title: "Living Room",
    description: "Ruang keluarga yang didesain secara detail untuk memberikan kehangatan berinteraksi dan impresi mewah saat menyambut tamu.",
    iconName: "Sofa"
  },
  {
    id: "serv-5",
    title: "TV Backdrop",
    description: "Pusat hiburan berkelas dengan panel backdrop dinding custom menggunakan HPL premium, kayu solid, marmer, atau pencahayaan LED tersembunyi.",
    iconName: "Tv"
  },
  {
    id: "serv-6",
    title: "Walk In Closet",
    description: "Lemari pakaian custom berukuran besar (walk-in closet) dengan penataan laci, gantungan, dan ruang pajangan tas serta perhiasan layaknya butik.",
    iconName: "DoorClosed"
  },
  {
    id: "serv-7",
    title: "Renovasi Interior",
    description: "Layanan rekonstruksi dan penyegaran tata ruang interior lama menjadi modern tanpa merusak struktur bangunan utama.",
    iconName: "Hammer"
  },
  {
    id: "serv-8",
    title: "Custom Furniture",
    description: "Pembuatan berbagai macam perabot custom seperti meja makan, partisi ruangan, meja kerja, dan kredenza dengan ukuran presisi.",
    iconName: "Layout"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Luxurious Emerald Kitchen Set",
    category: "Kitchen Set",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Kitchen set bernuansa emerald dark emerald dengan marmer putih Carrara dan aksen kuningan mewah. Dilengkapi perangkat built-in canggih.",
    client: "Bpk. Hermawan",
    year: "2025",
    location: "Kebayoran Baru, Jakarta",
    size: "24 m²"
  },
  {
    id: "port-2",
    title: "Modern Japandi Master Bedroom",
    category: "Bedroom",
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Kamar tidur bernuansa hangat dengan elemen kayu ek natural, panel dinding bergaris, dan wardrobe terintegrasi yang memaksimalkan ruang.",
    client: "Ibu Amanda",
    year: "2026",
    location: "Kaliurang, Yogyakarta",
    size: "32 m²"
  },
  {
    id: "port-3",
    title: "Grand Living Room & Lounge",
    category: "Living Room",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Desain ruang keluarga dengan high ceiling, panel dinding marmer Nero Marquina, sofa mewah impor, dan instalasi lampu gantung kristal.",
    client: "Bpk. Winata",
    year: "2025",
    location: "Menteng, Jakarta",
    size: "48 m²"
  },
  {
    id: "port-4",
    title: "Minimalist Floating TV Backdrop",
    category: "TV Backdrop",
    imageUrl: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Backdrop TV gantung minimalis dengan kombinasi panel serat kayu bertekstur kasar, plat logam hitam, dan LED strip warm white tersembunyi.",
    client: "Bpk. Aditya",
    year: "2025",
    location: "Purwokerto Utara, Purwokerto",
    size: "12 m²"
  },
  {
    id: "port-5",
    title: "Contemporary Open Pantry & Bar",
    category: "Pantry",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Pantry bergaya minibar kontemporer untuk sarapan pagi cepat dan bersantai. Menampilkan top table granit hitam pekat dan rak gantung industrial.",
    client: "Ibu Natalia",
    year: "2026",
    location: "Sleman, Yogyakarta",
    size: "18 m²"
  },
  {
    id: "port-6",
    title: "Executive Office Lobby & Lounge",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Area lobi dan ruang tunggu kantor berkelas tinggi dengan desain minimalis profesional, partisi akustik mewah, dan pencahayaan fungsional.",
    client: "PT Sahabat Nusantara",
    year: "2025",
    location: "Sudirman CBD, Jakarta",
    size: "110 m²"
  },
  {
    id: "port-7",
    title: "Elegant Luxury Kitchen Set & Island",
    category: "Kitchen Set",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Dapur koki mewah dengan area kitchen island sentral berlapis kuarsa putih, kabinet atas berpintu kaca tempered, dan finishing cat duco premium.",
    client: "Ibu Larasati",
    year: "2026",
    location: "Baturraden, Purwokerto",
    size: "28 m²"
  },
  {
    id: "port-8",
    title: "Warm Luxury Living Room",
    category: "Living Room",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Penyegaran tata ruang keluarga dengan fokus kenyamanan. Penggunaan panel kisi-kisi kayu di belakang sofa dan pencahayaan ambient yang hangat.",
    client: "Bpk. Gunawan",
    year: "2025",
    location: "Pondok Indah, Jakarta",
    size: "35 m²"
  },
  {
    id: "port-9",
    title: "Luxury Walk In Closet & Showcase",
    category: "Commercial", // Let's label it or map to another category. The user wants Pantry, Commercial, Bedroom, Kitchen Set, Living Room, TV Backdrop. Let's make it Commercial or Bedroom.
    imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Showroom display interior atau lemari pajangan butik eksklusif dengan pencahayaan LED internal di setiap sudut ambalan kaca tempered.",
    client: "Madame Vania Boutique",
    year: "2025",
    location: "Yogyakarta Kota, Yogyakarta",
    size: "45 m²"
  }
];

export const WORK_PROCESS_DATA: WorkProcessStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Konsultasi",
    description: "Diskusi mendalam mengenai kebutuhan, preferensi gaya interior, estimasi budget, dan konsep awal ruangan Anda.",
    iconName: "MessageSquare"
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Survey",
    description: "Tim ahli kami melakukan pengukuran lokasi secara presisi, analisis pencahayaan alami, dan dokumentasi detail struktural.",
    iconName: "Ruler"
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Desain",
    description: "Pembuatan layout 2D dan visualisasi 3D fotorealistik beresolusi tinggi beserta rendering material untuk persetujuan visual.",
    iconName: "Palette"
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Produksi",
    description: "Pembuatan furnitur custom di workshop kami oleh tenaga pengrajin terlatih menggunakan mesin modern dan material pilihan.",
    iconName: "Box"
  },
  {
    id: "step-5",
    stepNumber: "05",
    title: "Instalasi",
    description: "Proses pengiriman dan instalasi langsung di lokasi oleh tim installer profesional untuk memastikan pemasangan yang rapi dan aman.",
    iconName: "Wrench"
  },
  {
    id: "step-6",
    stepNumber: "06",
    title: "Serah Terima",
    description: "Inspeksi akhir bersama klien guna memastikan seluruh detail pengerjaan memenuhi standar kualitas kami sebelum penyerahan kunci.",
    iconName: "CheckCircle"
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: "wcu-1",
    title: "Desain Custom",
    description: "Setiap desain dibuat khusus menyesuaikan fungsi ruang, gaya hidup pemilik, dan kepribadian unik Anda. Tidak ada desain tiruan.",
    iconName: "Compass"
  },
  {
    id: "wcu-2",
    title: "Material Berkualitas",
    description: "Kami hanya menggunakan bahan dasar premium seperti multipleks tebal (bukan particle board), lem berkualitas tinggi, HPL kelas atas, dan hardware bersertifikasi.",
    iconName: "ShieldAlert"
  },
  {
    id: "wcu-3",
    title: "Tim Profesional",
    description: "Dipimpin oleh arsitek dan desainer interior berpengalaman, didukung oleh tim tukang kayu (craftsman) spesialis furnitur tingkat presisi tinggi.",
    iconName: "UserCheck"
  },
  {
    id: "wcu-4",
    title: "Presisi Tinggi",
    description: "Kami mengutamakan presisi milimeter pada setiap pemotongan, penyambungan, dan pemasangan kabinet untuk menjamin kerapihan maksimal.",
    iconName: "Target"
  },
  {
    id: "wcu-5",
    title: "Harga Transparan",
    description: "Rencana Anggaran Biaya (RAB) dirinci secara detail per item, tanpa ada biaya siluman tersembunyi selama pengerjaan berlangsung.",
    iconName: "BadgePercent"
  },
  {
    id: "wcu-6",
    title: "Garansi Pekerjaan",
    description: "Kami berkomitmen menjaga kepuasan Anda pasca-serah terima dengan memberikan garansi pemeliharaan struktural dan hardware hingga 1 tahun.",
    iconName: "ShieldCheck"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Budi Santoso",
    role: "Pemilik Rumah",
    location: "Kebayoran Baru, Jakarta",
    quote: "Hasilnya di luar ekspektasi! Desainnya keren, pemasangannya sangat rapi, dan timnya sangat profesional serta komunikatif selama proses desain 3D hingga instalasi di rumah.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-2",
    name: "Rina Melati",
    role: "Ibu Rumah Tangga",
    location: "Sleman, Yogyakarta",
    quote: "Kitchen set dan backdrop TV yang dibuat benar-benar presisi sesuai keinginan saya. Materialnya tebal dan finishing HPL sangat rapi. Harganya sebanding dengan kualitas premium yang diberikan.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-3",
    name: "Andi Wijaya",
    role: "Pemilik Apartemen",
    location: "Baturraden, Purwokerto",
    quote: "Pekerjaan cepat, rapi, dan komunikatif. Sangat direkomendasikan untuk yang mencari jasa interior berkelas di Purwokerto. Kamar utama saya kini serasa hotel bintang lima.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-4",
    name: "Siti Rahma",
    role: "Pemilik Bisnis Kafe",
    location: "Sleman, Yogyakarta",
    quote: "Pengerjaan furniture custom untuk kafe kami selesai tepat waktu dengan hasil presisi yang sangat memukau. Klien kami sering memuji keindahan interior kafe kami.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-5",
    name: "Hendra Wijaya",
    role: "Pemilik Villa",
    location: "Kaliurang, Yogyakarta",
    quote: "Pembuatan wardrobe dan panel dinding di villa kami sangat mewah dan detail. Finishing-nya halus sekali, tim bekerja rapi dan bersih setelah instalasi selesai.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-6",
    name: "Maria Utami",
    role: "Pemilik Rumah",
    location: "Pondok Indah, Jakarta",
    quote: "Sangat puas dengan renovasi ruang keluarga kami. Desain 3D dari desainer sangat mirip dengan hasil jadinya. Layanan purna jualnya juga responsif sekali.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
  }
];
