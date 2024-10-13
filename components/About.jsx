// components/About.jsx

import { userData } from '../data/userData';

export default function About() {
  return (
   <div>
     <h1 class=" bg-blue-800 w-fit text-center mb-20 mt-3 px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">About Me</h1>
     <div
       data-aos="zoom-in"
       data-aos-anchor-placement="top-center"
       data-aos-delay="150"
       className="flex flex-wrap justify-center gap-10 items-center lg:mx-auto aos-init aos-animate"
     >
       {userData.statistics.map((stat, index) => (
         <div 
           key={index} 
           className="w-[190px] flex flex-col items-center p-3 rounded-lg shadow-lg dark:shadow-[0_4px_4px_rgba(255,255,255,0.1)] bg-white dark:bg-[#2e2e2e41] transition-transform duration-300 hover:scale-105"
         >
           <img
             alt={stat.title}
             loading="lazy"
             width="80"
             height="80"
             decoding="async"
             className="mx-auto"
             src={stat.image}
           />
           <p className="mt-3 font-bold text-xl text-gray-900 dark:text-white text-center">
             {stat.value}
           </p>
           <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-center">
             {stat.title}
           </p>
         </div>
       ))}
     </div>
   </div>
  );
}
