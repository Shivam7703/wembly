"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { TiPlus } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

function Imageslide({ data }: any) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openLightbox = (index: number) => {
    setStartIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

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
      440: { slidesPerView: 2 },
      868: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  };

  return (
    <>
      {/* Main Slider */}
      <Swiper {...swiperOptions} className="mySwiper w-full px-5 !mt-0">
        {data?.map((card: any, index: number) => (
          <SwiperSlide key={card.id} className="mb-12 w-full">
            <div className="relative w-full h-72 md:h-56 lg:h-72 group z-10 shadow-xl">
              <Image
                src={card.img}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={() => openLightbox(index)}>
                  <TiPlus className="text-white text-4xl hover:text-green2" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox Modal with Swiper */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 text-white text-3xl z-50"
            >
              <IoClose />
            </button>

            <Swiper
              navigation
              initialSlide={startIndex}
              loop
              className="h-full w-full"
              modules={[Navigation]}
            >
              {data.map((card: any) => (
                <SwiperSlide key={`lightbox-${card.id}`}>
                  <div className="relative w-full h-[80vh]">
                    <Image
                      src={card.img}
                      alt="Full View"
                      layout="fill"
                      objectFit="contain"
                      className="rounded"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}

export default Imageslide;
