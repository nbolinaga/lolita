import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='md:flex justify-between items-end w-full py-6 border-b-gray-400 border-b'>
      <Link href='/'>
        <Image
          src="/lolita.png"
          width={500}
          height={500}
          alt="lolita blue logo"
          className='h-auto w-full md:h-14 md:w-auto'
        />
      </Link>
      <a href='/contact'><h5 className='w-fit mt-6 mx-auto md:mt-0 md:px-6 text-lg text-slate-800'>Contact Us</h5></a>
    </div>
  )
}

export default Navbar