import React from 'react'
import Product from "@/components/Product";


const products = [
  { imgSrc: '/tags.jpg', title: 'Gift Tags' },
  { imgSrc: '/boot.jpg', title: 'Holiday Items' },
  { imgSrc: '/party.jpg', title: 'Custom Party' },
  { imgSrc: '/custom.jpg', title: 'Custom Orders' },
]

const OurProducts = () => {
  return (
    <div>
      <h4 className="text-[#5d6a91] text-6xl text-center w-full font-[family-name:var(--font-catchy)]">OUR PRODUCTS</h4>
      <div className="md:flex justify-around items-center w-full mt-12 space-y-24 md:space-y-0 md:space-x-12">
        {products.map((item, index) => {
          return (
            <Product key={index} imgSrc={item.imgSrc} title={item.title} />
          )
        })}
      </div>
    </div>
  )
}

export default OurProducts