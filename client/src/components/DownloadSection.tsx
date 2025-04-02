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
  Github
} from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center reveal">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Zap className="mr-2 h-4 w-4" />
            <span>Ready to Install</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold font-sans text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to Transform Your Browsing Experience?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience a more comfortable web browsing experience with DarkVision's beautiful dark mode on any website you visit.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a 
              href="https://github.com/username/darkvision" // Replace with your actual GitHub repo link
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-foreground font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="text-lg">Download DarkVision</div>
              </div>
            </motion.a>
            
            <motion.a 
              href="https://github.com/username/darkvision" // Replace with your actual GitHub repo link
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-muted text-foreground font-medium hover:bg-muted/80 transition-all duration-200 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5 mr-3" />
              <div className="text-left">
                <div className="text-lg">View Source Code</div>
              </div>
            </motion.a>
          </div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center">
              <Shield className="text-secondary mr-2 h-5 w-5" />
              <span>Privacy Focused</span>
            </div>
            <div className="flex items-center">
              <Code className="text-secondary mr-2 h-5 w-5" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center">
              <Settings className="text-secondary mr-2 h-5 w-5" />
              <span>Customizable</span>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 reveal">
          <motion.div 
            className="bg-background rounded-xl overflow-hidden shadow-lg border border-border flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Download className="text-secondary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Step 1</h3>
              <p className="text-muted-foreground">
                Download DarkVision zip file from our GitHub repository.
              </p>
            </div>
            <div className="mt-auto p-4 bg-muted">
              <div className="flex items-center text-muted-foreground text-sm">
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
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <ToggleRight className="text-secondary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Step 2</h3>
              <p className="text-muted-foreground">
                Open Chrome and enable Developer Mode in the Extensions page.
              </p>
            </div>
            <div className="mt-auto p-4 bg-muted">
              <div className="flex items-center text-muted-foreground text-sm">
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
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Laptop className="text-secondary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Step 3</h3>
              <p className="text-muted-foreground">
                Click "Load Unpacked" and select the folder containing manifest.json.
              </p>
            </div>
            <div className="mt-auto p-4 bg-muted">
              <div className="flex items-center text-muted-foreground text-sm">
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
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Sliders className="text-secondary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Step 4</h3>
              <p className="text-muted-foreground">
                Pin the extension to your Chrome toolbar to easily toggle dark mode.
              </p>
            </div>
            <div className="mt-auto p-4 bg-muted">
              <div className="flex items-center text-muted-foreground text-sm">
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
