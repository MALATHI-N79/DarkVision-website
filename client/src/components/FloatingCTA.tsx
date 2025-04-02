import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function FloatingCTA() {
  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.a 
        href="#download" 
        className="flex items-center justify-center px-4 py-3 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowDown className="mr-2 h-4 w-4" />
        <span>Get NightShift</span>
      </motion.a>
    </motion.div>
  );
}
