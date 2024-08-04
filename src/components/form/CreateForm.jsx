const CreateForm = ({ formTitle, FormItem }) => {
  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="flex justify-center text-2xl font-bold mb-4">
        {formTitle}
      </h1>
      <FormItem buttonContent={formTitle} />
    </div>
  );
};

export default CreateForm;
