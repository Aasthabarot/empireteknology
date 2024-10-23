"use client";
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [inquiry, setInquiry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Contact Number: ${contactNumber}`);
    console.log(`Email: ${email}`);
    console.log(`Company Name: ${companyName}`);
    console.log(`Inquiry: ${inquiry}`);
    // Here you can add functionality to send this data to your server or API
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-lg rounded px-8 py-6 w-[90%] md:w-[50%] flex-col items-center justify-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inquiry">
            Inquiry
          </label>
          <textarea
            id="inquiry"
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
