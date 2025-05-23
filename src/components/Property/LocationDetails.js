import React from 'react'

const LocationDetails = () => {
  return (
    <div className='px-3 py-4 lg:px-12 bg-white lg:py-12'>
    <h3 className='text-[1rem] lg:text-[1.5rem]'>Location Details</h3>
    <h2 className='text-[1.4rem] lg:text-[2.5rem]'>Prime Location Alert - <strong> Balewadi High Street, Pune!</strong></h2>
    <div className='grid grid-cols-1 mt-6 items-center lg:grid-cols-2 grid-flow-row'>
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.7244298311407!2d73.7666243!3d18.577751300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9fc2ce457f7%3A0xf25693f77b5cb9bb!2sHouse%20of%20Balewadi%20by%20Union%20Living!5e1!3m2!1sen!2sin!4v1747991241071!5m2!1sen!2sin" width="100%" height="450"  className='rounded-lg' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
            <h4 className='lg:text-[1.3rem] text-[0.8rem] my-6'><strong>1. Unbeatable Connectivity:</strong> Located right off Mumbai-Pune Expressway, with seamless access to Hinjawadi IT Park, Baner, and Aundh.
            </h4>
            <h4 className='lg:text-[1.3rem] text-[0.8rem] my-6'><strong>2. High Footfall Commercial Hub:</strong> Surrounded by premium offices, cafes, retail brands, and nightlife – ideal for both residential and investment purposes.
            </h4>
           
            <h4 className='lg:text-[1.3rem] text-[0.8rem] my-6'><strong>3. Rapid Growth Zone:</strong> One of Pune’s fastest-appreciating micro-markets with excellent rental yield and strong ROI potential.
            </h4>
        </div>
       
    </div>
</div>
  )
}

export default LocationDetails