import { useState, useEffect } from "react";
import ToggleSwitch from "./ToggleSwitch";

interface WebsiteDemoProps {
  darkModeThumbnail: string;
  lightModeThumbnail: string;
  initialMode?: "dark" | "light";
}

export default function WebsiteDemo({ 
  darkModeThumbnail, 
  lightModeThumbnail, 
  initialMode = "dark" 
}: WebsiteDemoProps) {
  const [isDarkMode, setIsDarkMode] = useState(initialMode === "dark");
  
  const handleToggle = (isOn: boolean) => {
    setIsDarkMode(isOn);
  };
  
  return (
    <div className="relative bg-muted p-4 rounded-xl border border-border shadow-xl">
      <div className="flex justify-between items-center mb-3 bg-[hsl(225,5%,16%)] rounded-lg p-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-muted-foreground text-xs">
          <i className="fas fa-lock mr-1"></i>
          example.com
        </div>
        <div></div>
      </div>
      
      <div className="relative">
        {isDarkMode ? (
          <img 
            src={darkModeThumbnail} 
            alt="Website in dark mode" 
            className="w-full rounded-lg shadow-lg"
          />
        ) : (
          <img 
            src={lightModeThumbnail} 
            alt="Website in light mode" 
            className="w-full rounded-lg shadow-lg"
          />
        )}
        
        <div className="absolute top-4 right-4 flex items-center bg-background/90 backdrop-blur-sm p-2 rounded-lg border border-muted">
          <ToggleSwitch 
            initialState={isDarkMode} 
            onChange={handleToggle} 
            label="NightShift"
          />
        </div>
        
        {isDarkMode && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center transition-opacity duration-500">
            <div className="text-center px-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <h3 className="text-white text-xl font-medium mb-2">Dark Mode Enabled</h3>
              <p className="text-muted-foreground mb-0">Perfect for night browsing</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
