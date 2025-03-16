"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

export default function WhyChoose({ aboutdata }: any) {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:px-28 md:p-20 sm:p-12 p-7 max-w-[1580px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-white overflow-hidden"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="sm:w-[45%] w-full min-h-96 relative group"
      >
        <div className="space-y-7 overflow-hidden hover14 relative h-full ">
          {aboutdata?.img2 && (
            <Image
              src={aboutdata?.img2}
              alt="About"
              className="absolute top-0 left-0 h-full w-[88%] rounded-xl object-cover"
            />
          )}
        </div>
        {aboutdata?.img && (
          <Image
            src={aboutdata?.img}
            alt="About"
            className="group-hover:bottom-9 rounded-lg duration-300 absolute z-10 -bottom-8 shadow-lg md:-right-7 -right-3  md:w-80 w-52 md:h-72 h-52 border-8 border-white object-cover"
          />
        )}
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="sm:w-[49%] w-full space-y-7"
      >
        {aboutdata?.title1 && (
          <h4 className="text-green3 bg-[#CCF1F8]  px-7 font-bold text-sm rounded-lg py-3 w-max">
            {aboutdata?.title1}
          </h4>
        )}

        <h2 className="text-zinc-900 text-3xl md:text-5xl font-bold">
          {aboutdata?.title2}{" "}
          <span className="text-brown2">{aboutdata?.title3}</span>
        </h2>

        {aboutdata?.para && (
          <p className="text-zinc-600 text-sm md:text-base">
            {aboutdata?.para}
          </p>
        )}

        <ul className="space-y-3">
          {aboutdata?.vision?.map((data: any) => (
            <li
              key={data.id}
              className="p-4 flex gap-3 md:gap-6 group hover:shadow-xl duration-300  rounded-xl items-center text-black"
            >
              <div className="group-hover:text-yellow3 group-hover:-mt-6 duration-300 text-4xl md:text-5xl text-brown2">
                {data?.icon}
              </div>
              <div>
                <h3 className="text-xl mb-1 font-bold group-hover:ml-3 group-hover:text-green1 duration-300 text-zinc-800">
                  {data.heading}
                </h3>
                <p className="font-medium text-zinc-600">{data.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
