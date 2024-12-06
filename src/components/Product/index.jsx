import React, { useState } from 'react'
import Image from 'next/image'
import { useHover } from "@uidotdev/usehooks";
import Link from 'next/link';

const Product = ({ imgSrc, title, text, link, linkMessage }) => {
  const [ref, hovering] = useHover();
  const [open, setOpen] = useState();
  return (
    <div className='relative' ref={ref} onTouchStart={() => setOpen(!open)}>
      <Image src={imgSrc} width={500} height={500} alt={'Photo of ' + title} className='w-full h-auto rounded-t-full' />
      <h3 className='text-center bg-[#5d6a91] mt-6 py-6 text-[#fdf8f2] text-2xl'>{title}</h3>
      {hovering && <p className='text-center absolute bottom-20 left-0 bg-[#5d6a91] text-[#fdf8f2] px-6 py-12'>{text}</p>}
      <p className='md:hidden text-center bg-[#5d6a91] text-[#fdf8f2] px-6 py-12'>{text}</p>
      <Link className='relative z-50 cursor-pointer' href={link}><p className='w-full text-center py-5 text-[#5d6a91]'>{linkMessage}</p></Link>
    </div>
  )
}

export default Product