import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios"; // Assuming you'll use axios for API calls

const Carosel = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Example API call (replace with your API endpoint)
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response.data.products);
        setGalleryData(response.data.products); // Assuming response.data is an array
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleryData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // ✅ filter products by title or description

  const filterData = galleryData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
          <h2 className="text-3xl font-bold text-center mb-5">Gallery</h2>
          {/* ✅ Search Input */}
          <div className="flex justify-center mb-5">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="border-2 border-solid rounded p-2 w-1/2"
            />
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {filterData.length > 0 ? (
              filterData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <div className="flex md:flex-row flex-col gap-2 w-full">
                    {/* Image */}
                    <img
                      src={item.images[0]}
                      alt={item.title || "Gallery Item"}
                      className="bg-white-200 w-full p-3 md:w-40 h-40 object-cover shadow-inner rounded-lg"
                    />

                    {/* Text Section */}
                    <div className="flex flex-col justify-center w-full p-3 border-2 border-solid rounded-lg bg-blue-200 ">
                      <h3 className="text-lg font-semibold mb-2 break-words">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 break-words">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-3">No products found....</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <Footer title="Trending Carasol" />
      </div>
    </>
  );
};

export default Carosel;
