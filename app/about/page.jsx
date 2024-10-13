// app/about/page.jsx

import About from "@/components/About"
import { userData } from "../../data/userData";

export const metadata = {
  title: `${userData.name} | About Me`,
  description: `Learn more about ${userData.name}, ${userData.professionDescription}. Discover my skills, projects, and experience.`,
  keywords: `${userData.aboutKeywords}, ${userData.keywords}`, 
};

export default function AboutPage() {
  return (
    <div>
        <About/>
    </div>
  )
}
