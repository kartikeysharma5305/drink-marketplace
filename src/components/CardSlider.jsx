import React, { useRef } from "react";
import CanImage from "../assets/images/hero-section-can.avif";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

const CardSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="p-6">
      <div className="relative flex flex-col items-center">
        {/* Swiper Container */}
        <div className="relative w-full max-w-4xl">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            keyboard={{ enabled: true }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom", // Custom pagination element
              bulletClass:
                "swiper-pagination-bullet bg-blue-500 w-3 h-3 mx-1 rounded-full",
              bulletActiveClass: "swiper-pagination-bullet-active bg-[#23022E]",
            }}
            navigation={{
              prevEl: ".prev-slide",
              nextEl: ".next-slide",
            }}
            modules={[Keyboard, Pagination, Navigation]}
            className="h-[400px] w-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // Assign Swiper instance to ref
            }}
          >
            {Array.from({ length: 9 }, (_, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center text-center text-[#23022E]"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="flex h-[16rem] w-[16rem] flex-col items-center justify-center rounded-2xl bg-[#FFFFFF] hover:bg-red-600">
                    <img
                      className="h-auto w-[6rem] rounded-2xl border-2 border-[#23022E] object-contain"
                      src={CanImage}
                      alt=""
                    />
                  </div>

                  <h1 className="mt-4 font-[poppins] font-bold text-[#23022E]">
                    Kiwi Catnip Zing
                  </h1>

                  <div className="mt-2 space-x-2">
                    <span className="font-bold">$4.00</span>
                  </div>

                  <button className="mt-4 rounded-full bg-[#23022E] px-4 py-2 font-[Playwrite_HU] font-bold text-white">
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Arrow */}
          <button
            className="prev-slide absolute top-1/2 left-[-50px] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#23022E] text-white hover:bg-gray-300"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            className="next-slide absolute top-1/2 right-[-50px] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#23022E] text-white hover:bg-gray-300"
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Custom Pagination (Blue Bullets) */}
        <div className="swiper-pagination-custom mt-4 flex justify-center space-x-1"></div>
      </div>
    </div>
  );
};

export default CardSlider;
