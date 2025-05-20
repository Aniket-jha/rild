import React from 'react'
import Video from 'next-video';
import Link from 'next/link';
const HomeBanner = ({homeContent}) => {
  
  return (
    <div className=''>
    <div className='relative hidden lg:block' >
    <div className=' overflow-hidden'>
    <video className=' z-[999] w-[100vw]   lg:h-auto' playsInline={true}   loop="true" autoplay="autoplay" muted>
            <source src="https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2FUntitled%20design%20(2).mp4?alt=media&token=0c08eeeb-937e-4cbd-b8b5-2b0fcd87574c" type="video/mp4" />
        </video>
        <h1 className="text-white z-[-1] opacity-5 text-center text-[.5rem]" >Top Luxurious Co-Living Spaces </h1>
        </div>
        <div className='absolute left-0 bottom-0 flex items-center justify-center flex-col right-0 m-auto w-full text-center z-[3] top-[10px] lg:top-[5px]'>
            <h2 className=' my-2 font-[600]  xl:w-[100%] w-[100%] text-white font-[Neue Haas Grotesk Display Pro] px-3 py-3 lg:py-6 lg:text-6xl' >Build generational wealth  </h2>
            <h2 className='font-[600] flex items-center justify-center   xl:w-[100%] w-[60%] px-3 py-3 text-white lg:py-2  lg:text-6xl'>With   <span className="ml-6 ">
            <span
              style={{
                background:
                  "linear-gradient(to right, #3ECF95 0%, #0068de 100%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
              className="py-2 lg:text-6xl  inline"
            >
            RILD Invest
            </span> </span></h2>
            <p className='text-white pt-4 text-[1.5rem]'>High-Yield Real Estate, Reserved for <br /> the 1% Now Yours.</p>
              <div className="col-span-3 hidden md:col-span-1 md:flex items-center justify-end " >
       <Link href='/form'> <button className="uppercase mt-8 flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueRegular] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-gradient-to-r from-[#3ECF95] to-[#0068de]" >Explore Deals </button></Link>
       </div>
            </div>
       
      
    </div>
    <div className='relative lg:hidden block' >
    <div className=' overflow-hidden'>
    <video className=' z-[999] w-[100vw]   lg:h-auto' playsInline={true}   loop="true" autoplay="autoplay" muted>
            <source src="https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2FUntitled%20design%20(5).mp4?alt=media&token=cc0d3cdd-dee3-47fe-94fc-e1e689bf2309" type="video/mp4" />
        </video>
        
        </div>
        <div className='absolute left-0 bottom-0 flex items-center justify-center flex-col right-0 m-auto w-full text-center z-[3] top-[10px] lg:top-[5px]'>
            <h2 className=' my-2 font-[600]  xl:w-[100%] w-[100%] text-white font-[Neue Haas Grotesk text-[1.3rem] Display Pro] px-3 py-1 lg:py-6 lg:text-6xl' >Build generational wealth  </h2>
            <h2 className='font-[600] flex items-center justify-center   xl:w-[100%] w-[60%] text-[1.3rem] px-3 py-1 text-white lg:py-2  lg:text-6xl'>With   <span className="lg:ml-6 ml-2 ">
            <span
              style={{
                background:
                  "linear-gradient(to right, #3ECF95 0%, #0068de 100%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
              className="py-2 lg:text-6xl  inline"
            >
            RILD Invest
            </span> </span></h2>
            <p className='text-white pt-4 text-[1rem] lg:text-[1.5rem]'>High-Yield Real Estate, Reserved for <br /> the 1% Now Yours.</p>
              <div className="col-span-3 hidden md:col-span-1 md:flex items-center justify-end " >
       <Link href='/form'> <button className="uppercase mt-8 flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueRegular] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-gradient-to-r from-[#3ECF95] to-[#0068de]" >Explore Deals </button></Link>
       </div>
            </div>
       
      
    </div>
    </div>
  )
}

export default HomeBanner