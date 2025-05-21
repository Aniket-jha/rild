import React from 'react'
import AboutCTAImage from "../../asset/aboutCTA.png"
import Image from 'next/image'
import Link from 'next/link'
import { BiPhoneIncoming } from 'react-icons/bi'

const AboutCTA = () => {
  return (
    <div className='bg-[#F1F4FE] lg:px-16 lg:py-24 py-4 px-3'>
        <div className='bg-white px-4 lg:px-3 rounded-lg py-4 items-center grid grid-cols-1 lg:grid-cols-3 grid-flow-row'>
            <div className='col-span-1'>
                <Image src={AboutCTAImage} />
            </div>
            <div className='col-span-2'>
                <h4 className='text-[1rem] lg:text-[1.2rem]'>Join the Investment Revolution</h4>
                <h2 className='text-[1.5rem] lg:text-[2.5rem]'>Be Part of the Next Big Shift in Investing</h2>
                <p className='text-[.8rem] lg:text-[1rem]'>Join a new wave of investors leveraging data-driven insights, strategic foresight, and exclusive market access to stay ahead of the curve.</p>
                <div className='flex items-start lg:items-center justify-start flex-col lg:flex-row mt-8 gap-4'>
                <Link href='/form'> <button className="uppercase  flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueRegular] w-[300px] ease-in duration-300  text-[12px] md:text-[12px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[10px] md:py-[12px] md:px-[14px] text-[#FFFEFC] bg-gradient-to-r from-[#3ECF95] to-[#0068de]" >Explore Investment Opportunities</button></Link>
                <Link className='border-[1px] flex items-center justify-center border-[#515151] rounded-lg py-[8px] px-[24px] md:py-[12px] md:px-[24px] w-[300px] text-[12px] md:text-[12px] gap-3' href="/" ><BiPhoneIncoming className='text-[1.3rem]' />Schedule a Consultation Call</Link>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default AboutCTA