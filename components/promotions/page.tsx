import React from 'react'

export default function Promotion() {
  return (
    <div className='w-full h-full bg-slate-500'>
        <div className='text-center'>
            <p className='text-blue-700'>PROMOTIONS</p>
            <h1 className='font-bold text-3xl'>Our Promotions Events</h1>
        </div>
        <div className='flex'>
            <div className='w-1/2'>
                <img src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent1.6f776995.png&w=384&q=75' />
            </div>
            <div className='flex w-1/2'>
                <span>
                    <span className='bg-yellow-100 font-bold pb-1 pr-14'>Flex Sweatshirt</span>
                    <img className='bg-yellow-100' src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent2.b5f201ac.png&w=384&q=75' />
                </span>
                <img className='bg-gray-400' src='https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent3.798fa92b.png&w=384&q=75' />
            </div>
        </div>
    </div>
  )
}
