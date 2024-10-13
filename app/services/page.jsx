// app/services/page.jsx

import Services from "@/components/Services"
import { userData } from "../../data/userData";

export const metadata = {
    title: `${userData.name} | Services`,
    description: `Explore the services offered by ${userData.name}, ${userData.professionDescription}. Find out how I can help you with web development projects.`,
    keywords: `${userData.keywords}, services, ${userData.services.map(service => service.title).join(', ')}`, 
  };

export default function ServicesPage() {
  return (
    <div>
        <Services/>
    </div>
  )
}
