"use client";
import React, { useState } from 'react';
import { productcategory } from '@/data/homeData';
import ProductSlider from './section2';

export default function Product() {
const [activeItem , setActiveitem] = useState("Implements")

function setProduct(product :any) {
    {activeItem != product  &&
    setActiveitem(product);
    }
}
  return (
    <section>
      <div className='flex md:gap-6 gap-3 justify-center mx-auto flex-wrap'>
        {productcategory?.map((cat)=>(
            <div key={cat?.id} className={`border uppercase px-3 cursor-pointer py-2 rounded-lg font-medium ${activeItem == cat?.label ? "bg-brown2 text-white" : "text-brown2 "}`} onClick={() => setProduct(cat.label)}>{cat?.label}</div>
        ))}
              </div>
                <ProductSlider uniqueId = "service123" datacat={activeItem}/>
        
    </section>
  )
}

