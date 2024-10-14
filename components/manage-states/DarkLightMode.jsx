// components/manage-states/DarkLightMode.jsx

"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import light and dark mode icons

export default function DarkLightMode() {
  const [themeMode, setThemeMode] = useState("dark");

  // Check and set theme based on localStorage or user's system preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme-mode");
      if (savedTheme) {
        setThemeMode(savedTheme);
      } else {
        const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setThemeMode(userPrefersDark ? "dark" : "light");
      }
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setThemeMode((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme-mode", themeMode);
      document.documentElement.classList.add(themeMode);
      document.documentElement.classList.remove(themeMode === "dark" ? "light" : "dark");
    }
  }, [themeMode]);

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="p-2 rounded-md focus:outline-none transition-colors duration-300"
      aria-label="Toggle Dark Mode"
    >
      {themeMode === "dark" ? <FaSun /> : <FaMoon />}{" "}
      {/* Show sun icon for light mode and moon icon for dark mode */}
    </button>
  );
}
