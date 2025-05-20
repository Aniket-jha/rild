"use client"

import Image from "next/image"
import img from "../../asset/hamlet.png"

export default function ColivingAbout() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
      <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-12">
        {/* Left side image */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-lg overflow-hidden h-auto  shadow-lg">
            <img
              src="../../asset/hamlet.png"
              alt="Modern coliving space lobby" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Right side content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Why Choose Our Coliving Fund?
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Professional Management
              </h3>
              <p className="text-gray-600">
                Expert property management ensures optimal occupancy rates and maintenance.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Premium Locations
              </h3>
              <p className="text-gray-600">
                Strategic investments in high-growth urban areas with strong rental demand.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Attractive Returns
              </h3>
              <p className="text-gray-600">
                Target annual returns of 8-12% through rental income and property appreciation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}