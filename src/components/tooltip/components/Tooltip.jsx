import React from "react";

const Tooltip = ({ children, content, enabled }) => {
  return (
    <div className="relative group">
      {children}
      {!enabled && (
        <div
          className="group-hover:flex flex-col items-center absolute bottom-full 
          left-1/2 -translate-x-1/2 hidden z-10 my-1.5"
        >
          <div className="bg-black text-white text-base rounded py-2 px-4 min-w-max text-center">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
