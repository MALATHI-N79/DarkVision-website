import { useState } from "react";
import { motion } from "framer-motion";
import ToggleSwitch from "./ToggleSwitch";
import { Code, Image, Gauge, Puzzle } from "lucide-react";

export default function HowItWorksSection() {
  const [showDarkMode, setShowDarkMode] = useState(true);
  
  const handleToggleMode = (isOn: boolean) => {
    setShowDarkMode(isOn);
  };

  return (
    <section id="how-it-works" className="py-20 bg-background relative">
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-secondary/5 rounded-bl-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 reveal">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How NightShift Works
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Simple to use, powerful results in seconds.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1 reveal">
            <motion.div 
              className="bg-muted p-8 rounded-xl border border-border shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <Puzzle className="text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">Intelligent Color Inversion</h3>
                </div>
                <ToggleSwitch initialState={true} />
              </div>
              
              <div className="space-y-4 font-mono text-sm text-muted-foreground mb-6">
                <div className="bg-background p-3 rounded-lg">
                  <span className="text-purple-400">const</span> <span className="text-secondary">website</span> <span className="text-purple-400">=</span> <span className="text-yellow-400">document</span>.<span className="text-green-400">querySelector</span>(<span className="text-orange-400">'body'</span>);
                </div>
                <div className="bg-background p-3 rounded-lg">
                  <span className="text-purple-400">const</span> <span className="text-secondary">darkify</span> <span className="text-purple-400">=</span> (<span className="text-secondary">element</span>) <span className="text-purple-400">=&gt;</span> {`{`}
                  <div>&nbsp;&nbsp;<span className="text-green-400">analyzeDominantColors</span>(element);</div>
                  <div>&nbsp;&nbsp;<span className="text-green-400">invertBrightColors</span>(element);</div>
                  <div>&nbsp;&nbsp;<span className="text-green-400">preserveImportantElements</span>();</div>
                  <div>{`};`}</div>
                </div>
                <div className="bg-background p-3 rounded-lg">
                  <span className="text-green-400">darkify</span>(website); <span className="text-gray-500">// Transform complete!</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-muted-foreground text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Active on this site</span>
                </div>
                <div>
                  <i className="fas fa-clock mr-1"></i>
                  <span>Process time: 0.32s</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 reveal">
            <motion.h3 
              className="text-2xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Smart Color Analysis
            </motion.h3>
            <motion.p 
              className="text-muted-foreground text-lg mb-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              NightShift doesn't just invert colors blindly. Our algorithm intelligently analyzes each website's color palette to create the perfect dark mode experience.
            </motion.p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-4">
                  <Code className="text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Smart CSS Transformation</h4>
                  <p className="text-muted-foreground">
                    We dynamically analyze and modify CSS properties to create a balanced dark aesthetic while preserving the site's identity.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-4">
                  <Image className="text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Image Processing</h4>
                  <p className="text-muted-foreground">
                    NightShift intelligently detects and preserves images, logos, and media while darkening the surrounding content.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-4">
                  <Gauge className="text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Minimal Performance Impact</h4>
                  <p className="text-muted-foreground">
                    Optimized code ensures websites load just as quickly with NightShift enabled.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="relative reveal">
          <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-secondary/50 rounded-xl blur"></div>
          <div className="relative bg-muted rounded-xl overflow-hidden border border-border">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center relative">
                <div className="absolute top-4 right-4 md:hidden">
                  <ToggleSwitch
                    initialState={showDarkMode}
                    onChange={handleToggleMode}
                  />
                </div>
                
                <motion.h3 
                  className="text-2xl font-bold text-foreground mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  See the Difference
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Toggle between original and dark mode to see how NightShift transforms any website instantly.
                </motion.p>
                
                <div className="hidden md:block">
                  <ToggleSwitch
                    initialState={showDarkMode}
                    onChange={handleToggleMode}
                    label={showDarkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 relative">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showDarkMode ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Website in light mode" 
                    className="w-full h-full object-cover object-left-top"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 1 }}
                  animate={{ opacity: showDarkMode ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Website in dark mode" 
                    className="w-full h-full object-cover object-left-top brightness-75 contrast-125 saturate-75"
                  />
                  <div className="absolute inset-0 bg-background/70"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
