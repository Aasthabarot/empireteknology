"use client";
import React from "react";
import Link from "next/link";
import TestimonialSlider from "./TestimonialSlider";

const HeroSection = () => {
  return (
    <section
      id="hero-area"
      className="bg-[#3b82f6] text-white py-12 px-4 mx-auto flex items-center justify-center min-h-[400px]" // Added min-height for consistency
      style={{ maxWidth: "100%" }}
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-center space-y-8 
      lg:space-y-0 lg:space-x-12 lg:px-[40px] md:px-[30px] px-4 mt-[80px]">
        
        {/* Left Content Section (50% width) */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-snug">
            Powering Progress with Precision Electrical Solutions
          </h1>
          
          <p className="text-base sm:text-lg mb-8">
            At AEmpire Teknology, we provide comprehensive electrical services with a focus on safety, reliability, and innovation. From large-scale installations to bespoke electrical systems, we energize your projects with unmatched expertise.
          </p>
          
          {/* Button Container with padding-top */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start mt-8 space-x-4">
            <Link href="/services">
              <span className="bg-white text-blue-600 px-3 py-2 sm:px-8 sm:py-4 rounded-full font-bold shadow-lg hover:bg-gray-200 transition">
                Our Services
              </span>
            </Link>
            <Link href="/contact">
              <span className="bg-blue-600 text-white px-3 py-2 sm:px-8 sm:py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 transition">
                Contact Us
              </span>
            </Link>
          </div>
        </div>

        {/* Right Swiper Section (50% width) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-3xl"> {/* Increased width of the testimonial slider on large screens */}
            <TestimonialSlider /> {/* Testimonial Slider included */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
