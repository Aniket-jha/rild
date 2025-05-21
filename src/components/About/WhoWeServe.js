import React from 'react'
import { BiBriefcase, BiSmile, BiWallet } from 'react-icons/bi'

const WhoWeServe = () => {
  return (
    <div className='bg-[#11193C] lg:py-12 px-3 py-4 lg:px-12'>
        <div className='lg:w-[50%]'>
            <h2 className='lg:text-[2.4rem] text-[1.4rem] text-white'>Who <strong> We Serve</strong></h2>
            <p className='text-white lg:text-[1rem] text-[.8rem]'>We work with ambitious investors who value data-driven insights, exclusive access, and strategic positioning in emerging markets.</p>
        </div>
        <div className='grid grid-cols-1 gap-4 mt-6 lg:grid-cols-3 grid-flow-row'>
        <div className='bg-[#212d61ab] py-6 rounded-lg lg:px-8 px-6'>
                    <div className='bg-[#11193C] w-[50px] rounded-lg h-[50px] flex items-center justify-center py-2 px-2'>
                        <BiBriefcase  className='text-[1.3rem] text-white ' />
                       
                    </div>
                    <div className='mt-12'>
                    <h3 className='lg:text-[1.2rem] text-[1rem] text-[#ffffff] font-[500] my-1'>HNIs & Retail Investors</h3>
                    <p className='text-[#cccccc] lg:text-[0.8rem] text-[.7rem] font-[400]'>Seeking structured, secure real estate opportunities with proven returns.</p>
                    </div>
                </div>
                <div className='bg-[#212d61ab] py-6 rounded-lg lg:px-8 px-6'>
                    <div className='bg-[#11193C] w-[50px] rounded-lg h-[50px] flex items-center justify-center py-2 px-2'>
                        <BiSmile  className='text-[1.3rem] text-white ' />
                       
                    </div>
                    <div className='mt-12'>
                    <h3 className='lg:text-[1.2rem] text-[1rem] text-[#ffffff] font-[500] my-1'>First-Time Investors</h3>
                    <p className='text-[#cccccc] lg:text-[0.8rem] text-[.7rem] font-[400]'>Aged 30-40 looking to start their investment journey in real estate.</p>
                    </div>
                </div>
                <div className='bg-[#212d61ab] py-6 rounded-lg lg:px-8 px-6'>
                    <div className='bg-[#11193C] w-[50px] rounded-lg h-[50px] flex items-center justify-center py-2 px-2'>
                        <BiWallet  className='text-[1.3rem] text-white ' />
                       
                    </div>
                    <div className='mt-12'>
                    <h3 className='lg:text-[1.2rem] text-[1rem] text-[#ffffff] font-[500] my-1'>Passive Income Seekers</h3>
                    <p className='text-[#cccccc] lg:text-[0.8rem] text-[.7rem] font-[400]'>Investors seeking steady returns through exclusive investment drops.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default WhoWeServe