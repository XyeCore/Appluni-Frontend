import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const UniversityCard = ({ university, onClick }) => {
  return (
    <RevealOnScroll>
        <div className="bg-white rounded-lg shadow-sm p-6 hover:scale-102 transition-transform duration-300">
      <h3 className="text-lg font-medium text-gray-900 mb-2">{university.name}</h3>
      <p className="text-sm text-gray-500">Location: {university.location}</p>
      <ul className="mt-4 list-disc list-inside text-gray-700">
        {university.programs.map((program, idx) => (
          <li key={idx}>{program}</li>
        ))}
      </ul>
      <button
      onClick={onClick}
        type="button"
      className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition ">
        Learn More
      </button>
    </div>
    </RevealOnScroll>
  );
};

export default UniversityCard;


