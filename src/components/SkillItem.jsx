import React from "react";

const SkillItem = ({ category, sets }) => {
  return (
    <div className="grid grid-cols-3 items-center gap-4 mb-4">
      <h3
        className="col-span-1 text-lg md:text-xl dark:text-white
                   mb-2 md:mb-4 mr-1 md:mr-2 font-semibold"
      >
        {category}
      </h3>
      <div
        className="col-span-2 flex flex-wrap gap-2
                   items-center justify-center 
                   text-xs md:text-sm dark:text-white"
      >
        {sets.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center 
                       justify-center px-2 py-1 
                       font-semibold border-2 
                       dark:border-white mb-2
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
