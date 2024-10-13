// components/manage-states/DarkLightMode.jsx

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from 'react-icons/fa'; // Import light and dark mode icons

export default function DarkLightMode() {


    const [themeMode, setThemeMode] = useState(localStorage.getItem('theme-mode') ? localStorage.getItem('theme-mode') : 'dark' );

     // Toggle dark mode
  const toggleDarkMode = () => {
    themeMode === 'dark' ? setThemeMode('light') : setThemeMode('dark');
};

  useEffect(()=> {
    localStorage.setItem('theme-mode' , themeMode);
    document.documentElement.className = themeMode;
  },[themeMode])

  return (
    <button
    type="button"
    onClick={toggleDarkMode}
    className="p-2 rounded-md focus:outline-none"
    aria-label="Toggle Dark Mode"
  >
    {themeMode === 'dark' ? <FaSun /> : <FaMoon /> } {/* Show sun icon for light mode and moon icon for dark mode */}
  </button>
  )
}
