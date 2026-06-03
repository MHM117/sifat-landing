import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Hadith from "@/components/landing/Hadith";
import HowItWorks from "@/components/landing/HowItWorks";
import StepsToValue from "@/components/landing/StepsToValue";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import FairPricing from "@/components/landing/FairPricing";
import FAQ from "@/components/landing/FAQ";
import SpecialThanks from "@/components/landing/SpecialThanks";
import Download from "@/components/landing/Download";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Hadith />
      <HowItWorks />
      <StepsToValue />
      <Features />
      <Pricing />
      <FairPricing />
      <FAQ />
      <SpecialThanks />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
