import React from 'react'

const index = () => {
  return (<>
    <div className="relative mt-24 w-max md:hidden">
      <h4 className="relative text-2xl bg-[#bbc8e2] text-[#5d6a91] rounded-full px-12 py-12 mx-auto w-fit z-20">submit your request</h4>
      <div className="absolute -left-14 top-1/2 translate-y-1/2  w-screen h-2 bg-[#bbc8e2]  z-0"></div>
    </div>
    <div className="hidden md:block mt-24 w-full">
      <h4 className="relative text-4xl bg-[#bbc8e2] text-[#5d6a91] rounded-full px-12 py-12 mx-auto w-fit z-20">submit your request</h4>
      <div className=" -mx-32 w-screen h-2 bg-[#bbc8e2] -translate-y-[4.25rem] z-0"></div>
    </div>
  </>

  )
}

export default index