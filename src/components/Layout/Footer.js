"use client"
import React from 'react'
import Logo from "../../asset/logoMain.png"
import { IoMdArrowRoundUp } from 'react-icons/io'
import { PiLinkedinLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import Link from "next/link"
import Image from 'next/image';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
const Footer = () => {
  return (
    <div className='md:px-12   px-4 py-12 shadow-lg bg-[#11193C]' >
    <div className='md:grid grid-col-7 grid-flow-col' >
        <div className='col-span-1' >
            <Image className='w-[80px]' src={Logo} />
            <div className='mt-4 '>
                <div className='flex items-center my-4 justify-start gap-2 text-white'><PhoneIcon className='w-[25px]' />+91 8104744056</div>
                <div className='flex items-center my-4 justify-start gap-2 text-white'><EnvelopeIcon className='w-[25px]' />info@rild.com</div>
            </div>
        </div>
        <div className='col-span-5 flex lg:items-start text-[#ebebeb] justify-center pb-4 lg:flex-row flex-col gap-8  mt-3 md:mt-4' >
          
                   
                    
                        <Link href="/"><p> Home</p></Link>
                        <Link href="/properties"><p> Properties</p></Link>
                        <Link href="/community"><p> Community</p></Link>
                        <Link href="/ourstory"><p> Our Story</p></Link>
                        <Link href="/blogs"><p> Our Blogs</p></Link>
                
             
                
        </div>
        <div className='col-span-1 mt-3 md:mt-3' >
        <div className='col-span-1 flex items-center md:ml-[-25px] justify-center md:justify-start gap-3' >
           <a target='_blank' rel='noreferrer' href='https://www.instagram.com/union_living/?hl=en'> <PiInstagramLogo className='text-[35px] text-white' /></a>
            
            <a target='_blank' rel='noreferrer' href='https://www.youtube.com/@unioncoliving'>  <PiYoutubeLogo className='text-[35px] text-white' /> </a>
        </div>
           
        </div>
    </div>
    <div className='md:grid grid-cols-7 mt-6  grid-flow-col'>
        <div className='col-span-1' ></div>
        <div className='col-span-5 flex items-center justify-center' >
            <h3 className='font-[NeueRegular] text-white' >2024 Union Living. All right reserved</h3>
        </div>
        
    </div>
</div>
  )
}

export default Footer