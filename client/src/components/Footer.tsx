import { useState } from "react";
import { Github, Mail, Linkedin, MessageSquare, Send } from "lucide-react";
// Import the logo image - make sure to create this file in your assets folder
import logoImage from "../assets/logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  // Get contact information from environment variables
  const contactEmail = "malathi3925@gmail.com"; // Temporarily hardcoded for testing
  const githubUrl = "https://github.com/MALATHI-N79"; // Temporarily hardcoded for testing
  const linkedinUrl = "https://linkedin.com/in/username"; // Temporarily hardcoded for testing

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success state
    setSubmitted(true);
    
    // Open email client with the message in a new tab
    const subject = "DarkVision Feedback";
    const body = `Message from: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:malathi3925@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open in a new tab
    window.open(mailtoUrl, '_blank');
    
    // Log for debugging
    console.log("Feedback submitted:", { email, message });
    
    // Reset form after brief delay
    setTimeout(() => {
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                <img 
                  src={logoImage} 
                  alt="DarkVision Logo" 
                  className="h-7 w-7 object-contain"
                />
              </div>
              <span className="text-xl font-bold font-sans text-foreground">DarkVision</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform the web with beautiful dark mode. Easier on your eyes, better for your battery.
            </p>
            <div className="flex space-x-4">
              <a 
                href={`mailto:malathi3925@gmail.com?subject=${encodeURIComponent("DarkVision Contact")}&body=${encodeURIComponent("Hello,\n\nI'd like to get in touch regarding DarkVision.\n\nBest regards,")}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com/MALATHI-N79" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors duration-200">Features</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors duration-200">How It Works</a></li>
              <li><a href="#experience" className="text-muted-foreground hover:text-primary transition-colors duration-200">Experience Now</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors duration-200">FAQ</a></li>
              <li><a href="#download" className="text-muted-foreground hover:text-primary transition-colors duration-200">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-medium mb-4">Feedback</h4>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your message" 
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="inline-flex items-center px-4 py-2 bg-primary text-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Feedback
                </button>
              </form>
            ) : (
              <div className="bg-blue-500/20 text-blue-500 p-4 rounded-md flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 animate-pulse" />
                Redirecting to email client...
              </div>
            )}
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DarkVision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
