import React from "react";
import { GiHerbsBundle, GiInsectJaws, GiPlantWatering } from "react-icons/gi";
import { ImLeaf } from "react-icons/im";
import { PiPlantLight } from "react-icons/pi";

export default function Greenbox() {
  const data = [
    {
      id: 1,
      heading: "Herbicides ",
      para:
        "The company develops herbicides that eliminate weeds yet maintain both crop safety and health.",
      icon: <GiHerbsBundle />
      ,
    },
    {
      id: 2,
      heading: "Insecticides",
      para:
        "These agricultural insecticides defend your cultivated plants from damaging pests so you can obtain a secure and improved harvest.",
      icon: <GiInsectJaws />
      ,
    },
    {
      id: 3,
      heading: "Fungicides",
      para:
        "The fungicides we produce fight diseases in your plants, which helps maintain vigorous plant growth together with preserved yields.",
      icon:<PiPlantLight />
      ,
    },
    {
      id: 4,
      heading: "Fertilizers",
      para:
        "Additionally, our company offers fertilization products containing vital nutrients for crops to become more robust while also producing better yields.",
      icon: <GiPlantWatering />
      ,
    },
  ];

  return (
    <section className="lg:-mt-24 relative z-30 sm:-mt-16 my-6 w-[90%] sm:p-5 p-3 max-w-[1280px] !mx-auto bg-grad1 rounded-[39px]">
      <div className="border gap-y-8 rounded-[30px] p-5 py-7 md:!py-12 flex flex-wrap items-stretch w-full">
        {data?.map((card: any) => (
          <div
            key={card.id}
            className="lg:w-1/4 sm:w-1/2 w-full lg:border-r text-center sm:px-12 px-3 group text-white last:border-none"
          >
            <div className="mx-auto flex justify-center text-3xl rounded-full items-center bg-yellow3 w-14 h-14 group-hover:scale-x-[-1] duration-300 text-brown2">
              {card?.icon}
            </div>
            <h2 className="mt-3 md:mt-5 sm:text-xl duration-200 group-hover:text-yellow3 text-lg font-semibold">
              {card?.heading}
            </h2>
            <p className="text-sm md:text-base mt-1 md:mt-3">{card?.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
