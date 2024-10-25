"use client";
import React from "react";
import dynamic from 'next/dynamic';

const DynamicGoogleForm = dynamic(() => import('./DynamicGoogleFormComponent'), { ssr: false });
const DynamicGoogleMap = dynamic(() => import('./DynamicGoogleMapComponent'), { ssr: false });



const ContactSection = () => {
  return (
    <>
      {/* ========================= contact-section start ========================= */}
      <section id="contact" className="contact-section bg-gray-50 py-10 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Contact Details Section */}
            <div className="w-full lg:w-1/3 bg-white rounded-lg p-6 shadow-md space-y-4">
              {/* Contact Info Blocks */}
              <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="contact-icon text-blue-600 text-3xl mr-4">
                    <i className="lni lni-phone"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-600">Contact</h4>
                    <p className="text-black">+91-823-853-1785</p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="contact-icon text-blue-600 text-3xl mr-4">
                    <i className="lni lni-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-600">Email</h4>
                    <p className="text-black">empireteknology@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="contact-icon text-blue-600 text-3xl mr-4">
                    <i className="lni lni-map-marker"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-600">Address</h4>
                    <p className="text-black">
                      F - 24, Jay-Ambe Business Hub, Near Bhasariya Circle, Baliyasan, Mahesana, Gujarat, Bharat - 382732
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="contact-icon text-blue-600 text-3xl mr-4">
                    <i className="lni lni-alarm-clock"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-600">Office Hours</h4>
                    <p className="text-black">10 AM - 5:30 PM</p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="contact-icon text-blue-600 text-3xl mr-4">
                    <i className="lni lni-credit-card"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-600">GSTIN</h4>
                    <p className="text-black">24ASUPP5216F3ZH</p>
                  </div>
                </div>
              </div>
            </div>

           
             
            <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-md">
              <DynamicGoogleForm />
            </div>

          </div>
        </div>
      </section>

      {/* ========================= map-section start ========================= */}
      <section className="map-section">
      <div className="map-container rounded-lg overflow-hidden shadow-md">
          <DynamicGoogleMap />
        </div>

      </section>
      {/* ========================= map-section end ========================= */}
    </>
  );
};

export default ContactSection;
