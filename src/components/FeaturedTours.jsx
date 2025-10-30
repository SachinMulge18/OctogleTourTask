import { featuredToursData } from "../utils/common";
import TourCard from "./TourCard";

const FeaturedTours = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-12 mt-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-medium text-gray-800">
          Featured Tours
        </h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
          See all
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-7">
        {featuredToursData.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTours;
