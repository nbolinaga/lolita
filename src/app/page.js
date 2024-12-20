'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import OurProducts from "@/components/OurProducts";
import Gallery from "@/components/Gallery";
import RequestButton from "@/components/RequestButton";
import { useDocumentTitle } from "@uidotdev/usehooks";
import { useFavicon } from "@uidotdev/usehooks";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react"



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
        <Gallery />
        <RequestButton />
      </main>
      <Footer />
      <Analytics />
      <div className="bg-[url('/bgElements.png')] md:bg-cover w-screen h-screen fixed left-0 top-0 opacity-20 md:opacity-50 z-10"></div>
    </div>
  );
}
