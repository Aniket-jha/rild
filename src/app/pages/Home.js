"use client"
import HomeBanner from '@/components/Home/HomeBanner.js'
import NavbarTwo  from '../../components/Layout/Navbar.js'
import React, { useEffect } from 'react'
import { Suspense } from 'react'

import Footer from '@/components/Layout/Footer.js'
import Head from 'next/head.js'
import { ThemeProvider } from "@material-tailwind/react";
import Script from 'next/script.js'
import WhyInvest from '@/components/Home/WhyInvest.js'
import ProjectsSection from '@/components/Home/CurrentProject.js'
import HowItWorks from '@/components/Home/HowItWorks.js'
import Investments from '@/components/Home/Investments.js'
import Testimonials from '@/components/Home/Testimonials.js'
import ContactPage from '@/components/Home/Contactpg.js'
const Home = () => {
  

  return (
    <div>
     
       <ThemeProvider>
        <NavbarTwo />
        <div className=''>
    <Suspense fallback={<p>Loading video...</p>}>
       <HomeBanner/>
       </Suspense>
       {/* <WhyInvest /> */}
       <ProjectsSection />  
       <HowItWorks />
       <Investments />
       <Testimonials />
       <ContactPage />
       {/* <Featured /> */}
       {/* <Amenities /> */}
       
       <Footer />
       </div>
       </ThemeProvider>
    </div>
  )
}

export default Home