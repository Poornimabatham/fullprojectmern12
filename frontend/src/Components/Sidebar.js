import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, colIndex) => (
            <div key={colIndex} className="grid gap-4">
              {[...Array(3)].map((_, imgIndex) => (
                <div key={imgIndex} className="relative">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-${
                      colIndex * 3 + imgIndex
                    }.jpg`}
                    alt=""
                  />
                  <button className="absolute bottom-2 right-2 bg-blue-800 text-white text-sm px-3 py-1 rounded-lg opacity-80 hover:opacity-100 hover:bg-blue-600 transition">
                    Click Me
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
