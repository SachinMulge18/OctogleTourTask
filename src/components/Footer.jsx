import { useState } from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { footerData } from "../utils/common";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("U.S. Dollar");

  return (
    <footer className="bg-[#070A1F] text-white pt-5 ">
      <div className="grid grid-cols-12 gap-5 max-w-7xl mx-auto  py-8 px-5 md:px-5 lg:px-5 xl:px-0">
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center space-x-2 mb-4">
            <span className="font-bold text-xl">ARTISTA TOURS</span>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Join our Newsletter to stay inspired with new tours, cultural
            guides, and stories from around the world.
          </p>
          {/* for small screen */}
          <div className="md:hidden">
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 max-w-sm py-2 rounded-md bg-white text-gray-800 text-sm outline-none h-fit"
              />
              <button className="bg-[#E0AC3B] hover:bg-[#c99a32] h-fit text-[#070A1F] px-6 py-2 rounded-md font-medium text-sm transition">
                Subscribe
              </button>
            </div>

            <div className="flex flex-col mt-5 w-full">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-gray-400 hover:text-white text-sm transition0">
                  Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-white text-gray-800 px-2 py-2.5 rounded-md text-sm outline-none"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-400 hover:text-white text-sm transition0">
                  currency
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-white text-gray-800 px-2 py-2.5 rounded-md text-sm outline-none"
                >
                  <option>U.S. Dollar</option>
                  <option>Euro</option>
                  <option>British Pound</option>
                  <option>Japanese Yen</option>
                </select>
              </div>
            </div>

            <div className="flex gap-5 mt-5 space-y-2">
              {footerData.apps.map((app, index) => (
                <a key={index} href={app.link} className="block">
                  <img src={app.image} alt={app.name} className="h-10 w-auto" />
                </a>
              ))}
            </div>
          </div>
          {/*  */}
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xl:gap-5">
            {/* Company Links */}
            <div>
              {/* <h3 className="font-semibold text-lg mb-4">Company</h3> */}
              <ul className="space-y-2">
                {footerData.company.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-gray-400 hover:text-white text-sm transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help & Support Links */}
            <div>
              {/* <h3 className="font-semibold text-lg mb-4">Help & Support</h3> */}
              <ul className="space-y-2">
                {footerData.help.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-gray-400 hover:text-white text-sm transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Apps */}
            <div className="hidden md:block">
              <h3 className="text-gray-400 hover:text-white text-sm transition mb-4">
                Follow Us
              </h3>
              <div className="space-y-2 mb-6">
                {footerData.social.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition"
                  >
                    <span className="bg-[#E0AC3B] text-[#070A1F] p-1 rounded-full flex items-center justify-center">
                      {item.icon === "facebook" && <FaFacebookF />}
                      {item.icon === "instagram" && <FaInstagram />}
                      {item.icon === "youtube" && <FaYoutube />}
                    </span>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <h3 className="font-semibold lg:text-lg mb-4">Download App</h3>
              <div className="space-y-2">
                {footerData.apps.map((app, index) => (
                  <a key={index} href={app.link} className="block">
                    <img
                      src={app.image}
                      alt={app.name}
                      className="h-10 w-auto"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* ********* */}
      </div>

      <div className="px-5 md:hidden">
        <h3 className="text-gray-400 hover:text-white text-sm transition mb-2">
          Follow Us
        </h3>
        <div className="flex items-center justify-between">
          {footerData.social.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition"
            >
              <span className="bg-[#E0AC3B] text-[#070A1F] p-1 rounded-full flex items-center justify-center">
                {item.icon === "facebook" && <FaFacebookF />}
                {item.icon === "instagram" && <FaInstagram />}
                {item.icon === "youtube" && <FaYoutube />}
              </span>
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="hidden md:grid grid-cols-2 max-w-7xl mx-auto px-5 md:px-5 lg:px-5 xl:px-0">
        <div className="flex space-x-3 mt-5.5">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 max-w-sm py-2 rounded-md bg-white text-gray-800 text-sm outline-none h-fit"
          />
          <button className="bg-[#E0AC3B] hover:bg-[#c99a32] h-fit text-[#070A1F] px-5 tex-[#070A1F] py-2 rounded-md font-medium text-sm transition">
            Subscribe
          </button>
        </div>

        <div className="">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex justify-end items-end w-full space-x-4">
              <div className="flex flex-col gap-1  w-40">
                <label className="text-gray-400 hover:text-white text-sm transition0">
                  Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-white text-gray-800 px-2 py-2 rounded-md text-sm outline-none "
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 w-40">
                <label className="text-gray-400 hover:text-white text-sm transition0">
                  currency
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-white text-gray-800 px-2 py-2 rounded-md text-sm outline-none"
                >
                  <option>U.S. Dollar</option>
                  <option>Euro</option>
                  <option>British Pound</option>
                  <option>Japanese Yen</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#E0AC3B] py-2 md:py-3 mt-5 px-5">
        <div className="flex flex-col-reverse gap-2 md:flex-row justify-between items-center text-xs text-[#070A1F] font-semibold space-y-4 sm:space-y-0">
          <p>© 2025 Artista Tours. All rights reserved.</p>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies Settings
            </a>
          </div>
        </div>
      </div> 
    </footer>
  );
};

export default Footer;
