import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment } from 'react-icons/ai';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Section 1: Logo and Description */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center mb-4">
            <img src="./ET Logo.jpg" className="h-10 md:h-12 mr-3" alt="Empire Teknology Logo" />
            <span className="text-lg md:text-xl font-bold">Empire Teknology</span>
          </div>
          <p className="text-sm text-center sm:text-left py-2 text-gray-600">
            Empowering Your Space with Reliable, Efficient Electrical Solutions – Bringing Innovation, Safety, and Quality to Every Connection.
          </p>
          <div className="flex justify-center sm:justify-start mt-2 space-x-3">
            <Link href="https://www.facebook.com/empireteknology/" legacyBehavior>
              <span className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                <FaFacebook className="text-xl" />
              </span>
            </Link>
            <Link href="https://www.instagram.com/empireteknology/" legacyBehavior>
              <span className="hover:text-pink-500 transition-colors duration-200 cursor-pointer">
                <FaInstagram className="text-xl" />
              </span>
            </Link>
            <Link href="https://www.youtube.com/channel/UCwXn9VVsmeIOfShqvsRSueg" legacyBehavior>
              <span className="hover:text-red-500 transition-colors duration-200 cursor-pointer">
                <FaYoutube className="text-xl" />
              </span>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=918238531785" legacyBehavior>
              <span className="hover:text-green-500 transition-colors duration-200 cursor-pointer">
                <FaWhatsapp className="text-xl" />
              </span>
            </Link>
          </div>
        </div>

        {/* Section 2: Company Links */}
        <div>
          <h3 className="text-md md:text-lg font-bold mb-3">Company</h3>
          <ul className="space-y-1">
            {["Home", "About", "Services", "Blog", "Career", "Contact"].map((item) => (
              <li key={item}>
               <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} legacyBehavior>
                  <span className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Terms of Service */}
        <div>
          <h3 className="text-md md:text-lg font-bold mb-3">Terms of Service</h3>
          <ul className="space-y-1">
            {["Disclaimer", "Privacy Policy", "Refund Policy", "Terms and Conditions"].map((policy) => (
              <li key={policy}>
                <Link href={`/${policy.toLowerCase().replace(/\s+/g, '-')}`} legacyBehavior>
                  <span className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                    {policy}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Contact Us */}
        <div>
          <h3 className="text-md md:text-lg font-bold mb-3">Contact</h3>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone className="text-xl text-gray-600 hover:text-blue-500 transition-colors duration-200" />
            <Link href="tel:+91-823-853-1785" legacyBehavior>
              <span className="text-md text-gray-600 hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                +91-823-853-1785
              </span>
            </Link>
          </div>
          <div className="flex items-center mt-2 space-x-2">
            <AiOutlineMail className="text-xl text-gray-600 hover:text-blue-500 transition-colors duration-200" />
            <Link href="mailto:empireteknology@gmail.com" legacyBehavior>
              <span className="text-md text-gray-600 hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                empireteknology@gmail.com
              </span>
            </Link>
          </div>
          <Link href="https://www.google.com/maps/search/F+-+24,+Jay-Ambe+Business+Hub,+Near+Bhasariya+Circle,+Baliyasan,+Mahesana,+Gujarat,+Bharat+-+382732/@23.4498428,72.3911476,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D" legacyBehavior>
            <span className="flex items-center mt-2 space-x-2 cursor-pointer">
              <AiOutlineEnvironment className="text-xl text-gray-600 hover:text-blue-500 transition-colors duration-200" />
              <span className="text-md text-gray-600 hover:text-blue-500 transition-colors duration-200">
                F - 24, Jay-Ambe Business Hub,<br />
                Near Bhasariya Circle, Baliyasan,<br />
                Mahesana, Gujarat, Bharat - 382732
              </span>
            </span>
          </Link>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto px-4 mt-6">
        <hr className="my-6 border-gray-300" />
        <span className="block text-sm text-gray-500 text-center">
          Copy Right © 2024 <Link href="https://flowbite.com/" legacyBehavior>
            <span className="hover:underline cursor-pointer">Empire Teknology</span>
          </Link>. All Rights Reserved.
        </span>
        <p className="text-center text-gray-400 text-xs mt-2">Created By Empire Teknology | Copy Google Sites Themes</p>
      </div>
    </footer>
  );
};

export default Footer;
