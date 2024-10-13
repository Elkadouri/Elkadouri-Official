// components/Hero.jsx
import { IoMdDownload } from "react-icons/io";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { userData } from "../data/userData";
import HeroAnimation from "./HeroAnimation"; // Import the HeroAnimation component

export default function Hero() {
  return (
    <div className="flex justify-between gap-2 items-center overflow-x-hidden overflow-y-hidden">
      {/* Left Section */}
      <div>
        {/* Image */}
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="w-fit rounded-[50%] p-[0.5px] border-[3.5px] border-gray-300 dark:border-blue-950 overflow-hidden mb-3"
        >
          <img
            alt={userData.name}
            loading="lazy"
            className="object-cover opacity-85 hover:opacity-100 hover:scale-[1.05] transition-all duration-200 rounded-[50%] w-[130px] h-[130px] max-w-full"
            src="/images/hero/hero.png"
          />
        </div>

        {/* Name */}
        <h1
          data-aos="fade-left"
          className="text-2xl md:text-3xl lg:text-4xl mb-1 text-gray-800 dark:text-gray-300 font-semibold"
        >
          I am {userData.name.split(" ")[0]}
        </h1>

        {/* Profession */}
        <h1
          data-aos="fade-right"
          data-aos-delay="100"
          className="w-full lg:w-auto text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-gray-900 dark:text-white"
        >
          {userData.profession}
        </h1>

        {/* Bio */}
        <p
          data-aos="fade-left"
          data-aos-delay="300"
          className="mt-3 text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-[243px]"
        >
          {userData.bio}
        </p>

        {/* Social Links */}
        <div className="mt-3 flex space-x-4">
          {userData.socialLinks.linkedin && (
            <a
              href={userData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          )}
          {userData.socialLinks.github && (
            <a
              href={userData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              <FaGithub size={20} />
            </a>
          )}
          {userData.socialLinks.twitter && (
            <a
              href={userData.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
          )}
          {userData.socialLinks.instagram && (
            <a
              href={userData.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          )}
        </div>

        {/* Button */}
        <a
          href="/pdf/Mostapha Elkadouri - CV.pdf" // Link to the CV file
          download={`${userData.name} cv`} // Suggest a filename when downloaded
          data-aos="zoom-in"
          data-aos-delay="400"
          className="w-fit px-2 text-white font-semibold text-lg transition-all duration-200 rounded-lg mt-5 bg-blue-700 hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-800 flex items-center space-x-2"
        >
          <span>Download CV</span>
          <IoMdDownload size={20} />
        </a>
      </div>

      {/* Right Section with HeroAnimation */}
      <HeroAnimation />
    </div>
  );
}
