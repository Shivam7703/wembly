
import { aboutsec2 } from "@/data/homeData";
import Imageslide from "./Image-slide";

export default function ServiceSlider() {
 
  return (
    <section className=" p-7 text-center relative overflow-hidden">
      <Imageslide data={aboutsec2}/>
     
      <div className="absolute bg-yellow3 bottom-0 left-0 h-3/4 -z-10 w-full"></div>
      <div className="lg:px-28 md:px-20 sm:p-12 py-6 gap-y-4 flex flex-wrap justify-between items-stretch">
        <div className="md:w-[48%] w-full p-4 bg-brown2 rounded-2xl">
          <div className="border p-4 sm:p-8 h-full text-center rounded-xl">
            <h4 className="sm:text-2xl text-xl font-bold text-yellow3 sm:mb-5 mb-3">Our Mission</h4>
            <p className="text-white">The company aims to deliver innovative, affordable, and dependable agricultural solutions that protect crops while improving their growth performance. The company works toward improving farm techniques while boosting crop output through environmentally sustainable methods to help both landscapes and communities.
            </p>
          </div>
        </div>

        <div className="md:w-[48%] w-full p-4 rounded-2xl bg-brown2">
          <div className="border p-4 sm:p-8 text-center rounded-xl">
            <h4 className="sm:text-2xl text-xl font-bold text-yellow3 sm:mb-5 mb-3">Our Vision</h4>
            <p className="text-white">We aim to excel globally as an agricultural market leader by developing state-of-the-art agricultural solutions with environmentally sustainable farming practices. Farmers will excel with modern equipment that yields healthier harvests through environmentally conscious practices while ensuring brighter life prospects for themselves and their descendants in the years to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
