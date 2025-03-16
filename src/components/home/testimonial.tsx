"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
  const uniqueId = "servic123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      140: {
        slidesPerView: 1,
      },

      924: {
        slidesPerView: 2,
      },
    },
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation],
  };

  return (
    <section className=" lg:px-28 md:p-20 sm:p-12 p-7 bg-back text-center relative slider1 flex flex-col items-center">
      <div className="w-full text-center flex flex-col items-center !gap-y-4 mb-8 md:mb-16">
        {testimonialData?.title1 && (
          <h4 className="text-green3 bg-[#CCF1F8] px-7 mb-3 font-bold text-sm rounded-lg py-3 w-max">
            {testimonialData?.title1}
          </h4>
        )}
        {testimonialData?.title2 && (
          <h2 className="text-zinc-800 text-3xl md:text-5xl font-bold">
            {testimonialData?.title2}
          </h2>
        )}
        {testimonialData?.para && (
          <p className="text-zinc-600 text-sm md:text-base max-w-4xl">
            {testimonialData?.para}
          </p>
        )}
      </div>

      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-6xl mx-auto px-5 !mt-0 ${uniqueId}`}
      >
        {" "}
        {testimonialData?.testimonials?.map((cards: any) => (
          <SwiperSlide
            key={cards.id}
            className="mb-12 w-full text-left p-4 sm:p-10 rounded-2xl bg-white shadow-xl"
          >
            <div className=" w-full  h-full overflow-hidden  group  ">
              <h3 className="text-xl font-bold mb-3 text-green1">
                {cards?.heading}
              </h3>
              <p className="text-zinc-900 text-lg leading-[1.4] pb-3 border-b border-zinc-500">
                {cards.text}
              </p>

              <div className="flex gap-2 w-max items-center mt-3">
                <div className="relative overflow-hidden h-12 w-12 border-2 border-color2 rounded-full">
                  <Image
                    src={cards.img}
                    alt=""
                    className=" transition-all duration-500 w-full h-full rounded-full object-cover group-hover:scale-110  "
                  />
                </div>
                <div>
                  <h3 className="text-lg  font-bold  text-zinc-800 group-hover:text-color1">
                    {cards.title}
                  </h3>
                  <p className="text-zinc-600 text-sm">Happy Client</p>
                </div>
              </div>

              <p className="py-1 px-3 float-right -mt-10  w-max text-xs font-bold text-black bg-yellow-400  rounded-md shadow-lg">
                {" "}
                ★ 5.0
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`${uniqueId}-next max-sm:!hidden swiper-button-next !top-[63%] after:text-green2 lg:!right-20 after:font-bold`}
      ></div>

      <div
        className={`${uniqueId}-prev max-sm:!hidden swiper-button-prev !top-[63%] after:text-green2 lg:!left-20 after:font-bold `}
      ></div>
    </section>
  );
}
