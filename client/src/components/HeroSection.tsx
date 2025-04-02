import { useState } from "react";
import { motion } from "framer-motion";
import ToggleSwitch from "./ToggleSwitch";
import WebsiteDemo from "./WebsiteDemo";

export default function HeroSection() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const handleDarkModeToggle = (isOn: boolean) => {
    setIsDarkMode(isOn);
  };

  return (
    <header className="pt-28 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-muted"></div>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 rounded-bl-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold font-sans text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Illuminate the Dark with
              <span className="text-primary"> DarkVision</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-4 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              See the web in a whole new light. Transform any website into a beautiful dark mode experience that's gentle on your eyes and your device's battery.
            </motion.p>
            <motion.p
              className="text-lg text-primary font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your eyes deserve a break. Let DarkVision be their guardian.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <a href="#download" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg flex items-center w-full sm:w-auto justify-center">
                <i className="fab fa-chrome mr-2"></i>Get DarkVision
              </a>
              <div className="bg-background/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <div className="text-muted-foreground text-sm flex items-center">
                  <i className="fas fa-eye-slash text-primary mr-2"></i>
                  <span className="text-foreground font-medium">Open Source</span> & Free Forever
                </div>
              </div>
            </div>
            
            <div className="flex items-center text-muted-foreground">
              <div className="flex items-center mr-6">
                <i className="fas fa-star text-yellow-400 mr-1"></i>
                <span className="font-medium">4.9/5</span>
              </div>
              <div className="flex items-center mr-6">
                <i className="fas fa-bolt text-secondary mr-1"></i>
                <span className="font-medium">Lightweight</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-shield-alt text-green-500 mr-1"></i>
                <span className="font-medium">Secure</span>
              </div>
            </div>
          </div>
          
          <div className="relative reveal">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl"></div>
            <WebsiteDemo 
              darkModeThumbnail="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              lightModeThumbnail="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              initialMode="dark"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,109,20.48,321.39,56.44Z" 
                fill="hsl(225, 8%, 12%)"></path>
        </svg>
      </div>
    </header>
  );
}
