"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import TestimonialSlider from "./TestimonialSlider"; // Adjust the import path based on your file structure

const HeroSection = () => {
  return (
    <section
      id="hero-area"
      className="text-blue-500 py-12 px-4 mx-auto bg-white rounded-lg mt-[150px] flex items-center justify-center" 
      style={{ maxWidth: '80%', minHeight: '400px' }} // Set maxWidth to 80% and minHeight for section height
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Container to hold both content and carousel in a responsive layout */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Content Section (50% width) */}
          <div className="w-full lg:w-1/2">
            <div className="header-content">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Corporate & Business Site Template by Ayro UI.
              </h1>
              <p className="text-lg mb-6">
                We are a digital agency that helps brands achieve their business
                outcomes. We see technology as a tool to create amazing things.
              </p>
              <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4"> {/* Stack buttons vertically on small screens */}
                <Link href="#">
                  <span className="btn primary-btn bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition">
                    Get Started
                  </span>
                </Link>

                <a
                  href="https://www.youtube.com/watch?v=r44RKWyfcFw"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition"
                >
                  <span className="btn icon-btn bg-white border border-blue-600 text-blue-600 rounded-full p-3 shadow-lg">
                    <i className="lni lni-play"></i>
                  </span>
                  <span className="text-lg font-semibold">Watch Intro</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Swiper Section (50% width) */}
          <div className="w-full lg:w-1/2 h-full">
            <div className="header-slider">
              <TestimonialSlider /> {/* Testimonial Slider included */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
