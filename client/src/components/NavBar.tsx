import { useState } from "react";
import { Link } from "wouter";
import { Moon } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-muted/80 backdrop-blur-md border-b border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-2 glow-pulse">
                <Moon className="text-primary text-xl" />
              </div>
              <span className="text-xl font-bold font-sans">NightShift</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors duration-200">Features</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors duration-200">How It Works</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors duration-200">Testimonials</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors duration-200">FAQ</a>
            <a href="#download" className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg">
              <i className="fab fa-chrome mr-2"></i>Add to Chrome
            </a>
          </div>
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMenu}
              className="text-foreground hover:text-primary"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-muted border-b border-muted`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
            Features
          </a>
          <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
            How It Works
          </a>
          <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
            Testimonials
          </a>
          <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
            FAQ
          </a>
          <a href="#download" className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white text-center mt-4" onClick={() => setIsMenuOpen(false)}>
            <i className="fab fa-chrome mr-2"></i>Add to Chrome
          </a>
        </div>
      </div>
    </nav>
  );
}
