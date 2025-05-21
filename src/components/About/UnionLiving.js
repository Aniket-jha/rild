import React from 'react'
import UnionMainImage from "../../asset/unionAbout.webp"
import Image from 'next/image'

const UnionLiving = () => {
  return (
    <div className='lg:px-12 bg-[#EBEBEB] lg:py-12 px-3 py-6 gap-6 items-center grid grid-cols-1 lg:grid-cols-2 grid-flow-row'>
        <div>
            <h3 className='lg:text-[1.5rem] text-[1.3rem]'>Our Co-Living Leasing Partner
            </h3>
            <h2 className='lg:text-[2.5rem] font-[600] text-[2rem]'>Union Living</h2>
            <div className='mt-3 '>
                <div className='lg:mb-3 mb-6'>
                    <h4 className='text-[1.2rem]'>What is Union Living?</h4>
                    <p className='lg:text-[.8rem] text-[.5rem]'>Union Living is a Gen-Z focused co-living brand offering fully-furnished, modern, and community-driven rental spaces for students and young professionals.                    </p>
                </div>
                <div className='lg:mb-3 mb-6'>
                    <h4 className='text-[1.2rem]'>What is Co-Living?</h4>
                    <p className='lg:text-[.8rem] text-[.5rem]'>Co-living is a shared housing concept where people rent private rooms with access to common spaces—promoting affordability, flexibility, and a built-in community.                    </p>
                </div>
                <div className='lg:mb-3 mb-6'>
                    <h4 className='text-[1.2rem]'>How Union Living Stands Out</h4>
                    <p className='lg:text-[.8rem] text-[.5rem]'>Beyond housing, Union Living curates social events, networking opportunities, and a vibrant community experience for its residents.                    </p>
                </div>
                <div className='lg:mb-3 mb-6'>
                    <h4 className='text-[1.2rem]'>Our Role with Union Living</h4>
                    <p className='lg:text-[.8rem] text-[.5rem]'>As our leasing partner, Union Living handles everything—from property setup and tenant sourcing to daily operations and community engagement.                    </p>
                </div>
                <div className='lg:mb-3 mb-6'>
                    <h4 className='text-[1.2rem]'>How the Partnership Works</h4>
                    <p className='lg:text-[.8rem] text-[.5rem]'>They partner with property owners, transform spaces into co-living homes, and manage the entire rental process—maximizing occupancy and rental returns.</p>
                </div>
            </div>
        </div>
        <div>
            <Image src={UnionMainImage} className='rounded-lg' />
        </div>
    </div>
  )
}

export default UnionLiving