import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react"; // Removed Moon import
import { motion, AnimatePresence } from "framer-motion";
// Import your logo image - you'll need to create this file
import logoImage from "../assets/logo.png"; 

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-muted/90 backdrop-blur-md shadow-sm' : 'bg-muted/60 backdrop-blur-sm'} border-b border-muted`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} className="flex items-center cursor-pointer">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/20 flex items-center justify-center mr-2 glow-pulse">
                  <img 
                    src={logoImage} 
                    alt="DarkVision Logo" 
                    className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
                  />
                </div>
                <span className="text-lg sm:text-xl font-bold font-sans">DarkVision</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors duration-200 text-sm lg:text-base">Features</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors duration-200 text-sm lg:text-base">How It Works</a>
            <a href="#experience" className="text-foreground hover:text-primary transition-colors duration-200 text-sm lg:text-base">Experience Now</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors duration-200 text-sm lg:text-base">FAQ</a>
            <a href="#download" className="px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg text-sm lg:text-base">
              <i className="fab fa-chrome mr-2"></i>Add to Chrome
            </a>
          </div>
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMenu}
              className="text-foreground hover:text-primary p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 overflow-y-auto"
          >
            <div className="px-4 pt-6 pb-20 h-full flex flex-col">
              <div className="space-y-6 flex-1">
                <motion.a 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  href="#features" 
                  className="block px-3 py-3 rounded-lg text-lg font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-all" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </motion.a>
                <motion.a 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  href="#how-it-works" 
                  className="block px-3 py-3 rounded-lg text-lg font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-all" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </motion.a>
                <motion.a 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  href="#experience" 
                  className="block px-3 py-3 rounded-lg text-lg font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-all" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience Now
                </motion.a>
                <motion.a 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  href="#faq" 
                  className="block px-3 py-3 rounded-lg text-lg font-medium text-foreground hover:text-primary hover:bg-muted/50 transition-all" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </motion.a>
              </div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="mt-6"
              >
                <a 
                  href="#download" 
                  className="block w-full px-3 py-3 rounded-lg text-lg font-medium bg-primary text-white text-center hover:bg-primary/90 transition-all" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fab fa-chrome mr-2"></i>Add to Chrome
                </a>
                
                <div className="mt-6 text-center text-muted-foreground text-sm">
                  <p>The web looks better in the dark</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
