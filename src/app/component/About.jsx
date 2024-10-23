"use client"; // Enable client-side rendering if needed for interactivity

import { useState } from "react"; // Import useState for managing tab state
import Image from "next/image"; // Import Next.js Image component for optimization

const AboutPage = () => {
  // State for managing active tab
  const [activeTab, setActiveTab] = useState("nav-who");

  return (
    <section className="about-area about-five py-16 px-4 lg:px-16">
      <div className="container mx-auto">
        <div className="row flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Image Section */}
          <div className="w-[50%] col-12 mb-10 lg:mb-0 px-4">
            <div className="about-image-five">
              <Image
                src="/about.jpeg" // Adjust the path to work with Next.js
                alt="About Us"
                width={600} // Increased width
                height={400} // Increased height
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-[50%] col-12 px-3">
            <div className="about-five-content">
             
              <h1 className="main-title font-bold text-4xl text-blue-500 mb-6">Our team comes with the experience and knowledge</h1>
              
              {/* Tabbed Content Section */}
              <div className="about-five-tab">
                
                {/* Tab Buttons */}
               

                {/* Tab Contents */}
                <div className="tab-content text-black text-xl">
                  <div
                    className={`tab-pane fade ${activeTab === "nav-who" ? "show active" : ""}`}
                    id="nav-who"
                    role="tabpanel"
                  >
                    <p className="text-md mb-4 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.</p>
                    <p className="text-md ">There are many variations of passages of Lorem Ipsum available, but the majority have in some form, been injected with humor.</p>
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === "nav-vision" ? "show active" : ""}`}
                    id="nav-vision"
                    role="tabpanel"
                  >
                    <p className="text-md mb-4 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.</p>
                    <p className="text-md ">There are many variations of passages of Lorem Ipsum available, but the majority have in some form, been injected with humor.</p>
                  </div>
                 
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
