import React from "react";

const ShimmerCard = () => {
  return (
    <div data-testid='shimmer' className="flex flex-wrap justify-center">
      {Array(10).fill('').map((_, index) => (
        <div key={index} className="w-56 h-80 p-2 m-2 shadow-lg animate-pulse">
          <div className="bg-gray-200 h-40"></div>
          <div className="mt-2 bg-gray-200 h-6 w-4/5"></div>
          <div className="mt-1 bg-gray-200 h-4 w-3/4"></div>
          <div className="mt-1 bg-gray-200 h-4 w-2/4"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerCard;
