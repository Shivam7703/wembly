import { li } from 'motion/react-client'
import React from 'react'

function Aside() {
    const data = [
        {id:1,
            category:"HERBICIDES",
            products:["AMINO DCP +", "RONDO 480SL","BESTOMINE 720SL"," SUPAZEB80WP","Lorem ipsum"]
        },
        {id:2,
            category:"HERBICIDES",
            products:["AMINO DCP +", "RONDO 480SL","BESTOMINE 720SL"," SUPAZEB80WP","Lorem ipsum"]
        },
        {id:3,
            category:"HERBICIDES",
            products:["AMINO DCP +", "RONDO 480SL","BESTOMINE 720SL"," SUPAZEB80WP","Lorem ipsum"]
        },
        {id:4,
            category:"HERBICIDES",
            products:["AMINO DCP +", "RONDO 480SL","BESTOMINE 720SL"," SUPAZEB80WP","Lorem ipsum"]
        },
        {id:5,
            category:"HERBICIDES",
            products:["AMINO DCP +", "RONDO 480SL", "BESTOMINE 720SL", "SUPAZEB80WP", "Lorem ipsum"]
        },
       
    ]
  return (
    <>
    {data?.map((product :any) => (
        <div id={product?.id} className='border p-3 w-full rounded-xl shadow-lg bg-white'>
            <h3 className='text-brown2 text-xl md:text-2xl border-b pb-2 border-brown2 font-bold'>{product?.category}</h3>
            <ul className='space-y-2 mt-3 p-1'>
                {product?.products?.map((pro:String, index:any)=>(
                    <li className='text-zinc-600 hover:text-black font-medium text-base' key={index}>● {pro}</li>
                ))}
            </ul>
        </div>
    ))}
      
    </>
  )
}

export default Aside
