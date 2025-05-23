import React from 'react'
import "./Property.css"
import Link from 'next/link'

const PropertyBanner = ({propertyBannerClass,propertyName,propertyLocation}) => {
  return (
    <div className={`${propertyBannerClass} flex items-start lg:px-12 lg:py-12 px-3 py-4 justify-end gap-3 flex-col h-[70vh] lg:h-[80vh]`} >
 <div className='flex items-start w-[100%] lg:w-[70%] justify-end gap-3 flex-col'>
            <h3 className='text-white text-[1.5rem] lg:text-[3rem]'>{propertyName}</h3>
            <p className='text-white font-[500] text-[0.8rem] lg:text-[1.5rem]'>{propertyLocation}</p>
            {/* <Link href='/form'> <button className="uppercase mt-4 lg:mt-8 flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueRegular] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-gradient-to-r from-[#3ECF95] to-[#0068de]" >Get Started</button></Link> */}
        </div>
    </div>
  )
}

export default PropertyBanner