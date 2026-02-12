import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ProcessSection from "./components/ProcessSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
