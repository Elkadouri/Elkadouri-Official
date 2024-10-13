// components/manage-states/OnScroll.jsx

"use client";

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function OnScroll() {
  const [up, setUp] = useState("hide");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setUp("show");
      } else {
        setUp("hide");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className={`fixed right-2.5 bottom-12 w-8 h-8 rounded-full bg-blue-500 text-white dark:bg-gray-800 dark:text-gray-300 flex items-center justify-center cursor-pointer transition-transform duration-300 transform hover:translate-y-[-10px] ${
        up === "show" ? "animate-fadeIn" : "animate-fadeOut"
      }`}
    >
      <FaChevronUp />
    </button>
  );
}
