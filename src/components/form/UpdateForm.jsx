const UpdateForm = ({ formTitle, docData, FormItem }) => {
  return (
    <div className="container mx-auto p-4 text-black ">
      <h1 className="flex justify-center text-2xl font-bold mb-4">
        {formTitle}
      </h1>
      <div className="space-y-4">
        {docData &&
          docData.map((data) => (
            <FormItem
              key={data.id}
              data={data}
              buttonContent={formTitle}
            />
          ))}
      </div>
    </div>
  );
};

export default UpdateForm;
