import AboutSection from "@/components/home/AboutSection";
import Benifit from "@/components/home/benifit";
import { benefit, whychoose } from "@/data/homeData";

import Blogs from "@/components/home/blog";
import CountDown from "@/components/home/Contdown";
import Greenbox from "@/components/home/greenbox";
import BannerSlider from "@/components/home/HomeBanner";
import Testimonials from "@/components/home/testimonial";
import WhyChoose from "@/components/home/whychoose";
import { countDown } from "@/data/homeData";
import HealthyLife from "@/components/home/healthylife";
import FaqSection from "@/components/home/faq";


export default function Home() {
  return (
    < >
<BannerSlider/>
<Greenbox/>
<AboutSection/>
<Benifit data = {benefit}/>
<CountDown data={countDown}/>
<Benifit data = {benefit}/>
<WhyChoose aboutdata={whychoose}/>
<HealthyLife data = {benefit}/>
<Testimonials/>
<FaqSection/>


{/* <Partner/>
<ServiceSlider/>
<Blogs/> */}
  </>
  );
}
