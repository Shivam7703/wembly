"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { TiPlus } from 'react-icons/ti';

function Imageslide({data}:any) {

    const uniqueId = "servic123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
   
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
   
    modules: [Autoplay],
    breakpoints: {
      440: {
        slidesPerView: 2,
      },
      868: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <>
       <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-fit px-5 !mt-0 ${uniqueId}`}
      >
        {" "}
        {data?.map((cards: any) => (
          <SwiperSlide
            key={cards.id}
            className="mb-12 w-full"
          >
            <div className="relative w-full h-72 md:h-56 lg:h-72  group z-10 shadow-xl">
              <Image
                src={cards.img}
                alt=""
                className="w-auto h-full object-cover"
              />
              <div className=" absolute left-0 bottom-0 w-full h-0 top-0 overflow-hidden flex justify-center items-center duration-300 bg-[#000000b7] group-hover:h-full">
            <Link href={"#"} className="w-max h-max"> <TiPlus className="text-white text-4xl hover:text-green2"/></Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Imageslide;
