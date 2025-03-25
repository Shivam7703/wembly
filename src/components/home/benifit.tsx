"use client";
import React from "react";
import Image from "next/image";

function Benifit({ data }: any) {
  return (
    <section className="lg:px-28 lg:pt-20 lg:pb-28 sm:p-12 p-7 flex flex-wrap justify-between items-center max-lg:gap-4 ">
      <div className="w-full text-center flex flex-col items-center !gap-y-4 mb-8 md:mb-16">
        {data?.title1 && (
          <h4 className="text-green1 bg-[#e2eef9] px-7 mb-3 font-bold text-sm rounded-lg py-3 w-max">
            {data?.title1}
          </h4>
        )}
        {data?.title2 && (
          <h2 className="text-zinc-800 text-3xl md:text-5xl font-bold">
            {data?.title2}
          </h2>
        )}
        {data?.para && (
          <p className="text-zinc-600 text-sm md:text-base max-w-4xl">
            {data?.para}
          </p>
        )}
      </div>

      <div className="flex  max-w-[1780px] justify-between items-stretch flex-wrap gap-y-9 sm:mt-12 mt-4">
        {data?.points &&
          data?.points.map((card: any) => (
            <div
              key={card.id}
              className=" lg:w-[23.6%] group sm:w-[48.5%] w-full relative rounded-xl   shadow"
            >
              <Image src={card?.img} alt={"product"} className="w-full h-64 object-cover sm:h-96"/>
             
             <div className="absolute top-0 flex flex-col justify-center left-0 w-full bg-black/65 overflow-hidden h-0 group-hover:h-full duration-300 text-white text-center ">
              <h2 className="text-xl m-5 leading-[1.9] text-center sm:text-xl font-bold">
                Pure Cow's Milk
              </h2>
              <div className="h-1 bg-yellow3 max-w-44 w-full mx-auto"></div>
              <p className="text-center font-semibold text-sm md:text-base leadiung-[1.4] m-5">
                Ultrices sagittis orci a scelerisque purus semper eget duis at.
                Sollictudin nibh sit amet commodo nulla.
              </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Benifit;
