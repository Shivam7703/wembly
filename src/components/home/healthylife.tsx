"use client";
import React from "react";
import Image from "next/image";

export default function HealthyLife({ data }: any) {
  
  return (
    <section className="lg:px-28 md:p-20  sm:p-12 p-7 flex flex-wrap justify-between items-center max-lg:gap-4 ">
      <div className="w-full text-center flex flex-col items-center !gap-y-4 mb-8 md:mb-16">
      
        {data?.title2 && (
          <h2 className="text-filling-container text-zinc-800 text-5xl leading-[1.3] md:text-7xl lg:text-9xl font-bold">
            Healthy Life With
            Fresh Products!
          </h2>
        )}
        {data?.para && (
          <p className="text-zinc-600 text-sm sm:text-xl font-bold max-w-4xl">
            Biofuels reduce carbon emissions, promote energy security, create jobs, promote energy.
          </p>
        )}
      </div>

      <div className="flex  max-w-[1780px] justify-between items-stretch flex-wrap gap-y-9 sm:mt-12 mt-4">
        {data?.points &&
          data?.points.map((card: any) => (
            <div
              key={card.id}
              className="p-4 lg:w-[23.6%] group sm:w-[48.5%] w-full sm:p-8 rounded-xl text-white shadow"
            >
              <div className="flex justify-center animate-scale rounded-full items-center mx-auto sm:w-24 sm:h-24 bg-green1 w-14 h-14 sticky sm:-mt-20 group-hover:scale-x-[-1] duration-200 -mt-9 text-white text-xl sm:!text-3xl">
                {card.icon}
              </div>
              <h2 className="text-xl my-5 leading-[1.9] text-zinc-800 text-center sm:text-xl font-bold">
                Pure Cow's Milk
              </h2>
              <div className="border-b-2 border-brown2 max-w-44 mx-auto"></div>
              <p className="text-center font-semibold text-zinc-600 text-sm md:text-base leadiung-[1.4] my-5">
                Ultrices sagittis orci a scelerisque purus semper eget duis at.
                Sollictudin nibh sit amet commodo nulla.
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
