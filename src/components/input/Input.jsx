const rounded_border = "border rounded-md border-black";

const Input = ({ title, id, value, toSet, required }) => {
  return (
    <div className="mb-4">
      <label className="block text-base font-bold mb-1" htmlFor={id}>
        {title}
      </label>
      <input
        className={`appearance-none w-full py-2 px-3 leading-normal
        focus:outline-none focus:shadow-outline ${rounded_border}`}
        style={{ border: "1.5px solid" }}
        id={id}
        type="text"
        value={value}
        onChange={(e) => toSet(e.target.value)}
        required={required}
      />
    </div>
  );
};

export default Input;
