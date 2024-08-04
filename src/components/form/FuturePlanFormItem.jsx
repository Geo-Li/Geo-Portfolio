// For packages
import { useState } from "react";
// For components
import Checkbox from "@/components/input/Checkbox";
import Input from "@/components/input/Input";
import Modal from "@/components/modal/Modal";
import TextArea from "@/components/input/TextArea";
// For backend
import { AddDoc } from "@/hooks/firestore/AddToFirestore";
import { UpdateDoc } from "@/hooks/firestore/UpdateFirestore";

const FuturePlanFormItem = ({ data, buttonContent }) => {
  const futurePlan = data;
  const [openModal, setOpenModal] = useState(false);
  const [finished, setFinished] = useState(
    futurePlan ? futurePlan.finished : false
  );
  const [title, setTitle] = useState(futurePlan ? futurePlan.title : "");
  const [description, setDescription] = useState(
    futurePlan ? futurePlan.description : ""
  );

  function handleSubmit(e) {
    e.preventDefault();
    try {
      const futurePlanData = { finished, title, description };
      if (futurePlan) {
        UpdateDoc("future plan", futurePlan.id, futurePlanData);
        setOpenModal(true);
      } else {
        AddDoc("future plan", futurePlanData);
        setOpenModal(true);
        setFinished(false);
        setTitle("");
        setDescription("");
      }
    } catch (error) {
      console.error("Error adding future plan: ", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Checkbox
          title="Finished"
          id="finished"
          checked={finished}
          toSet={setFinished}
        />
        <Input
          title="Title"
          id="title"
          value={title}
          toSet={setTitle}
          required={true}
        />
        <TextArea
          title="Description"
          id="description"
          value={description}
          toSet={setDescription}
          required={false}
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
              {futurePlan ? "Updated Successfully" : "Created Successfully"}
            </h1>
          </div>
        </Modal>
      )}
    </>
  );
};

export default FuturePlanFormItem;
