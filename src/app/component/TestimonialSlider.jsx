"use client";
import React from "react";
import Link from "next/link";
import TestimonialSlider from "./TestimonialSlider"; // Adjust the import path based on your file structure

const HeroSection = () => {
  return (
    <section
      id="hero-area"
      className="bg-[#3b82f6] flex items-center justify-center mt-[70px] px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-24"
      style={{ minHeight: 'calc(100vh - 70px)' }} // Fixed height accounting for margin
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Left Content Section */}
        <div className="lg:w-1/2 w-full p-4 md:p-6 lg:p-8 text-center lg:text-left">
          <div className="header-content rounded-lg p-4 sm:p-6 md:p-8">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-snug sm:leading-tight">
              Reliable & Professional Electrical Services for Your Home or Business
            </h1>
            <p className="text-base sm:text-base md:text-lg text-white mb-6">
              At Empire Teknology, we provide top-notch electrical solutions with safety and efficiency in mind. From installations to repairs, our team is committed to powering your life.
            </p>
            <div className="button flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center lg:justify-start">
              <Link href="/services">
                <span className="btn primary-btn bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition">
                  Our Services
                </span>
              </Link>
              <Link href="/contact">
                <span className="btn primary-btn bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Swiper Section */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <div className="header-slider w-full max-w-xs sm:max-w-sm md:max-w-[800px] lg:max-w-full">
            <TestimonialSlider /> {/* Testimonial Slider included */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
