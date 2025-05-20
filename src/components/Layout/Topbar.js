import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  return (
    <Link href="/property/zest-coliving-chembur" >
    <div className='w-full text-center bg-[#000000] text-white py-2' >
        🚨 Launching Zest, 5 Mins from BKC 🚨
    </div>
    </Link>
  )
}

export default Topbar