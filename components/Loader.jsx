// components/Loader.js
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Lottie from "lottie-react"; // Import Lottie
import loadingAnimation from '../public/animations/loading.json'; // Update this path to your animation JSON file

export default function Loader({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show loader on path change
    setLoading(true);

    // Simulate page load (adjust this duration as needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Loading duration (1 second)

    // Cleanup timer on path change
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="loader">
          <Lottie animationData={loadingAnimation} loop={true} /> {/* Use Lottie animation */}
          <style jsx>{`
            .loader {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 9999;
              backdrop-filter: blur(5px); /* Blurring effect */
            }
          `}</style>
        </div>
      )}
      {children} {/* Render children when not loading */}
    </>
  );
}
