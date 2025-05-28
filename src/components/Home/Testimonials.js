"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TestimonialOne from "../../asset/test1.png";
import TestimonialTwo from "../../asset/test2.png";
import TestimonialThree from "../../asset/test3.png";

const testimonials = [
  {
    id: 1,
    quote: "Their attention to detail and understanding of user behavior helped us create a platform that's driving real engagement.",
    author: "Abhishek Singh",
    subAuthor: "Tarun Bingi",
    image: TestimonialOne
  },
  {
    id: 2,
    quote: "Their attention to detail and understanding of user behavior helped us create a platform that's driving real engagement.",
    author: "Abhishek Singh",
    subAuthor: "",
    image: TestimonialTwo
  },
  {
    id: 3,
    quote: "Their attention to detail and understanding of user behavior helped us create a platform that's driving real engagement.",
    author: "Abhishek Singh",
    subAuthor: "",
    image: TestimonialThree
  }
];

export default function Testimonials() {
  return (
    <div className="w-full bg-white lg:px-16 lg:py-12 px-6 py-12">
      <div className=" ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="lg:text-4xl text-[1.2rem] font-bold text-gray-900 mb-2">Hear from our Investors</h2>
          <p className="text-gray-600 lg:text-[1rem] text-[.8rem]">Smart investments. Stable growth. Passive income made easy.</p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.id} className="w-full">
              <div className="w-full">
                {/* Image */}
                <div className="w-full aspect-[4/3] relative mb-4">
                  <Image
                    src={item.image}
                    alt={`Testimonial by ${item.author}`}
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Quote */}
                <div className="p-4 border-l-4 border-gray-200">
                  <p className="text-sm text-gray-700 mb-4">"{item.quote}"</p>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-gray-900">-{item.author}</p>
                    {item.subAuthor && (
                      <p className="text-sm text-gray-600">{item.subAuthor}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
