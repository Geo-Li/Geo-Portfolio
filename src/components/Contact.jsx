import { useState } from "react";
import React from "react";
import Title from "./Title";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  function hideAlert() {
    setSubmitted(false);
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
        {submitted && (
          <div
            id="alert-2"
            class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <svg
              class="flex-shrink-0 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div class="ms-3 text-sm font-medium">
              A simple info alert with an{" "}
              <a href="#" class="font-semibold underline hover:no-underline">
                example link
              </a>
              . Give it a click if you like.
            </div>
            <button
              type="button"
              class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
              data-dismiss-target="#alert-2"
              aria-label="Close"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
