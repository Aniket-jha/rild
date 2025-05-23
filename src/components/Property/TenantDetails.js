import Image from 'next/image'
import React from 'react'
import MainUnionImage from "../../asset/mainBanner.webp"

const TenantDetails = () => {
  return (
    <div className='px-3 py-8 lg:px-12 bg-white lg:py-12'>
        <h3 className='text-[1rem] lg:text-[1.5rem]'>Tenant Details</h3>
        <h2 className='text-[1.4rem] lg:text-[2.5rem]'>Managed By <strong> Union Living</strong></h2>
        <div className='grid grid-cols-1 items-center lg:grid-cols-2 grid-flow-row'>
            <div>
                <h4 className='lg:text-[1.3rem] text-[0.8rem] my-6'><strong>1. Institutional-Grade Operations:</strong> Ensures professional property management and upkeep.
                </h4>
                <h4 className='lg:text-[1.3rem] text-[0.8rem] my-6'><strong>2. High Occupancy:</strong> Maintains consistent occupancy through targeted acquisition of working professionals and students.
                </h4>
                <h4 className='lg:text-[1.3rem] text-[0.8rem] my-6'><strong>3. Curated Tenant Experience</strong> Offers a well-managed, community-driven living environment to ensure tenant satisfaction and retention.
                </h4>
                <h4 className='lg:text-[1.3rem] text-[0.8rem] my-6'><strong>4. Asset Value Protection:</strong> Regular maintenance, high standards of hygiene, and robust operational systems ensure long-term asset sustainability.
                </h4>
            </div>
            <div>
                <Image className='rounded-lg' src={MainUnionImage} />
            </div>
        </div>
    </div>
  )
}

export default TenantDetails