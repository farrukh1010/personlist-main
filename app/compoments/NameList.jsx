"use client"
import { useState } from 'react';

const names = ['Farrukh Zaman', 'Shahzeb', 'Ahmadzeb', 'Ali', 'Moaz']; 

const NameList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextName = () => {
    setCurrentIndex((prevIndex) => (prevIndex === names.length - 1 ? 0 : prevIndex + 1));
  };

  const prevName = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? names.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">{names[currentIndex]}</h1>
      <div className="flex space-x-4">
        <button
          onClick={prevName}
          className="bg-green-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded"
        >
          Previous
        </button>
        <button
          onClick={nextName}
          className="bg-green-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NameList;
