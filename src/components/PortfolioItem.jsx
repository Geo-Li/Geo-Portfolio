import React, { useState } from "react";

const PortfolioItem = ({ title, imgURL, stack, link }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const zoomStyle = isZoomed
    ? "fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2\
       transition ease-in-out delay-200 scale-150 z-50 duration-300\
       overflow-hidden bg-black"
    : "";

  function toggleZoom() {
    setIsZoomed(!isZoomed);
  }

  return (
    <a
      className="transition ease-in-out delay-150
                 hover:scale-110 duration-300
                 hover:bg-blue-100
                 hover:dark:bg-emerald-300
                 border-2 border-stone-900
                 dark:border-white
                 rounded-md overflow-hidden"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={toggleZoom}
    >
      <img
        src={imgURL}
        alt="title"
        className="w-full h-36 md:h-48 
                   object-contain cursor-pointer"
      />
      <div className="w-full p-4">
        <h3
          className="text-lg md:text-xl dark:text-white
                     mb-2 md:mb-3 font-semibold"
        >
          {title}
        </h3>
        <p
          className="flex flex-wrap gap-2 flex-row 
                     items-center justify-start 
                     text-xs md:text-sm dark:text-white"
        >
          {stack.map((item) => (
            <span
              className="inline-block px-2 py-1 
                         font-semibold border-2 
                       dark:border-white
                       border-stone-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default PortfolioItem;
