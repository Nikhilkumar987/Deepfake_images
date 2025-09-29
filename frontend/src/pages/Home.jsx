import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Navbar (glass + trustworthy feel) */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* feature section */}
      <Features/>

      {/* how it works */}
      <HowItWorks/>

      {/* Testimonials */}
      <Testimonials/>

      {/* FAQSection */}
      <FAQSection/>

      {/* CTASection */}
      {/* <CTASection/> */}

      {/* ContactSection */}
      {/* <ContactSection/> */}

      {/* Footer - adds credibility */}
      <footer className="bg-[#0d0d0d] border-t border-white/10 mt-20 py-8 text-center text-gray-400 text-sm">
        <p>🔒 Secure & Trusted AI Detection Platform</p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} Fake News & Deepfake AI. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
