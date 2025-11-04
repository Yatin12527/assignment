import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

const PropertySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const properties = [
    {
      id: 1,
      title: "GREEN AREA",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    },
    {
      id: 2,
      title: "MODERN VILLA",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    },
    {
      id: 3,
      title: "LUXURY HOME",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  return (
    <div className="w-full ">
      <div className="max-w-[1600px] mx-auto">
        {/* Slider Container */}
        <div className="relative flex gap-3 overflow-hidden">
          {/* Main Active Image */}
          <div className="w-full md:w-[42%] relative group">
            <div className="relative h-[200px] md:h-[400px] overflow-hidden">
              <img
                src={properties[currentIndex].image}
                alt={properties[currentIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Secondary Images */}
          <div className="hidden md:flex gap-3 w-[52%]">
            <div className="w-1/2 relative group">
              <div className="relative h-[400px] w-full overflow-hidden bg-gray-400">
                <img
                  src={properties[(currentIndex + 1) % properties.length].image}
                  alt="Secondary property"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
            <div className="w-1/2 relative group">
              <div className="relative h-[400px] overflow-hidden bg-gray-500">
                <img
                  src={properties[(currentIndex + 2) % properties.length].image}
                  alt="Tertiary property"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-[4px] bg-gray-800 relative overflow-hidden -mt-5"
          style={{ width: `${94.8}%` }}
        >
          <div
            className="absolute left-0 top-0 h-full bg-gray-200/90 transition-all duration-500 ease-out"
            style={{
              width: `${((currentIndex + 1) / properties.length) * 100}%`,
            }}
          ></div>
        </div>
        <div className="flex sm:w-[650px]  w-full items-center justify-between  bg-white p-6 ">
          {/* Counter and Title */}
          <div className="flex items-center gap-8">
            <span className="text-lg md:text-xl font-light text-gray-600">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <h2 className="text-xl md:text-2xl font-light tracking-wider text-gray-900">
              {properties[currentIndex].title}
            </h2>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors duration-300 group"
          >
            <span className="text-sm md:text-base font-light tracking-wider">
              NEXT
            </span>
            <FaChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertySlider;
