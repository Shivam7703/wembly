"use client";
import React from "react";
import Image from "next/image";
import { FaBan } from "react-icons/fa6";

export default function Commited() {
    const data = [
        {
            id:1,
            icon:<FaBan />
        },
        {
            id:2,
            icon:<FaBan />
        },
        {
            id:3,
            icon:<FaBan />
        },
        {
            id:4,
            icon:<FaBan />
        },
        {
            id:5,
            icon:<FaBan />
        }
    ]
  
  return (
    <section className=" md:p-20  sm:p-16 p-7 flex flex-wrap justify-between items-center max-lg:gap-4 ">
      <div className="w-full text-center flex flex-col items-center !gap-y-4 mb-8 md:mb-16">
      
      
          <h2 className="text-filling-container text-zinc-800 text-5xl leading-[1.3] md:text-7xl lg:text-9xl font-bold">
           Committed to Freshness!

          </h2>
     
        
          <p className="text-zinc-600 text-sm sm:text-xl font-bold max-w-4xl">
We believe that to have good health, clean and healthy food sources are the key

</p>
 
      </div>

      <div className="flex  max-w-[1480px] w-full justify-between items-stretch flex-wrap gap-y-9 mx-auto sm:mt-12 mt-4">
        {data &&
          data?.map((card: any) => (
            <div
              key={card.id}
              className="p-4 lg:w-[19.5%] group md:w-[32%] sm:w-[48.5%] w-full sm:p-8 rounded-xl text-white shadow"
            >
              <div className="flex justify-center animate-scale rounded-full items-center mx-auto sm:w-24 sm:h-24 bg-green1 w-14 h-14 sticky sm:-mt-20 group-hover:scale-x-[-1] duration-200 -mt-9 text-white text-xl sm:!text-3xl">
                {card.icon}
              </div>
              <h2 className="text-lg my-5 leading-[1.9] text-zinc-800 text-center  font-bold">
                Pure Cow's Milk
              </h2>
          
            
            </div>
          ))}
      </div>
    </section>
  );
}
