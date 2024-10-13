// components/Services.jsx

import { userData } from '../data/userData'; // Adjust the path if necessary

export default function Services() {
  return (
    <div>
      <h1 class=" bg-blue-800 w-fit text-center mb-20 mt-3 px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">My Services</h1>
      <div className="flex flex-wrap justify-center gap-6 mx-auto items-center">
        {userData.services.map((item, index) => (
          <div
            key={index}
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 150} // Adjust delay based on index
            className="aos-init aos-animate"
          >
            <div className="flex flex-col items-center shadow-lg p-5 rounded-lg bg-white dark:bg-[#2e2e2e41] transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
              <img
                alt={item.title}
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                src={item.imgSrc} // Use imgSrc from userData
                className="transition-transform duration-300 transform hover:scale-125"
              />
              <h1 className="mt-2 text-lg font-bold text-gray-800 dark:text-gray-200">{item.title}</h1>
              <p className="mt-1 w-[210px] max-h-[44px] text-sm text-gray-600 dark:text-gray-300 text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
