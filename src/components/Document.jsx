import React, { useState, useEffect } from "react";

const Document = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resume_path = "assets/documents/Zhuoyuan Li's Resume.pdf";

  useEffect(() => {
    var renderTime;
    if (isOpen) {
      // Immediately show the modal but with opacity 0 to make it invisible
      // It needs to be in the DOM for CSS transition to work
      renderTime = setTimeout(() => {
        document.getElementById("resume_modal").style.opacity = 1;
      }, 15); // Short delay to ensure the element is rendered
    }
    return () => clearTimeout(renderTime);
  }, [isOpen]);

  function toggleModal() {
    if (isOpen) {
      document.getElementById("resume_modal").style.opacity = 0;
      // Wait for animation to finish before hiding modal
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <button
        className="text-3xl font-normal mb-12 p-2
                   bg-clip-text text-transparent
                    border-2 rounded-md border-sky-400
                    dark:bg-gradient-to-r dark:from-gray-200 
                    dark:via-fuchsia-200 dark:to-stone-100
                    bg-gradient-to-r from-indigo-500
                    to-pink-500"
        onClick={toggleModal}
      >
        Resume
      </button>

      {isOpen && (
        <div
          id="resume_modal"
          className="fixed inset-0 bg-gray-500 bg-opacity-75
                     overflow-y-auto overflow-x-auto
                     flex justify-center items-center 
                     transition-opacity ease-in-out
                     duration-500 opacity-0 h-full w-full z-50"
          onClick={toggleModal}
          style={{ opacity: 0 }} // Start with opacity 0 for fade-in effect
        >
          <div
            className="bg-white p-5 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent background click
          >
            <iframe
              src={resume_path}
              style={{ width: "80vh", height: "80vh" }}
              allow="fullscreen"
            ></iframe>
            <button
              className="mt-4 bg-red-500 hover:bg-red-700 
                         text-white font-bold py-2 px-4 rounded"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Document;
