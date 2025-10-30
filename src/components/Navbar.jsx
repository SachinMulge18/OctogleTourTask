import React, { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-[#EFF2F6] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 md:px-5 lg:px-5 xl:px-0">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-lg text-[#070A1F]">
              ARTISTA TOURS
            </span>
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <button className="border px-4 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition">
              Become a Artista Guide
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition">
              <FaShoppingCart className="text-lg" />
              <span className="text-sm font-medium">Cart</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition">
              <FaSignInAlt className="text-lg" />
              <span className="text-sm font-medium">Sign In</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition">
              <FaUserPlus className="text-lg" />
              <span className="text-sm font-medium">Register</span>
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-800 hover:text-gray-600 transition-all duration-200 ease-in-out flex items-center gap-1"
          >
            <IoMdSearch size={24} />

            {isMenuOpen ? (
              <RxCross2 className="w-6 h-6 transition-all duration-200 ease-in-out" />
            ) : (
              <IoMdMenu className="w-6 h-6 transition-all duration-200 ease-in-out" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2 menu-animation">
            <button className="w-full text-left border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition">
              Become a Artista Guide
            </button>
            <button className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md transition">
              <FaShoppingCart className="text-lg" />
              <span className="text-sm font-medium">Cart</span>
            </button>
            <button className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md transition">
              <FaSignInAlt className="text-lg" />
              <span className="text-sm font-medium">Sign In</span>
            </button>
            <button className="w-full flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md transition">
              <FaUserPlus className="text-lg" />
              <span className="text-sm font-medium">Register</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
// bg
// #EFF2F6
// yellow
// #E0AC3B
// dark blue
// #070A1F
