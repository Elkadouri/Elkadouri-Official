// app/contact/page.jsx

import Contact from "@/components/Contact"
import { userData } from "../../data/userData";


export const metadata = {
    title: `${userData.name} | Contact`,
    description: `Get in touch with ${userData.name}, a ${userData.profession}. Whether you have questions or want to collaborate, I’d love to hear from you!`,
    keywords: `${userData.keywords}, contact, reach out, get in touch`, 
  };
  

export default function ContactPage() {
  return (
    <div>
        <Contact/>
    </div>
  )
}
