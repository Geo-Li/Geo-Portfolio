import React from "react";
import banner from "../data/banner";
import BannerItem from "./BannerItem";

const Banner = () => {
  return (
    <div className="pt-8">
      <div
        className="flex items-center p-4 text-sm
                   text-green-900 border rounded-lg 
                   border-green-500 bg-green-100 
                   dark:bg-gray-600 dark:text-green-400 
                   dark:border-green-800"
        role="alert"
      >
        <span className="sr-only">Info</span>
        <div>
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="font-semibold text-lg">
            Some features are still under development and listed are future
            development plans:
          </span>
          <ul className="mt-1.5 list-disc list-inside pl-8">
            {banner.map((item, index) => (
              <BannerItem
                id={index}
                finished={item.finished}
                plan={item.plan}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
