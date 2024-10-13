// app/not-found/page.jsx

import Link from "next/link";
import { userData } from "../data/userData";

export const metadata = {
  title: `${userData.name} | Page Not Found`,
  description: `Sorry, the page you are looking for does not exist. Explore other sections of ${userData.name}'s portfolio to find what you need.`,
  keywords: `${userData.keywords}, 404, page not found, missing page, ${userData.name}`,
};

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800 py-3 dark:bg-[#2e2e2e41] dark:text-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-white">404</h1>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Page Not Found</h2>
        <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <p className="mb-6">
          You can return to the{" "}
          <Link href="/" className="text-blue-500 hover:underline dark:text-blue-400">
            Home Page
          </Link>
        </p>
      </div>
    </div>
  );
}
