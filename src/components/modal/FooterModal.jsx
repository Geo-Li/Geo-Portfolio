import CopyButton from "@/components/button/CopyButton";
import Modal from "./Modal";

const FooterModal = ({ title, info, setOpenModal, content }) => {
  return (
    <>
      <Modal setOpenModal={setOpenModal}>
        <div className="flex justify-center p-4 text-stone-900">
          <div className="flex flex-col">
            <span className="sr-only">{content}</span>
            <p className="mb-3">{title}</p>
            {info.map((pair) => (
              <div key={pair.label} className="text-left">
                <p className="mt-3 italic font-medium">{pair.label}</p>
                <div>
                  {pair.ids.map((id) => (
                    <div
                      key={id}
                      className="flex flex-row justify-between items-center space-x-5 my-2"
                    >
                      <p className="text-lg font-semibold">{id}</p>
                      <CopyButton id={id} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FooterModal;
