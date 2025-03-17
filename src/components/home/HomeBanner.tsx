"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {  sliderText } from "@/utils/motion";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { MdArrowRightAlt } from "react-icons/md";
import { sliderContent } from "@/data/homeData";

export default function HomeBanner() {
  const uniqueId = "banner123";
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, EffectFade, Navigation],
    effect: "fade",
    onSlideChange: (swiper: any) => setCurrentSlide(swiper.realIndex), // Update slide index on change
  };

  return (
    <section  className="swiperstyle1">
      <Swiper {...swiperOptions} className="mySwiper ">
        {sliderContent.map((item, index) => (
          <SwiperSlide key={index} className="overflow-hidden ">
            <HomeBannerCard
              img={item?.img}
              welcome={item.welcome}
              title1={item?.title1}
              title2={item?.title2}
              btntext={item?.btntext}
              key={currentSlide} // Re-trigger animation when slide changes
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div
        className={`${uniqueId}-next swiper-button-next !right-2 !p-2.5 !text-lg !text-green3 md:!right-3 md:!top-[55%] md:!h-16 md:!w-16 max-md:!hidden`}
      >
        <GrNext />
      </div>
      <div
        className={`${uniqueId}-prev swiper-button-prev !left-2  !p-2.5  !text-green3 md:!left-3 md:!top-[55%] md:!h-16 md:!w-16 max-md:!hidden`}
      >
        <GrPrevious />
      </div>
    </section>
  );
}

function HomeBannerCard({
  img, 
  welcome,
  title1,
  title2,
  btntext,
}: any) {
  return (
    <div className="relative w-full overflow-hidden  text-white md:h-[95vh] min-h-[70vh]">
      {/* Full-size image */}
      <Image
        src={img} // Use the dynamic image passed in
        className="absolute z-0 h-full w-full  object-cover object-center"
        alt="banner image"
        layout="fill"
      />
 

      <div className="absolute top-0 left-0 items-center justify-center w-full h-full z-10 bg-[#0000006f] grid grid-cols-2 max-md:pb-10 md:grid-cols-3   gap-y-10   lg:p-28 sm:p-12 px-7 pt-28 pb-11">
        <motion.div
          variants={sliderText}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1, delay: 0.2 }}
          className="col-span-2 flex h-full w-full flex-col max-w-[790px] max-md:text-center justify-center gap-6 md:px-11 max-md:items-center"
        >
          <h4 className="text-green2 font-bold md:text-xl text-lg">{welcome}</h4>
          <h1 className="inline-block !leading-[1.3] text-4xl font-bold md:text-6xl ">
            {title1} <span className="text-green2">{title2}</span>
          </h1>
          <p className="-mt-4 !mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas dolores beatae nostrum dicta, sit amet consectetur adipisicing elit. Quas dolores beatae nostrum dicta.</p>
          <Link href={"/"} className="w-min">
            <div className="flex items-center rounded-3xl gap-4 text-nowrap px-6 py-2 text-green1 bg-white duration-300 hover:bg-black hover:text-white">
              <p className="text-sm font-bold">{btntext}</p><MdArrowRightAlt  className="animate-x text-3xl"/>
            </div>
          </Link>
        </motion.div>
      
      </div>
    </div>
  );
}

