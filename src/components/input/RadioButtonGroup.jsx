import RadioButton from "./RadioButton";

const rounded_border = "border rounded-md border-black";

const RadioButtonGroup = ({
  title,
  id,
  values,
  selectedValue,
  toSet,
  required,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-base font-bold mb-2" htmlFor={id}>
        {title}
      </label>
      <div
        id={id}
        className={`flex flex-col justify-start px-5 py-3
        h-[100px] overflow-auto space-y-3 ${rounded_border}`}
        style={{ border: "1.5px solid" }}
        required={required}
      >
        {values.map((value) => (
          <RadioButton
            key={value}
            value={value}
            selectedValue={selectedValue}
            onChange={() => toSet(value)}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
