import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Will NightShift work on all websites?",
    answer: "Yes! NightShift is designed to work on virtually any website. Our algorithm intelligently adapts to different website structures and designs to provide a consistent dark mode experience across the web. In the rare case a website doesn't display correctly, you can easily toggle it off for that specific site."
  },
  {
    question: "Does NightShift affect website performance?",
    answer: "NightShift is engineered for minimal performance impact. It processes websites efficiently with almost no perceivable delay. The extension runs locally on your browser and doesn't relay any data to external servers, ensuring your browsing remains fast and private."
  },
  {
    question: "Is NightShift free to use?",
    answer: "Yes, NightShift is completely free! We believe everyone should have access to a more comfortable browsing experience. We may introduce a premium version with additional features in the future, but the core functionality will always remain free."
  },
  {
    question: "How does NightShift handle images and videos?",
    answer: "NightShift intelligently detects and preserves images, videos, and other media content. By default, we don't modify media to maintain its original appearance. However, you can enable optional dimming for images and videos in the extension settings if you prefer a more consistent dark experience."
  },
  {
    question: "Does NightShift collect my browsing data?",
    answer: "Absolutely not. NightShift operates entirely on your device and doesn't send any of your browsing data to our servers. We respect your privacy and have designed the extension to work without requiring access to your browsing history or personal information."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background relative">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 rounded-tr-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 reveal">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to know about NightShift.
          </motion.p>
        </div>
        
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-muted rounded-xl border border-border shadow-lg overflow-hidden reveal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button 
                className="w-full text-left px-6 py-4 flex justify-between items-center"
                onClick={() => toggleItem(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="font-medium text-lg text-foreground">{item.question}</h3>
                <ChevronDown className={`text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
