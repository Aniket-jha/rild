"use client";

import Image from "next/image";
import { useState } from "react";
import ContactBanner from "../../asset/contactBanner.png"
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form or show success message
  };

  return (
    <div className="w-full bg-white py-8 px-4 md:py-12 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <p className="text-blue-500 font-medium uppercase tracking-wide">CONTACT US</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Have Questions?</h1>
          <p className="text-gray-600 mt-2">We'd love to hear from you. Please fill out this form.</p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg">
          {/* Left - Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <Image
              src={ContactBanner}
              alt="Contact Us"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right - Form Section */}
          <div className="w-full md:w-1/2 bg-white p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Privacy Policy */}
              <div className="mb-6 text-sm text-gray-600">
                You agree to our friendly <a href="#" className="underline text-gray-800">privacy policy</a>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#2EDBBB] to-[#0D99FF]  text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 border border-gray-300 rounded-md transition-colors"
                >
                  Explore Deals
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}