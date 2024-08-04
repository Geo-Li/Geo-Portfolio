import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Title from "./Title";
import Modal from "@/components/modal/Modal";

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [state, handleSubmit, reset] = useForm("myyrnplp");

  function handleNameInputChange(e) {
    setInputName(e.target.value);
  }

  function handleEmailInputChange(e) {
    setInputEmail(e.target.value);
  }

  function handleMessageInputChange(e) {
    setInputMessage(e.target.value);
  }

  function handleClose(close) {
    reset();
    setOpenModal(close);
    setInputName("");
    setInputEmail("");
    setInputMessage("");
  }

  return (
    <div className="mx-auto w-full md:w-7/12">
      <div className="flex flex-col justify-start">
        <Title>Contact</Title>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            className="p-2 bg-transparent
                       border-2 rounded-md
                       focus:outline-none
                       border-black dark:border-white"
            type="text"
            name="name"
            placeholder="Name"
            value={inputName}
            onChange={handleNameInputChange}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            className="my-2 p-2 bg-transparent
                       border-2 rounded-md focus:outline-none
                       border-black dark:border-white"
            type="email"
            name="email"
            placeholder="Email"
            value={inputEmail}
            onChange={handleEmailInputChange}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            className="p-2 mb-4 bg-transparent
                       border-2 rounded-md focus:outline-none
                       border-black dark:border-white"
            name="message"
            placeholder="Message"
            rows="10"
            value={inputMessage}
            onChange={handleMessageInputChange}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="text-center inline-block
                       px-8 py-3 w-max text-base
                       font-medium rounded-md
                       text-white bg-gradient-to-r
                       from-yellow-500 to-pink-500
                       drop-shadow-md"
            type="submit"
            disabled={state.submitting && !state.succeeded}
          >
            Work With Me
          </button>
        </form>
      </div>
      {(state.succeeded || state.errors) && (
        <Modal setOpenModal={handleClose}>
          <div className="container mx-auto p-4 text-black">
            <h1 className="flex justify-center my-6 text-2xl font-medium capitalize">
              {!state.succeeded
                ? "Failed to send message 🙁"
                : "Message sent. Thank you for your feedback!"}
            </h1>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Contact;
