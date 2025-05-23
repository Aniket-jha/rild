"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'

import InvestmentOverview from '@/components/Property/InvestmentOverview'
import PropertyBanner from '@/components/Property/PropertyBanner'
import { ThemeProvider } from '@material-tailwind/react'
import BougainAssetImage from "../../asset/room.webp"

import React, { Suspense } from 'react'
import InvestmentDetails from '@/components/Property/InvestmentDetails'
import TenantDetails from '@/components/Property/TenantDetails'
import LocationDetails from '@/components/Property/LocationDetails'
import PropertyCTA from '@/components/Property/PropertyCTA'

const BougainMainPage = () => {
  return (
    <div>
        <ThemeProvider>
        <NavbarTwo />
        <div className=''>
    <Suspense fallback={<p>Loading video...</p>}>
       <PropertyBanner propertyBannerClass="bougainBanner" propertyName="Bougain Studio" propertyLocation="Balewadi, Pune" />
       </Suspense>
       <InvestmentOverview />
       <InvestmentDetails assetDetails=" 72 fully-furnished coliving units. This asset offers a unique blend of modern design, sustainable architecture, and institutional-grade property management. Designed for the next generation of urban renters, the property features thoughtfully planned studio units, a double-height designer lobby, landscaped gardens, and amenities like a cafeteria and recreational zones"
        locationDetails="Situated in the heart of Balewadi — Pune’s most dynamic residential and commercial corridor — The Bougain Studio lies in close proximity to tech parks, metro connectivity, and educational institutions"
         tenantsDetails="The asset is leased to Union Living, a fast-growing, premium coliving operator currently managing over 2,000 beds across Mumbai, Pune, and Navi Mumbai, with 2,500+ new beds signed. Union brings institutional-grade operations, a curated tenant experience, and consistent occupancy from working professionals and students alike"
          growthDetails="Balewadi is fast emerging as Pune’s next BKC — a premium mixed-use hub combining commercial offices, high-street retail, and upscale residential development. Major developers and institutional investors are actively acquiring land here, driving up property values. " />
      <TenantDetails />
      <LocationDetails />
      <PropertyCTA />
       
       <Footer />
       </div>
       </ThemeProvider>
    </div>
  )
}

export default BougainMainPage