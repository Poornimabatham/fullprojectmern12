import React from "react";

const SmallHeroSection = () => {
  return (
    <>
      <div className="container mx-auto px-4  my-8 py-9 h-[900px]">
        <div className="flex items-center justify-center">
          <h2 className="text-center text-2xl">
            What can Explore beauty help you with?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 py-6">
          <div className="bg-white p-4 rounded-lg text-sh text-center h-[300px] shadow-md">
            {" "}
            <h1 className="text-green-500 text-2xl">
              Find your proudcts, effortlessly.
            </h1>
            <p className="text-black-500 text-medium">
              You deserve better than spammy job boards. In less than 5 mins,
              get matched to just the right opportunities you want. Connect with
              the actual hiring teams and get super fast responses back.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg text-sh text-center h-[300px] shadow-md">
            Right Box
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallHeroSection;
