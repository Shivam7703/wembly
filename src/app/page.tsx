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
import Product from "@/components/products/product";


export default function Home() {
  return (
    < >
<BannerSlider/>
<Greenbox/>
<AboutSection/>
<section className='lg:px-28 md:p-20 sm:p-14 p-6'>
<h2 className="text-zinc-800 text-3xl text-center pb-7 sm:pb-9 md:text-5xl font-bold">
                    All Products
                  </h2>
<Product/>
</section>
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
