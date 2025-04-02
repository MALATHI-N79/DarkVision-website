import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

interface ToggleSwitchProps {
  initialState?: boolean;
  onChange?: (isOn: boolean) => void;
  size?: "sm" | "md" | "lg";
  label?: string;
}

export default function ToggleSwitch({ 
  initialState = false, 
  onChange, 
  size = "md",
  label
}: ToggleSwitchProps) {
  const [isOn, setIsOn] = useState(initialState);
  
  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onChange) {
      onChange(newState);
    }
  };
  
  // Size variations
  const dimensions = {
    sm: {
      container: "w-16 h-8",
      iconSize: "h-3 w-3",
      glow: "w-6 h-6",
    },
    md: {
      container: "w-20 h-10",
      iconSize: "h-4 w-4",
      glow: "w-8 h-8",
    },
    lg: {
      container: "w-24 h-12",
      iconSize: "h-5 w-5",
      glow: "w-10 h-10",
    }
  };
  
  const { container, iconSize, glow } = dimensions[size];
  
  return (
    <div className="flex items-center">
      {label && <span className="mr-3 text-foreground text-sm font-medium">{label}</span>}
      <motion.button
        className={`${container} relative p-1 rounded-full cursor-pointer overflow-hidden ${isOn ? "bg-slate-800" : "bg-gradient-to-r from-blue-400 to-sky-300"}`}
        onClick={handleToggle}
        whileTap={{ scale: 0.95 }}
      >
        {/* Track background with stars (visible in dark mode) */}
        <div className="absolute inset-0 overflow-hidden">
          {isOn && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <div className="absolute top-1 left-1 h-1 w-1 bg-white rounded-full opacity-70"></div>
              <div className="absolute top-5 left-5 h-1 w-1 bg-white rounded-full opacity-40"></div>
              <div className="absolute top-2 left-10 h-1 w-1 bg-white rounded-full opacity-60"></div>
              <div className="absolute top-6 left-12 h-1 w-1 bg-white rounded-full opacity-30"></div>
            </motion.div>
          )}
        </div>
        
        {/* Sliding thumb */}
        <motion.div 
          className="absolute top-1 bottom-1 aspect-square rounded-full flex items-center justify-center z-10"
          initial={false}
          animate={{
            left: isOn ? `calc(100% - ${size === "lg" ? "2.75rem" : size === "md" ? "2.25rem" : "1.75rem"})` : "2px",
            background: isOn ? "radial-gradient(circle, #6c7ba1 0%, #394874 100%)" : "radial-gradient(circle, #ffdd85 0%, #f5bc51 100%)"
          }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30
          }}
        >
          {/* Icon inside the thumb */}
          {isOn ? (
            <Moon className={`${iconSize} text-slate-200`} />
          ) : (
            <Sun className={`${iconSize} text-amber-800`} />
          )}
          
          {/* Glowing effect */}
          <motion.div 
            className={`absolute ${glow} rounded-full blur-sm -z-10`}
            initial={false}
            animate={{
              opacity: isOn ? 0.5 : 0.7,
              backgroundColor: isOn ? "#394874" : "#ffdd85"
            }}
          />
        </motion.div>
      </motion.button>
    </div>
  );
}
