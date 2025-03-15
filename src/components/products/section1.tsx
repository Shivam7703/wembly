'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { banner, banner2, about, about2 } from '@/assets';
import { FaCheckCircle } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { aboutdata } from '@/data/homeData';

const images = [banner, banner2, about, about2, banner2, about];

export default function ProductGallery() {
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
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      
      // Calculate cursor position relative to the image
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      // Ensure the magnifier stays within the image boundaries
      setMousePosition({
        x: Math.max(0, Math.min(x, width)),
        y: Math.max(0, Math.min(y, height))
      });
    }
  };

  return (
    <div className='flex flex-wrap gap-y-7 pb-4 justify-between'>
      <div className='xl:w-[53%] w-full'>
        <Swiper
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 4500,
            disableOnInteraction: true,
          }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
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
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        left: `-${mousePosition.x}px`,
                        top: `-${mousePosition.y}px`
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
      <div className='xl:w-[45%] space-y-4 w-full'>
        {aboutdata?.title2 && <h2 className='text-brown2 text-3xl md:text-4xl font-bold'>Product Name Here</h2>}
        <p className='text-base text-black !mt-1'><span className='text-yellow-400'>★★★★★</span>&nbsp; 5.00(customer review) </p>
        {aboutdata?.para && <p className='text-zinc-600 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eos dignissimos nulla excepturi quisquam nobis, iusto hic sit sunt est! Obcaecati laudantium non beatae similique aliquam. A natus expedita voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eos qui doloribus quia veritatis repellendus necessitatibus. Iusto atque autem rerum dolores sint delectus officiis, at sit porro natus voluptates fugiat distinctio perspiciatis?</p>}
        {aboutdata?.title3 && <h4 className='md:text-2xl text-xl text-zinc-700 font-semibold'>Key Features</h4>}
        <ul className='space-y-2'>
          {aboutdata?.vision?.map((data) => (
            <li key={data.id} className='flex gap-x-2'>
              <div className='text-lg text-green3 mt-1'><FaCheckCircle /></div>
              <p className='text-zinc-600 sm:text-lg'><span className='font-bold'>{data.heading}:{" "}</span>{" "}{data.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}