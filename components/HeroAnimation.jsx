// components/HeroAnimation.jsx
'use client'

import { useEffect, useRef } from "react";
import lottie from "lottie-web"; // Import lottie-web

const HeroAnimation = () => {
  const animationContainer = useRef(null); // Create a ref for the animation container

  useEffect(() => {
    // Initialize Lottie animation
    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current, // Reference to the container
      path: '/animations/heroAnimation.json', // Path to the animation JSON file
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });

    // Cleanup animation instance on component unmount
    return () => {
      animationInstance.destroy(); // Destroy the animation instance
    };
  }, []);

  return (
    <div ref={animationContainer} className="w-[450px] custom-show"> {/* Adjust size as needed */}
      {/* Lottie animation will be rendered here */}
    </div>
  );
};

export default HeroAnimation;
