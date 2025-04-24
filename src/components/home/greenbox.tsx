import React from "react";
import { FaMoneyBillAlt, FaWineBottle } from "react-icons/fa";
import {  GiInsectJaws, GiPlantWatering } from "react-icons/gi";
import { ImLeaf } from "react-icons/im";

import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { PiPlantLight } from "react-icons/pi";

export default function Greenbox() {
  const data = [
    {
      id: 1,
      heading: "Quality ",
      para:
        "We provide high-quality products to protect crops & help them grow better.",
      icon: <MdOutlineEnergySavingsLeaf />
      ,
    },
    {
      id: 2,
      heading: "Affordability",
      para:
        "Affordable solutions that make farming easier & more productive for all farmers.",
      icon: <FaMoneyBillAlt />
      ,
    },
    {
      id: 3,
      heading: "Availability",
      para:
        "Widely available products to meet the needs of all farmers anywhere.",
      icon:<FaWineBottle />
      ,
    },
    {
      id: 4,
      heading: "Sustainability",
      para:
        "Eco-friendly options to protect crops & care for the environment at the same time.",
      icon: <ImLeaf />
      ,
    },
  ];

  return (
    <section className="lg:-mt-20 relative z-30 sm:-mt-16 my-6 w-[90%] sm:p-5 p-3 max-w-[1280px] !mx-auto bg-grad1 rounded-[39px]">
      <div className="border gap-y-8 rounded-[30px] py-5 flex flex-wrap items-stretch w-full">
        {data?.map((card: any) => (
          <div
            key={card.id}
            className="lg:w-1/4 sm:w-1/2 w-full lg:border-r text-center sm:px-8 p-3 group text-white last:border-none"
          >
            <div className="mx-auto flex justify-center text-3xl rounded-full items-center bg-yellow3 w-14 h-14 group-hover:scale-x-[-1] duration-300 text-brown2">
              {card?.icon}
            </div>
            <h2 className="mt-2 md:mt-3 sm:text-xl duration-200 group-hover:text-yellow3 text-lg font-semibold">
              {card?.heading}
            </h2>
            <p className="text-sm md:text-base mt-1 md:mt-2">{card?.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
