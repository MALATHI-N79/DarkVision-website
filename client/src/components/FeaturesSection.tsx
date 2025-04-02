import { motion } from "framer-motion";
import { 
  WandSparkles, 
  Eye, 
  Sliders, 
  Zap, 
  ListTodo, 
  Clock 
} from "lucide-react";

const features = [
  {
    icon: <WandSparkles className="text-primary w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Instant Dark Mode",
    description: "Transform any website with a single click. DarkVision automatically adapts colors for a perfect dark experience."
  },
  {
    icon: <Eye className="text-primary w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Eye Strain Relief",
    description: "Reduce eye fatigue during late-night browsing sessions with softer contrasts and eliminated bright whites."
  },
  {
    icon: <Sliders className="text-primary w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Custom Settings",
    description: "Fine-tune brightness, contrast, and color temperature for your perfect dark mode experience."
  },
  {
    icon: <Zap className="text-primary w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Battery Saver",
    description: "Dark interfaces use less power on OLED screens, extending your device's battery life significantly."
  },
  {
    icon: <ListTodo className="text-primary w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Site Whitelist",
    description: "Create exceptions for websites where you prefer the original design to remain unchanged."
  },
  {
    icon: <Clock className="text-primary w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Auto Scheduler",
    description: "Set DarkVision to automatically activate at sunset or your preferred time for seamless transitions."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-12 sm:py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16 reveal">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans text-foreground mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose DarkVision
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Experience the web in a whole new light (or dark).
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-background p-4 sm:p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 shadow-md sm:shadow-lg hover:shadow-xl reveal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 sm:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile-friendly feature highlighting */}
        <div className="mt-10 sm:mt-16 text-center">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="#download" 
              className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-xl"
            >
              <WandSparkles className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              <span>Try DarkVision Today</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
