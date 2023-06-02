import React from 'react'

export default function Footer() {
  return (
    <div className='flex p-16 mt-2 bg-gray-400 w-full justify-evenly'>
        <div className='grid w-1/4 mr-24'>
        <img className="" alt="din market" width={180} height={30} src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.3267fed8.png&w=256&q=75" />
        <p className='mt-7 text-lg' >Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
        <h1 className='mt-7'>Icons</h1>
        </div>
        <div>
            <h1 className='font-bold text-lg w-1/4'>Company</h1>
            <ul className='mt-4 '>
                <li>About</li>
                <li className='mt-2'>Terms of Use</li>
                <li className='mt-2'>Privacy Policy</li>
                <li className='mt-2'>How it Works</li>
                <li className='mt-2'>Contact Us</li>
            </ul>
        </div>
        <div>
            <h1 className='font-bold text-lg w-1/4 '>Support</h1>
            <ul className='mt-4'>
                <li>Support Carrer</li>
                <li className='mt-2'>24h Service</li>
                <li className='mt-2'>Quick Chat</li>
            </ul>
        </div>
        <div className='mr-16'>
            <h1 className='font-bold text-lgw-1/4'>Contact</h1>
            <ul className='mt-4'>
                <li>Whatsapp</li>
                <li className='mt-2'>Support 24h</li>
            </ul>
        </div>
    </div>
  )
}
