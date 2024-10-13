// components/Skills.jsx
import { userData } from '../data/userData';

export default function Skills() {
  return (
    <div>
      <h1 class=" bg-blue-800 w-fit text-center mb-20 mt-3 px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">My Skills</h1>
      <div className="w-[80%] mx-auto flex flex-wrap justify-center gap-4 items-center">
        {userData.skills.map((skill, index) => (
          <div
            key={index}
            data-aos="flip-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 150}
            className="aos-init aos-animate"
          >
            <div className="p-4 w-[190px] transition-all duration-300 transform hover:scale-105 hover:rotate-1 cursor-pointer text-center rounded-lg bg-gray-200 dark:bg-[#2e2e2e41] hover:bg-gray-400 dark:hover:bg-[#444343ab] hover:text-white dark:hover:text-gray-200">
              <img
                alt={skill.name}
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                className="object-cover mx-auto bg-gray-300 dark:bg-gray-700 rounded-lg p-1"
                src={skill.icon}
              />
              <h1 className="text-[18px] mt-4 text-gray-800 dark:text-white font-[600] transition-colors duration-300">
                {skill.name}
              </h1>
              <div className="bg-gray-300 dark:bg-gray-700 mt-4 rounded-lg p-2 text-gray-800 dark:text-white opacity-80 transition-colors duration-300">
                {/* Displaying skill percentage */}
                {skill.percentage || 'N/A'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
