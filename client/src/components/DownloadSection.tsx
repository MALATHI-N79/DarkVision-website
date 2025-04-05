import { motion } from "framer-motion";
import { 
  Laptop, 
  ToggleRight, 
  Sliders, 
  Shield, 
  Code, 
  Settings,
  Zap,
  Download,
  Github,
  ArrowRight
} from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="py-12 sm:py-20 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-40 sm:w-80 h-40 sm:h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 sm:w-80 h-40 sm:h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center reveal">
          <motion.div 
            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Zap className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span>Ready to Install</span>
          </motion.div>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-5xl font-bold font-sans text-foreground mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to Transform Your Browsing Experience?
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience a more comfortable web browsing experience with DarkVision's beautiful dark mode on any website you visit.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <motion.a 
              href="https://github.com/MALATHI-N79/DarkVision" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-foreground font-medium hover:bg-primary/90 transition-all duration-200 shadow-md sm:shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              <div className="text-left">
                <div className="text-base sm:text-lg">Download DarkVision</div>
              </div>
            </motion.a>
            
            <motion.a 
              href="https://github.com/MALATHI-N79/DarkVision" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-muted text-foreground font-medium hover:bg-muted/80 transition-all duration-200 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              <div className="text-left">
                <div className="text-base sm:text-lg">View Source Code</div>
              </div>
            </motion.a>
          </div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 sm:gap-6 text-muted-foreground text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center">
              <Shield className="text-secondary mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span>Privacy Focused</span>
            </div>
            <div className="flex items-center">
              <Code className="text-secondary mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center">
              <Settings className="text-secondary mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span>Customizable</span>
            </div>
          </motion.div>
        </div>
        
        {/* Mobile view - Vertical Steps */}
        <div className="mt-12 sm:mt-16 md:hidden reveal">
          <div className="space-y-4">
            {[
              { icon: <Download />, title: "Step 1", description: "Download DarkVision zip file from our GitHub repository." },
              { icon: <ToggleRight />, title: "Step 2", description: "Open Chrome and enable Developer Mode in the Extensions page." },
              { icon: <Laptop />, title: "Step 3", description: "Click Load Unpacked and select the folder containing manifest.json." },
              { icon: <Sliders />, title: "Step 4", description: "Pin the extension to your Chrome toolbar to easily toggle dark mode." }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-xl overflow-hidden shadow-md border border-border flex items-center p-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <div className="text-secondary w-5 h-5">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-muted-foreground z-10">
                    <ArrowRight className="rotate-90 w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Desktop view - 4 column grid */}
        <div className="mt-16 sm:mt-20 hidden md:grid grid-cols-4 gap-4 lg:gap-8 reveal">
          <motion.div 
            className="bg-background rounded-xl overflow-hidden shadow-lg border border-border flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-5 lg:p-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Download className="text-secondary w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">Step 1</h3>
              <p className="text-sm lg:text-base text-muted-foreground">
                Download DarkVision zip file from our GitHub repository.
              </p>
            </div>
            <div className="mt-auto p-3 lg:p-4 bg-muted">
              <div className="flex items-center text-muted-foreground text-xs lg:text-sm">
                <i className="fas fa-clock text-secondary mr-2"></i>
                <span>Just one click</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-background rounded-xl overflow-hidden shadow-lg border border-border flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-5 lg:p-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <ToggleRight className="text-secondary w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">Step 2</h3>
              <p className="text-sm lg:text-base text-muted-foreground">
                Open Chrome and enable Developer Mode in the Extensions page.
              </p>
            </div>
            <div className="mt-auto p-3 lg:p-4 bg-muted">
              <div className="flex items-center text-muted-foreground text-xs lg:text-sm">
                <i className="fas fa-check-circle text-secondary mr-2"></i>
                <span>chrome://extensions/</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-background rounded-xl overflow-hidden shadow-lg border border-border flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="p-5 lg:p-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Laptop className="text-secondary w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">Step 3</h3>
              <p className="text-sm lg:text-base text-muted-foreground">
                Click Load Unpacked and select the folder containing manifest.json.
              </p>
            </div>
            <div className="mt-auto p-3 lg:p-4 bg-muted">
              <div className="flex items-center text-muted-foreground text-xs lg:text-sm">
                <i className="fas fa-folder-open text-secondary mr-2"></i>
                <span>Select extension folder</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-background rounded-xl overflow-hidden shadow-lg border border-border flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-5 lg:p-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Sliders className="text-secondary w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">Step 4</h3>
              <p className="text-sm lg:text-base text-muted-foreground">
                Pin the extension to your Chrome toolbar to easily toggle dark mode.
              </p>
            </div>
            <div className="mt-auto p-3 lg:p-4 bg-muted">
              <div className="flex items-center text-muted-foreground text-xs lg:text-sm">
                <i className="fas fa-paint-brush text-secondary mr-2"></i>
                <span>Ready to use!</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
