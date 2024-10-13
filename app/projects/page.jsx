// app/projects/page.jsx

import Projects from "@/components/Projects"
import { userData } from "../../data/userData";

// Check if userData is defined and has projects
const projects = userData.projects || []; // Fallback to an empty array if undefined

export const metadata = {
    title: `${userData.name} | Projects`,
    description: `Explore the projects created by ${userData.name}, a ${userData.profession}. Discover my work in ${userData.professionDescription}.`,
    keywords: `${userData.keywords}, projects, ${projects.length > 0 ? projects.map(project => project.projectTitle).join(', ') : 'no projects available'}`, // Handle undefined projects
  };

export default function ProjectsPage() {
  return (
    <div>
        <Projects/>
    </div>
  )
}
