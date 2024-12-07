import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='mt-24 py-6 border-t-gray-400 border-t md:grid grid-cols-3 space-y-12 md:space-y-0 mb-20 md:mb-0'>
      <p className='col-span-1 flex justify-center items-center text-center'>Lolitadc @ 2024. All Rights Reserved</p>

      <div className='col-span-1 flex justify-center items-center text-center'>
        <Image
          src="/lolitaRosado.png"
          width={500}
          height={500}
          alt="lolita blue logo"
          className='h-auto w-full md:h-14 md:w-auto '
        />
      </div>
      <div className='md:col-span-1 md:flex justify-center items-center w-full'>
        <a href='https://forms.gle/9GzM4RFztV7ozyT17' target='_blank'><h5 className='md:px-6 text-lg text-slate-800 md:mx-auto w-full text-center'>Contact Us</h5></a>
        <a><h5 className='hidden md:block px-6 text-lg text-slate-800 md:mx-auto w-full'>|</h5></a>
        <a href='https://www.instagram.com/_lolitadc' target='_blank'><h5 className='md:px-6 text-lg text-slate-800 mx-auto w-full text-center'>Follow Us</h5></a>
      </div>
    </div>
  )
}

export default Footer