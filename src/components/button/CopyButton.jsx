import { useState } from "react";
import { check } from "@/components/icons/Check";
import { copy } from "@/components/icons/Copy";

const CopyButton = ({ id }) => {
  const [copied, setCopied] = useState(false);

  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Handle successful copying
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500); // Set copied to false after 2 seconds
      })
      .catch((err) => console.error("Could not copy text: ", err));
  }
  return (
    <>
      <button
        className="flex flex-row items-center justify-center 
        border rounded-md border-stone-900 space-x-1 text-lg py-1 px-2"
        onClick={() => copyToClipboard(id)}
      >
        {copied ? check : copy}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
    </>
  );
};

export default CopyButton;
