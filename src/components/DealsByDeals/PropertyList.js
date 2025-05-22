import React from 'react'
import HamletImage from "../../asset/hamletCover.webp"
import BogainImage from "../../asset/bogain.webp"
import ElevateImage from "../../asset/Elv8.webp"
import Image from 'next/image'
import { GrLocationPin } from 'react-icons/gr'
import { FaLocationPin } from 'react-icons/fa6'

const PropertyList = () => {
  return (
    <div className='py-6 px-3 lg:py-12 bg-[#F1F4FE] lg:px-12'>
        <div className='w-[100%] lg:w-[40%]' >
            <h3 className='text-[1.2rem] capitalize lg:text-[2rem]'>What aligns with your<br /> financial goals?  <strong> </strong></h3>
            <h2 className='text-[1.5rem] font-[600] capitalize lg:text-[2.5rem]'>Let’s discover together!</h2>
        </div>
        <div className='grid grid-cols-1 mt-6 lg:mt-12 gap-6 lg:gap-12 lg:grid-cols-3'>
            <div className='rounded-lg'>
                <Image className='rounded-t-lg' src={HamletImage} />
                <div className="bg-white rounded-b-lg py-6 px-4">
                <h4 className='text-[#11193C] text-[1.2rem] lg:text-[1.5rem]'>Hamlet</h4>
                <p className='text-[#0068DE] flex items-center justify-start gap-2 mt-2'><FaLocationPin className='' />Baner, Pune</p>
                <div><p className='text-[#cf3e3e] bg-opacity-20 text-center px-6 mt-4 py-3 rounded-lg bg-[#ff2727]'>Sold Out</p></div>
                </div>
            </div>
            <div className='rounded-lg'>
                <Image className='rounded-t-lg' src={BogainImage} />
                <div className="bg-white rounded-b-lg py-6 px-4">
                <h4 className='text-[#11193C] text-[1.2rem] lg:text-[1.5rem]'>Bougain Studio</h4>
                <p className='text-[#0068DE] flex items-center justify-start gap-2 mt-2'><FaLocationPin className='' />Balewadi, Pune</p>
                <div><p className=' bg-opacity-20 text-center px-6 mt-4 py-3 rounded-lg text-[#FFFEFC] bg-gradient-to-r from-[#3ECF95] to-[#0068de]'>Explore Now</p></div>
                </div>
            </div>
            <div className='rounded-lg'>
                <Image className='rounded-t-lg' src={ElevateImage} />
                <div className="bg-white rounded-b-lg py-6 px-4">
                <h4 className='text-[#11193C] text-[1.2rem] lg:text-[1.5rem]'>Elevate</h4>
                <p className='text-[#0068DE] flex items-center justify-start gap-2 mt-2'><FaLocationPin className='' />Viman Nagar</p>
                <div><p className='text-[#3ECF95] bg-opacity-20 px-6 mt-4 py-3 text-center rounded-lg bg-[#3ECF95]'>Coming Soon</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyList