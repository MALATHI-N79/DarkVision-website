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
    <section id="experience" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience the Difference
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            See how NightShift transforms your browsing experience with just one click.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 reveal">
          {/* Laptop with website */}
          <motion.div 
            className="lg:col-span-7 relative z-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Laptop frame */}
              <div className="w-full bg-gray-800 rounded-t-xl pt-6 pb-1 px-2">
                <div className="mx-auto w-16 h-2 bg-gray-700 rounded-full mb-2" />
                <div className="bg-gray-900 rounded-md overflow-hidden">
                  {/* Website dark mode */}
                  <AnimatePresence>
                    {isDarkMode && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-64 md:h-80"
                      >
                        <div className="p-3 bg-gray-800 flex items-center border-b border-gray-700">
                          <div className="flex space-x-1.5 mr-4">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                          </div>
                          <div className="flex-1 h-5 bg-gray-700 rounded mx-auto max-w-xs" />
                        </div>
                        <div className="grid grid-cols-12 gap-3 p-4 h-full bg-gray-900">
                          <div className="col-span-3">
                            <div className="h-8 bg-gray-800 rounded-md mb-3" />
                            <div className="h-4 bg-gray-800 rounded-md mb-2" />
                            <div className="h-4 bg-gray-800 rounded-md mb-2" />
                            <div className="h-4 bg-gray-800 rounded-md mb-2" />
                            <div className="h-4 bg-gray-800 rounded-md mb-2" />
                            <div className="h-8 bg-primary/30 rounded-md mb-3" />
                          </div>
                          <div className="col-span-9">
                            <div className="h-8 bg-gray-800 rounded-md mb-3 w-2/3" />
                            <div className="h-24 bg-gray-800 rounded-md mb-3" />
                            <div className="grid grid-cols-2 gap-3">
                              <div className="h-16 bg-gray-800 rounded-md" />
                              <div className="h-16 bg-gray-800 rounded-md" />
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
                        className="absolute inset-0 h-64 md:h-80"
                      >
                        <div className="p-3 bg-gray-100 flex items-center border-b border-gray-200">
                          <div className="flex space-x-1.5 mr-4">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                          </div>
                          <div className="flex-1 h-5 bg-gray-200 rounded mx-auto max-w-xs" />
                        </div>
                        <div className="grid grid-cols-12 gap-3 p-4 h-full bg-white">
                          <div className="col-span-3">
                            <div className="h-8 bg-gray-100 rounded-md mb-3" />
                            <div className="h-4 bg-gray-100 rounded-md mb-2" />
                            <div className="h-4 bg-gray-100 rounded-md mb-2" />
                            <div className="h-4 bg-gray-100 rounded-md mb-2" />
                            <div className="h-4 bg-gray-100 rounded-md mb-2" />
                            <div className="h-8 bg-primary/30 rounded-md mb-3" />
                          </div>
                          <div className="col-span-9">
                            <div className="h-8 bg-gray-100 rounded-md mb-3 w-2/3" />
                            <div className="h-24 bg-gray-100 rounded-md mb-3" />
                            <div className="grid grid-cols-2 gap-3">
                              <div className="h-16 bg-gray-100 rounded-md" />
                              <div className="h-16 bg-gray-100 rounded-md" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="h-4 bg-gray-700 rounded-b-xl" />
              <div className="h-2 w-2/3 mx-auto bg-gray-600 rounded-b-lg" />
            </div>
            
            {/* Mode watermarks */}
            <AnimatePresence>
              {isDarkMode && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-medium text-primary flex items-center"
                >
                  <Moon className="w-3 h-3 mr-1" />
                  NightShift Enabled
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
                  className="absolute top-4 right-4 bg-yellow-500/20 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-medium text-yellow-500 flex items-center"
                >
                  <Sun className="w-3 h-3 mr-1" />
                  Light Mode Active
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Controls section */}
          <motion.div 
            className="lg:col-span-5 bg-background p-6 rounded-xl border border-border shadow-lg flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Try It Yourself</h3>
            <p className="text-muted-foreground mb-8">
              Toggle the switch below to see how NightShift instantly transforms websites from harsh light 
              mode to a comfortable dark experience. Your eyes will thank you!
            </p>
            
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${isDarkMode ? 'bg-primary/20' : 'bg-yellow-500/20'}`}>
                  {isDarkMode ? (
                    <Moon className="text-primary" />
                  ) : (
                    <Sun className="text-yellow-500" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">
                    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isDarkMode ? 'Easier on the eyes' : 'Original website look'}
                  </p>
                </div>
              </div>
              
              <ToggleSwitch 
                initialState={isDarkMode} 
                onChange={handleToggle}
                size="lg"
              />
            </div>
            
            {/* Light bulb animation */}
            <div className="flex items-center justify-center">
              <div className="w-36 h-36 relative">
                <motion.div 
                  className="absolute top-0 w-full flex justify-center"
                  animate={{ y: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <div className="w-2 h-10 bg-gray-400 rounded-t-md"></div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-10 w-full flex justify-center z-20"
                  animate={isAnimating ? { rotate: [0, 10, -10, 5, -5, 0] } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <div className="w-16 h-24 relative">
                    <div className="w-16 h-16 rounded-full bg-gray-300 absolute top-0 left-0 overflow-hidden flex items-center justify-center">
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
                            className="w-12 h-12 rounded-full bg-gray-400/30"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <div className="w-10 h-8 bg-gray-400 rounded-b-lg absolute bottom-0 left-3"></div>
                  </div>
                </motion.div>
                
                {/* Light rays */}
                <AnimatePresence>
                  {!isDarkMode && (
                    <motion.div 
                      className="absolute top-10 w-full h-full flex justify-center z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="150" height="150" viewBox="0 0 100 100">
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
            
            <p className="text-center text-sm text-muted-foreground mt-8">
              {isDarkMode ? 'Energy saving: Activated' : 'Energy saving: Deactivated'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}