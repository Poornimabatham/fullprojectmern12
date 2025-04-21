import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/Animation - 1744906264499.json";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Carosel from "./Carosel";
import { Link } from "react-router-dom";

function MainContent() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-white pt-20">
        {/* pt-20 to prevent navbar overlap */}
        <div className="flex flex-col">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-10">
            {/* Left Side: Lottie Animation */}
            <div className="w-full md:w-1/2">
              {showAnimation && (
                <Lottie animationData={heroAnimation} loop={true} />
              )}
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full md:w-1/2 text-black text-center md:text-left mt-10 md:mt-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to Our App
              </h1>
              <p className="text-lg mb-6">
                This is a beautiful hero section powered by Lottie animations
                and Tailwind CSS.
              </p>
              <Link to="/carosel">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar placed AFTER main content */}
      <div
        className="bg-gray-100 border border-green-300 rounded-3xl mx-10 mt-10xddxdx
"
      >
        <Sidebar />
      </div>
    </>
  );
}

export default MainContent;
