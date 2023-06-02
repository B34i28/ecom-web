import React from 'react'
import { Mail , ShoppingCart } from "lucide-react"
 
import { Button } from "../../components/ui/button"

export default function Hero() {
  return (
    <div className='flex mt-3 w-full h-full'>
        <div className='w-1/2 pl-32 pt-32 items-center'>
            <span className='bg-blue-200 py-3 px-6  rounded-lg font-bold text-blue-800'>Sale 70%</span>
            <h1 className="text-4xl font-extrabold mt-7 lg:text-5xl">
                An Industrial Take on Streetwear
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
            </p>
            <Button className='mt-5 p-4 font-semibold'>
                <ShoppingCart className="mr-2  h-4 w-4" /> Start Shopping
            </Button>
        </div>
        <div className='w-1/2'>
            <img alt="Promotion pic" src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.a3d3ccd9.png&w=750&q=75"/>
        </div>
    </div>
  )
}
