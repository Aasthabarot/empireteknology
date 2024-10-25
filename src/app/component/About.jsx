"use client"; // Enable client-side rendering if needed for interactivity

import { useState } from "react"; // Import useState for managing tab state
import Image from "next/image"; // Import Next.js Image component for optimization

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("nav-who");

  return (
    <section className="about-area about-five py-16 px-4 lg:px-16">
      <div className="container mx-auto">
        <div className="row flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Image Section */}
          <div className="w-full lg:w-[50%] mb-10 lg:mb-0 px-4">
            <div className="about-image-five">
              <Image
                src="/about.jpeg" // Adjust the path to work with Next.js
                alt="About Us"
                width={500} // Adjusted width based on content
                height={400} // Adjusted height based on content
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-[50%] px-3">
            <div className="about-five-content bg-gradient-to-r from-blue-100 to-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"> {/* Added gray background and padding */}
              <h1 className="main-title font-bold text-3xl text-blue-500 mb-6">
              Commitment to Quality              </h1>
              <p className="text-md mb-4 text-gray-900">
                At <strong>EMPIRE TEKNOLOGY</strong>, we are dedicated to delivering quality engineering services in a professional and efficient manner, adhering to industrial standards.
              </p>
              <p className="text-md mb-4 text-gray-900">
                Our project management ensures timely installations within budget, enabling us to understand and exceed client expectations through effective collaboration.
              </p>
              <p className="text-md mb-4 text-gray-900">
                We strive to make working with us seamless through strong communication and proper project management tools for reporting and progress.
              </p>
              <p className="text-md mb-4 text-gray-900">
                Our capable team has years of experience across diverse areas of expertise, and <strong>EMPIRE TEKNOLOGY</strong> is a government-approved electrical contractor and engineer.
              </p>
              <p className="text-md text-gray-900 mb-4">
                We pride ourselves on our ability to adapt to the evolving needs of our clients, ensuring that we not only meet but exceed their expectations with innovative solutions tailored to their specific requirements.
              </p>
              <p className="text-md text-gray-900">
                Our commitment to safety, quality, and integrity forms the foundation of our operations, and we continually strive to enhance our services through ongoing training and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
