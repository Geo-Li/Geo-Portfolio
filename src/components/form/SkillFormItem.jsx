// For packages
import { useState } from "react";
// For components
import Input from "@/components/input/Input";
import Modal from "@/components/modal/Modal";
import RadioButtonGroup from "@/components/input/RadioButtonGroup";
import TextArea from "@/components/input/TextArea";
// For types
import { CategoryEnum } from "@/types/enum/category";
// For backend
import { AddDoc } from "@/hooks/firestore/AddToFirestore";
import { UpdateDoc } from "@/hooks/firestore/UpdateFirestore";

const SkillFormItem = ({ data, buttonContent }) => {
  const skill = data;
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState(
    skill ? skill.category : CategoryEnum.options[0]
  );
  const [label, setLabel] = useState(skill ? skill.label : "");
  const [icon, setIcon] = useState(skill ? skill.icon : "");

  function handleSubmit(e) {
    e.preventDefault();
    try {
      const skillData = { category, label, icon };
      if (skill) {
        UpdateDoc("skill", skill.id, skillData);
        setOpenModal(true);
      } else {
        AddDoc("skill", skillData);
        setOpenModal(true);
        setLabel("");
        setIcon("");
      }
    } catch (error) {
      console.error("Error adding skill: ", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <RadioButtonGroup
          title="Category"
          id="category"
          values={CategoryEnum.options}
          selectedValue={category}
          toSet={setCategory}
          required={true}
        />
        <Input
          title="Label"
          id="label"
          value={label}
          toSet={setLabel}
          required={true}
        />
        <TextArea
          title="Icon"
          id="icon"
          value={icon}
          toSet={setIcon}
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
              {skill ? "Updated Successfully" : "Created Successfully"}
            </h1>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SkillFormItem;
