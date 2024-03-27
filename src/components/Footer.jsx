import { useState } from "react";
import React from "react";

const Footer = () => {
  const wechat = "ZhuoyuanGeoLi";
  const UCIemail = "zhuoyul4@uci.edu";
  const NUemail = "ZhuoyuanLi2025@u.northwestern.edu";
  const personalEmail = "KyriePrise@gmail.com";

  const [displayWechat, setDisplayWechat] = useState(false);
  const [displayEmail, setDisplayEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  function showWechatAlert() {
    setDisplayWechat(true);
  }

  function closeWechatAlert() {
    setDisplayWechat(false);
  }

  function showEmailAlert() {
    setDisplayEmail(true);
  }

  function closeEmailAlert() {
    setDisplayEmail(false);
  }

  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Handle successful copying
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Set copied to false after 2 seconds
      })
      .catch((err) => console.error("Could not copy text: ", err));
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-4 md:gap-8 pt-8 pb-2">
        <a
          href="https://www.linkedin.com/in/geo-li/"
          className="text-blue-600"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-12 h-12 fill-current"
          >
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
        </a>
        <button onClick={showWechatAlert} className="text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="w-12 h-12 fill-current"
          >
            <path d="M385.2 167.6c6.4 0 12.6 .3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2 .1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3 .1 10-9.9 19.6-24.4 19.6z" />
          </svg>
        </button>
        {displayWechat && (
          <div
            className="fixed top-1/2 left-1/2 p-8 transform 
                 -translate-x-1/2 -translate-y-1/2 z-50 
                 border text-green-800 rounded-lg bg-green-50 
                 dark:bg-gray-600 dark:text-green-400
                 border-green-500 dark:border-green-800"
            role="alert"
          >
            <div className="flex justify-center items-center">
              <div className="text-center">
                <span className="sr-only">
                  Please reach out to me on WeChat using the ID: ZhuoyuanGeoLi
                </span>
                <p>Please reach out to me on WeChat using the ID:</p>
                <button
                  className="text-lg font-semibold underline"
                  onClick={copyToClipboard(wechat)}
                >
                  {wechat}
                </button>
                {copied && <div className="notification">Copied</div>}
              </div>
              <button
                type="button"
                onClick={closeWechatAlert}
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
        <a
          href="https://github.com/Geo-Li?tab=repositories"
          className="text-black dark:text-white"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            className="w-12 h-12 fill-current"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </a>
        <button onClick={showEmailAlert} className="text-black dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-12 h-12 fill-current"
          >
            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
          </svg>
        </button>
        {displayEmail && (
          <div
            className="fixed top-1/2 left-1/2 p-8 transform 
                 -translate-x-1/2 -translate-y-1/2 z-50 
                 border text-green-800 rounded-lg bg-green-50 
                 dark:bg-gray-600 dark:text-green-400
                 border-green-500 dark:border-green-800"
            role="alert"
          >
            <div className="flex justify-center items-center">
              <span className="sr-only">
                Please reach out to me via e-mail at:
                ZhuoyuanLi2025@u.northwestern.edu
              </span>
              <div className="text-center">
                <p>Please reach out to me via e-mail at:</p>
                <span>
                  <div className="italic">School email:</div>
                  <button
                    className="text-lg font-semibold underline"
                    onClick={copyToClipboard(NUemail)}
                  >
                    {NUemail}
                  </button>
                  <br />
                  <button
                    className="text-lg font-semibold underline"
                    onClick={copyToClipboard(UCIemail)}
                  >
                    {UCIemail}
                  </button>
                  <div className="italic">Personal email:</div>
                  <button
                    className="text-lg font-semibold underline"
                    onClick={copyToClipboard(personalEmail)}
                  >
                    {personalEmail}
                  </button>
                </span>
              </div>
              <button
                type="button"
                onClick={closeEmailAlert}
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
      <div className="pb-5 text-center">
        <p className="text-sm mt-2 opacity-50">
          &copy; {new Date().getFullYear()}
          {} Zhuoyuan (Geo) Li. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
