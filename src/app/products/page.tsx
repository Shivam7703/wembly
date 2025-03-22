import Banner from '@/components/global/banner'
import Product from '@/components/products/product'
import { productBanner } from '@/data/homeData'
import React from 'react'

function page() {
  return (
<>
      <Banner img ={productBanner?.img}
      title={productBanner.title}
      para={productBanner.para}
      slug={productBanner.slug}/>
<section className='lg:px-28 md:p-20 sm:p-14 p-6'>
<h2 className="text-zinc-800 text-3xl text-center pb-7 sm:pb-9 md:text-5xl font-bold">
                    All Products
                  </h2>
<Product isslider ={false}/>
</section>      </>
  )
}

export default page
