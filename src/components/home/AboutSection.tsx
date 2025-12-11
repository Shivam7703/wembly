"use client";
import React from "react";
import Image from "next/image";
import { aboutdata } from "@/data/homeData";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { fadeIn } from "@/utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

function AboutSection() {
  const uniqueId = "About1234";

  const swiperOptions = {
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId} .swiper-button-next`,
      prevEl: `.${uniqueId} .swiper-button-prev`,
    },
    modules: [Autoplay, Navigation],
  };

  return (
    <section className=" lg:p-20 sm:p-12 p-7 max-w-[1580px] mx-auto flex flex-wrap justify-between gap-y-7 bg-white">
      <Swiper {...swiperOptions} className={`sm:w-[45%] w-full min-h-96 relative ${uniqueId}`}>
        {aboutdata?.img2 && (
          <SwiperSlide>
            <Image
              src={aboutdata?.img}
              alt="About"
              className=" rounded-2xl duration-300  shadow-lg right-0 w-full h-full border-8 border-white  object-cover"
            />
          </SwiperSlide>
        )}
        {aboutdata?.img && (
          <SwiperSlide>
            <Image
              src={aboutdata?.img2}
              alt="About"
              className="rounded-2xl duration-300  shadow-lg right-0 w-full h-full   object-cover"
            />
          </SwiperSlide>
        )}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>

      <div className="sm:w-[49%] w-full space-y-5">
        {aboutdata?.title1 && (
          <h4 className="text-green1 bg-[#e2eef9] px-7 font-bold text-sm rounded-lg py-3 w-max">
            {aboutdata?.title1}
          </h4>
        )}
        {aboutdata?.title2 && (
          <h2 className="text-zinc-800 text-3xl md:text-5xl font-bold">
            {aboutdata?.title2} <span className="text-green1">{aboutdata?.title4}</span>
          </h2>
        )}
        {aboutdata?.para && (
          <p className="text-zinc-700 text-sm md:text-base">{aboutdata?.para}</p>
        )}
        {aboutdata?.title3 && (
          <h4 className="md:text-3xl text-2xl text-brown2 font-semibold">{aboutdata?.title3}</h4>
        )}
        <ul className="space-y-2">
          {aboutdata?.vision?.map((data) => (
            <li key={data.id} className="flex gap-x-2">
              <div className="text-xl text-green1 mt-1">
                <FaCheckCircle />
              </div>
              <p className="text-zinc-700 sm:text-lg">{data.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;