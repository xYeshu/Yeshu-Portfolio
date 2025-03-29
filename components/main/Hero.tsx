"use client"
import React, { useEffect, useState } from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  const [isLaptop, setIsLaptop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 768); // Adjust breakpoint if needed
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      {isLaptop && (
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      )}

      <HeroContent />
    </div>
  );
};

export default Hero;
