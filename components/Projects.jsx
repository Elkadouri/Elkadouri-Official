'use client'

import { useEffect, useState } from 'react';
import { userData } from '../data/userData';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { FaLink, FaGithub } from 'react-icons/fa'; // Import the icons

export default function Projects() {
  const [currentActive, setCurrentActive] = useState('all');
  const [myShowedProjects, setMyShowedProjects] = useState(userData.projects);

  useEffect(() => {
    if (currentActive === 'all') {
      setMyShowedProjects(userData.projects);
    } else {
      setMyShowedProjects(userData.projects.filter((project) => {
        return project.category === currentActive;
      }));
    }
  }, [currentActive]);

  return (
    <div>
      <h1 class=" bg-blue-800 w-fit text-center mb-20 mt-3 px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">My Projects</h1>
      <div className='flex flex-col md:flex-row gap-10'>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="left-section flex flex-row justify-center md:flex-col md:justify-start flex-wrap gap-2"
        >
          <button
            onClick={() => setCurrentActive('all')}
            className={`w-44 p-3 text-center text-lg transition-opacity duration-300 rounded ${currentActive === 'all' ? 'dark:bg-[#2e2e2ec7] bg-gray-600 text-white opacity-100 font-bold' : 'bg-gray-700 text-gray-300 opacity-50'} dark:bg-[#2e2e2e41] dark:text-gray-500 dark:opacity-100 duration-300 hover:bg-gray-900 dark:hover:bg-[#2e2e2e]`}
          >
            All Projects
          </button>
      
          <button
            onClick={() => setCurrentActive('html-css')}
            className={`w-44 p-3 text-center text-lg transition-opacity duration-300 rounded ${currentActive === 'html-css' ? 'dark:bg-[#2e2e2ec7] bg-gray-600 text-white opacity-100 font-bold' : 'bg-gray-700 text-gray-300 opacity-50'} dark:bg-[#2e2e2e41] dark:text-gray-500 dark:opacity-100 hover:bg-gray-900 dark:hover:bg-[#2e2e2e]`}
          >
            HTML & CSS
          </button>
      
          <button
            onClick={() => setCurrentActive('js')}
            className={`w-44 p-3 text-center text-lg transition-opacity duration-300 rounded ${currentActive === 'js' ? 'dark:bg-[#2e2e2ec7] bg-gray-600 text-white opacity-100 font-bold' : 'bg-gray-700 text-gray-300 opacity-50'} dark:bg-[#2e2e2e41] dark:text-gray-500 dark:opacity-100 hover:bg-gray-900 dark:hover:bg-[#2e2e2e]`}
          >
            JavaScript
          </button>
      
          <button
            onClick={() => setCurrentActive('react')}
            className={`w-44 p-3 text-center text-lg transition-opacity duration-300 rounded ${currentActive === 'react' ? 'dark:bg-[#2e2e2ec7] bg-gray-600 text-white opacity-100 font-bold' : 'bg-gray-700 text-gray-300 opacity-50'} dark:bg-[#2e2e2e41] dark:text-gray-500 dark:opacity-100 hover:bg-gray-900 dark:hover:bg-[#2e2e2e]`}
          >
            React js
          </button>
      
          <button
            onClick={() => setCurrentActive('next')}
            className={`w-44 p-3 text-center text-lg transition-opacity duration-300 rounded ${currentActive === 'next' ? 'dark:bg-[#2e2e2ec7] bg-gray-600 text-white opacity-100 font-bold' : 'bg-gray-700 text-gray-300 opacity-50'} dark:bg-[#2e2e2e41] dark:text-gray-500 dark:opacity-100 hover:bg-gray-900 dark:hover:bg-[#2e2e2e]`}
          >
            Next js
          </button>
        </motion.section>
      
        <section id='projects' className="right-section flex flex-wrap justify-center gap-4 flex-grow">
          {myShowedProjects.map((item) => (
            <motion.article
              layout
              initial={{ transform: 'scale(0)' }}
              animate={{ transform: 'scale(1)' }}
              exit={{ transform: 'scale(0)' }}
              transition={{ duration: 1.5 }}
              key={item.imgPath}
              className='card border overflow-hidden w-fit rounded-lg shadow-lg  duration-300 bg-white border-gray-200 transform hover:scale-110 transition-all hover:border-gray-400 dark:hover:border-gray-500 dark:bg-[#2e2e2e41] dark:border-gray-700'
            >
              <img width={266} height={150} src={item.imgPath} alt="" className="rounded-t-lg transition hover:scale-110 duration-300" />
              <div className="box p-4">
                <h1 className='title text-xl text-gray-900 dark:text-white capitalize'>{item.projectTitle}</h1>
                <p className="subtitle text-gray-600 dark:text-gray-300 text-sm my-2 min-h-16 w-[234px]">
                  {item.description ?? "lorem lorem eiusmod tempor incididunt ut labore lorem lorem eiusmod tempor incididunt et dolore magna aliqua. Ut enim ad minim veniam."}
                </p>
                <div className="icons flex justify-between">
                  <div className='flex gap-3'>
                    <a className='icon-link text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400' href={item.link} target="_blank" rel="noopener noreferrer">
                      <FaLink />
                    </a>
                    <a className='icon-github text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400' href={item.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </div>
  );
}
