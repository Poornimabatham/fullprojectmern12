import React, { useState, useEffect, useRef } from "react";

const Carosel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  // Close drawer if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        !event.target.closest("#toggleDrawerBtn")
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <div className="text-center mt-4">
        <button
          id="toggleDrawerBtn"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          {isOpen ? "Close Navigation" : "Show Navigation"}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-30 z-30"></div>}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 z-40 h-screen w-64 p-4 bg-white dark:bg-gray-800 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Menu
        </h5>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        {/* Example Links */}
        <ul className="mt-4 space-y-2">
          <li className="text-gray-800 dark:text-white">Dashboard</li>
          <li className="text-gray-800 dark:text-white">Settings</li>
          <li className="text-gray-800 dark:text-white">Profile</li>
        </ul>
      </div>
    </>
  );
};

export default Carosel;
