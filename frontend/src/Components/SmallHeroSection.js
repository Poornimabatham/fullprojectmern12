import React, { useEffect, useState } from "react";
import pic from "../assets/pic.jpg";
import Forms from "./Forms";

const SmallHeroSection = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false]); // Track visibility of each card

  const handleVisibilityChange = (index, isVisible) => {
    setVisibleCards((prevVisibleCards) => {
      console.log(prevVisibleCards, "tyuio");
      const updatedCards = [...prevVisibleCards];
      if (isVisible) {
        console.log(updatedCards, "ertyui");
        updatedCards[index] = true;
      }
      return updatedCards;
    });
  };

  // Create an array to represent the number of left-right pairs you want.
  const boxCount = 1;
  const boxes = Array.from({ length: boxCount }, (_, index) => index);

  useEffect(() => {
    const observers = boxes.map((_, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          console.log(entries, "entry");
          entries.forEach((entry) => {
            console.log(entries, "entri", entry, index);
            if (entry.isIntersecting) {
              handleVisibilityChange(index, true);
            } else {
              handleVisibilityChange(index, false);
            }
          });
        },
        { threshold: 0.3 }
      );

      const boxElement = document.getElementById(`box-${index}`);
      if (boxElement) {
        observer.observe(boxElement);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <div className=" py-12 px-4 bg-gray-50">
        <h2 className="text-center text-2xl mb-10">
          What can Explore beauty help you with?
        </h2>

        {/* Loop through boxes */}
        {boxes.map((_, index) => (
          <div
            key={index}
            className="flex gap-6 justify-center items-center mb-6 "
          >
            {/* Left Box with slide-in animation */}
            <div
              id={`box-${index}`}
              className={`w-[600px] h-[300px] bg-white p-5 rounded-lg shadow-md transition-all duration-1000 ease-in-out 
              ${
                visibleCards[index]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <h3 className="text-green-600 text-xl mb-2">
                Find your products, effortlessly.
              </h3>
              <p className="text-gray-600 text-sm">
                You deserve better than spammy job boards. Get matched to the
                right opportunities in less than 5 mins. Connect with real
                hiring teams fast.
              </p>
            </div>

            {/* Right Box (always visible) */}
            <div
              className={`w-[600px] h-[300px]  p-5 rounded-lg shadow-md transition-all duration-1000 ease-in-out 
    ${
      visibleCards[index]
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-20"
    }`}
            >
              <img
                src={pic}
                alt="External Image"
                className="rounded-xl border-4 border-gray-300 w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="my-12">
        {" "}
        <Forms />
      </div>
    </>
  );
};

export default SmallHeroSection;
