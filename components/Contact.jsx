// components/Contact.jsx
"use client";

import { useForm, ValidationError } from "@formspree/react";
import { userData } from "../data/userData";

import Lottie from "lottie-react"; // Or use the correct import for your version
import doneAnimation from '../public/animations/doneAnimation.json';

export default function Contact() {
  const [state, handleSubmit] = useForm("manwkwyb");

  return (
    <div>
      <h1 className=" bg-blue-800 w-fit text-center mb-20 mt-3 px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">
        Contact Me
      </h1>
      <div className="flex flex-col xl:flex-row w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
        {/* Left Section */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          className="aos-init aos-animate"
        >
          <div className="bg-white dark:dark:bg-[#2e2e2e41] rounded-lg p-4 sm:p-10">
            <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
              Let's work together!
            </h1>

            <form onSubmit={handleSubmit} className="mt-8 w-full">
              {/* Email*/}
              <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
                <input
                  autoComplete="off"
                  required
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="flex-1 bg-gray-100 dark:bg-[#2e2e2e41] text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 px-6 py-3 rounded-md border-[1.5px] border-gray-300 dark:border-gray-700 outline-none w-full"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  className="w-full mt-5 bg-gray-100 dark:bg-[#2e2e2e41] text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-gray-400 px-4 py-3.5 rounded-md border-[1.5px] border-gray-300 dark:border-gray-700 outline-none resize-none"
                  rows="7"
                  required
                  name="message"
                  placeholder="Message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-4 block mx-auto py-[3px] bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 transition-all duration-150 rounded-full"
                >
                  {state.submitting ? "Submitting..." : "Submit"}
                </button>
                {state.succeeded ? (
                  <p className="text-center mt-2 flex gap-1 items-center">
                    <Lottie
                      loop={false}
                      style={{ height: 40 }}
                      animationData={doneAnimation}
                    />
                    Your Message has been sent successfully 👌
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className="xl:mx-auto aos-init aos-animate"
        >
          <div>
            {/* Phone Section */}
            <div className="flex items-center space-x-8">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 md:w-7 md:h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl text-gray-900 dark:text-white font-bold">
                  Phone
                </h1>
                <h1 className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                  {userData.contactDetails.phone}
                </h1>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center space-x-8 mt-8 mb-8">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 md:w-7 md:h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl text-gray-900 dark:text-white font-bold">
                  Email Address
                </h1>
                <h1 className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                  {userData.contactDetails.email}
                </h1>
              </div>
            </div>

            {/* Address Section */}
            <div className="flex items-center space-x-8">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="w-4 h-4 md:w-7 md:h-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 117.66v346.32c0 11.32 11.43 19.06 22.04 14.86L288 362.57l265.96 116.27C564.57 482.95 576 475.2 576 463.98V117.66c0-11.3-11.42-19.06-22.04-14.86L288 219.43 22.04 102.8C11.43 98.6 0 106.35 0 117.66z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl text-gray-900 dark:text-white font-bold">
                  Address
                </h1>
                <h1 className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                  {userData.contactDetails.officeAddress}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
