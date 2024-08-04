import PdfViewer from "@/components/pdf/PdfViewer";

const ResumePage = () => {
  return (
    <div className="flex justify-center items-center pt-[12vh]">
      <PdfViewer file="assets/documents/Zhuoyuan Li's Resume.pdf" />
    </div>
  );
};

export default ResumePage;
