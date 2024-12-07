import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const photos = [
  '/images/IMG_3414.JPEG', '/images/IMG_3425.JPEG', '/images/IMG_3426.JPEG', '/images/IMG_3427.JPEG', '/images/IMG_3429.JPEG', '/images/IMG_3430.JPEG',
]



const Gallery = () => {
  return (<>
    <p className="mt-16 md:mt-32 text-[#5d6a91] text-4xl md:text-6xl text-center w-fit mx-auto font-[family-name:var(--font-catchy)]">GALLERY</p>
    <div className="md:w-2/3  md:mx-auto">
      <div className="md:hidden">
        {photos.map((value, index) => {
          return (
            <Image key={index} src={value} width={500} height={500} alt='image of catalog' className="h-auto w-auto mx-auto " />
          )
        })}
      </div>
      <Carousel className="hidden md:block w-full">
        <CarouselContent>
          {photos.map((value, index) => {
            return (<CarouselItem key={index} className="md:basis-1/2">
              <Image src={value} width={500} height={500} alt='image of catalog' className="h-auto w-auto mx-auto " />
            </CarouselItem>)
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </>
  )
}

export default Gallery