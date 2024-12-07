'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import OurProducts from "@/components/OurProducts";
import RequestButton from "@/components/RequestButton";
import { useDocumentTitle } from "@uidotdev/usehooks";
import { useFavicon } from "@uidotdev/usehooks";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const photos = [
  '/images/IMG_3414.JPEG', '/images/IMG_3424.JPEG', '/images/IMG_3425.JPEG', '/images/IMG_3426.JPEG', '/images/IMG_3427.JPEG', '/images/IMG_3429.JPEG', '/images/IMG_3430.JPEG',
]


export default function Home() {
  useDocumentTitle("Lolita | Home");
  const [favicon] = useState(
    "/lolitaCircle.png"
  );

  useFavicon(favicon);
  return (
    <div className="relative bg-[#fdf8f2] min-h-screen py-6 px-32  font-[family-name:var(--font-lato)] overflow-x-hidden">
      <Navbar />
      <main className="relative z-50 flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Banner />
        <OurProducts />
        <div className="w-full md:w-1/2 mx-auto md:mt-32">
          <p className="mb-10  text-[#5d6a91] text-6xl text-center w-full font-[family-name:var(--font-catchy)]">Gallery</p>
          <Carousel className="w-full">
            <CarouselContent>
              {photos.map((value, index) => {
                return (<CarouselItem key={index}>
                  <Image src={value} width={500} height={500} alt='image of catalog' className="h-auto w-auto mx-auto" />
                </CarouselItem>)
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </div>
        <RequestButton />
      </main>
      <Footer />
      <Analytics />
      <div className="bg-[url('/bgElements.png')] md:bg-cover w-screen h-screen fixed left-0 top-0 opacity-20 md:opacity-50 z-10"></div>
    </div>
  );
}
