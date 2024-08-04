import React from "react";
import TextExpandable from "@/components/expandable/TextExpandable";

const ColumnItem = ({ title, description }) => {
  return (
    <div
      className="w-full bg-white border-2 border-black rounded-lg shadow-lg 
      dark:bg-stone-900 dark:border-white cursor-grab"
    >
      {/* Display the plan details */}
      <div className="flex flex-col items-center pb-5 mx-5 text-center">
        <h5 className="my-2 text-xl font-medium text-black dark:text-white capitalize">
          {title}
        </h5>
        <TextExpandable description={description} />
      </div>
    </div>
  );
};

export default ColumnItem;
