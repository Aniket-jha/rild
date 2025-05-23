import React from 'react'
import "./Property.css"

const InvestmentOverview = () => {
  return (
    <div className='px-3 py-6 lg:px-12 lg:py-12'>
              <h3 className='lg:text-[3rem] text-[2rem]'>Investment <strong>Overview</strong></h3>
    
    <div className='grid grid-cols-2 lg:mt-12 mt-6 grid-flow-row lg:grid-cols-6 gap-8 '>
  
        <div className='flex items-center justify-center flex-col'>
            <h3 className='lg:text-[3rem] text-[1.5rem]'>33 <span className='text-[1rem]'>Crores</span></h3>
            <p className='lg:text-[1.1rem] text-[1rem]'>Asset Value</p>
        </div>
        <div className='flex items-center justify-center flex-col'>
            <h3 className='lg:text-[3rem] text-[1.5rem]'>72
           </h3>
            <p className='lg:text-[1.1rem] text-[1rem]'>No of Units</p>
        </div>
        <div className='flex items-center justify-center flex-col'>
            <h3 className='lg:text-[3rem] text-[1.5rem]'>46.5 <span className='text-[1rem]'>Lakhs </span></h3>
            <p className='lg:text-[1.1rem] text-[1rem]'>Investment Amount</p>
        </div>
       
        <div className='flex items-center justify-center flex-col'>
            <h3 className='lg:text-[3rem] text-[1.5rem]'>6% </h3>
            <p className='lg:text-[1.1rem] text-[1rem]'>Entry Yield</p>
        </div>
        <div className='flex items-center justify-center flex-col'>
            <h3 className='lg:text-[3rem] text-[1.5rem]'>7.4%</h3>
            <p className='lg:text-[1.1rem] text-[1rem]'>Average Yield</p>
        </div>
        <div className='flex items-center justify-center flex-col'>
            <h3 className='lg:text-[3rem] text-[1.5rem]'>9  <span className='text-[1rem]'>Years </span></h3>
            <p className='lg:text-[1.1rem] text-[1rem]'>Lease tenure</p>
        </div>
    </div>
    </div>
  )
}

export default InvestmentOverview