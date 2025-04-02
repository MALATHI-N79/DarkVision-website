import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DarkModeExperienceSection from "@/components/DarkModeExperienceSection";
import FaqSection from "@/components/FaqSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  // Implement scroll reveal animations
  useEffect(() => {
    const revealElements = () => {
      const elements = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealElements);
    window.addEventListener('load', revealElements);
    
    // Initial check on mount
    revealElements();
    
    return () => {
      window.removeEventListener('scroll', revealElements);
      window.removeEventListener('load', revealElements);
    };
  }, []);

  return (
    <div className="bg-background text-foreground font-sans overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DarkModeExperienceSection />
      <FaqSection />
      <DownloadSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
