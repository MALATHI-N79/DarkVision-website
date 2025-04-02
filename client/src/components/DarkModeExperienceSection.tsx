import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Lightbulb, Moon, Sun } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

export default function DarkModeExperienceSection() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleToggle = (isOn: boolean) => {
    setIsAnimating(true);
    setIsDarkMode(isOn);
    
    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <section id="experience" className="py-16 sm:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16 reveal">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans text-foreground mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience the Difference
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            See how DarkVision transforms your browsing experience with just one click.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 reveal">
          {/* Laptop with website - in reverse order on mobile */}
          <div className="order-2 lg:order-1 lg:col-span-7 relative z-10">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Laptop frame */}
              <div className="w-full bg-gray-800 rounded-t-xl pt-4 sm:pt-6 pb-1 px-2">
                <div className="mx-auto w-12 sm:w-16 h-1.5 sm:h-2 bg-gray-700 rounded-full mb-2" />
                <div className="bg-gray-900 rounded-md overflow-hidden">
                  {/* Website dark mode */}
                  <AnimatePresence>
                    {isDarkMode && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-48 sm:h-64 md:h-80"
                      >
                        <div className="p-2 sm:p-3 bg-gray-800 flex items-center border-b border-gray-700">
                          <div className="flex space-x-1 sm:space-x-1.5 mr-2 sm:mr-4">
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500" />
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-500" />
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-500" />
                          </div>
                          <div className="flex-1 h-4 sm:h-5 bg-gray-700 rounded mx-auto max-w-xs" />
                        </div>
                        <div className="grid grid-cols-12 gap-2 sm:gap-3 p-3 sm:p-4 h-full bg-gray-900">
                          <div className="col-span-3">
                            <div className="h-6 sm:h-8 bg-gray-800 rounded-md mb-2 sm:mb-3" />
                            <div className="h-3 sm:h-4 bg-gray-800 rounded-md mb-1.5 sm:mb-2" />
                            <div className="h-3 sm:h-4 bg-gray-800 rounded-md mb-1.5 sm:mb-2" />
                            <div className="h-3 sm:h-4 bg-gray-800 rounded-md mb-1.5 sm:mb-2" />
                            <div className="h-3 sm:h-4 bg-gray-800 rounded-md mb-1.5 sm:mb-2" />
                            <div className="h-6 sm:h-8 bg-primary/30 rounded-md mb-2 sm:mb-3" />
                          </div>
                          <div className="col-span-9">
                            <div className="h-6 sm:h-8 bg-gray-800 rounded-md mb-2 sm:mb-3 w-2/3" />
                            <div className="h-16 sm:h-24 bg-gray-800 rounded-md mb-2 sm:mb-3" />
                            <div className="grid grid-cols-2 gap-2 sm:gap-3">
                              <div className="h-12 sm:h-16 bg-gray-800 rounded-md" />
                              <div className="h-12 sm:h-16 bg-gray-800 rounded-md" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Website light mode */}
                  <AnimatePresence>
                    {!isDarkMode && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 h-48 sm:h-64 md:h-80"
                      >
                        <div className="p-2 sm:p-3 bg-gray-100 flex items-center border-b border-gray-200">
                          <div className="flex space-x-1 sm:space-x-1.5 mr-2 sm:mr-4">
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500" />
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-500" />
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-500" />
                          </div>
                          <div className="flex-1 h-4 sm:h-5 bg-gray-200 rounded mx-auto max-w-xs" />
                        </div>
                        <div className="grid grid-cols-12 gap-2 sm:gap-3 p-3 sm:p-4 h-full bg-white">
                          <div className="col-span-3">
                            <div className="h-6 sm:h-8 bg-gray-100 rounded-md mb-2 sm:mb-3" />
                            <div className="h-3 sm:h-4 bg-gray-100 rounded-md mb-1.5 sm:mb-2" />
                            <div className="h-3 sm:h-4 bg-gray-100 rounded-md mb-1.5 sm:mb-2" />
                            <div className="h-3 sm:h-4 bg-gray-100 rounded-md mb-1.5 sm:mb-2" />
                            <div className="h-3 sm:h-4 bg-gray-100 rounded-md mb-1.5 sm:mb-2" />
                            <div className="h-6 sm:h-8 bg-primary/30 rounded-md mb-2 sm:mb-3" />
                          </div>
                          <div className="col-span-9">
                            <div className="h-6 sm:h-8 bg-gray-100 rounded-md mb-2 sm:mb-3 w-2/3" />
                            <div className="h-16 sm:h-24 bg-gray-100 rounded-md mb-2 sm:mb-3" />
                            <div className="grid grid-cols-2 gap-2 sm:gap-3">
                              <div className="h-12 sm:h-16 bg-gray-100 rounded-md" />
                              <div className="h-12 sm:h-16 bg-gray-100 rounded-md" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="h-3 sm:h-4 bg-gray-700 rounded-b-xl" />
              <div className="h-1.5 sm:h-2 w-2/3 mx-auto bg-gray-600 rounded-b-lg" />
            
              {/* Mode watermarks */}
              <AnimatePresence>
                {isDarkMode && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-primary/20 backdrop-blur-sm rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-primary flex items-center"
                  >
                    <Moon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                    DarkVision Enabled
                  </motion.div>
                )}
              </AnimatePresence>
              
              <AnimatePresence>
                {!isDarkMode && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-yellow-500/20 backdrop-blur-sm rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-yellow-500 flex items-center"
                  >
                    <Sun className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                    Light Mode Active
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          
          {/* Controls section - appears first on mobile */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <motion.div 
              className="bg-background p-4 sm:p-6 rounded-xl border border-border shadow-lg flex flex-col justify-center h-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-6">Try It Yourself</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-8">
                Toggle the switch below to see how DarkVision instantly transforms websites from harsh light 
                mode to a comfortable dark experience. Your eyes will thank you!
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-12">
                <div className="flex items-center">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 ${isDarkMode ? 'bg-primary/20' : 'bg-yellow-500/20'}`}>
                    {isDarkMode ? (
                      <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    ) : (
                      <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">
                      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {isDarkMode ? 'Easier on the eyes' : 'Original website look'}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center sm:justify-start">
                  <ToggleSwitch 
                    initialState={isDarkMode} 
                    onChange={handleToggle}
                    size="md"
                  />
                </div>
              </div>
              
              {/* Light bulb animation */}
              <div className="flex items-center justify-center">
                <div className="w-28 h-28 sm:w-36 sm:h-36 relative">
                  <motion.div 
                    className="absolute top-0 w-full flex justify-center"
                    animate={{ y: [0, 2, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <div className="w-1.5 sm:w-2 h-8 sm:h-10 bg-gray-400 rounded-t-md"></div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-8 sm:top-10 w-full flex justify-center z-20"
                    animate={isAnimating ? { rotate: [0, 10, -10, 5, -5, 0] } : {}}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="w-12 sm:w-16 h-20 sm:h-24 relative">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gray-300 absolute top-0 left-0 overflow-hidden flex items-center justify-center">
                        <AnimatePresence>
                          {!isDarkMode && (
                            <motion.div 
                              className="w-full h-full absolute inset-0 bg-yellow-400/90"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              <motion.div 
                                className="absolute inset-0 bg-yellow-300/70"
                                animate={{ 
                                  scale: [1, 1.1, 1], 
                                  opacity: [0.7, 0.9, 0.7] 
                                }}
                                transition={{ 
                                  repeat: Infinity, 
                                  duration: 2, 
                                  ease: "easeInOut" 
                                }}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        <AnimatePresence>
                          {isDarkMode && (
                            <motion.div
                              className="w-9 sm:w-12 h-9 sm:h-12 rounded-full bg-gray-400/30"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                            />
                          )}
                        </AnimatePresence>
                      </div>
                      
                      <div className="w-8 sm:w-10 h-6 sm:h-8 bg-gray-400 rounded-b-lg absolute bottom-0 left-2 sm:left-3"></div>
                    </div>
                  </motion.div>
                  
                  {/* Light rays */}
                  <AnimatePresence>
                    {!isDarkMode && (
                      <motion.div 
                        className="absolute top-8 sm:top-10 w-full h-full flex justify-center z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg width="120" height="120" viewBox="0 0 100 100" className="sm:scale-125">
                          <motion.g
                            animate={{ 
                              opacity: [0.4, 0.9, 0.4],
                              scale: [0.95, 1.05, 0.95] 
                            }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 3, 
                              ease: "easeInOut" 
                            }}
                          >
                            <path d="M50 0 L50 20 M50 80 L50 100 M100 50 L80 50 M20 50 L0 50 M85 15 L70 30 M30 70 L15 85 M85 85 L70 70 M30 30 L15 15" 
                                  stroke="rgba(250, 204, 21, 0.4)" 
                                  strokeWidth="2" 
                                  strokeLinecap="round" />
                          </motion.g>
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              <p className="text-center text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8">
                {isDarkMode ? 'Energy saving: Activated' : 'Energy saving: Deactivated'}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}