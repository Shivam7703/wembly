import Commited from "@/components/about/commited";
import Section1 from "@/components/about/section1";
import Section2 from "@/components/about/section2";
import Section3 from "@/components/about/section3";
import Section4 from "@/components/about/section4";
import Banner from "@/components/global/banner";
import Testimonials from "@/components/home/testimonial";
import { aboutBanner,aboutsec1 } from "@/data/homeData";


export default function About() {
  return (
    < >
<Banner img ={aboutBanner?.img}
title={aboutBanner.title}
para={aboutBanner.para}
slug={aboutBanner.slug}/>

<Section1 aboutdata={aboutsec1}/>
<Section2/>
<Section3/>
<Testimonials/>
<Section4/>
<Commited/>

  </>
  );
}
