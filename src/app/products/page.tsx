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
      <Product/>
      </>
  )
}

export default page
