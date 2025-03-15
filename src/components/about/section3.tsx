"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { banner, com, env, social } from "@/assets";

export default function Section3() {

  return (
    <section className="text-zinc-900 flex flex-wrap justify-between items-stretch overflow-hidden">
      <motion.div
        variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="lg:w-[51%] w-full md:px-24 md:py-16 p-8 "
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          className="space-y-7 "
        >
        
          <h2 className="sm:text-5xl text-zinc-900 font-bold text-3xl">
          Research & Development          </h2>

          <p className="text-zinc-800  ">
          The company continuously focuses in research and innovation to bring high-tech solutions, and thus have increasingly efficient responses to the challenges of today and tomorrow in the field.
</p> 
 <p className="text-zinc-800  ">
Every day Mankind Agritech reaffirms its commitment to the progress of Indian agriculture, developing and marketing speciality products for crop protection that help growers preserve their legacy and enhance their productivity.
<br />
The R&D team and the new product development team in the company is focused on finding more sustainable solutions than those which are in the market, as well as products with eco-friendly profile for consumers. Mankind Agritech works closely with its customers to assist in finding the balance of cost and environmental impact.

          </p>
      
        </motion.div>
      </motion.div>
      <div className="lg:w-[48%] group w-full min-h-52   relative">
        <div className="bg-green3 absolute group-hover:bg-zinc-800 group-hover:rounded-[40px] duration-500 min-w-36 shadow-lg bottom-32 max-lg:hidden z-10 -left-20 text-white  p-6">
          <IoShieldCheckmarkSharp className=" md:text-5xl text-3xl" />
          <h3 className="text-2xl md:text-4xl font-semibold my-2">300k</h3>
          <p className="md:text-xl text-sm">
           Researches <br /> Development
          </p>
        </div>
        <Image
          src={env}
          alt="img"
          className="absolute h-full top-0 left-0 w-full z-0 object-cover"
        />
      </div>

    </section>
  );
}
