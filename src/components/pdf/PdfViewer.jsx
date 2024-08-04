import React, { useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { download } from "@/components/icons/Download";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const MAX_WIDTH = 1200;

const PdfViewer = ({ file }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the width state
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-8">
        <Document file={file}>
          <Page pageNumber={1} width={Math.min(width, MAX_WIDTH) * 0.75} />
        </Document>
        <a
          href={file}
          download
          className="bg-lime-200 hover:bg-teal-300
          dark:bg-teal-200 dark:hover:bg-lime-300
          focus:ring-4 focus:outline-none 
          focus:ring-lime-200 dark:focus:ring-teal-700  
          rounded-md px-6 py-3 w-max transition duration-300"
        >
          <div
            className="flex flex-row space-x-3
            text-stone-900 font-medium text-xl text-center"
          >
            {download}
            <span>Download CV</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PdfViewer;
