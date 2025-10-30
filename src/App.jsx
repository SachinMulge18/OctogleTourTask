import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedTours from "./components/FeaturedTours";
import FeaturedDestinations from "./components/FeaturedDestinations";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#EFF2F6]">
        <HeroSection />
        <FeaturedTours />
        <FeaturedDestinations />
      </div>
      <AboutUs />
      <Footer />
    </>
  );
};

export default App;
