import { productcategory, products } from "@/data/homeData";
import Link from "next/link";
import React from "react";

function Aside({currpro}:any) {
  return (
    <>
      {productcategory?.map((product: any) => (
        <div
          key={product?.id}
          className="border p-4 w-full shadow-lg bg-white"
        >
          <h3 className="text-brown2 text-xl md:text-2xl border-b pb-2 border-brown2 font-bold">
            {product?.label}
          </h3>
          <ul className=" mt-4 p-1 w-full">
            {products
              ?.filter((produ) => produ.category === product.label)
              .map((pro: any) => (
                <li key={pro?.id} className={`py-2 px-3 duration-300  w-full hover:text-white hover:bg-green1 ${currpro == pro.name ? "bg-green1 text-white": "border text-zinc-700"}`}>
                  <Link
                    href={`${pro.name}`}
                    className="w-full  font-medium text-sm"
                  >
                    ● {pro.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Aside;
