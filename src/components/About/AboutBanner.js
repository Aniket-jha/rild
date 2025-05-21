import React from 'react'
import "./About.css"
import Link from 'next/link'
const AboutBanner = () => {
  return (
    <div className='aboutMainBannerBox flex-col h-[70vh] lg:h-[80vh] flex items-center justify-center'>
          <h2 className='font-[500] flex items-center text-center justify-center   w-[100%] lg:w-[60%] text-[1.3rem] px-3 py-1 text-white lg:py-2  lg:text-3xl'> <span className="lg:ml-6 ml-2 ">
            <span
              style={{
                background:
                  "linear-gradient(to right, #3ECF95 0%, #0068de 100%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
              className="py-2 text-[1.5rem] lg:text-[3rem]  inline"
            >
          The Future of Real Estate is Here
            </span> </span></h2>
            <p className='text-white lg:w-[50%] mt-2 text-center'>RILD is focused on exploring new asset classes, launching exclusive investment opportunities, and empowering the next generation of investors to thrive</p>
            <Link href='/form'> <button className="uppercase mt-8 flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueRegular] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-gradient-to-r from-[#3ECF95] to-[#0068de]" >Get Started</button></Link>
    </div>
  )
}

export default AboutBanner