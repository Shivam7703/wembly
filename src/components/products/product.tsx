"use client";
import React, { useState } from 'react';
import { productcategory } from '@/data/homeData';
import ProductSlider from './section2';
import ProCards from './proCards';

interface flex{
  isslider: boolean;
}

export default function Product({isslider}: flex) {
const [activeItem , setActiveitem] = useState("Implements")

function setProduct(product :any) {
    {activeItem != product  &&
    setActiveitem(product);
    }
}
  return (
    <section>
      <div className='flex md:gap-6 gap-3 justify-center mx-auto overflow-auto'>
        {productcategory?.map((cat)=>(
            <div key={cat?.id} className={`border uppercase px-3 cursor-pointer py-2 rounded-lg font-medium ${activeItem == cat?.label ? "bg-brown2 text-white" : "text-brown2 "}`} onClick={() => setProduct(cat.label)}>{cat?.label}</div>
        ))}
              </div>
              {isslider ? (
        <ProductSlider uniqueId="service123" datacat={activeItem} />
      ) : (
        <ProCards datacat={activeItem} />
      )}
        
    </section>
  )
}

