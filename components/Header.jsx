// components/Header.jsx

'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Import usePathname from Next.js
import { HiMenu } from 'react-icons/hi';
import DarkLightMode from "./manage-states/DarkLightMode";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // On pathname change, close mobile menu
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const getLinkClasses = (path) => {
    return pathname === path 
      ? 'font-bold text-blue-600 dark:text-blue-400' // Active link styles
      : 'hover:opacity-60 transition duration-500'; // Default link styles
  };

  return (
    <header className="shadow-md dark:shadow-lg dark:shadow-gray-900">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          {/* Applying different colors for light and dark modes */}
          <Link href="/" className="text-gray-800 dark:text-gray-200 text-4xl">
            <span className="text-purple-600 dark:text-purple-400">M</span>
            <span className="text-blue-600 dark:text-blue-400">K</span>
          </Link>
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className={getLinkClasses("/")}>Home</Link>
          <Link href="/about" className={getLinkClasses("/about")}>About</Link>
          <Link href="/services" className={getLinkClasses("/services")}>Services</Link>
          <Link href="/skills" className={getLinkClasses("/skills")}>Skills</Link>
          <Link href="/projects" className={getLinkClasses("/projects")}>Projects</Link>
          <Link href="/reviews" className={getLinkClasses("/reviews")}>Reviews</Link>
          <Link href="/contact" className={getLinkClasses("/contact")}>Contact</Link>
        </nav>
        
        {/* Icons and Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <DarkLightMode />
          <button
            type="button"
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation"
          >
            <HiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden space-y-2 px-4 py-2 absolute z-10 bg-gray-100 dark:bg-[#2e2e2ee5] w-full flex flex-col">
          <Link href="/" className={getLinkClasses("/")}>Home</Link>
          <Link href="/about" className={getLinkClasses("/about")}>About</Link>
          <Link href="/services" className={getLinkClasses("/services")}>Services</Link>
          <Link href="/skills" className={getLinkClasses("/skills")}>Skills</Link>
          <Link href="/projects" className={getLinkClasses("/projects")}>Projects</Link>
          <Link href="/reviews" className={getLinkClasses("/reviews")}>Reviews</Link>
          <Link href="/contact" className={getLinkClasses("/contact")}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
