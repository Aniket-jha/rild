"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import PropertyOne from "../../asset/1.png"
import PropertyTwo from "../../asset/2.png"
import PropertyThree from "../../asset/Untitled design - 2025-05-14T222024.404.png"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaDotCircle } from "react-icons/fa";
// Sample project data
const projects = [
  {
    id: 1,
    title: "Elevate",
    subtitle: "Revolutionizing Real Estate Investments",
    location: "Viman Nagar,Pune",
    area: "7.25%",
    price: "50L",
    priceType: "Onwards",
    image: PropertyOne,
    oppurtunityType:"Live Opportunity"
  },
  {
    id: 2,
    title: "Bougain Studio",
    subtitle: "Revolutionizing Real Estate Investments",
    location: "Balewadi,Pune",
    area: "7.25%",
    price: "Rs: 40L",
    priceType: "Onwards",
    image: PropertyTwo,
      oppurtunityType:"Few Left"
  },
  {
    id: 3,
    title: "Hamlet",
    subtitle: "Revolutionizing Real Estate Investments",
    location: "Baner,Pune",
    area: "7.5%",
    price: "Rs: 44L",
    priceType: "Onwards",
    image: PropertyThree,
      oppurtunityType:"Sold Out"
  },
  {
    id: 4,
    title: "Truspace Premiera",
    subtitle: "Revolutionizing Real Estate Investments",
    location: "Koregaon Park, Pune",
    area: "7%",
    price: "Rs: 50L",
    priceType: "Onwards",
    image: PropertyThree,
      oppurtunityType:"Sold Out"
  },
  
]

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const carouselRef = useRef(null)

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="lg:px-16 lg:py-12 px-6 py-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mr-3 text-navy-900">Current  
          <span
              style={{
                background:
                  "linear-gradient(to right, #3ECF95 0%, #0068de 100%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
              className="py-2 ml-3   inline"
            >
              Live Opportunities
            </span>
            </h2>
          <p className="text-gray-600 mt-2 w-full lg:max-w-xl">
          Handpicked assets. Verified leases. Transparent returns. Designed for the modern real estate investor
          </p>
        </div>
        <button className="bg-emerald-500 hidden lg-block text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors">
          View All
        </button>
      </div>

       <div className='pt-4 ' >
            <Swiper
          spaceBetween={10}
          className="mt-6"
          draggable={true}
          breakpoints={{
            350: {
          width: 450,
          slidesPerView: 1.5,
        },
            450: {
          width: 450,
          slidesPerView: 1.5,
        },
        576: {
          width: 576,
          slidesPerView: 2,
        },
        780: {
          width: 780,
          slidesPerView: 3,
        },
         1200: {
          width: 1200,
          slidesPerView: 3.5,
        },
       
         1440:{
          width:1440,
          slidesPerView:1.8
        }
      }}
          autoplay={{
            delay: 2000,
            disableOnInteraction:true,
          }}
          loop={true}
          
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
            {projects.map((project) => (
              <SwiperSlide>
              <div key={project.id} className="min-w-full md:min-w-[80%] lg:min-w-[70%] pr-0 md:pr-6">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-[300px] md:h-[400px]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute flex items-center justify-start gap-2 font-[600] uppercase text-[0.7rem] top-[5%] z-[999] bg-white px-3 py-2 rounded-lg right-[2%]">
                     <FaDotCircle className="text-red-600 text-[1rem]" /> {project.oppurtunityType}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col px-3 py-6 justify-end lg:p-6">
                      <h3 className="text-white text-xl md:text-2xl font-bold">{project.title}</h3>
                      {/* <p className="text-white/80 text-sm">{project.subtitle}</p> */}
                      <p className="text-white/80 text-sm mt-1">{project.location}</p>

                      <div className="flex justify-between flex-col lg:flex-row items-start lg:items-center mt-4">
                        <div className="flex items-center space-x-8 lg:space-x-4">
                          <div className="flex items-center flex-col justify-center">
                            <p className="text-white text-[1rem] lg:text-2xl font-bold">{project.area}</p>
                            <p className="text-white/80 text-xs">Yield</p>
                          </div>
                          <div>
                            <p className="text-white text-[1rem] lg:text-2xl font-bold">{project.price}</p>
                            <p className="text-white/80 text-xs">{project.priceType}</p>
                          </div>
                        </div>
                        <button className="border  lg:mt-0 mt-3 border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors text-sm">
                          Explore Deals
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </SwiperSlide>
            ))}
        
      
       
         </Swiper>
         <div className='flex items-center mt-6 gap-6 justify-center' >
         
        {/* <button className="arrow-left  mt-3 arrow">
        <HiArrowLongRight className='text-[40px] text-[#FC7451]' />
        </button> */}
        </div>
            </div>
    </div>
  )
}