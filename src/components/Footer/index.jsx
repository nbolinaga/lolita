import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='mt-24 py-6 border-t-gray-400 border-t md:grid grid-cols-3 space-y-12 md:space-y-0'>
      <p className='col-span-1 flex justify-center items-center text-center'>Lolitadc @ 2024. All Rights Reserved</p>

      <div className='col-span-1 flex justify-center items-center text-center'>
        <Image
          src="/lolitaRosado.png"
          width={500}
          height={500}
          alt="lolita blue logo"
          className='h-14 w-auto '
        />
      </div>
      <div className='col-span-1 md:flex justify-center items-center'>
        <a href='/contact'><h5 className='px-6 text-lg text-slate-800 mx-auto w-fit'>Contact Us</h5></a>
        <a href='/contact'><h5 className='hidden md:block px-6 text-lg text-slate-800 mx-auto w-fit'>|</h5></a>
        <a href='/contact'><h5 className='px-6 text-lg text-slate-800 mx-auto w-fit'>Follow Us</h5></a>
      </div>
    </div>
  )
}

export default Footer