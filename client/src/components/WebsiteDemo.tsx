import { useState, useEffect } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WebsiteDemoProps {
  darkModeThumbnail: string;
  lightModeThumbnail: string;
  initialMode?: "dark" | "light";
}

export default function WebsiteDemo({ 
  darkModeThumbnail, 
  lightModeThumbnail, 
  initialMode = "dark" 
}: WebsiteDemoProps) {
  const [isDarkMode, setIsDarkMode] = useState(initialMode === "dark");
  
  const handleToggle = (isOn: boolean) => {
    setIsDarkMode(isOn);
  };
  
  return (
    <div className="relative bg-muted p-3 sm:p-4 rounded-xl border border-border shadow-xl">
      <div className="flex justify-between items-center mb-2 sm:mb-3 bg-[hsl(225,5%,16%)] rounded-lg p-1.5 sm:p-2">
        <div className="flex space-x-1.5 sm:space-x-2">
          <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-red-500 rounded-full"></div>
          <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-muted-foreground text-[10px] sm:text-xs">
          <i className="fas fa-lock mr-1"></i>
          example.com
        </div>
        <div></div>
      </div>
      
      <div className="relative overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          {isDarkMode ? (
            <motion.img 
              key="dark-mode"
              src={darkModeThumbnail} 
              alt="Website in dark mode" 
              className="w-full rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <motion.img 
              key="light-mode"
              src={lightModeThumbnail} 
              alt="Website in light mode" 
              className="w-full rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
        
        {/* Toggle switch container - responsive positioning and sizing */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center bg-background/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg border border-muted">
          <ToggleSwitch 
            initialState={isDarkMode} 
            onChange={handleToggle} 
            label="DarkVision"
            size="sm"
          />
        </div>
        
        {/* Dark mode overlay with animation */}
        <AnimatePresence>
          {isDarkMode && (
            <motion.div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center px-4 sm:px-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="mx-auto mb-3 text-primary w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Moon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-white text-lg sm:text-xl font-medium mb-1 sm:mb-2">Dark Mode Enabled</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-0">Perfect for night browsing</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
