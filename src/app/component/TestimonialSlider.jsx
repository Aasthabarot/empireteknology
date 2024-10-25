"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";

// Light Theme Testimonial Slider with Full-Size Image and Text Below
function TestimonialSlider() {
  const testimonialData = [
    // {
    //   photo: "/swiper/swiper-img1.jpg",
    //   text: "We are very pleased with the progress of the mobile app and web applications for our software.",
    // },
    // {
    //   photo: "/swiper/swiper-1img.jpg",
    //   text: "M/S. AXELLISE AUTO ACCESSORIES PVT. LTD. - SAMETRA, MAHESANA, GUJARAT, BHARAT - 500X1 KVA",
    // },
    // {
    //   photo: "/swiper/swiper-2img.jpg",
    //   text: "M/S. SHREE SHYAM BIO ENERGY - NADASA, MAHESANA, GUJARAT, BHARAT - 315X1 KVA",
    // },
    // {
    //   photo: "/swiper/swiper-3img.jpg",
    //   text: "SUB-STATION GANTRY WORK",
    // },
    {
      photo: "/swiper/swiper-7.jpg",
      text: "CHIEF OFFICER NAGARPALIKA(STP) - DEESA - BANASKANTHA - GUJARAT - BHARAT - 800X2 KVA",
    },
    {
      photo: "/swiper/swiper-8.jpg",
      text: "CHIEF OFFICER NAGARPALIKA(STP) - DEESA - BANASKANTHA - GUJARAT - BHARAT - 800X2 KVA",
    },
    {
      photo: "/swiper/swiper-9.jpg",
      text: "M/S. BABU CHEMICALS - BHASARIYA - MAHESANA - GUJARAT - BHARAT - 250X1 KVA",
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
        delay: 2000, // Auto-slide every 3 seconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      }}
      pagination={{
        clickable: true, // Enable pagination dots
        dynamicBullets: true, // Enable dynamic bullet sizing
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="swiper_container"
      style={{ height: "auto" }}
    >
      {testimonialData.map((item, key) => (
        <SwiperSlide key={key}>
          {/* Slide Container */}
          <div className="flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 rounded-lg text-center">
            {/* Full-Width Image with responsive sizing */}
            <Image
              className="rounded-lg mb-4 object-cover"
              src={item.photo}
              width={500} // Full size on larger screens
              height={500} // Full size on larger screens
              alt={`Testimonial from ${item.text}`}
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
              }}
              sizes="(max-width: 640px) 75vw, (min-width: 641px) 100%" // Responsive sizes: smaller on mobile
            />
            {/* Text */}
            <p className="text-gray-800 text-sm sm:text-base md:text-lg font-medium mt-2 md:mt-4">
              {item.text}
            </p>
          </div>
        </SwiperSlide>
      ))}

      {/* Pagination Dots */}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}

export default TestimonialSlider;
