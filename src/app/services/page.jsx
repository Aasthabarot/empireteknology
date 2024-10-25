"use client";
import React from "react";
import Link from "next/link"; // For form links
import Header from '../component/Header';
import Footer from "../component/Footer";
import { AiOutlineAudit } from "react-icons/ai"; // Energy Audit icon
import { BiTransferAlt } from "react-icons/bi"; // Distribution Services
import { MdOutlineElectricalServices, MdSecurity } from "react-icons/md"; // HT Services, Security Systems
import { RiSurveyLine } from "react-icons/ri"; // Test Report Services
import { IoIosConstruct, IoIosFlash } from "react-icons/io"; // Turnkey Project & Low Voltage
import { FaCheckCircle } from "react-icons/fa"; // Check circle icon for pointers

const services = [
  {
    icon: <MdOutlineElectricalServices className="text-blue-600 text-[100px] mb-4" />,
    name: "HT Services",
    description: `High Tension (HT) services involve the installation and maintenance of electrical systems that handle voltages above 11kV. 
    These services ensure safe and efficient distribution of electricity for industrial and commercial applications. 
    We focus on reliability, safety, and long-term performance for your high voltage needs.`,
    points: [
      "Installation and maintenance of high voltage systems",
      "Ensuring compliance with safety regulations",
      "Expertise in industrial and commercial applications"
    ],
    formLinks: [
      { name: "Application Form for IFP Portal", url: "https://docs.google.com/forms/d/e/1FAIpQLScy_KuznWncsBy4PwBS2VaYeebdYsBu3n5kj3FNup03OPiegg/viewform" },
      { name: "Application Form for Transformer & Protection Devices", url: "https://docs.google.com/forms/d/e/1FAIpQLSeZcpct0B16Olg5ix5wP-PTHD28zej5y6DfjORfsnQYxxnl9A/viewform" },
      { name: "Application Form for DG Set (Diesel Generator Set)", url: "https://docs.google.com/forms/d/e/1FAIpQLSfxBjlPvJX5Knea5h_r8JHEBH6VTdqD3rPXrgvWRmG1KbunyA/viewform" }
    ],
    id: "ht-services"
  },
  {
    icon: <RiSurveyLine className="text-blue-600 text-[100px] mb-4" />,
    name: "Test Report Services",
    description: `Our test report services provide comprehensive testing and documentation for electrical systems to ensure compliance 
    with industry standards. We deliver detailed reports covering system performance, safety, and operational efficiency.`,
    points: [
      "Thorough testing of electrical installations",
      "Detailed compliance documentation",
      "Reporting on performance and safety metrics"
    ],
    formLinks: [
      { name: "Electrical Installation Testing Services(1-Phase)", url: "https://docs.google.com/forms/d/e/1FAIpQLSdLHIPKa7J1EAaTy-IqFPps7s2dnL79bXJ_BAt0bDg9Fn_rnw/viewform" },
      { name: "Electrical Installation Testing Services(3-Phase)", url: "https://docs.google.com/forms/d/e/1FAIpQLSd9-QgIaVFkby2QPhtQz5xMWPJ9XZCP8ObK8kRSpF8YWlh62w/viewform" },
    ],
    id: "test-report-services" 
  },
  {
    icon: <BiTransferAlt className="text-blue-600 text-[100px] mb-4" />,
    name: "Distribution Services",
    description: `Our Distribution Services encompass a wide range of solutions to ensure effective and efficient power delivery. Here’s what we offer:`,
    points: [
      "Over-Head & Under-Ground Transmission Lines: Installation and maintenance of reliable transmission lines for optimal electricity distribution.",
      "Transformer Centers: Design and implementation of transformer centers to facilitate voltage regulation and distribution.",
      "Sub-Stations: Construction and operation of substations that play a critical role in the transmission and distribution network.",
      "Control Panels: Custom-designed control panels for managing and monitoring electrical systems efficiently.",
      "Power & Network Cabling: Comprehensive cabling solutions to ensure safe and effective power and data transmission.",
      "Generator Sets: Provision and maintenance of generator sets to provide backup power solutions when needed.",
      "Solar Networks: Installation of solar networks to harness renewable energy for sustainable power solutions.",
      "Earthing Systems: Development of earthing systems for safety and performance of electrical installations.",
      "Residential Projects: Tailored distribution solutions for residential buildings ensuring safety and reliability.",
      "Commercial Projects: Customized distribution services to meet the unique demands of commercial establishments.",
      "Industrial Projects: Specialized distribution solutions for industrial applications, focusing on efficiency and safety.",
      "Electrification Projects: Comprehensive electrification services to ensure safe and reliable power supply in various environments."
    ],
    formLinks: [],
      id: "distribution-services",
  },
  
  {
    icon: <MdSecurity className="text-blue-600 text-[100px] mb-4" />,
    name: "Security Systems",
    description: `Our Security Systems encompass a comprehensive range of solutions designed to protect your assets and ensure safety. 
    This includes advanced monitoring and control solutions, such as CCTV, access control, and alarm systems, to safeguard your electrical installations. 
    We provide both physical and digital protection.`,
    points: [
      "Fire Alarm Systems: Early detection and prompt response to fire-related emergencies, minimizing potential damage and ensuring the safety of occupants.",
      "Smoke Detector Systems: Continuous monitoring for smoke and rapid evacuation in case of fire, providing early warning and reducing false alarms.",
      "Fire-Proof Electrification: Installation of electrical systems designed to withstand high temperatures during fire events, protecting sensitive equipment.",
   
    ],
    formLinks: [],
    id: "security-systems",
    
  },
  {
    icon: <AiOutlineAudit className="text-blue-600 text-[100px] mb-4" />,
    name: "Energy Audit",
    description: `Our energy audit services help you identify energy inefficiencies and optimize consumption. We provide detailed insights and recommendations for your electrical installations.`,
    points: [
      "Electrical Energy Utilization Control Audit to assess the efficiency of your energy consumption.",
      "In-depth electrical audit for your installations, analyzing energy usage patterns and identifying areas for conservation.",
      "Comprehensive Energy Conservation Observation Report with suggestions for improving energy efficiency and controlling consumption.",
      "Detailed electrical diagrams of existing systems, including drawings of all switch gears for emergency precautions."
    ],
    formLinks: [
  
    ],
   id: "energy-audit",
  },
  
  {
    icon: <IoIosFlash className="text-blue-600 text-[100px] mb-4" />,
    name: "Low Voltage Application",
    description: `Our low voltage applications ensure reliable power distribution for residential, commercial, and industrial systems operating at lower voltages.`,
    points: [
      "Design and installation of low voltage systems for hospitality applications, enhancing guest experience and operational efficiency.",
      "Civil & infrastructure management systems ensuring safe and effective power distribution for critical infrastructure.",
      "Comprehensive security systems for residential, commercial, and industrial spaces, safeguarding assets and people.",
      "Automation systems tailored for residential, commercial, and industrial environments to improve efficiency and convenience.",
      "Server and access control solutions for secure and efficient data management and facility access.",
      "Public address speaker applications designed for effective communication in various settings.",
    ],
    formLinks: [
      
    ],
    id: "low-voltage-application" ,
  },
  
  {
    icon: <IoIosConstruct className="text-blue-600 text-[100px] mb-4" />,
    name: "Turnkey Project",
    description: `Our turnkey project services offer end-to-end electrical solutions, from initial concept to final commissioning. We provide economical and assured quality solutions for your projects.`,
    points: [
      "Comprehensive management of your project from start to finish.",
      "Expert design, procurement, and installation services.",
      "Post-installation support to ensure ongoing performance and satisfaction."
    ],
    formLinks: [
     
    ],
    id: "turnkey-project",
  }
  
];

function Servicepage() {
  return (
    <>
      <Header />
      <section className="bg-gray-100 py-16 container mx-auto lg:px-16 lg:py-16 md:p-4 p-4">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-600 text-center mb-12 mt-[90px]">
            Our Services
          </h2>

          {/* Service Listing - One per row */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
              id={service.id} 
                key={index}
                className="bg-gradient-to-r from-blue-100 to-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                {/* Icon */}
                <div className="md:w-[20%] flex justify-center items-center md:justify-center">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="md:w-[80%]">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {service.description}
                  </p>

                  {/* Points List */}
                  <ul className="list-disc pl-5 mb-4">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start mb-2 text-gray-700">
                        <FaCheckCircle className="text-blue-600 mr-2" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Form Links */}
                  <div className="space-y-2">
                    {service.formLinks.map((link, i) => (
                      <div key={i}>
                        <Link href={link.url} className="text-blue-600 hover:underline">
                          {link.name} - Click Here
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Servicepage;
