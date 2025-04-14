"use client";
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import { banner, banner2 } from "@/assets";
import { IoMdArrowDropdownCircle } from 'react-icons/io';

export default function Sustainsec3() {
   const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLineHeight = () => {
      if (!sectionRef.current || !lineRef.current) return;
      
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.min(1, Math.max(0, (top) / (height - viewportHeight)));
      
      lineRef.current.style.height = `${scrollProgress * (height - 100)}px`;
    };

    const handleScroll = () => {
      requestAnimationFrame(updateLineHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className=' bg-yellow3 lg:px-28 md:px-20 sm:px-14 sm:pb-20 overflow-hidden p-6' ref={sectionRef}>
   

<div className='w-full relative py-7 '>
<div
          className="absolute sm:left-1/2 left-2 z-10 -translate-x-1/2 bg-brown2 h-full w-1 top-3 transition-all duration-300"
        />
         <div
  ref={lineRef}
  className="absolute sm:left-1/2 left-2 z-20 -translate-x-1/2 w-1 top-3 transition-all duration-300"
>
  <div
    className="w-full h-full bg-white/80"
  />
  <IoMdArrowDropdownCircle className="text-green1 text-xs sm:text-2xl bg-white rounded-full -ml-1 sm:-ml-[10px]" />
</div>
       <Sustain img={banner2}
       text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus labore molestiae quidem quasi sunt itaque fugit? Aperiam iusto sed consequatur quia at corporis nam. Temporibus ducimus labore molestiae quidem quasi sunt itaque fugit? Aperiam iusto sed consequatur quia at corporis nam." title="Lorem ipsum dolor sit amet" cls="md:!flex-row-reverse md:mb-9 mb-5"/>

<Sustain img={banner}
       text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus labore molestiae quidem quasi sunt itaque fugit? Aperiam iusto sed consequatur quia at corporis nam. Temporibus ducimus labore molestiae quidem quasi sunt itaque fugit? Aperiam iusto sed consequatur quia at corporis nam." title="Lorem ipsum dolor sit amet" cls=""/>

</div>
    </section>
  )
}

function Sustain({img , text, title, cls}:any){
    return(
        <div className={`${cls} items-stretch flex flex-wrap justify-between gap-y-2`}>
<div className='md:w-[47%] w-full h-auto'> <Image src={img} alt='' className='w-full h-full object-cover'/> </div>
<div className='py-6 md:w-[47%] w-full'>
    <h2 className='text-green1 font-bold text-2xl md:text-4xl mb-4'>{title}</h2>
    <p className='text-zinc-800 sm:text-lg '>{text}</p>
</div>
        </div>
    )
}