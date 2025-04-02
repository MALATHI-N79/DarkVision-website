import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    content: "This is a game changer for me. I work late nights and NightShift has dramatically reduced my eye strain. I can't imagine browsing without it now!",
    name: "Sarah J.",
    role: "Web Developer",
    rating: 5
  },
  {
    content: "The battery savings alone are worth it. Using NightShift on my laptop has extended my work sessions by nearly an hour. Plus, it looks fantastic on every site.",
    name: "Mike T.",
    role: "Student",
    rating: 5
  },
  {
    content: "As someone with photosensitivity issues, NightShift has made browsing the web much more comfortable. The customizable settings are perfect for my needs.",
    name: "Elena R.",
    role: "UX Designer",
    rating: 4.5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex text-yellow-400 mr-2">
      {Array(fullStars).fill(0).map((_, i) => (
        <Star key={i} className="fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="fill-current" />}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Users Say
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join thousands of satisfied night owls.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-background p-6 rounded-xl border border-border shadow-lg reveal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <StarRating rating={testimonial.rating} />
                <div className="text-muted-foreground text-sm">{testimonial.rating.toFixed(1)}</div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary font-medium">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-foreground font-medium">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center reveal">
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-background rounded-full border border-border shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex text-yellow-400 mr-3">
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
              <Star className="fill-current" />
            </div>
            <span className="text-foreground font-medium">4.9 average rating from 10,000+ reviews</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
