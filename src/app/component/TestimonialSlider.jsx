"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules"; // Remove Navigation as it's not needed
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";

// Light Theme Testimonial Slider with Full-Size Image and Text Below
function TestimonialSlider() {
  const testimonialData = [
    {
      photo: "/swiper/swiper-img1.jpg",
      text: "We are very pleased with the progress of the mobile app and web applications for our software.",
    },
    {
      photo: "/swiper/swiper-img2.jpg",
      text: "I’m very pleased with the work Ronak and his team at Stellarmind delivered.",
    },
    {
      photo: "/swiper/swiper-img3.jpg",
      text: "Ronak and his team are very professional and worked flexibly on our project.",
    },
  ];

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: -30,
        stretch: 5,
        depth: 300,
        modifier: 1,
      }}
      autoplay={{
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      pagination={{
        clickable: true, // Enable pagination dots
        dynamicBullets: true, // Enable dynamic bullet sizing
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]} // Include necessary modules
      className="swiper_container"
      style={{ height: 'auto' }} // Make height auto for flexibility
    >
      {testimonialData.map((item, key) => (
        <SwiperSlide key={key}>
          {/* Slide Container */}
          <div className="flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 rounded-lg text-center">
            {/* Full-Width Image */}
            <Image
              className="rounded-lg mb-4 object-cover"
              src={item.photo}
              width={500} // Set width for the image
              height={500} // Set height for the image
              alt={`Testimonial from ${item.text}`}
              style={{ width: "100%", height: "auto" }} // Ensure the image fills the container width
            />
            {/* Text */}
            <p className="text-gray-800 text-base md:text-lg font-medium mt-2 md:mt-4">{item.text}</p>
          </div>
        </SwiperSlide>
      ))}

      {/* Pagination Dots */}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}

export default TestimonialSlider;
