import React from 'react'
import CiSearch from 'react-icons'

export default function Navbar() {
  return (
    <div className='flex w-ful bg-gray-400 justify-between p-9'>
        <div className=''>
            <img className='ml-16' alt="din market" width={150} height={45} src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.3267fed8.png&w=256&q=75" />
        </div>
        <div >
            <ul className='flex text-lg mr-9 gap-12'>
                <li>Female</li>
                <li>Male</li>
                <li>Kids</li>
                <li>All Products</li>
            </ul>
        </div>
        <div>
            <input className='border-2 rounded-md border-black mr-52 pl-2 pr-11' type='text' placeholder='🔍 What are you looking for' />
        </div>
       
    </div>
  )
}
