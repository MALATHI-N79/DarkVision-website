import { Moon, Twitter, Facebook, Instagram, Github, Headset, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                <Moon className="text-primary text-xl" />
              </div>
              <span className="text-xl font-bold font-sans text-foreground">NightShift</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform the web with beautiful dark mode. Easier on your eyes, better for your battery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-200">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-200">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors duration-200">How It Works</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors duration-200">Testimonials</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors duration-200">FAQ</a></li>
              <li><a href="#download" className="text-muted-foreground hover:text-primary transition-colors duration-200">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NightShift. All rights reserved.
          </p>
          <div className="flex items-center">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm mr-6 flex items-center">
              <Headset className="mr-2 h-4 w-4" />
              Support
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
