import React from 'react'
import { FaHatCowboy } from 'react-icons/fa6'

function Sustainsec2() {
const data = [{
  id:1,
  icon:<FaHatCowboy />,
  heading:"Farmers",
  subheading:"The focal point of everything we do",
  text:"At Union Organics, we aim to empower farmers by equipping them with affordable and 100% organic agriculture."
},
{
  id:2,
  icon:<FaHatCowboy />,
  heading:"Farmers",
  subheading:"The focal point of everything we do",
  text:"At Union Organics, we aim to empower farmers by equipping them with affordable and 100% organic agriculture."
},
{
  id:3,
  icon:<FaHatCowboy />,
  heading:"Farmers",
  subheading:"The focal point of everything we do",
  text:"At Union Organics, we aim to empower farmers by equipping them with affordable and 100% organic agriculture."
},
]


  return (
    <section className="flex flex-wrap gap-y-4 justify-between md:p-20 sm:14 p-7 !pt-7 text-center relative overflow-hidden">
{data?.map((card:any)=>(
  <div key={card.id} className='md:w-[32%] w-full bg-white shadow-md rounded-xl border-zinc-400 text-center space-y-4 border hover:bg-slate-100 p-7 sm:py-12'>
    <div className='mx-auto text-4xl text-green-800 w-max'>{card?.icon}</div>
    <h2 className='text-green-950 font-semibold sm:text-2xl text-xl'>{card?.heading}</h2>
    <h3 className='text-green-950 font2 sm:text-xl text-lg '>{card?.subheading}</h3>
<p className='text-zinc-600'>{card?.text}</p>
  </div>
))}

      <div className="absolute bg-blue-200 bottom-0 left-0 h-2/4 -z-10 w-full"></div>
    </section>
  )
}

export default Sustainsec2
