import { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { FaMasksTheater } from "react-icons/fa6";

const TourCard = ({ tour }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fadeInUp">
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-56 object-cover"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 bg-[#EFF2F6] p-2 rounded-full hover:bg-gray-300 transition cursor-pointer"
        >
          {isFavorite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-[#070A1F]" />
          )}
        </button>
        <div className="absolute top-3 left-3 flex space-x-2">
          {tour.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#070A1F] text-[#E0AC3B] text-xs px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-3">
        <h3 className="text-gray-800 font-semibold text-base mb-3 line-clamp-2 min-h-[48px]">
          {tour.title}
        </h3>

        <div className="flex items-center space-x-1 mb-4">
          <FaStar className="text-yellow-500 text-sm" />
          <span className="font-semibold text-sm text-green-600 bg-blue-200 px-2 rounded-lg">
            {tour.rating}
          </span>
          <span className="text-sm text-green-600 bg-blue-200 px-2 rounded-lg">
            {tour.reviews} Reviews
          </span>
        </div>

        <hr className="border border-gray-300 my-3" />

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-medium text-gray-800">
              ${tour.price}
            </span>
            <span className="text-gray-500 text-sm ml-1">Per Person</span>
          </div>
          {tour.certified && (
            <div className="flex items-center space-x-1  px-2 py-1 rounded-full">
              <span className="text-xs font-medium">Artista Certified</span>
              <div className="bg-[#070A1F] text-[#E0AC3B] p-1 rounded-full flex items-center justify-center">
                <FaMasksTheater />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourCard;
