import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#0a2634] text-white py-6"> {/* Adjusted padding for the footer */}
<div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Section 1: Logo and Description */}
        <div className="flex-col items-center justify-center mx-auto">
          <div className="flex items-center"> {/* Reduced margin-bottom */}
            <img src="./ET Logo.jpg" className="h-10 md:h-10 mr-2" alt="Empire Teknology Logo" />
            <span className="text-lg md:text-xl font-bold">Empire Teknology</span> {/* Adjusted text size */}
          </div>
          <p className="text-sm text-center md:text-left py-3"> {/* Reduced text size */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div className="flex justify-center md:justify-start mt-2 space-x-2"> {/* Adjusted space */}
            <a href="#" className="hover:scale-125 transition-transform duration-200">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="hover:scale-125 transition-transform duration-200">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="hover:scale-125 transition-transform duration-200">
              <FaYoutube className="text-xl" />
            </a>
            <a href="#" className="hover:scale-125 transition-transform duration-200">
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>

        {/* Section 2: Company Links */}
        <div>
          <h3 className="text-md md:text-lg font-bold mb-2">Company</h3> {/* Adjusted text size */}
          <ul className="space-y-1"> {/* Reduced spacing between list items */}
            {["Home", "About Us", "Services", "Blog", "Career", "Contact Us"].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:scale-105 transition-transform duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Services */}
        <div>
          <h3 className="text-md md:text-lg font-bold mb-2">Services</h3> {/* Adjusted text size */}
          <ul className="space-y-1"> {/* Reduced spacing between list items */}
            {[
              "HT Services",
              "Test Report Services",
              "Distribution Services",
              "Low Voltage Application",
              "Security Systems",
              "Energy Audit",
              "Turnkey Project",
            ].map((service) => (
              <li key={service}>
                <a href={`/${service.toLowerCase().replace(/\s+/g, '-')}`} className="hover:scale-150 transition-transform duration-200">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Contact Us */}
        <div>
          <h3 className="text-md md:text-lg font-bold mb-2">Contact Us</h3> {/* Adjusted text size */}
          <div className="flex items-center space-x-2">
            <AiOutlinePhone className="text-xl" />
            <span className="text-md">+1 (234) 567-890</span>
          </div>
          <div className="flex items-center mt-1 space-x-2"> {/* Reduced margin-top */}
            <AiOutlineMail className="text-xl" />
            <span className="text-md">info@empireteknology.com</span>
          </div>
        </div>
      </div>
      <div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Copy Right © 2024 <a href="https://flowbite.com/" class="hover:underline">Empire Teknology,</a>All Rights Reserved. | Created By Empire Teknology | Copy Google Sites Themes</span>
      </div>
    </footer>

  );
};

export default Footer;
