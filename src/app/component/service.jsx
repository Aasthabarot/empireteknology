"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6"; // Keep this for the Learn More button
import { AiOutlineAudit, AiOutlineProject } from "react-icons/ai"; // Example icons
import { BiTransferAlt } from "react-icons/bi";
import { MdOutlineElectricalServices, MdSecurity } from "react-icons/md"; // Use this for Security Systems
import { RiSurveyLine } from "react-icons/ri"; // Test Report Services
import { IoIosConstruct } from "react-icons/io"; // Turnkey Project

const services = [
  {
    icon: <MdOutlineElectricalServices className="text-blue-600 text-4xl mb-4" />,
    name: "HT Services",
    description: "High Tension electrical services ensuring reliable power distribution.",
    id: "ht-services" 
  },
  {
    icon: <RiSurveyLine className="text-blue-600 text-4xl mb-4" />,
    name: "Test Report Services",
    description: "Professional test reports for electrical systems to ensure compliance and safety.",
     id: "test-report-services"
  },
  {
    icon: <BiTransferAlt className="text-blue-600 text-4xl mb-4" />,
    name: "Distribution Services",
    description: "Efficient distribution systems for optimal power supply management.",
    id: "distribution-services" 
  },
  {
    icon: <MdSecurity className="text-blue-600 text-4xl mb-4" />,
    name: "Security Systems",
    description: "Advanced security systems to safeguard your electrical installations.",
    id: "security-systems" 
  },
  {
    icon: <AiOutlineAudit className="text-blue-600 text-4xl mb-4" />,
    name: "Energy Audit",
    description: "Comprehensive energy audits to enhance efficiency and reduce costs.",
    id: "energy-audit" 
  },
  {
    icon: <IoIosConstruct className="text-blue-600 text-4xl mb-4" />,
    name: "Turnkey Project",
    description: "Complete end-to-end electrical solutions, from design to implementation.",
    id: "turnkey-project" 
  },
];

function Services() {
  return (
    <>
      <section className="bg-white">
        <div className=" container mx-auto lg:px-16 md:px-6 md:py-8 px-4">
          <h2 className="text-4xl font-bold text-blue-600 text-center mb-10">
            Our Services
          </h2>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-100 to-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                {service.icon}
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-700 mb-4">
                  {service.description}
                </p>
                <Link href={`/services#${service.id}`}>
                  <button className="flex items-center gap-2 py-2 px-4 border border-blue-600 text-blue-600 hover:bg-blue-50 transition duration-200 rounded-md">
                    Learn More <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
