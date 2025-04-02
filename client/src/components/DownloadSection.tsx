import { motion } from "framer-motion";
import { 
  Laptop, 
  ToggleRight, 
  Sliders, 
  Shield, 
  GitBranch, 
  Headset,
  Zap
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
            <span>Quick & Easy Installation</span>
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
            Join over 100,000 users enjoying a more comfortable web browsing experience with NightShift's beautiful dark mode.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a 
              href="#"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-foreground font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fab fa-chrome text-2xl mr-3"></i>
              <div className="text-left">
                <div className="text-sm opacity-90">Available on</div>
                <div className="text-lg">Chrome Web Store</div>
              </div>
            </motion.a>
            
            <motion.a 
              href="#"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-muted text-foreground font-medium hover:bg-muted/80 transition-all duration-200 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fab fa-firefox text-2xl mr-3"></i>
              <div className="text-left">
                <div className="text-sm opacity-90">Coming Soon to</div>
                <div className="text-lg">Firefox Add-ons</div>
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
              <GitBranch className="text-secondary mr-2 h-5 w-5" />
              <span>Regular Updates</span>
            </div>
            <div className="flex items-center">
              <Headset className="text-secondary mr-2 h-5 w-5" />
              <span>Full Support</span>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          <motion.div 
            className="bg-background rounded-xl overflow-hidden shadow-lg border border-border flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <Laptop className="text-secondary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Step 1</h3>
              <p className="text-muted-foreground">
                Install NightShift from the Chrome Web Store with just one click.
              </p>
            </div>
            <div className="mt-auto p-4 bg-muted">
              <div className="flex items-center text-muted-foreground text-sm">
                <i className="fas fa-clock text-secondary mr-2"></i>
                <span>Takes less than 10 seconds</span>
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
                Click the NightShift icon in your browser to enable dark mode on any website.
              </p>
            </div>
            <div className="mt-auto p-4 bg-muted">
              <div className="flex items-center text-muted-foreground text-sm">
                <i className="fas fa-check-circle text-secondary mr-2"></i>
                <span>Instant activation</span>
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
                <Sliders className="text-secondary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Step 3</h3>
              <p className="text-muted-foreground">
                Customize your dark mode settings to suit your preferences (optional).
              </p>
            </div>
            <div className="mt-auto p-4 bg-muted">
              <div className="flex items-center text-muted-foreground text-sm">
                <i className="fas fa-paint-brush text-secondary mr-2"></i>
                <span>Fully customizable</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
