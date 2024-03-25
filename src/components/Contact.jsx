import { useState } from "react";
import React from "react";
import Title from "./Title";

const Contact = () => {
  const [display, setDisplay] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setDisplay(true);
  }

  function closeAlert() {
    setDisplay(false);
  }

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          className="flex flex-col w-full md:w-7/12"
          action="https://getform.io/f/wardkgea"
          method="POST"
          onSubmit={handleSubmit}
        >
          <Title>Contact</Title>
          <input
            className="p-2 bg-transparent 
                       border-2 rounded-md 
                       focus:outline-none"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="my-2 p-2 bg-transparent 
                       border-2 rounded-md focus:outline-none"
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            className="p-2 mb-4 bg-transparent 
                       border-2 rounded-md focus:outline-none"
            name="message"
            placeholder="Message"
            rows="10"
          />
          <button
            className="text-center inline-block 
                       px-8 py-3 w-max text-base 
                       font-medium rounded-md 
                       text-white bg-gradient-to-r 
                       from-yellow-500 to-pink-500 
                       drop-shadow-md hover:stroke-white"
            type="submit"
          >
            Work With Me
          </button>
        </form>
        {display && (
          <div
            className="fixed top-1/2 left-1/2 p-4 transform 
                   -translate-x-1/2 -translate-y-1/2 z-50 
                   border text-green-800 rounded-lg bg-green-50 
                   dark:bg-gray-600 dark:text-green-400
                   border-green-500 dark:border-green-800"
            role="alert"
          >
            <div className="flex items-center">
              <svg
                class="w-8 h-8 text-green-800 dark:text-green-400"
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
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="sr-only">Form submitted successfully!</span>
              <div className="ml-3 text-normal font-medium">
                Message sent. Thank you for your feedback!
              </div>
              <button
                type="button"
                onClick={closeAlert}
                className="ml-1.5 -mr-1.5 -my-1.5 bg-green-50 
                           text-green-500 rounded-lg focus:ring-2 
                           focus:ring-green-400 p-1.5 
                           hover:bg-green-200 inline-flex 
                           items-center justify-center h-8 w-8 
                           dark:bg-gray-600 dark:text-green-400 
                           dark:hover:bg-gray-800"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
