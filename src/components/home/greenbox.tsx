import React from "react";
import { ImLeaf } from "react-icons/im";

export default function Greenbox() {
  const data = [
    {
      id: 1,
      heading: "Product quality",
      para:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, .",
      icon: <ImLeaf />,
    },
    {
      id: 2,
      heading: "Product quality",
      para:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, .",
      icon: <ImLeaf />,
    },
    {
      id: 3,
      heading: "Product quality",
      para:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, .",
      icon: <ImLeaf />,
    },
    {
      id: 4,
      heading: "Product quality",
      para:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, .",
      icon: <ImLeaf />,
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
            <div className="mx-auto flex justify-center rounded-full items-center bg-yellow3 w-14 h-14 group-hover:scale-x-[-1] duration-300 text-brown2">
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
