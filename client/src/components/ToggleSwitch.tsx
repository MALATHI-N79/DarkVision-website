import { useState } from "react";

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
      container: "w-12 h-6",
      slider: "before:h-4 before:w-4 before:left-1 before:bottom-1",
      sliderOn: "before:translate-x-6"
    },
    md: {
      container: "w-14 h-8",
      slider: "before:h-6 before:w-6 before:left-1 before:bottom-1",
      sliderOn: "before:translate-x-6"
    },
    lg: {
      container: "w-16 h-9",
      slider: "before:h-7 before:w-7 before:left-1 before:bottom-1",
      sliderOn: "before:translate-x-7"
    }
  };
  
  const { container, slider, sliderOn } = dimensions[size];
  
  return (
    <div className="flex items-center">
      {label && <span className="mr-3 text-foreground text-sm font-medium">{label}</span>}
      <label className="relative inline-block cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only" 
          checked={isOn} 
          onChange={handleToggle}
        />
        <div
          className={`${container} bg-muted rounded-full transition-colors duration-300 ease-in-out ${
            isOn ? "bg-primary" : ""
          }`}
        >
          <div
            className={`absolute ${slider} bg-white rounded-full transition-transform duration-300 ease-in-out ${
              isOn ? sliderOn : ""
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
}
