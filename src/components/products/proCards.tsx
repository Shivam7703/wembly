import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { products } from '@/data/homeData';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

function ProCards({datacat}:any) {
      const filteredProducts = products?.filter((cards: any) => cards.category === datacat);
    
  return (
    <div className='flex mt-5 md:mt-12 gap-[3%] flex-wrap items-baseline'>
       {filteredProducts?.map((cards: any) => (
          <div
            key={cards.id}
            className=" w-max text-left p-3 px-5 rounded-xl "
          >
            <div className="w-full h-full overflow-hidden group">
              <Image
                src={cards.img}
                alt={cards.name}
                className="transition-all object-left duration-500 my-4 mx-auto  w-[95%] h-64 rounded-xl object-contain group-hover:scale-105"
              />
              <h3 className="text-xl font-bold text-zinc-800 group-hover:text-color1">
                {cards.name}
              </h3>
              <p className="text-zinc-400 text-left max-sm:text-xs">
                {cards.desc || " "}
              </p>
              <p className="w-max text-base text-black my-3">
                {/* <span className="max-sm:hidden">Category: </span> */}
                <span className="py-1 font-bold text-xs px-3 text-white bg-yellow3 rounded-md shadow-lg">
                   {cards.category}
                </span>
              </p>
              <Link href={`products/${cards?.name}`} className="flex items-center gap-x-2 group/link">
                <p className="text-sm text-green1 sm:font-extrabold">
                  View Product
                </p>
                <BsArrowUpRightCircleFill className="text-brown2 rounded-full text-xl group-hover/link:rotate-45 duration-300" />
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ProCards
