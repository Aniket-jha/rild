"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import PropertyOne from "../../asset/1.png"
import PropertyTwo from "../../asset/2.png"
import PropertyThree from "../../asset/Untitled design - 2025-05-14T222024.404.png"
// Sample project data
const projects = [
  {
    id: 1,
    title: "House of Balewadi",
    subtitle: "Revolutionizing Real Estate Investments",
    location: "Balewadi",
    area: "1534",
    price: "Rs: 24L",
    priceType: "Onwards",
    image: PropertyOne,
  },
  {
    id: 2,
    title: "Hamlet",
    subtitle: "Revolutionizing Real Estate Investments",
    location: "Baner, Pune",
    area: "2100",
    price: "Rs: 45L",
    priceType: "Onwards",
    image: PropertyTwo,
  },
  {
    id: 3,
    title: "Zest",
    subtitle: "Revolutionizing Real Estate Investments",
    location: "Chembur",
    area: "1250",
    price: "Rs: 32L",
    priceType: "Onwards",
    image: PropertyThree,
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
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Current Projects</h2>
          <p className="text-gray-600 mt-2 w-full lg:max-w-2xl">
            We craft intuitive, secure websites that simplify complex investment data and build user trust.
          </p>
        </div>
        <button className="bg-emerald-500 hidden lg-block text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors">
          View All
        </button>
      </div>

      <div className="relative mt-8">
        <div className="overflow-hidden" ref={carouselRef}>
          <motion.div
            className="flex"
            initial={false}
            animate={{ x: -currentIndex * (carouselRef.current?.offsetWidth || 0) }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((project) => (
              <div key={project.id} className="min-w-full md:min-w-[80%] lg:min-w-[70%] pr-0 md:pr-6">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-[300px] md:h-[400px]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl md:text-2xl font-bold">{project.title}</h3>
                      <p className="text-white/80 text-sm">{project.subtitle}</p>
                      <p className="text-white/80 text-sm mt-1">{project.location}</p>

                      <div className="flex justify-between flex-col lg:flex-row items-start lg:items-center mt-4">
                        <div className="flex items-center space-x-8 lg:space-x-4">
                          <div>
                            <p className="text-white text-[1rem] lg:text-2xl font-bold">{project.area}</p>
                            <p className="text-white/80 text-xs">sqft</p>
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
            ))}
          </motion.div>
        </div>

        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-white"
          }`}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === projects.length - 1}
          className={`absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 ${
            currentIndex === projects.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-white"
          }`}
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="flex justify-center mt-4 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-emerald-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}