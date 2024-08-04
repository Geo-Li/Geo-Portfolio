import { add } from "@/components/icons/Add";

const AddButton = ({ enabled, setOpenModal }) => {
  const enabledStyle =
    "cursor-pointer hover:bg-gradient-to-br from-teal-200 to-lime-200 dark:hover:text-black";
  const disabledStyle =
    "cursor-not-allowed bg-gray-300 dark:bg-gray-600 opacity-50";

  return (
    <button
      type="button"
      disabled={!enabled}
      onClick={() => {
        setOpenModal(true);
      }}
      className={`text-black dark:text-white font-normal rounded-md border border-black dark:border-white px-3.5 py-2 mb-2
        ${enabled ? enabledStyle : disabledStyle}`}
      style={{ border: "1.5px solid" }}
    >
      <div className="flex flex-row space-x-1">
        {add}
        <span>Add</span>
      </div>
    </button>
  );
};

export default AddButton;
