import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  return (
    <Link href="/property/zest-coliving-chembur" >
    <div className='w-full text-center bg-[#11193C] text-white py-2' >
        🚨 RILD's latest Yielding opportunity is live now. <strong>Invest Now</strong>  🚨
    </div>
    </Link>
  )
}

export default Topbar