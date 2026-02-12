import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const benefits = [
    "Desain Responsif",
    "Fokus Konversi",
    "Optimasi Kecepatan",
    "Support via WhatsApp"
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white -z-10" />
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase inline-block mb-4">
              Mitra Digital UMKM & Wisata
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Bangun Branding <span className="text-indigo-600">Profesional</span> Untuk Bisnis Lokal Anda
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            Solusi pembuatan website untuk UMKM, Desa Wisata, dan Personal Branding.
            Tingkatkan kredibilitas dan jangkauan pasar Anda sekarang.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Konsultasi Gratis
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#portfolio"
              className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all hover:border-indigo-200 flex items-center justify-center"
            >
              Lihat Portfolio
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4" />
          <img
            src="https://images.unsplash.com/photo-1684061692678-68b081bbe4ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjB3b3Jrc3BhY2UlMjBjbGVhbiUyMG1pbmltYWxpc3RpY3xlbnwxfHx8fDE3NzA4NzkwODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Workspace"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover aspect-[4/3] relative z-10 border border-slate-200/50"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
