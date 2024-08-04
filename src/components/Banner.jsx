import React from "react";
import future_plan from "../data/future_plan";
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
        <div>
          <div>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
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
