import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  ShoppingBag, 
  MapPin, 
  Database, 
  User, 
  Code, 
  Image, 
  MessageSquare, 
  Layout, 
  Globe,
  LucideIcon
} from "lucide-react";

// Define the interface locally since we aren't using the external component's definition
interface ServiceItem {
  id: number;
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

const categories = [
  { id: "all", label: "Semua Layanan" },
  { id: "A", label: "UMKM & Bisnis" },
  { id: "B", label: "Wisata & Desa" },
  { id: "C", label: "Sistem Custom" },
  { id: "D", label: "Personal Branding" },
];

const services = [
  // A. UMKM & Bisnis Lokal
  {
    id: 1,
    title: "Website Company Profile",
    category: "A",
    icon: Globe,
    description: "Profil usaha lengkap untuk membangun kepercayaan pelanggan.",
    features: ["Profil usaha", "Layanan / produk", "Galeri Foto", "Kontak + WhatsApp", "Google Maps Integrasi"]
  },
  {
    id: 2,
    title: "Landing Page Promosi",
    category: "A",
    icon: Layout,
    description: "Halaman fokus jualan untuk meningkatkan konversi iklan.",
    features: ["1 halaman fokus jualan", "Deskripsi produk/jasa menarik", "Testimoni Pelanggan", "CTA WhatsApp Prioritas"]
  },
  {
    id: 3,
    title: "Website Katalog Produk",
    category: "A",
    icon: ShoppingBag,
    description: "Tampilkan produk Anda secara profesional tanpa ribet.",
    features: ["Daftar produk dengan filter", "Detail produk lengkap", "Admin tambah/edit produk", "Tanpa payment gateway (WA)"]
  },
  
  // B. Wisata & Desa
  {
    id: 4,
    title: "Website Wisata Lokal",
    category: "B",
    icon: MapPin,
    description: "Promosikan destinasi wisata lokal ke jangkauan lebih luas.",
    features: ["Profil destinasi wisata", "Galeri foto & video cinematic", "Info harga tiket & jam buka", "Google Maps", "Booking via WhatsApp"]
  },
  {
    id: 5,
    title: "Website Desa Sederhana",
    category: "B",
    icon: Image,
    description: "Transparansi dan informasi desa dalam satu wadah digital.",
    features: ["Profil desa & sejarah", "Struktur organisasi", "Berita & Artikel terkini", "Galeri kegiatan warga", "Download dokumen publik"]
  },

  // C. Sistem Web Sederhana
  {
    id: 6,
    title: "Sistem Booking Sederhana",
    category: "C",
    icon: Database,
    description: "Atur jadwal reservasi dengan mudah dan terstruktur.",
    features: ["Pilih tanggal & jam", "Form reservasi custom", "Dashboard admin ringkas", "Notifikasi pesanan"]
  },
  {
    id: 7,
    title: "Sistem Pencatatan Stok",
    category: "C",
    icon: Database,
    description: "Kelola inventaris barang masuk dan keluar tanpa pusing.",
    features: ["Input data barang", "Edit & hapus stok", "Laporan stok sederhana", "Export data (opsional)"]
  },
  {
    id: 8,
    title: "Dashboard Manajemen Produk",
    category: "C",
    icon: Code,
    description: "Panel admin khusus untuk pengelolaan konten website Anda.",
    features: ["CRUD (Create, Read, Update, Delete)", "Upload gambar mudah", "Kelola kategori produk", "Manajemen user admin"]
  },

  // D. Personal Branding
  {
    id: 9,
    title: "Website Portfolio",
    category: "D",
    icon: User,
    description: "Tunjukkan karya terbaik Anda kepada klien potensial.",
    features: ["Profil diri singkat", "Showcase Skill & Tech Stack", "Galeri Project / Case Study", "Kontak langsung"]
  },
  {
    id: 10,
    title: "Website Personal Profesional",
    category: "D",
    icon: User,
    description: "Branding kuat untuk freelancer, konten kreator, dan ahli.",
    features: ["Desain eksklusif & elegan", "Blog / Artikel pemikiran", "Integrasi Sosmed", "Formulir tawaran kerjasama"]
  }
];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Layanan Kami
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            Pilih solusi digital yang paling sesuai dengan kebutuhan bisnis atau personal branding Anda.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div key={service.id} className="h-full">
              {/* Inline card structure since we have icons imported locally */}
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group h-full flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <service.icon size={120} className="text-indigo-600 transform rotate-12" />
                </div>
                
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <service.icon size={28} />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    service.category === 'A' ? 'bg-blue-50 text-blue-600' :
                    service.category === 'B' ? 'bg-green-50 text-green-600' :
                    service.category === 'C' ? 'bg-orange-50 text-orange-600' :
                    'bg-purple-50 text-purple-600'
                  }`}>
                    {categories.find(c => c.id === service.category)?.label}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-sm mb-6 flex-grow relative z-10 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="relative z-10 bg-slate-50/50 p-4 rounded-xl border border-slate-100/50">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Fitur Utama:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="mt-6 w-full py-3 px-4 rounded-xl border border-indigo-100 text-indigo-600 font-semibold text-sm hover:bg-indigo-600 hover:text-white transition-all relative z-10 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-indigo-100">
                  Pesan Sekarang
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
