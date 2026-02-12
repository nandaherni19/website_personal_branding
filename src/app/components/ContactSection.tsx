import React, { useState } from "react";
import { motion } from "motion/react";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with pre-filled message
    const text = `Halo, saya ${formData.name}. Saya tertarik dengan layanan ${formData.service}. ${formData.message}`;
    const url = `https://wa.me/6285729856253?text=${encodeURIComponent(text)}`; // Replace with actual number
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-white -z-10 opacity-50" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Info */}
          <div className="space-y-8">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900"
            >
              Siap Memulai Proyek Digital Anda?
            </motion.h2>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              Jangan ragu untuk berkonsultasi. Kami siap membantu UMKM dan Desa Wisata untuk go digital dengan website profesional.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-indigo-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">WhatsApp</h4>
                  <p className="text-lg font-medium text-slate-800">+62 857-2985-2653</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-indigo-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Email</h4>
                  <p className="text-lg font-medium text-slate-800">softlyglow.1999@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Metode Pembayaran</h4>
              <div className="flex gap-4">
                {/* Placeholder for bank icons */}
                <div className="bg-white px-4 py-2 rounded border border-slate-200 text-xs font-bold text-slate-500">BCA</div>
                <div className="bg-white px-4 py-2 rounded border border-slate-200 text-xs font-bold text-slate-500">MANDIRI</div>
                <div className="bg-white px-4 py-2 rounded border border-slate-200 text-xs font-bold text-slate-500">BRI</div>
                <div className="bg-white px-4 py-2 rounded border border-slate-200 text-xs font-bold text-slate-500">QRIS</div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-indigo-50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-bl-full opacity-50 -z-10" />
            
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Kirim Pesan</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Nama Anda"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nomor WhatsApp</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="0812..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Layanan yang Diminati</label>
                <select 
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none bg-white"
                  onChange={handleChange}
                >
                  <option value="">Pilih Layanan...</option>
                  <option value="Website Company Profile">Company Profile</option>
                  <option value="Landing Page Promosi">Landing Page</option>
                  <option value="Website Katalog Produk">Katalog Produk</option>
                  <option value="Website Wisata Lokal">Website Wisata</option>
                  <option value="Website Desa">Website Desa</option>
                  <option value="Sistem Custom">Sistem Custom</option>
                  <option value="Personal Branding">Personal Branding</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Pesan Tambahan (Opsional)</label>
                <textarea 
                  name="message"
                  rows={3}
                  placeholder="Ceritakan sedikit tentang kebutuhan Anda..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none resize-none"
                  onChange={handleChange}
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-green-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-200 flex items-center justify-center gap-2"
              >
                <MessageSquare size={24} />
                Hubungi via WhatsApp
              </button>
              
              <p className="text-xs text-center text-slate-400 mt-4">
                *Kami akan membalas pesan Anda secepatnya pada jam kerja.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
