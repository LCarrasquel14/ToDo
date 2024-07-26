import React from "react";
import Modal from "react-modal";

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
  return (
    <Modal
      isOpen={isOpen}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
