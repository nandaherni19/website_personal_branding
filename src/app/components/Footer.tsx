import React from "react";
import { Code, Heart, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Code size={24} />
              </div>
              <span className="text-xl font-bold">DevLokal</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Partner digital terpercaya untuk UMKM, Desa Wisata, dan Profesional. Bangun kehadiran online Anda sekarang dengan harga terjangkau.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Layanan</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Website UMKM</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Landing Page</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Website Desa Wisata</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Sistem Kasir/Stok</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Portfolio Profesional</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li>Senin - Jumat: 09:00 - 17:00</li>
              <li>Sabtu: 09:00 - 14:00</li>
              <li className="pt-2">
                <span className="block text-slate-500 text-xs mb-1">Email</span>
                halo@devlokal.id
              </li>
              <li>
                <span className="block text-slate-500 text-xs mb-1">WhatsApp</span>
                +62 812-3456-7890
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} DevLokal Indonesia. All rights reserved.</p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            Dibuat dengan <Heart size={16} className="text-red-500 fill-current" /> untuk Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
