import { useState } from "react";
import Input from "@/components/input/Input";
import Modal from "@/components/modal/Modal";
import TextArea from "@/components/input/TextArea";
import { AddDoc } from "@/hooks/firestore/AddToFirestore";
import { UpdateDoc } from "@/hooks/firestore/UpdateFirestore";

const TimelineFormItem = ({ data, buttonContent }) => {
  const timeline = data;
  const [openModal, setOpenModal] = useState(false);
  const [startTime, setStartTime] = useState(
    timeline ? timeline.startTime : ""
  );
  const [title, setTitle] = useState(timeline ? timeline.title : "");
  const [duration, setDuration] = useState(timeline ? timeline.duration : "");
  const [institution, setInstitution] = useState(
    timeline ? timeline.institution : ""
  );
  const [details, setDetails] = useState(timeline ? timeline.institution : "");

  function handleSubmit(e) {
    e.preventDefault();
    try {
      const timelineData = { startTime, title, duration, institution, details };
      if (timeline) {
        UpdateDoc("timeline", timeline.id, timelineData);
        setOpenModal(true);
      } else {
        AddDoc("timeline", timelineData);
        setOpenModal(true);
        setStartTime("");
        setTitle("");
        setDuration("");
        setInstitution("");
        setDetails("");
      }
    } catch (error) {
      console.error("Error adding timeline:", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          title="Start Time"
          id="startTime"
          value={startTime}
          toSet={setStartTime}
          required={false}
        />
        <Input
          title="Title"
          id="title"
          value={title}
          toSet={setTitle}
          required={true}
        />
        <Input
          title="Duration"
          id="duration"
          value={duration}
          toSet={setDuration}
          required={true}
        />
        <Input
          title="Institution"
          id="institution"
          value={institution}
          toSet={setInstitution}
          required={false}
        />
        <TextArea
          title="Details"
          id="details"
          value={details}
          toSet={setDetails}
          required={true}
        />
        <div className="flex justify-center items-center">
          <button
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 shadow-lg shadow-teal-500/50
            font-medium rounded-md text-normal px-5 py-2.5 text-center mb-6"
            type="submit"
          >
            {buttonContent}
          </button>
        </div>
      </form>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <div className="container mx-auto p-4 text-black">
            <h1 className="flex justify-center text-2xl font-bold my-4 capitalize">
              {timeline ? "Updated Successfully" : "Created Successfully"}
            </h1>
          </div>
        </Modal>
      )}
    </>
  );
};

export default TimelineFormItem;
