const rounded_border = "border rounded-md border-black";

const Checkbox = ({ title, id, checked, toSet }) => {
  return (
    <div className="mb-4">
      <label
        className="inline-flex items-center text-base font-bold space-x-5"
        htmlFor={id}
      >
        <span>{title}</span>
        <input
          id={id}
          type="checkbox"
          className="form-checkbox h-5 w-5"
          checked={checked}
          onChange={(e) => toSet(e.target.checked)}
        />
      </label>
    </div>
  );
};

export default Checkbox;
