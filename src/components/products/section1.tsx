"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { banner, banner2, about, about2 } from "@/assets";
import { FaCheckCircle } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [banner, banner2, about, about2, banner2, about];

export default function ProductGallery({detail} : any) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  // Magnifier properties
  const magnifierSize = 200; // 200px diameter
  const zoomLevel = 2.5; // 2.5x zoom

  const handleMouseEnter = () => {
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (imageRef.current) {
      // Get image dimensions and position
      const {
        left,
        top,
        width,
        height,
      } = imageRef.current.getBoundingClientRect();

      // Calculate cursor position relative to the image
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Ensure the magnifier stays within the image boundaries
      setMousePosition({
        x: Math.max(0, Math.min(x, width)),
        y: Math.max(0, Math.min(y, height)),
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-y-7 pb-4 justify-between">
      <div className="xl:w-[53%] w-full">
        <Swiper
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 4500,
            disableOnInteraction: true,
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="w-full mb-3"
          onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-80 sm:h-[450px]"
                ref={index === activeSlideIndex ? imageRef : null}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                  priority={index === 0}
                />

                {/* Magnifier lens */}
                {showMagnifier && index === activeSlideIndex && (
                  <div
                    className="absolute rounded-full overflow-hidden pointer-events-none border-2 border-gray-200 shadow-lg z-10"
                    style={{
                      width: `${magnifierSize}px`,
                      height: `${magnifierSize}px`,
                      left: `${mousePosition.x - magnifierSize / 2}px`,
                      top: `${mousePosition.y - magnifierSize / 2}px`,
                    }}
                  >
                    <div
                      className="absolute"
                      style={{
                        width: `${imageRef.current?.clientWidth || 0}px`,
                        height: `${imageRef.current?.clientHeight || 0}px`,
                        transform: `scale(${zoomLevel})`,
                        transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                        backgroundImage: `url(${src.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        left: `-${mousePosition.x}px`,
                        top: `-${mousePosition.y}px`,
                      }}
                    />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="packI mt-4 w-full box-border py-2"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full sm:h-[100px] h-20">
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="xl:w-[45%] space-y-4 w-full">
        {detail?.name && (
          <h2 className="text-brown2 text-3xl md:text-4xl font-bold">
            {detail?.name}
          </h2>
        )}
         {detail?.desc && (
        <p className="text-base text-black !mt-1">
          {detail?.desc} 
        </p>
         )}
         <p className="py-1 font-bold text-xs px-3 bg-yellow-400 rounded-md shadow-lg">
                   {detail?.category}
                </p>
        {detail?.para1 && (
          <p className="text-zinc-600 text-sm md:text-base">
           {detail?.para1}
          </p>
        )}
        {detail?.para2 && (
          <p className="text-zinc-600 text-sm md:text-base">
           {detail?.para2}
          </p>
        )}
         {detail?.para3 && (
          <p className="text-zinc-600 text-sm md:text-base">
           {detail?.para3}
          </p>
        )}
       {detail?.sizes && (
  <table className="w-full border-collapse border !mt-6 border-gray-300">
    <thead>
      <tr className="bg-green2 text-white">
        <th className="border  px-4 py-2">Pack</th>
        <th className="border  px-4 py-2">Cartoon</th>
      </tr>
    </thead>
    <tbody>
      {detail?.sizes?.map((boxes: any) => (
        <tr key={boxes?.id} className="hover:bg-gray-50 text-zinc-800 text-center">
          <td className="border border-gray-300 px-4 py-2">{boxes?.pack}</td>
          <td className="border border-gray-300 px-4 py-2">{boxes?.cartoon}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}

      </div>
    </div>
  );
}
