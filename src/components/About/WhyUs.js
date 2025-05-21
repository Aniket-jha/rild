import React from 'react'
import { GoTag } from "react-icons/go";
import { HiCurrencyRupee } from "react-icons/hi2";
import { GoGraph } from "react-icons/go";
import { GoPlusCircle } from "react-icons/go";
import { AiOutlineSafety } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";



const WhyUs = () => {
  return (
    <div className='lg:py-12 lg:px-12 bg-[#F1F4FE] py-4 px-3'>
            <h2 className='lg:text-[2.5rem] text-[1.2rem] '>What Makes <strong> RILD Different?</strong></h2>
            <p className='mt-2 text-[.8rem] lg:text-[1.1rem] text-gray-600 '>RILD redefines REIT investments with cutting-edge insights, <br className='hidden lg:block' /> secure transactions, and a streamlined experience</p>
            <div className='grid lg:grid-cols-3 gap-4 lg:gap-12 mt-4 grid-flow-row grid-cols-1'>
            <div className='bg-white py-6 rounded-lg lg:px-8 px-6'>
                    <div className='bg-[#EBEBEB] w-[50px] rounded-lg h-[50px] flex items-center justify-center py-2 px-2'>
                        <GoTag className='text-[1.3rem] ' />
                       
                    </div>
                    <div className='mt-12'>
                    <h3 className='lg:text-[1.2rem] text-[1rem] text-[#11193C] font-[500] my-1'>Small Ticket Size (₹10–50L)</h3>
                    <p className='text-[#515151] lg:text-[0.8rem] text-[.7rem] font-[400]'>Premium real estate investing made accessible for everyone.</p>
                    </div>
                </div>
                <div className='bg-white py-6 rounded-lg lg:px-8 px-6'>
                    <div className='bg-[#EBEBEB] w-[50px] rounded-lg h-[50px] flex items-center justify-center py-2 px-2'>
                        <HiCurrencyRupee className='text-[1.3rem] ' />
                       
                    </div>
                    <div className='mt-12'>
                    <h3 className='lg:text-[1.2rem] text-[1rem] text-[#11193C] font-[500] my-1'>Pre-Leased Assets</h3>
                    <p className='text-[#515151] lg:text-[0.8rem] text-[.7rem] font-[400]'>Earn stable rental income from Day 1 with high-yield, tenant-occupied properties. </p>
                    </div>
                </div>
                <div className='bg-white py-6 rounded-lg lg:px-8 px-6'>
                    <div className='bg-[#EBEBEB] w-[50px] rounded-lg h-[50px] flex items-center justify-center py-2 px-2'>
                        <GoGraph className='text-[1.3rem] ' />
                       
                    </div>
                    <div className='mt-12'>
                    <h3 className='lg:text-[1.2rem] text-[1rem] text-[#11193C] font-[500] my-1'>Exclusive Deals</h3>
                    <p className='text-[#515151] lg:text-[0.8rem] text-[.7rem] font-[400]'>Access handpicked, below-market opportunities curated for better returns.</p>
                    </div>
                </div>
                <div className='bg-white py-6 rounded-lg lg:px-8 px-6'>
                    <div className='bg-[#EBEBEB] w-[50px] rounded-lg h-[50px] flex items-center justify-center py-2 px-2'>
                        <GoPlusCircle className='text-[1.3rem] ' />
                       
                    </div>
                    <div className='mt-12'>
                    <h3 className='lg:text-[1.2rem] text-[1rem] text-[#11193C] font-[500] my-1'>High Liquidity</h3>
                    <p className='text-[#515151] lg:text-[0.8rem] text-[.7rem] font-[400]'>Exit easily with RILD’s end-to-end support and dedicated assistance.                    </p>
                    </div>
                </div>
                <div className='bg-white py-6 rounded-lg lg:px-8 px-6'>
                    <div className='bg-[#EBEBEB] w-[50px] rounded-lg h-[50px] flex items-center justify-center py-2 px-2'>
                        <AiOutlineSafety className='text-[1.3rem] ' />
                       
                    </div>
                    <div className='mt-12'>
                    <h3 className='lg:text-[1.2rem] text-[1rem] text-[#11193C] font-[500] my-1'>Rigorous Due Diligence</h3>
                    <p className='text-[#515151] lg:text-[0.8rem] text-[.7rem] font-[400]'>Invest confidently with 80-point legal, financial, and tenant vetting.                    </p>
                    </div>
                </div>
               
                
              
                <div className='bg-white py-6 rounded-lg lg:px-8 px-6'>
                    <div className='bg-[#EBEBEB] w-[50px] rounded-lg h-[50px] flex items-center justify-center py-2 px-2'>
                        <FaRegChartBar className='text-[1.3rem] ' />
                       
                    </div>
                    <div className='mt-12'>
                    <h3 className='lg:text-[1.2rem] text-[1rem] text-[#11193C] font-[500] my-1'>Data-Driven Insights</h3>
                    <p className='text-[#515151] lg:text-[0.8rem] text-[.7rem] font-[400]'>Leverage smart analytics to make informed, profitable investment decisions.</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default WhyUs