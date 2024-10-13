// app/reviews/page.jsx

import Reviews from "@/components/Reviews"
import { userData } from "../../data/userData";


// Check if userData is defined and has reviews
const reviews = userData.reviews || []; // Fallback to an empty array if undefined

export const metadata = {
  title: `${userData.name} | Reviews`,
  description: `Read reviews and testimonials about ${userData.name}, a ${userData.profession}. Discover how ${userData.name} has helped clients and colleagues succeed.`,
  keywords: `${userData.aboutKeywords}, ${userData.keywords}, reviews, testimonials, ${reviews.length > 0 ? reviews.map(review => review.review).join(', ') : 'no reviews available'}`, // Handle undefined reviews
};

export default function ReviewsPage() {
  return (
    <div>
        <Reviews/>
    </div>
  )
}
