// /src/components/JobOpening.jsx

import React from 'react';

const Jobopening = ({ title, description }) => {
  const handleInquiry = () => {
    // Handle email inquiry
    window.location.href = `mailto:barotaastha38@gmail.com?subject=Inquiry about ${title}`;
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <button
        onClick={handleInquiry}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Send Inquiry
      </button>
    </div>
  );
};

export default Jobopening;
