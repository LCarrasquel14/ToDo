import React from "react";
import Modal from "react-modal";
import Form from "@/Components/Form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalComponent = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(isOpen);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div onClick={openModal}>{children}</div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
      >
        <Form />
      </Modal>
    </div>
  );
};

export default ModalComponent;
