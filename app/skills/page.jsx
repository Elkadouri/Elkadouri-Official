// app/skills/page.jsx

import Skills from "@/components/Skills";
import { userData } from "../../data/userData";

// Check if userData is defined and has skills
const skills = userData.skills || []; // Fallback to an empty array if undefined

export const metadata = {
  title: `${userData.name} | Skills`,
  description: `${userData.name} is a ${userData.profession} with expertise in ${skills.length > 0 ? skills.map(skill => skill.name).join(', ') : 'various skills'}. Discover how these skills empower impactful digital solutions.`,
  keywords: `${userData.aboutKeywords}, ${userData.keywords}, skills, ${skills.length > 0 ? skills.map(skill => skill.name).join(', ') : 'no skills available'}`, // Handle undefined skills
};

export default function SkillsPage() {
  return (
    <div>
      <Skills />
    </div>
  );
}
