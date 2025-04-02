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
    icon: <WandSparkles className="text-primary text-2xl" />,
    title: "Instant Dark Mode",
    description: "Transform any website with a single click. DarkVision automatically adapts colors for a perfect dark experience."
  },
  {
    icon: <Eye className="text-primary text-2xl" />,
    title: "Eye Strain Relief",
    description: "Reduce eye fatigue during late-night browsing sessions with softer contrasts and eliminated bright whites."
  },
  {
    icon: <Sliders className="text-primary text-2xl" />,
    title: "Custom Settings",
    description: "Fine-tune brightness, contrast, and color temperature for your perfect dark mode experience."
  },
  {
    icon: <Zap className="text-primary text-2xl" />,
    title: "Battery Saver",
    description: "Dark interfaces use less power on OLED screens, extending your device's battery life significantly."
  },
  {
    icon: <ListTodo className="text-primary text-2xl" />,
    title: "Site Whitelist",
    description: "Create exceptions for websites where you prefer the original design to remain unchanged."
  },
  {
    icon: <Clock className="text-primary text-2xl" />,
    title: "Auto Scheduler",
    description: "Set DarkVision to automatically activate at sunset or your preferred time for seamless transitions."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose DarkVision
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Experience the web in a whole new light (or dark).
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl reveal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
