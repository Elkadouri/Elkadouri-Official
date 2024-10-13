'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { userData } from '../data/userData';

export default function Reviews() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <h1 class=" bg-blue-800 w-fit text-center mb-[30px] mt-3 px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">Client Reviews</h1>
      <div className="w-full py-10 relative">
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer z-10 text-gray-600 dark:text-gray-300">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M330.7 109.3c-7.8-7.8-20.5-7.8-28.3 0L164.7 247.7c-7.8 7.8-7.8 20.5 0 28.3l137.7 137.7c7.8 7.8 20.5 7.8 28.3 0s7.8-20.5 0-28.3L201.3 256l129.3-129.3c7.8-7.8 7.8-20.5 0-28.3z"></path>
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer z-10 text-gray-600 dark:text-gray-300">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M181.3 402.7c7.8 7.8 20.5 7.8 28.3 0L347.3 273.3c7.8-7.8 7.8-20.5 0-28.3L209.7 107.3c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3L310.7 256 181.3 385.3c-7.8 7.8-7.8 20.5 0 28.3z"></path>
          </svg>
        </div>
      
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {userData.reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-full">
                <div className="rounded-md overflow-hidden w-[300px] bg-gray-200 dark:bg-gray-800">
                  <div className="p-1">
                    <img
                      alt="reviewer"
                      loading="lazy"
                      width="50"
                      height="50"
                      src="/images/reviews/q.webp"
                      className="rounded-full"
                      style={{ color: 'transparent' }}
                    />
                    <p className="text-black dark:text-white text-opacity-70 text-center min-h-[72px]">
                      {review.review}
                    </p>
                    <img
                      alt="reviewer"
                      loading="lazy"
                      width="50"
                      height="50"
                      src="/images/reviews/q.webp"
                      className="ml-auto rounded-full"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                  <div className="px-6 py-1 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold">
                    <span>{review.rating}/5</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 576 512"
                      className="text-yellow-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                    </svg>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-900">
                    <div className="p-3 flex items-center space-x-6">
                      <div>
                        <img
                          alt={review.name}
                          loading="lazy"
                          width="40"
                          height="40"
                          className="rounded-full"
                          src={review.imgSrc}
                          style={{ color: 'transparent' }}
                        />
                      </div>
                      <div>
                        <h1 className="text-lg font-bold text-black dark:text-white">{review.name}</h1>
                        <p className="text-black dark:text-white text-opacity-60">{review.jobTitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      
        {/* Custom Pagination */}
        <div className="swiper-pagination-custom mt-4 flex justify-center space-x-2">
          {/* Pagination dots will be generated by Swiper */}
        </div>
      </div>
    </div>
  );
}
