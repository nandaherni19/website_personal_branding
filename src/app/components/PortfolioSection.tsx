import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Desa Wisata Asri",
    category: "Wisata & Desa",
    image: "https://images.unsplash.com/photo-1596395819057-d37ff06f9662?auto=format&fit=crop&q=80&w=800",
    description: "Website promosi wisata desa dengan fitur galeri dan booking via WhatsApp."
  },
  {
    id: 2,
    title: "Kopi Senja UMKM",
    category: "UMKM",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
    description: "Landing page kedai kopi lokal dengan menu digital dan integrasi Maps."
  },
  {
    id: 3,
    title: "Toko Baju Muslimah",
    category: "Katalog Produk",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    description: "Katalog online produk fashion dengan fitur filter dan detail produk."
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Portfolio Terbaru
          </motion.h2>
          <p className="text-slate-600 text-lg">
            Beberapa hasil karya kami membantu UMKM dan bisnis lokal berkembang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg border border-slate-100"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.description}
                </p>
                <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <button className="text-white hover:text-indigo-400 transition-colors flex items-center gap-1 text-sm font-medium">
                    <ExternalLink size={16} /> Lihat Live
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-slate-100 text-slate-700 px-8 py-3 rounded-full font-medium hover:bg-slate-200 transition-colors">
            Lihat Semua Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
