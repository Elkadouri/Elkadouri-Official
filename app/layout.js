// app/layout.js

import Header from "@/components/Header";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import { userData } from "../data/userData"; 
import OnScroll from "@/components/manage-states/OnScroll";
import Loader from "@/components/Loader.jsx"; // تأكد من مسار المكون



export const metadata = {
  title: `${userData.name} | Official Portfolio`,
  description: `Welcome to the official portfolio of ${userData.name}, ${userData.professionDescription}. ${userData.shortDescription} Explore projects, skills, and contact information.`,
  keywords: userData.keywords,
  icons:{
    icon:'/icons/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      <body className="bg-white dark:bg-black text-black dark:text-white ">
        <div className="min-h-screen relative flex flex-col justify-between w-[90%] mx-auto border-l border-r border-gray-200 dark:border-gray-900">
          <Header />
          <main className='px-4 py-6'>
          <Loader>
          {children} {/* هنا يتم تمرير المحتوى */}
        </Loader>
          </main>
          <Footer />

          <OnScroll/>

        </div>
      </body>
    </html>
  );
}
