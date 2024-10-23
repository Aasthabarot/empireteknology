"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules"; // Correct module imports
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
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
    // {
    //   photo: "/swiper/swiper-4.jpg",
    //   text: "The Stellarmind team understood our idea and provided innovative suggestions.",
    // },
    // {
    //   photo: "/swiper/swiper-5.jpg",
    //   text: "I greatly appreciate Ronak's patience with various technical challenges.",
    // },
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
      navigation={true} // Enable navigation arrows
      pagination={{
        clickable: true, // Enable pagination dots
        dynamicBullets: true, // Enable dynamic bullet sizing
      }}
      modules={[EffectCoverflow, Navigation, Pagination, Autoplay]} // Add necessary Swiper modules
      className="swiper_container"
    >
      {testimonialData.map((item, key) => (
        <SwiperSlide key={key}>
          {/* Slide Container */}
          <div className="flex flex-col items-center justify-center p-8 rounded-lg bg-white shadow-md text-center">
            {/* Full-Width Image */}
            <Image
              className="rounded-lg mb-4 object-cover"
              src={item.photo}
              width={1000} // Set width for the image
              height={1000} // Set height for the image
              alt={`Testimonial from ${item.text}`}
              style={{ width: "100%", height: "auto" }} // Ensure the image fills the container width
            />
            {/* Text */}
            <p className="text-gray-800 text-lg font-medium mt-4">{item.text}</p>
          </div>
        </SwiperSlide>
      ))}

      {/* Pagination and Navigation Controls */}
      <div className="slider-controler text-xl">
        <div className="swiper-button-prev slider-arrow"></div> {/* Previous Arrow */}
        <div className="swiper-button-next slider-arrow"></div> {/* Next Arrow */}
      </div>
      {/* Pagination Dots */}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}

export default TestimonialSlider;
