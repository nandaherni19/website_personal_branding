import React from "react";
import { motion } from "motion/react";
import { MessageCircle, FileText, Code, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Konsultasi",
    description: "Diskusikan kebutuhan website Anda via WhatsApp. Gratis konsultasi awal untuk menentukan fitur dan harga."
  },
  {
    icon: FileText,
    title: "2. Kesepakatan",
    description: "Kami kirimkan penawaran resmi. Setelah setuju, lakukan pembayaran DP sebagai tanda jadi pengerjaan."
  },
  {
    icon: Code,
    title: "3. Pengerjaan",
    description: "Kami mulai membangun website Anda. Anda akan mendapatkan update progress secara berkala."
  },
  {
    icon: CheckCircle,
    title: "4. Serah Terima",
    description: "Review hasil akhir, revisi jika diperlukan, pelunasan, dan website Anda siap online!"
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Proses Pengerjaan
          </h2>
          <p className="text-slate-600 text-lg">
            Langkah mudah memiliki website impian Anda tanpa ribet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 -z-10" />
              )}
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
