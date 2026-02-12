import React, { useState, useEffect } from "react";
import { Menu, X, Code, Smartphone, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Layanan", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Proses", href: "#process" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-indigo-600 text-white p-2 rounded-lg group-hover:bg-indigo-700 transition-colors">
            <Code size={24} />
          </div>
          <span className="text-xl font-bold text-slate-800">DevLokal</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-indigo-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Mulai Sekarang
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 font-medium py-2 hover:text-indigo-600 block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-indigo-600 text-center text-white px-5 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors block w-full"
                onClick={() => setIsOpen(false)}
              >
                Mulai Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
