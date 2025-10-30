import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const HeroSection = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const [location, setLocation] = useState("");
  const [dateRange, setDateRange] = useState("February 05 - March 14");

  const heroImages = [
    "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=1200&h=500&fit=crop",
    "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&h=500&fit=crop",
    "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=500&fit=crop",
  ];

  const nextSlide = () => {
    setHeroIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <>
      <div className="relative">
        <div className="relative h-[60vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url(${heroImages[heroIndex]})` }}
          >
            {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-gray-50  p-2 cursor-pointer hover:bg-gray-200 rounded-full transition"
          >
            <FaChevronLeft className="text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-gray-50  p-2 cursor-pointer hover:bg-gray-200 rounded-full transition"
          >
            <FaChevronRight className="text-gray-800" />
          </button>

          <div className="relative z-10 flex flex-col mt-[25%] md:mt-0 md:items-center md:justify-center h-full px-4">
            <h1 className="text-3xl md:text-5xl font-medium text-black text-center opacity-10 p-2 rounded-2xl animate-fadeInUp">
              Because Life is Art!
            </h1>
          </div>
        </div>

        <div className="block md:hidden absolute bottom-1 w-[90%] text-white mx-auto left-1/2 -translate-x-1/2 z-20 space-y-2">
          {/* 1st */}
          <div className="bg-white w-full py-2 px-3 rounded-md flex items-center space-x-3 flex-1 md:border-r md:pr-4">
            <FaMapMarkerAlt className="text-gray-500 text-xl" />
            <div className="flex flex-col">
              <label className="text-xs text-gray-500 font-medium">Where</label>
              <input
                type="text"
                placeholder="Search destinations"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="outline-none text-sm text-gray-800 w-full"
              />
            </div>
          </div>
          {/* 2nd */}

          <div className="bg-white w-full py-2 px-3 rounded-md flex items-center space-x-3 flex-1 md:pr-4">
            <FaCalendarAlt className="text-gray-500 text-xl" />
            <div className="flex flex-col">
              <label className="text-xs text-gray-500 font-medium">When</label>
              <input
                type="text"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="outline-none text-sm text-gray-800 w-full"
              />
            </div>
          </div>
          {/* 3rd */}
          <button className="w-full  bg-yellow-500 hover:bg-yellow-600 text-[#070A1F] px-0 py-1 rounded-md font-medium transition">
            Search
          </button>
        </div>

        <div className="hidden md:block absolute bottom-1  md:-bottom-8 left-1/2 -translate-x-1/2 z-20 w-full md:w-2xl max-w-3xl ">
          <div className="bg-white rounded-lg shadow-xl p-4 flex items-center space-x-4">
            <div className="flex items-center space-x-3 flex-1 border-r pr-4">
              <FaMapMarkerAlt className="text-gray-500 text-xl" />
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 font-medium">
                  Where
                </label>
                <input
                  type="text"
                  placeholder="Search destinations"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="outline-none text-sm text-gray-800 w-full"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 flex-1 pr-4">
              <FaCalendarAlt className="text-gray-500 text-xl" />
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 font-medium">
                  When
                </label>
                <input
                  type="text"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="outline-none text-sm text-gray-800 w-full"
                />
              </div>
            </div>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-[#070A1F] px-5 py-1 rounded-md font-medium transition">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
