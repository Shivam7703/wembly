"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface ProductSliderProps {
  uniqueId: string;
  datacat: string;
}

export default function ProductSlider({ uniqueId, datacat }: ProductSliderProps) {
  const swiperOptions = {
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      380: {
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

  // ✅ Corrected Filter and Map
  const filteredProducts = products?.filter((cards: any) => cards.category === datacat);

  return (
    <section className="md:pt-12 pt-7 text-center relative slider1 flex flex-col items-center">
      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full mx-auto p-5 !mt-0 ${uniqueId}`}
      >
        {filteredProducts?.map((cards: any) => (
          <SwiperSlide
            key={cards.id}
            className="mb-2 w-full text-left p-2 px-4 rounded-xl "
          >
            <div className="w-full h-full overflow-hidden group">
              <Image
                src={cards.img}
                alt={cards.name}
                className="transition-all object-left duration-500 my-4 mx-auto  w-[95%] h-64 rounded-xl object-contain group-hover:scale-105"
              />
              <h3 className="text-xl font-bold text-zinc-800 group-hover:text-color1">
                {cards.name}
              </h3>
              <p className="text-zinc-400 text-left max-sm:text-xs">
                {cards.desc || " "}
              </p>
              <p className="w-max text-base text-black my-3">
                {/* <span className="max-sm:hidden">Category: </span> */}
                <span className="py-1 font-bold text-xs px-3 text-white bg-yellow3 rounded-md shadow-lg">
                   {cards.category}
                </span>
              </p>
              <Link href={`products/${cards?.name}`} className="flex items-center gap-x-2 group/link">
                <p className="text-sm text-green1 sm:font-extrabold">
                  View Product
                </p>
                <BsArrowUpRightCircleFill className="text-brown2 rounded-full text-xl group-hover/link:rotate-45 duration-300" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex gap-3 justify-center my-2">
        <button
          className={`${uniqueId}-prev w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-brown2 hover:text-white text-brown2 rounded-full shadow-md transition-all duration-300 text-xl font-bold`}
        >
          <FaAngleLeft />
        </button>
        <button
          className={`${uniqueId}-next z-10 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-brown2 hover:text-white text-brown2 rounded-full shadow-md transition-all duration-300 text-xl font-bold`}
        >
          <FaAngleRight />
        </button>
      </div>
    </section>
  );
}
