"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { com} from "@/assets";

export default function Section4() {

  return (
    <section className=" text-zinc-900 flex flex-wrap justify-between items-stretch overflow-hidden">
   
      <div className="lg:w-[48%] group w-full min-h-52  relative  ">
      <div className="bg-yellow3 absolute group-hover:bg-white group-hover:text-zinc-800 min-w-36 group-hover:rounded-[40px] duration-500 z-10 bottom-32 max-lg:hidden -right-16 text-white  p-6">
          <IoShieldCheckmarkSharp className=" md:text-5xl text-3xl" />
          <h3 className="text-2xl md:text-4xl font-semibold my-2">300k</h3>
          <p className="md:text-xl text-sm">
            Bio Petrol <br /> Owner
          </p>
        </div>
        <Image
          src={com}
          alt="img"
          className="absolute top-0 left-0 z-0 w-full h-full  object-cover"
        />
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="lg:w-[52%] w-full md:px-24 md:py-16 p-8 bg-brown2 text-white"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className="space-y-7 "
        >
        
          <h2 className="sm:text-4xl font-bold text-2xl">
          Manufacturing
          </h2>

          <p className="text-zinc-200 ">
          The modern-day manufacturing plants supports to turn out highly complex formulations and specialty agrochemicals in a range of quantities and pack sizes which imbibe the strictest quality control measures.
          </p><p className="text-zinc-200 ">
We understand the value of healthy foods for our citizens and thus every batch of raw material to finished product is regulated and inspected by competent agencies.
</p><p className="text-zinc-200 ">

Our commitment is to use high quality raw materials, inspected and certified by professional agencies. The company provides its customers with friendly, professional service and reliable, high performance products that have been manufactured in accordance to the Regulatory requirements of crop protection solutions in the country.
</p>

         
        
        </motion.div>
      </motion.div>

    </section>
  );
}
