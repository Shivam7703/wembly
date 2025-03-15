"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay} from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { aboutsec2 } from "@/data/homeData";
import { TiPlus } from "react-icons/ti";

export default function ServiceSlider() {
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
    <section className=" p-7 text-center relative overflow-hidden">
      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full max-w-fit px-5 !mt-0 ${uniqueId}`}
      >
        {" "}
        {aboutsec2?.map((cards: any) => (
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

      <div className="absolute bg-yellow3 bottom-0 left-0 h-3/4 -z-10 w-full"></div>
      <div className="lg:px-28 md:px-20 sm:p-12 py-6 gap-y-4 flex flex-wrap justify-between items-stretch">
        <div className="md:w-[48%] w-full p-4 bg-brown2 rounded-2xl">
          <div className="border p-4 sm:p-8 text-center rounded-xl">
            <h4 className="sm:text-2xl text-xl font-bold text-yellow3 sm:mb-5 mb-3">Our Mission</h4>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam deleniti ex hic earum autem nam modi a alias labore sit, molestias sequi provident ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>

        <div className="md:w-[48%] w-full p-4 rounded-2xl bg-brown2">
          <div className="border p-4 sm:p-8 text-center rounded-xl">
            <h4 className="sm:text-2xl text-xl font-bold text-yellow3 sm:mb-5 mb-3">Our Vision</h4>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam deleniti ex hic earum autem nam modi a alias labore sit, molestias sequi provident ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </section>
  );
}
