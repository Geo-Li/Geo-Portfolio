import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          className="flex flex-col w-full md:w-7/12"
          action="https://getform.io/f/wardkgea"
          method="POST"
        >
          <input
            className="p-2 bg-transparent 
                       border-2 rounded-md 
                       focus: outline-none"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="my-2 p-2 bg-transparent 
                       border-2 rounded-md focus:outline-none"
            type="text"
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
            type="button"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
