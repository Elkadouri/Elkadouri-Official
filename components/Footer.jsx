// components/Footer.jsx

import { userData } from "@/data/userData";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='py-4 border-t border-gray-200 dark:border-gray-900'>
      <div className='max-w-6xl mx-auto px-4 text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()+' '} 
          {/* User Name with appropriate colors for light and dark modes */}
          <Link href='/' className='text-purple-400 dark:text-purple-400 font-bold'>
            <span className="text-purple-600 dark:text-purple-400">{userData.name}</span>
          </Link> 
          <span className="text-gray-600 dark:text-gray-300">. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
