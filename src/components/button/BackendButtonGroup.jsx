// For packages
import { useState } from "react";
// For components
import AddButton from "@/components/button/AddButton";
import CreateForm from "@/components/form/CreateForm";
import EditButton from "@/components/button/EditButton";
import Modal from "@/components/modal/Modal";
import Tooltip from "@/components/tooltip/components/Tooltip";
import UpdateForm from "@/components/form/UpdateForm";

const BackendButtonGroup = ({
  canEdit,
  updateFormTitle,
  docData,
  createFormTitle,
  FormItem,
}) => {
  const tooltipContent = "You are not Geo!";
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  return (
    <div className="flex flex-row md:space-x-3 space-x-2">
      <Tooltip content={tooltipContent} enabled={canEdit}>
        <EditButton enabled={canEdit} setOpenModal={setOpenUpdateModal} />
      </Tooltip>
      {openUpdateModal && (
        <Modal setOpenModal={setOpenUpdateModal}>
          <UpdateForm
            formTitle={updateFormTitle}
            docData={docData}
            FormItem={FormItem}
          />
        </Modal>
      )}
      <Tooltip content={tooltipContent} enabled={canEdit}>
        <AddButton enabled={canEdit} setOpenModal={setOpenCreateModal} />
      </Tooltip>
      {openCreateModal && (
        <Modal setOpenModal={setOpenCreateModal}>
          <CreateForm formTitle={createFormTitle} FormItem={FormItem} />
        </Modal>
      )}
    </div>
  );
};

export default BackendButtonGroup;
