// /src/components/Client.jsx

import React from 'react';

const Client = ({ name }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-center">{name}</h3>
    </div>
  );
};

export default Client;
