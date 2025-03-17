"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { faqData } from "@/data/homeData";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiFillRightCircle } from "react-icons/ai";

export default function FaqSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  function toggleFaq(faqId: number) {
    setExpandedFaq((prev) => (prev === faqId ? null : faqId)); // Toggle FAQ visibility
  }

  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:px-28 md:p-20 sm:p-12 px-7 py-11 max-w-[1650px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 overflow-hidden"
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="sm:w-[50%] w-full space-y-5 md:space-y-7"
      >
        <h2 className="text-zinc-700 text-3xl md:text-5xl font-bold">
          {faqData?.title}{" "}
          <span className="text-green1">{faqData?.title2}</span>
        </h2>
        {faqData?.para && (
          <p className="text-zinc-600 text-sm md:text-base">{faqData?.para}</p>
        )}

        {/* FAQ Section */}
        {faqData?.faqs.map((faq) => (
          <div key={faq.id} className="md:mt-8 overflow-hidden">
            {/* FAQ Question */}
            <div
              onClick={() => toggleFaq(faq.id)}
              className="flex justify-between items-center duration-300 transition-all cursor-pointer text-lg md:text-xl text-white bg-green1 py-3 lg:px-6 px-4 font-bold"
            >
              {faq.que}
              {expandedFaq === faq.id ? (
                <FaMinus className="text-yellow3 duration-300" />
              ) : (
                <FaPlus className="text-yellow3 duration-300" />
              )}
            </div>

            {/* FAQ Answer */}
            <div
              className={`overflow-auto transition-all duration-1000 ${
                expandedFaq === faq.id ? "max-h-32 " : "max-h-0"
              }`}
            >
              <p className="md:text-lg bg-zinc-200 p-4 text-sm font-medium text-zinc-700">
                {faq.ans}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Form Section */}
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="sm:w-[43%] w-full min-h-96"
      >
        <div className="bg-green1 px-7 py-11 rounded-xl shadow-md">
          <h4 className="text-yellow3   mb-3 font-bold text-sm rounded-lg  w-max">
            Let's Cooperate Together
          </h4>
          <h2 className="text-white mb-6 text-3xl md:text-5xl font-bold">
            Contact Us Today!
          </h2>
          <form className="flex flex-wrap gap-y-6 py-3 justify-between ">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full py-3 placeholder:text-zinc-100 px-4 bg-[#ffffff33] backdrop-blur-sm sm:w-[48%] rounded-3xl"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-3 placeholder:text-zinc-100 px-4 bg-[#ffffff33] backdrop-blur-sm sm:w-[48%] rounded-3xl"
              required
            />
            <input
              type="phone"
              placeholder="Your Contact No."
              className="w-full placeholder:text-zinc-100 py-3 px-4 bg-[#ffffff33] backdrop-blur-sm sm:w-[48%] rounded-3xl"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full py-3 placeholder:text-zinc-100 px-4 bg-[#ffffff33] backdrop-blur-sm sm:w-[48%] rounded-3xl"
              required
            />

            <textarea
              placeholder="Your Message"
              className="w-full py-3 placeholder:text-zinc-100 px-4 bg-[#ffffff33] backdrop-blur-sm  rounded-3xl h-28"
              required
            ></textarea>
            <button
              type="submit"
              className="flex gap-2 p-2 mt-4 text-green1 font-bold rounded-[29px] group relative bg-white overflow-hidden items-center flex-row h-full"
            >
              <p className="ml-6 mr-4 text-black z-20">Submit Now</p>
              <AiFillRightCircle className="text-yellow3 text-4xl bg-white group-hover:text-black duration-200  rounded-full z-20" />
              <div className="group-hover:w-full duration-300 h-full bg-yellow3 absolute z-10 w-0 top-0 right-0"></div>
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
