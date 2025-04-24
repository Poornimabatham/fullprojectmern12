import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Carosel = () => {
  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Layout for Gallery and Sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <div className="fixed top-3 left-0 z-40 h-screen w-64 my-14 border p-7 bg-white dark:bg-gray-800 shadow-lg">
          <h5 className="text-base font-semibold text-white uppercase dark:text-gray-400"></h5>

          {/* Navigation Links */}
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                to="/main"
                className="text-gray-800 dark:text-white text-lg hover:underline"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="text-gray-800 dark:text-white text-lg hover:underline"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-gray-800 dark:text-white text-lg hover:underline"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Gallery Section (Main Content) */}
        <div
          className="flex-1 ml-64 mt-10 p-7 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 80px)" }}
        >
          <h2 className="text-3xl font-bold text-center mb-5"></h2>
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {/* First Gallery Item - Span 2 Columns */}
            <div className="bg-gray-300 rounded-lg h-40 col-span-2"></div>

            {/* Second Gallery Item - Span 1 Column, Span 2 Rows */}
            <div className="bg-gray-300 rounded-lg h-90 row-span-3"></div>

            {/* Third Gallery Item - Span 1 Column */}
            <div className="bg-gray-300 rounded-lg h-40"></div>

            {/* Fourth Gallery Item - Span 1 Column */}
            <div className="bg-gray-300 rounded-lg h-40"></div>

            {/* Fifth Gallery Item - Span 1 Column */}
            <div className="bg-gray-300 rounded-lg h-40"></div>

            {/* Sixth Gallery Item - Span 1 Column */}
            <div className="bg-gray-300 rounded-lg h-40 col-span-2"></div>

            {/* Add more items as needed */}
          </div>
        </div>
      </div>
      <div><Footer title="Trending carasol" /></div>
      
    </>
  );
};

export default Carosel;
