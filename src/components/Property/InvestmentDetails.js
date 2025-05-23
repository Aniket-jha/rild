import React from 'react'
import { BiKey, BiRupee } from 'react-icons/bi'

import { GoGraph } from 'react-icons/go'
import { GrLocationPin } from 'react-icons/gr'

const InvestmentDetails = ({assetDetails,locationDetails,tenantsDetails,growthDetails}) => {
  return (
    <div className='lg:py-12 lg:px-12 bg-[#F1F4FE] py-4 px-3'>
            <h2 className='lg:text-[2.5rem] text-[1.2rem] '>Investment <strong> Details</strong></h2>
          
            <div className='grid lg:grid-cols-2 gap-4 lg:gap-12 mt-4 grid-flow-row grid-cols-1'>
            <div className='bg-white py-6 rounded-lg lg:px-8 px-6'>
                    <div className='bg-[#EBEBEB] w-[50px] rounded-lg h-[50px] flex items-center justify-center py-2 px-2'>
                        <BiRupee className='text-[1.3rem] ' />
                       
                    </div>
                    <div className='mt-12'>
                    <h3 className='lg:text-[1.8rem] text-[1rem] text-[#11193C] font-[500] my-1'>Asset</h3>
                    <p className='text-[#515151] lg:text-[1rem] text-[.8rem] font-[400]'>{assetDetails}</p>
                    </div>
                </div>
                <div className='bg-white py-6 rounded-lg lg:px-8 px-6'>
                    <div className='bg-[#EBEBEB] w-[50px] rounded-lg h-[50px] flex items-center justify-center py-2 px-2'>
                        <GrLocationPin className='text-[1.3rem] ' />
                       
                    </div>
                    <div className='mt-12'>
                    <h3 className='lg:text-[1.8rem] text-[1rem] text-[#11193C] font-[500] my-1'>Location</h3>
                    <p className='text-[#515151] lg:text-[1rem] text-[.8rem] font-[400]'>{locationDetails}</p>
                    </div>
                </div>
                <div className='bg-white py-6 rounded-lg lg:px-8 px-6'>
                    <div className='bg-[#EBEBEB] w-[50px] rounded-lg h-[50px] flex items-center justify-center py-2 px-2'>
                        <BiKey className='text-[1.3rem] ' />
                       
                    </div>
                    <div className='mt-12'>
                    <h3 className='lg:text-[1.8rem] text-[1rem] text-[#11193C] font-[500] my-1'>Tenants</h3>
                    <p className='text-[#515151] lg:text-[1rem] text-[.8rem] font-[400]'>{tenantsDetails}</p>
                    </div>
                </div>
                <div className='bg-white py-6 rounded-lg lg:px-8 px-6'>
                    <div className='bg-[#EBEBEB] w-[50px] rounded-lg h-[50px] flex items-center justify-center py-2 px-2'>
                        <GoGraph className='text-[1.3rem] ' />
                       
                    </div>
                    <div className='mt-12'>
                    <h3 className='lg:text-[1.8rem] text-[1rem] text-[#11193C] font-[500] my-1'>Growth</h3>
                    <p className='text-[#515151] lg:text-[1rem] text-[.8rem] font-[400]'>{growthDetails}</p>
                    </div>
                </div>
               
               
                
              
              
            </div>
    </div>
  )
}

export default InvestmentDetails