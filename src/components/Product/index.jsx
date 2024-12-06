import React from 'react'
import Image from 'next/image'

const Product = ({ imgSrc, title }) => {
  return (
    <div>
      <Image src={imgSrc} width={500} height={500} alt={'Photo of ' + title} />
      <h3 className='text-center bg-[#5d6a91] mt-12 py-6 text-[#fdf8f2] text-2xl'>{title}</h3>
    </div>
  )
}

export default Product