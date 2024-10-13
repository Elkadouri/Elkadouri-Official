
// app/page.js

import Hero from "@/components/Hero";
import { userData } from "../data/userData"; 

export const metadata = {
  title: `${userData.name} | Official Portfolio`,
  description: `Welcome to the official portfolio of ${userData.name}, ${userData.professionDescription}. ${userData.shortDescription} Explore projects, skills, and contact information.`,
  keywords: userData.keywords,
};

export default function HomePage() {
  return (
    <div className=''>
      <Hero />
    </div>
  );
}

