const TextArea = ({ title, id, value, toSet, required }) => {
  return (
    <div className="mb-4">
      <label className="block text-base font-bold mb-2" htmlFor={id}>
        {title}
      </label>
      <textarea
        className="*:appearance-none rounded-border w-full py-2 px-3 leading-normal
        focus:outline-none focus:shadow-outline h-[150px]"
        id={id}
        type="text"
        value={value}
        onChange={(e) => toSet(e.target.value)}
        required={required}
      />
    </div>
  );
};

export default TextArea;
