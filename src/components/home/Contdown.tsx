"use client";
import { count } from "@/assets";
import Image from "next/image";
import CountUp from "react-countup";

function CountDown({ data }: any) {


 

  return (
    <section  className="relative">
      <Image src={count} alt="" className=" w-full  object-cover " />
      <div className="bg-brown2 w-full p-4 lg:px-20 md:py-14 -my-2 sm:px-14 mx-auto  flex flex-wrap gap-y-8 sm:gap-y-12  justify-between">
        {data?.map((counts: any) => (
          <div
            key={counts?.id}
            className="text-center group  group last:border-none lg:border-r lg:w-1/4 w-1/2 md:px-12"
          >
            <div className="text-2xl sm:text-4xl lg:text-5xl mx-auto w-max mb-3 text-white mt-3 duration-300 group-hover:!-mt-3 group-hover:!mb-3 sticky">
              {counts?.icon}
            </div>
                  <div className="text-2xl text-yellow3 md:text-4xl sm:text-3xl mb-3 xl:text-6xl font-bold">
                  <CountUp
                  start={0}
                  end={counts?.Value}
                  delay={0.2}
                  duration={2.75}
                  separator=","
               />+
                  </div>
            <h3
              className={`font-medium text-sm sm:text-xl text-white ${counts.textColor}`}
            >
              {counts?.title}
            </h3>
          </div>
        ))}
      </div>
      <Image src={count} alt="" className=" w-full rotate-180 object-cover " />
      <div className="lg:hidden absolute h-[90%] w-[1px] bg-[#ffffff98] top-[5%] left-1/2 z-10"></div>
      <div className="lg:hidden absolute w-[90%] h-[1px] bg-[#ffffff98] left-[5%] top-1/2 z-10  "></div>
    </section>
  );
}

export default CountDown;
