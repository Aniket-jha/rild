import { CalendarDateRangeIcon, WalletIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const WhyInvest = () => {
  return (
    <div className='lg:px-16 lg:py-12 px-6 bg-[#F1F4FE] py-4'>
        <div className='flex items-start flex-col lg:flex-row gap-4 justify-between'>
            <div>
                <h3 className='lg:text-[3rem] text-[2rem] font-[NeueRegular]'>What is <span className='font-[NeueMedium]'> RILD?</span></h3>
                <p className='font-[NeueRegular] lg:text-[1rem] text-[0.8rem] tracking-wide'>We carefully select high-potential real estate opportunities, balancing risk and reward to help you <br /> grow your wealth with confidence.</p>
            </div>
            <div>
            <Link href='/form'> <button className="uppercase font-[NeueMedium]  flex items-center justify-center gap-3 rounded-lg shadow-md   ease-in duration-300  text-[8px] md:text-[12px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-gradient-to-r from-[#3ECF95] to-[#0068de]" ><CalendarDateRangeIcon className='lg:w-[30px] w-[20px]' /> Schedule a Expert Call </button></Link>
            </div>
        </div>
        <div className='grid grid-cols-1 gap-4 lg:gap-12 mt-6 lg:mt-12 lg:grid-cols-3 grid-flow-row '>
          <div className='bg-[#11193C] flex flex-col items-center justify-center rounded-xl px-8 py-8'>
            <WalletIcon className='bg-white rounded-full px-3 py-3 border-[5px] border-[#ebebeb] w-[50px] lg:w-[80px]' />
            <h3 className='lg:text-[3.5rem] text-[1.5rem] mt-4 font-[NeueMedium] tracking-wide text-white'>₹20,000 <span className='text-[.8rem]'>Cr+</span> </h3>
            <p className='text-white text-[.8rem] lg:text-[1rem] font-[NeueRegular]'>Assets Managed in 2 Years</p>
          </div>
          <div className='bg-[#11193C] flex flex-col items-center justify-center rounded-xl px-8 py-8'>
            <WalletIcon className='bg-white rounded-full px-3 py-3 border-[5px] border-[#ebebeb] w-[50px] lg:w-[80px]' />
            <h3 className='lg:text-[3.5rem] text-[1.5rem] mt-4 font-[NeueMedium] tracking-wide text-white'>₹20,000 <span className='text-[.8rem]'>Cr+</span> </h3>
            <p className='text-white text-[.8rem] lg:text-[1rem] font-[NeueRegular]'>Assets Managed in 2 Years</p>
          </div>
          <div className='bg-[#11193C] flex flex-col items-center justify-center rounded-xl px-8 py-8'>
            <WalletIcon className='bg-white rounded-full px-3 py-3 border-[5px] border-[#ebebeb] w-[50px] lg:w-[80px]' />
            <h3 className='lg:text-[3.5rem] text-[1.5rem] mt-4 font-[NeueMedium] tracking-wide text-white'>₹20,000 <span className='text-[.8rem]'>Cr+</span> </h3>
            <p className='text-white text-[.8rem] lg:text-[1rem] font-[NeueRegular]'>Assets Managed in 2 Years</p>
          </div>
        </div>
    </div>
  )
}

export default WhyInvest