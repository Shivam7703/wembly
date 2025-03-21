import React from 'react'
import ProductGallery from './section1'
import ProductSlider from './section2'
import Testimonials from '../home/testimonial'
import Aside from './aside'
import Product from './product'

function Productdetails({product} :any) {
  return (
    <div className='flex flex-wrap justify-between gap-y-7 md:p-20 sm:p-16 p-7 relative min-h-screen w-full'>
        <div className='md:w-[73%] w-full '>
        <ProductGallery detail={product}/>
          <h2 className="text-zinc-800 text-3xl text-center mx-auto sm:p-16 p-7 !pb-0 md:text-5xl font-bold">
                    Other Products
                  </h2>
                <ProductSlider uniqueId = "pro123" datacat={product?.category}/>

                <h2 className="text-zinc-800 text-3xl text-center mx-auto sm:p-16 p-7 sm:pb-9 md:text-5xl font-bold">
                    All Products
                  </h2>
<Product/>
        </div>
        <div className='md:w-[25%] bg-zinc-200 p-4 rounded-xl w-full md:sticky space-y-5 top-10 h-full'>
          <Aside/>
</div>
    </div>
  )
}

export default Productdetails
