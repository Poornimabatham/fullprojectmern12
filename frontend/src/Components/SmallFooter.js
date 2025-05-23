import React from "react";

const SmallFooter = () => {
  return (
    <>
      <div>
        <hr class="my-6 w-full border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </>
  );
};

export default SmallFooter;
