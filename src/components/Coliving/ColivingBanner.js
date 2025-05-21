import React from 'react'
import "./Coliving.css"
const ColivingBanner = () => {
  return (
    <div className='mainColivingBanner flex items-start lg:px-12 lg:py-12 px-3 py-4 justify-end gap-3 flex-col h-[80vh]'>
        <div className='flex items-start w-[100%] lg:w-[70%] justify-end gap-3 flex-col'>
            <h3 className='text-white text-[1.5rem] lg:text-[3rem]'>Transforming <strong> the Way, India Invests in </strong> Real Estate</h3>
            <p className='text-white font-[500] text-[0.8rem] lg:text-[1.5rem]'>Where Smart Living Meets Smart Investing</p>
            <div><p className='text-[#3ECF95] bg-opacity-20 px-6 mt-4 py-3 rounded-lg bg-[#3ECF95]'>Coming Soon</p></div>
        </div>
    </div>
  )
}

export default ColivingBanner