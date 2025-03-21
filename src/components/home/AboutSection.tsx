"use client";
import React from "react";
import Image from "next/image";
import { aboutdata } from "@/data/homeData";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { fadeIn, staggerContainer } from "@/utils/motion";

function AboutSection() {
  return (
    <section className=" lg:p-20 sm:p-12 p-7 max-w-[1580px] mx-auto flex flex-wrap justify-between gap-y-7 bg-white">
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="sm:w-[45%] w-full min-h-96 relative group"
      >
        {aboutdata?.img2 && (
          <Image
            src={aboutdata?.img2}
            alt="About"
            className="group-hover:top-[30%] rounded-2xl duration-300 absolute z-10 top-0 shadow-lg right-0 w-[70%] h-[70%] border-8 border-white group-hover:scale-x-[-1] object-cover"
          />
        )}
        {aboutdata?.img && (
          <Image
            src={aboutdata?.img}
            alt="About"
            className="group-hover:bottom-[30%] rounded-2xl duration-300 absolute z-20 bottom-0 shadow-lg left-0 w-[70%] h-[70%] border-8 border-white object-cover"
          />
        )}
      </motion.div>
      <div className="sm:w-[49%] w-full space-y-5">
        {aboutdata?.title1 && (
          <h4 className="text-green1 bg-[#e2eef9] px-7 font-bold text-sm rounded-lg py-3 w-max">
            {aboutdata?.title1}
          </h4>
        )}
        {aboutdata?.title2 && (
          <h2 className="text-zinc-800 text-3xl md:text-5xl font-bold">
            {aboutdata?.title2}
          </h2>
        )}
        {aboutdata?.para && (
          <p className="text-zinc-700 text-sm md:text-base">
            {aboutdata?.para}
          </p>
        )}
        {aboutdata?.title3 && (
          <h4 className="md:text-3xl text-2xl text-brown2 font-semibold">
            {aboutdata?.title3}
          </h4>
        )}
        <ul className="space-y-2">
          {aboutdata?.vision?.map((data) => (
            <li key={data.id} className="flex gap-x-2">
              <div className="text-xl text-green1 mt-1">
                <FaCheckCircle />
              </div>
              <p className="text-zinc-700 sm:text-lg">
                <span className="font-bold">{data.heading}: </span> {data.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
