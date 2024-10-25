// /src/components/Project.jsx

import React from 'react';

// Dummy project data
const dummyProjects = [
  {
    name: 'Project Alpha',
    image: 'https://via.placeholder.com/400x300.png?text=Project+Alpha',
  },
  {
    name: 'Project Beta',
    image: 'https://via.placeholder.com/400x300.png?text=Project+Beta',
  },
  {
    name: 'Project Gamma',
    image: 'https://via.placeholder.com/400x300.png?text=Project+Gamma',
  },
];

// Project component definition
const Project = ({ name, image }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
    </div>
  );
};

// Export the Project component as default
export default Project;

// Export dummy projects for use in other components
export { dummyProjects };
