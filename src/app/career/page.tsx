import Commited from "@/components/about/commited";
import Section1 from "@/components/about/section1";
import Section2 from "@/components/about/section2";
import Section3 from "@/components/about/section3";
import Section4 from "@/components/about/section4";
import Banner from "@/components/global/banner";
import FaqSection from "@/components/home/faq";
import Testimonials from "@/components/home/testimonial";
import { careerBanner } from "@/data/homeData";


export default function About() {
  return (
    < >
<Banner img ={careerBanner?.img}
title={careerBanner.title}
para={careerBanner.para}
slug={careerBanner.slug}/>

{/* <Section1 aboutdata={aboutsec1}/> */}
{/* <Section2/> */}
<Section3/>
{/* <Testimonials/> */}
<Section4/>
{/* <Commited/> */}
<FaqSection/>

  </>
  );
}
