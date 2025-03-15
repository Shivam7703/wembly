"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,  Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface ProductSliderProps {
  uniqueId: string;
}

export default function ProductSlider({uniqueId} :ProductSliderProps) {
  
  const swiperOptions = {
    slidesPerView: 1,
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
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1124: {
        slidesPerView: 3,
      },
      1270: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
  };

  return (
    <section className="md:pt-20 pt-7 text-center relative slider1 flex flex-col items-center">
      <div className="w-full text-center flex flex-col items-center !gap-y-4 mb-6 md:mb-10">
        {testimonialData?.title2 && <h2 className='text-green1 text-3xl md:text-4xl font-bold'>Other Products</h2>}
      </div>
      
        <Swiper
          {...swiperOptions}
          className={`mySwiper w-full mx-auto p-5 !mt-0 ${uniqueId}`}
        >
          {testimonialData?.testimonials?.map((cards: any) => (
            <SwiperSlide
              key={cards.id}
              className="mb-2 w-full text-left p-2 px-4 rounded-xl "
            >
              <div className="w-full h-full overflow-hidden group">
                <Image
                  src={cards.img}
                  alt=""
                  className="transition-all duration-500 my-2 mx-auto max-w-48  w-[95%] h-full  rounded-xl object-cover group-hover:scale-105"
                />
                <h3 className="text-xl font-bold text-zinc-800 group-hover:text-color1">
                  Product name here
                </h3>
                <p className="text-zinc-400 text-left max-sm:text-xs">Lorem ipsum dolor sit amet consectetur</p>
                <p className="w-max text-base  text-black my-3">
              <span className="max-sm:hidden">Product rating: </span><span className="py-1 font-bold text-xs px-3 bg-yellow-400  rounded-md shadow-lg"> ★ 5.0 </span>
                </p>
                <Link href="#" className="flex items-center gap-x-2 group/link">
              <p className="text-sm text-green1 sm:font-extrabold">View Product</p> 
              <BsArrowUpRightCircleFill className="text-brown2 rounded-full text-xl group-hover/link:rotate-45 duration-300" />
            </Link>              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-3 justify-center my-2">
        
        <button className={`${uniqueId}-prev w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-brown2 hover:text-white text-brown2 rounded-full shadow-md transition-all duration-300 text-xl font-bold`}>
        <FaAngleLeft />

        </button>
        
        <button className={`${uniqueId}-next z-10 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-brown2 hover:text-white text-brown2 rounded-full shadow-md transition-all duration-300 text-xl font-bold`}>
        <FaAngleRight />
        </button>
        </div>
    </section>
  );
}