import Banner from '@/components/global/banner'
import Sustainsec3 from '@/components/sustainbility/sec'
import Sustainsec1 from '@/components/sustainbility/sec1'
import Sustainsec2 from '@/components/sustainbility/sec2'
import React from 'react'

function page() {
  return (
    <>
        <Banner img ={""}
            title={"Sustainability"}
            para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae labore placeat! Expedita exercitationem quasi, eligendi, omnis minima,"}
            slug={"sustainability"}/>
            <Sustainsec1/>
            <Sustainsec2/>
            <Sustainsec3/>
    </>
    
  )
}

export default page
