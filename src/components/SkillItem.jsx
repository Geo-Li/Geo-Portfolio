import React from "react";

const SkillItem = ({ category, sets }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <h3
        className="w-64 text-lg md:text-xl dark:text-white
                   mb-1 md:mb-2 mr-1 md:mr-2 font-semibold flex-shrink-0"
      >
        {category}
      </h3>
      <div
        className="flex flex-wrap gap-2 flex-row 
                   items-center justify-center 
                   text-xs md:text-sm dark:text-white"
      >
        {sets.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center 
                       justify-center px-2 py-1 
                       font-semibold border-2 
                       dark:border-white
                       border-stone-900 rounded-md"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillItem;
