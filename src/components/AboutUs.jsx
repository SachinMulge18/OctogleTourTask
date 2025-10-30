import React, { useState } from "react";
import { FaUser, FaRegSmile, FaStar, FaPlus } from "react-icons/fa";

import { FaMasksTheater } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import { faqs, testimonials } from "../utils/common";

const whyUsData = [
  {
    id: 1,
    icon: <FaMasksTheater className="text-blue-500 text-3xl mb-3" />,
    title: "Curated by Artists",
    description:
      "Each experience is led by local actors, musicians, historians, or visual artists who bring passion to every moment.",
  },
  {
    id: 2,
    icon: <FaRegSmile className="text-blue-500 text-3xl mb-3" />,
    title: "Memorable Experiences",
    description:
      "We blend storytelling, culture, and immersion to create tours that stay with you long after the trip ends.",
  },
  {
    id: 3,
    icon: <GiStarsStack className="text-blue-500 text-3xl mb-3" />,
    title: "Trusted by Thousands",
    description:
      "We’re proud to host curious travelers from over 50 countries—with a 4.9★ average tour rating.",
  },
];

const AboutUs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className=" text-gray-800 px-5 py-10">
      <section
        className="max-w-7xl mx-auto relative -top-48 h-[380px] flex items-center justify-center 
             bg-[url('https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=1200&h=500&fit=crop')] 
             bg-cover bg-center bg-no-repeat 
             text-white rounded-lg mt-6"
      >
        <div className="absolute inset-0 bg-blue-300 bg-opacity-40 mix-blend-multiply"></div>
        <div className="text-center px-4 max-w-3xl text-white z-10 opacity-90">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">About Us</h1>
          <p className="text-sm md:text-base leading-relaxed">
            We are a group of Teachers, Film & Theater actors with great passion
            for storytelling. History and ArtistaTours was born to give a unique
            twist to traditional tours using the talent of our guides for
            transmitting knowledge, telling stories, and entertaining the
            public.
          </p>
        </div>
      </section>

      {/* Why Tour With Us */}
      <section className="max-w-7xl mx-auto relative -top-32 ">
        <h2 className="text-xl md:text-2xl font-normal mb-5">
          Why Tour With Artista?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {whyUsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#EFF2F6] shadow-sm rounded-xl p-5 text-center hover:shadow-md transition-all duration-200 animate-fadeInUp"
            >
              {item.icon}
              <h3 className="text-lg font-medium mb-2 text-left text-[#070A1F]">
                {item.title}
              </h3>
              <p className="text-xs text-gray-600 text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto relative -top-16">
        <h2 className="text-xl md:text-2xl font-normal mb-5">
          Customer Testimonials
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#EFF2F6] rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 animate-fadeInUp"
            >
              <p className="text-[#E0AC3B] mb-2 flex  gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </p>
              <p className="text-[#070A1F] text-base font-medium mb-2">
                {t.title}
              </p>
              <p className="text-[#070A1F] text-xs mb-3">"{t.review}"</p>
              <p className="font-semibold text-sm flex items-center gap-2">
                <span className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center">
                  {" "}
                  <FaUser />
                </span>
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto py-10 relative -top-16">
        <h2 className="text-center text-xl md:text-3xl font-normal text-[#070A1F] mb-5">
          Common Questions Before You Go
        </h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              onClick={() => toggleFaq(faq.id)}
              className="bg-[#EFF2F6] rounded-lg px-3 md:px-5 py-2.5 cursor-pointer flex justify-between items-center hover:shadow-sm"
            >
              <span className="text-[#070A1F] font-medium text-sm md:text-base">
                {faq.question}
              </span>
              <div className="bg-[#E0AC3B] text-white rounded-full p-1">
                <FaPlus
                  size={12}
                  className={` transition-transform duration-200 ${
                    openFaq === faq.id ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  Footer Text */}
      <div className="text-center py-0 text-[#070A1F] font-medium md:text-lg">
        We are adding more destinations for you!
      </div>

      <div className="mt-16">
        {/* Google Map Embed */}
        <div className="max-w-6xl mx-auto ">
          <div className="rounded-xl overflow-hidden shadow-md ">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24311.047527932814!2d2.159632614943358!3d41.38791927715462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4982d2fefb16d%3A0xd0c94b1bb7c3a2d0!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sin!4v1698919975554!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Blue Inspiration Section */}
        <div className="bg-[#CFE2FF] -mt-20 py-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-end items-center gap-5">
            {/* Left Text Content */}
            <div className=" border-e-red-800 w-xs text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-normal text-[#070A1F] mb-1 md:pr-8">
                Let the World Inspire You
              </h3>
              <p className="text-[#070A1F] text-xs mb-3">
                Discover tours led by artists and storytellers. Culture,
                history, and unforgettable moments await.
              </p>
              <button className="bg-[#E0AC3B] hover:bg-[#cf9a30] text-[#070A1F] font-medium px-6 py-3 rounded-md shadow">
                Explore Tours
              </button>
            </div>

            {/* Right Image Stack */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center gap-4 py-5">
              <div className="flex flex-col gap-4">
                <img
                  src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=500&h=600&fit=crop"
                  alt="Cathedral"
                  className="rounded-xl shadow-md w-40 h-60 object-cover border border-yellow-300"
                />
              </div>
              <div className="flex flex-col gap-4">
                <img
                  src="https://images.unsplash.com/photo-1543353071-873f17a7a088?w=500&h=400&fit=crop"
                  alt="Tourists"
                  className="rounded-xl shadow-md w-32 h-44 object-cover border border-yellow-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1543832923-44667a44c804?w=500&h=400&fit=crop"
                  alt="City View"
                  className="rounded-xl shadow-md w-32 h-44 object-cover border border-yellow-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
