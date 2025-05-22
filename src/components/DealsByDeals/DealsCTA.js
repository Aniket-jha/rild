import React from 'react'
import "./Deals.css"
import Link from 'next/link'

const DealsCTA = () => {
  return (
    <div className='dealsCTABox h-[60vh] px-3 py-4 lg:px-12 lg:py-12 flex items-center justify-center'>
        <div className='flex items-center justify-center flex-col'>
            <h4 className='text-white text-[1.5rem] lg:text-[2.5rem] capitalize text-center font-[600]'>Pre-Leased Investment Drops Sell Out Fast! </h4>
            <p className='text-white text-[0.8rem] mt-3 lg:text-[1.3rem] text-center'>Pre-leased investments offer faster and more stable returns, especially <br className='hidden lg:block' /> ideal for investors looking for immediate rental income and lower risk.</p>

            <Link href='/form'> <button className="uppercase mt-4 lg:mt-8 flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueRegular] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-gradient-to-r from-[#3ECF95] to-[#0068de]" >Get Early Access</button></Link>
        </div>
    </div>
  )
}

export default DealsCTA