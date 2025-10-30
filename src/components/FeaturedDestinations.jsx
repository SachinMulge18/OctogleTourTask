import React from "react";
import {
  featuredDestinationTabs,
  featuredToursDestinations,
} from "../utils/common";

const FeaturedDestinations = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 pt-12 pb-56">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl xl:text-3xl font-medium text-gray-800">
        Featured Destinations
      </h1>
      <div className="grid grid-cols-3 space-y-3 gap-x-5  md:flex justify-evenly md:justify-center flex-wrap mt-5 ">
        {featuredDestinationTabs.map((tab) => (
          <button
            key={tab.id}
            className="px-2 md:px-4 py-1 md:py-2 bg-[#E0AC3B] text-[#070A1F] capitalize cursor-pointer rounded-md font-medium h-fit"
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
        {featuredToursDestinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200 animate-fadeInUp"
          >
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-3">
              <p className="text-sm text-[#3B82F6] font-medium">
                {destination.activity} Activities
              </p>
              <h2 className="text-base font-semibold text-gray-800  capitalize">
                {destination.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestinations;
