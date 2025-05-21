"use client"
import { ThemeProvider } from "@material-tailwind/react";
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import React, { Suspense } from 'react'
import AboutBanner from "@/components/About/AboutBanner";
import WhyUs from "@/components/About/WhyUs";
import Strategy from "@/components/About/Strategy";
import UnionLiving from "@/components/About/UnionLiving";
import WhoWeServe from "@/components/About/WhoWeServe";
import AboutCTA from "@/components/About/AboutCTA";

const AboutMain = () => {
  return (
    <div>
     
    <ThemeProvider>
     <NavbarTwo />
     <div className=''>
 <Suspense fallback={<p>Loading video...</p>}>
    <AboutBanner />
    <WhyUs />
    </Suspense>
   <Strategy />
   <UnionLiving />
   <WhoWeServe />
   <AboutCTA />
    
    <Footer />
    </div>
    </ThemeProvider>
 </div>
  )
}

export default AboutMain