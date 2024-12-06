import React, { useState } from 'react'
import Image from 'next/image'
import { useHover } from "@uidotdev/usehooks";

const Product = ({ imgSrc, title, text }) => {
  const [ref, hovering] = useHover();
  const [open, setOpen] = useState();
  return (
    <div className='relative' ref={ref} onTouchStart={() => setOpen(!open)}>
      <Image src={imgSrc} width={500} height={500} alt={'Photo of ' + title} className='w-full h-auto rounded-t-full' />
      <h3 className='text-center bg-[#5d6a91] mt-6 py-6 text-[#fdf8f2] text-2xl'>{title}</h3>
      {hovering && <p className='text-center absolute bottom-20 left-0 bg-[#5d6a91] text-[#fdf8f2] px-6 py-12'>{text}</p>}
      <p className='md:hidden text-center bg-[#5d6a91] text-[#fdf8f2] px-6 py-12'>{text}</p>
      <a className='relative z-50 cursor-pointer'><p className='w-full text-center py-5 text-[#5d6a91]'>Check Out Calendar</p></a>
    </div>
  )
}

export default Product