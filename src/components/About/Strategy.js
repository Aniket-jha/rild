import React from 'react'
import StrategyImage from "../../asset/strategyImage.png"
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { HiOutlineCubeTransparent } from "react-icons/hi2";
import { BiSolidOffer } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";
import { FaMagnifyingGlass, FaMagnifyingGlassMinus } from 'react-icons/fa6';

const Strategy = () => {
  return (
    <div className='lg:px-12 lg:py-12 py-4 px-3'>
        <div className='w-[100%] lg:w-[50%]'>
            <h3 className='lg:text-[2.5rem] text-[1.5rem]'>Our <strong>Winning Strategy</strong> </h3>
            <p className='text-[#515151] text-[.8rem] lg:text-[1rem]'>By combining data-driven insights with deep industry expertise, RILD uncovers untapped investment opportunities designed for high returns.            </p>
        </div>
        <div className='mt-3 lg:mt-12 grid grid-cols-1 gap-4 items-center lg:grid-cols-2'>
            <Image src={StrategyImage} />
            <div className='flex flex-col gap-4'>
                <div className='flex items-center rounded-lg justify-start gap-4 py-6 px-4 bg-[#11193C]'>
                    <div className='bg-white lg:w-[70px] w-[50px] h-[50px] rounded-lg lg:h-[70px] py-2 px-2'>
                        <FaMagnifyingGlass className='lg:text-[3rem] text-[2rem]' />
                    </div>
                    <div className='text-white'>
                        <h3 className='lg:text-[1.8rem] text-[1.2rem]'>Curate</h3>
                        <p className='lg:text-[1rem] text-[.8rem] font-[300]'>We identify high-potential, off-market assets with strong growth prospects.  </p>
                    </div>
                </div>
                <div className='flex items-center rounded-lg justify-start gap-4 py-6 px-4 bg-[#F1F4FE]'>
                    <div className='bg-white lg:w-[70px] w-[50px] h-[50px] rounded-lg lg:h-[70px] py-2 px-2'>
                        <HiOutlineCubeTransparent className='lg:text-[3rem] text-[2rem]' />
                    </div>
                    <div className='text-[#11193C]'>
                        <h3 className='lg:text-[1.8rem] text-[1.2rem]'>Structure</h3>
                        <p className='lg:text-[1rem] text-[.8rem] text-[#515151] font-[300]'>Every opportunity goes through a rigorous 80-point due diligence process.
                        </p>
                    </div>
                </div>
                <div className='flex items-center rounded-lg justify-start gap-4 py-6 px-4 bg-[#F1F4FE]'>
                    <div className='bg-white lg:w-[70px] w-[50px] h-[50px] rounded-lg lg:h-[70px] py-2 px-2'>
                        <BiSolidOffer className='lg:text-[3rem] text-[2rem]' />
                    </div>
                    <div className='text-[#11193C]'>
                        <h3 className='lg:text-[1.8rem] text-[1.2rem]'>Offer</h3>
                        <p className='lg:text-[1rem] text-[.8rem] text-[#515151] font-[300]'>We launch exclusive, limited-time investment drops tailored for maximum value.
                        </p>
                    </div>
                </div>
                <div className='flex items-center rounded-lg justify-start gap-4 py-6 px-4 bg-[#F1F4FE]'>
                    <div className='bg-white lg:w-[70px] w-[50px] h-[50px] rounded-lg lg:h-[70px] py-2 px-2'>
                        <BiSupport className='lg:text-[3rem] text-[2rem]' />
                    </div>
                    <div className='text-[#11193C]'>
                        <h3 className='lg:text-[1.8rem] text-[1.2rem]'>Support</h3>
                        <p className='lg:text-[1rem] text-[.8rem] text-[#515151] font-[300]'>From onboarding to exit, we provide full-service assistance every step of the way.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Strategy