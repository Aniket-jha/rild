import React, { useState } from 'react'
import { FaGlobe } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaTag } from "react-icons/fa";
import { FaUniversalAccess } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { CgInsights } from "react-icons/cg";
import BrowseImage from "../../asset/browse.png"
import InvestImage from "../../asset/invest.png"
import EarnImage from "../../asset/earn.png"
import SellImage from "../../asset/sell.png"
import Image from 'next/image';
const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("browse")
  const activeClass = "text-[#0068DE] "
  return (
    <div className='lg:px-16 bg-white lg:py-12 px-6 py-12'>
        <div className='lg:max-w-2xl w-[100%]'>
          <h3 className='lg:text-[1.2rem] text-[.8rem] lg:mb-3 mb-1 text-[#0068DE]'>How it Works</h3>
          <h2 className='lg:text-[2.7rem] text-[1.2rem] lg:mb-3 mb-1 lg:leading-[3.5rem]' >Invest in Real  <strong>Estate with Ease & Confidence</strong> </h2>
          <p className='text-[0.8rem] lg:text-[1rem]'>Invest in High-End Properties, Enjoy Passive Earnings, and Grow Your Wealth—No Hassle Involved</p>
        </div>
        <div className='lg:mt-12 mt-6 flex items-center gap-6  lg:gap-24 lg:pb-6 border-b-[1px] border-[#C8C8C8] justify-center'>
          <div onClick={()=>setActiveTab("browse")} className={`flex ${activeTab === "browse" ? "text-[#0068DE]" : "text-[black]"} text-[#0068DE] cursor-pointer   items-center justify-center gap-1 lg:gap-3 `}>
            <FaGlobe className='text-[0.8rem] lg:text-[1.5rem]' />
            <p className='text-[0.8rem] lg:text-[1rem]' >Browse</p>
          </div>
          <div onClick={()=>setActiveTab("invest")} className={`flex ${activeTab === "invest" ? "text-[#0068DE]" : "text-[black]"} text-[#0068DE]  cursor-pointer   items-center justify-center gap-1 lg:gap-3 `}>
            <FaWallet className='text-[0.8rem] lg:text-[1.5rem]'  />
            <p className='text-[0.8rem] lg:text-[1rem]'>Invest</p>
          </div>
          <div onClick={()=>setActiveTab("earn")} className={`flex ${activeTab === "earn" ? "text-[#0068DE]" : "text-[black]"} text-[#0068DE] cursor-pointer   items-center justify-center gap-1 lg:gap-3 `}>
          <RiMoneyRupeeCircleFill className='text-[0.8rem] lg:text-[1.5rem]'  />
            <p className='text-[0.8rem] lg:text-[1rem]' >Earn</p>
          </div>
          <div onClick={()=>setActiveTab("sell")} className={`flex ${activeTab === "sell" ? "text-[#0068DE]" : "text-[black]"} text-[#0068DE] cursor-pointer   items-center justify-center gap-1 lg:gap-3 `}>
            <FaTag className='text-[0.8rem] lg:text-[1.5rem]'  />
            <p className='text-[0.8rem] lg:text-[1rem]'>Sell</p>
          </div>
        </div>
        <div className='mt-6'>
          {activeTab==="browse" &&( 
            <div className='grid lg:grid-cols-2 items-center grid-cols-1 grid-flow-row'>
                <div className='lg:w-[80%] w-[100%]'>
                  <h4 className='lg:text-[1.8rem] text-[1.2rem] font-[700]'>Explore premier, top-tier exclusive properties. </h4>
                  <p className='my-2 text-[.8rem] lg:text-[1rem]'>Complete a quick form to access curated global properties and funds in minutes!</p>
                  <div className='grid grid-cols-2 gap-12 mt-8 grid-flow-row'>
                    <div className='flex items-center  justify-start gap-3'>
                      <FaUniversalAccess className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]'   />
                      <p className='text-[.8rem] lg:text-[1rem]'>Easy Access</p>
                    </div>
                    <div className='flex items-center  justify-start gap-3'>
                      <GrUserExpert className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]' />
                      <p className='text-[.8rem] lg:text-[1rem]'>Expert Selection</p>
                    </div>
                    <div className='flex items-center  justify-start gap-3'>
                    <FaGlobe className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]' />
                      <p className='text-[.8rem] lg:text-[1rem]' >Global Reach</p>
                    </div>
                    <div className='flex items-center  justify-start gap-3'>
                    <CgInsights className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]' />

                      <p className='text-[.8rem] lg:text-[1rem]'>Market Insight</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Image className='w-[90%]' src={BrowseImage} />
                </div>
            </div>)}
            {activeTab==="invest" &&( 
            <div className='grid lg:grid-cols-2 items-center grid-cols-1 grid-flow-row'>
                <div className='lg:w-[80%] w-[100%]'>
                  <h4 className='lg:text-[1.8rem] text-[1.2rem] font-[700]'>Redefining the way you invest—modern, intelligent, and forward-thinking.</h4>
                  <p className='my-2 text-[.8rem] lg:text-[1rem]'>Discover a seamless investment experience designed to match your ambitions—powered by innovation, guided by insight.</p>
                  <div className='grid grid-cols-2 gap-12 mt-8 grid-flow-row'>
                    <div className='flex items-center  justify-start gap-3'>
                      <FaUniversalAccess className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]'   />
                      <p className='text-[.8rem] lg:text-[1rem]'>Easy Access</p>
                    </div>
                    <div className='flex items-center  justify-start gap-3'>
                      <GrUserExpert className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]' />
                      <p className='text-[.8rem] lg:text-[1rem]'>Expert Selection</p>
                    </div>
                    <div className='flex items-center  justify-start gap-3'>
                    <FaGlobe className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]' />
                      <p className='text-[.8rem] lg:text-[1rem]'>Global Reach</p>
                    </div>
                    <div className='flex items-center  justify-start gap-3'>
                    <CgInsights className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]' />

                      <p className='text-[.8rem] lg:text-[1rem]'>Market Insight</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Image className='w-[90%]' src={InvestImage} />
                </div>
            </div>)}
            {activeTab==="earn" &&( 
            <div className='grid lg:grid-cols-2 items-center grid-cols-1 grid-flow-row'>
                <div className='lg:w-[80%] w-[100%]'>
                  <h4 className='lg:text-[1.8rem] text-[1.2rem] font-[700]'>Maximize your rental returns by investing in co-living spaces.</h4>
                  <p className='my-2 text-[.8rem] lg:text-[1rem]'>Tap into a fast-growing asset class offering steady rental income and strong capital appreciation.</p>
                  <div className='grid grid-cols-2 gap-12 mt-8 grid-flow-row'>
                    <div className='flex items-center  justify-start gap-3'>
                      <FaUniversalAccess className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]'   />
                      <p className='text-[.8rem] lg:text-[1rem]'>Easy Access</p>
                    </div>
                    <div className='flex items-center  justify-start gap-3'>
                      <GrUserExpert className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]' />
                      <p className='text-[.8rem] lg:text-[1rem]'>Expert Selection</p>
                    </div>
                    <div className='flex items-center  justify-start gap-3'>
                    <FaGlobe className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]' />
                      <p className='text-[.8rem] lg:text-[1rem]'>Global Reach</p>
                    </div>
                    <div className='flex items-center  justify-start gap-3'>
                    <CgInsights className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]' />

                      <p className='text-[.8rem] lg:text-[1rem]'>Market Insight</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Image className='w-[90%]' src={EarnImage} />
                </div>
            </div>)}
            {activeTab==="sell" &&( 
            <div className='grid lg:grid-cols-2 items-center grid-cols-1 grid-flow-row'>
                <div className='lg:w-[80%] w-[100%]'>
                  <h4 className='lg:text-[1.8rem] text-[1.2rem] font-[700]'>Achieve exceptional returns with RILD by securing the best deals in the market.</h4>
                  <p className='my-2 text-[.8rem] lg:text-[1rem]'>Partner with us for expert guidance, strategic insights, and profitable selling opportunities.</p>
                  <div className='grid grid-cols-2 gap-12 mt-8 grid-flow-row'>
                    <div className='flex items-center  justify-start gap-3'>
                      <FaUniversalAccess className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]'   />
                      <p className='text-[.8rem] lg:text-[1rem]'>Easy Access</p>
                    </div>
                    <div className='flex items-center  justify-start gap-3'>
                      <GrUserExpert className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]' />
                      <p className='text-[.8rem] lg:text-[1rem]'>Expert Selection</p>
                    </div>
                    <div className='flex items-center  justify-start gap-3'>
                    <FaGlobe className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]' />
                      <p className='text-[.8rem] lg:text-[1rem]'>Global Reach</p>
                    </div>
                    <div className='flex items-center  justify-start gap-3'>
                    <CgInsights className='lg:text-[1.7rem] text-[1.2rem] text-[#0068DE]' />

                      <p className='text-[.8rem] lg:text-[1rem]'>Market Insight</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Image className='w-[90%]' src={SellImage} />
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default HowItWorks