import React, { useState } from "react";
import { angle_down } from "@/components/icons/AngleDown";
import { angle_up } from "@/components/icons/AngleUp";
import "./styles.css";

const TextExpandable = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleContent() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="w-full mx-auto bg-emerald-50 dark:bg-neutral-800 rounded-md shadow-lg">
      <div className="p-2">
        <div
          className={`expandable-content text-base mt-4 rounded-md ${
            isExpanded ? "expand" : ""
          }`}
        >
          <p className="text-black dark:text-white h-full">{description}</p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={toggleContent}
            className="mt-4 px-4 py-2 readmore-button
            bg-emerald-200 hover:bg-emerald-400 text-black rounded-md
            dark:bg-zinc-900 dark:hover:bg-zinc-700 dark:text-white"
          >
            <div className="flex flex-rol items-center justify-center space-x-1">
              <span>Read More</span>
              {isExpanded ? angle_up : angle_down}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextExpandable;
