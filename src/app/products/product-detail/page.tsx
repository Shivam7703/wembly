 import { banner2 } from '@/assets'
import Banner from '@/components/global/banner'
import Testimonials from '@/components/home/testimonial'
import Productdetails from '@/components/products/details'
import React from 'react'
 
 function page() {
   return (
     <>
       <Banner img ={banner2}
       title="Product name here"
       para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quae laboriosam illo?" 
       slug={"#"}/>
       <Productdetails/>
       <Testimonials/>

     </>
   )
 }
 
 export default page
 