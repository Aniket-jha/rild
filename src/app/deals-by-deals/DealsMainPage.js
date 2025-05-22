"use client"
import DealsBanner from '@/components/DealsByDeals/DealsBanner'
import DealsCTA from '@/components/DealsByDeals/DealsCTA'
import PropertyList from '@/components/DealsByDeals/PropertyList'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense } from 'react'

const DealsMainPage = () => {
  return (
    <ThemeProvider>
    <NavbarTwo />
    <div className=''>
<Suspense fallback={<p>Loading video...</p>}>
   <DealsBanner />
   </Suspense>
    <PropertyList />
   <DealsCTA />
   <Footer />
   </div>
   </ThemeProvider>
  )
}

export default DealsMainPage