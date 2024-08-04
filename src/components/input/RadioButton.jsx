const RadioButton = ({ value, selectedValue, onChange }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="form-radio h-5 w-5"
        name="radio"
        value={value}
        checked={selectedValue === value}
        onChange={onChange}
      />
      <span className="ml-2 text-stone-900 font-medium text-lg">
        {value.toString()}
      </span>
    </label>
  );
};

export default RadioButton;
