"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import Link from "next/link";
import "../style.css"; // Assuming you have styles defined in this file
import Header from '../component/Header';
import Footer from "../component/Footer";

// Static job and trainee program data
const careerData = [
  {
    name: "SITE TECHNICIAN",
    type: "Job",
    descPoints: [
      "Education : ITI/Diploma",
      "Job Location : Mahesana, Gujarat",
      "Experience : 3-Years ",
      "Basic Knowledge of Computer",
      "Can Ride Two-Wheeler & Have a Valid License of Govt. Transport Department",
      "Field Work : 90%",
      "Basic Knowledge of Smart Phone, Accounting, Banking, Inventory Management will get Priority",
    ],
  },
];

// Trainee Program data
const traineeData = [
  {
    name: "Site Technician",
    vacancies: "02",
    education: "ITI(Electrician)",
    duration: "3 Year",
  },
  {
    name: "Junior Engineer",
    vacancies: "01",
    education: "Diploma (Elec.)",
    duration: "2 Year",
  },
  {
    name: "Senior Engineer",
    vacancies: "01",
    education: "BE(Elec.)",
    duration: "1 Year",
  },
];

function Career() {
  return (
    <>
      <Header />

      {/* Job Openings Section */}
      <section className="bg-white container mx-auto lg:px-16 lg:py-16 md:px-6 md:py-6 px-4 py-4">
        <div className="container mx-auto px-4"> {/* Added container for margin */}
          <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-10 text-center mt-[100px]">Job Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 my-[20px]">
            {careerData.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-100 to-green-50 border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
                  {item.name}
                </h3>
                <div className="text-gray-700">
                  {item.descPoints?.map((point, idx) => (
                    <p key={idx} className="flex items-start gap-2 mb-3">
                      <span className="mt-1 text-blue-500">
                        <VscDebugBreakpointLog />
                      </span>
                      {point}
                    </p>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Link href="mailto:empireteknology@gmail.com">
                    <button className="flex items-center border border-gray-300 text-blue-600 gap-2 py-2 px-4 bg-white hover:bg-blue-50 hover:border-blue-600 transition duration-200 rounded-md">
                      Apply Now <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainee Program Section */}
      <section className="bg-white container mx-auto lg:px-16 lg:py-16 md:px-6 md:py-6 px-4 py-4">
        <div className="container mx-auto px-4"> {/* Added container for margin */}
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-10 text-center">
            Trainee Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traineeData.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-100 to-green-50 border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
                  {item.name}
                </h3>
                <div className="text-gray-700">
                  <p className="mb-3"><strong>Vacancies:</strong> {item.vacancies}</p>
                  <p className="mb-3"><strong>Education:</strong> {item.education}</p>
                  <p className="mb-3"><strong>Duration:</strong> {item.duration}</p>
                </div>
                <div className="flex justify-center">
                  <Link href="mailto:empireteknology@gmail.com">
                    <button className="flex items-center border border-gray-300 text-blue-600 gap-2 py-2 px-4 bg-white hover:bg-blue-50 hover:border-blue-600 transition duration-200 rounded-md">
                      Apply Now <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Rules and Regulations Section */}
          <div className="mt-16 bg-white bg-gradient-to-r from-blue-100 to-green-50 border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
              Rules and Regulations for Trainee Programs
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>During Training Period Candidate will have to Provide Bond with their own Risk</li>
              <li>After Completion of Training Period, if Company has Vacancy ,than Candidate Must have to Complete Probation Period of 1 Year for Full-Fill Companies Recognition</li>
              <li>After Completion of Probation Period Company has Full Power to Decide that to keep or not on Job.</li>
              <li>No Any Expenses during Training Period Provide by Company.</li>
              <li>Stipend during Training & Probation Period Provide by Company as per Govt. Rules & Regulations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section
        className="bg-blue-600 text-white py-16 bg-cover bg-center flex items-center justify-center"
        // Replace with your actual image path
      >
        <div className="bg-opacity-70 p-8 rounded-md text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Don’t see a match?</h3>
          <p className="text-lg mb-8">
            We’re always looking for talented people. Get in touch and let’s discuss how you can contribute to our team.
          </p>
          <div className="flex items-center justify-center">
            <Link href="mailto:empireteknology@gmail.com">
              <button className="flex items-center gap-2 py-2 px-4 border border-white bg-blue-700 text-white hover:bg-blue-500 transition duration-200 rounded-md">
                Contact Us <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Career;
