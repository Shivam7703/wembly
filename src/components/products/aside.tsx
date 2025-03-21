import { productcategory, products } from "@/data/homeData";
import Link from "next/link";
import React from "react";

function Aside() {
  return (
    <>
      {productcategory?.map((product: any) => (
        <div
          key={product?.id}
          className="border p-3 w-full rounded-xl shadow-lg bg-white"
        >
          <h3 className="text-brown2 text-xl md:text-2xl border-b pb-2 border-brown2 font-bold">
            {product?.label}
          </h3>
          <ul className="space-y-2 mt-3 p-1">
            {products
              ?.filter((produ) => produ.category === product.label)
              .map((pro: any) => (
                <li key={pro?.id}>
                  <Link
                    href={`${pro.name}`}
                    className="text-zinc-600 hover:text-green2 font-medium text-sm"
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
