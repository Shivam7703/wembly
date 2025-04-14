import React from 'react'
import Imageslide from '../about/Image-slide'
import { aboutsec2 } from '@/data/homeData'

function Sustainsec2() {
  return (
    <section className=" p-7 text-center relative overflow-hidden">
      <Imageslide data={aboutsec2}/>
      <div className="absolute bg-yellow3 bottom-0 left-0 h-3/4 -z-10 w-full"></div>
    </section>
  )
}

export default Sustainsec2
