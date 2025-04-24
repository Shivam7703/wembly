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
      const scrollProgress = Math.min(1, Math.max(0, (viewportHeight - top) / height));
      
      lineRef.current.style.height = `${scrollProgress * (height - 100)}px`;
    };

    const handleScroll = () => {
      requestAnimationFrame(updateLineHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className=' bg-blue-200 lg:px-28 md:px-20 sm:px-14 sm:pb-20 overflow-hidden p-6' ref={sectionRef}>
   

<div className='w-full relative py-7 '>
<div
          className="absolute sm:left-1/2 left-2 z-10 -translate-x-1/2 bg-green2 h-[98%] w-1 top-3 transition-all duration-300"
        />
         <div
  ref={lineRef}
  className="absolute sm:left-1/2 left-2 z-20 -translate-x-1/2 w-1 top-3 transition-all duration-300"
>
  <div
    className="w-full h-[95%] bg-green1"
  />
  <IoMdArrowDropdownCircle className="text-green1 text-xs sm:text-2xl bg-white rounded-full -ml-1 sm:-ml-[10px]" />
</div>
       <Sustain img={banner2}
       text = "Wembley International has established its mission to boost crop yield production by reducing environmental damage. The company delivers new farming solutions that enable sustainable crop growth to produce healthier yields for the next generation of planet stewardship. Through the use of modern technology, the company enables farmers to tackle problems that stem from climate fluctuations and limited resource availability. Wembley International applies these methods to enhance crop expansion while maintaining sustainable agricultural practices into the future. Wembley International believes farmers must unite their operations with environmental protection to form a sustainable farming system of the future." title="MORE YIELDS, LESS IMPACT
" cls="md:!flex-row-reverse md:mb-9 mb-5"/>

<Sustain img={banner}
       text = "Wembley International dedicates itself to environmental conservation efforts combined with operations and sustainability development. With a focus on diversity, inclusion, and responsible practices, the company champions environmental and social responsibility. The organization works with its international partners to embrace the best sustainability practices. Wembley International offers training initiatives that assist staff members in developing innovative solutions and implementing eco-conscious practices. Wembley International recognizes that community success depends directly on ecosystem success." title="COMMITMENT TO SUSTAINABLE PRACTICES
" cls=""/>

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