import ReactModal from "react-modal";

import React from "react";
import Icon from "../Icon/Icon";

type Props = {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

const Modal = ({ isOpen, children }: Props) => {
  return isOpen ? (
    <div className="flex items-center justify-end">
      <Icon icon="close" size={24} className="cursor-pointer" />
      <ReactModal
        isOpen={isOpen}
        overlayClassName="modal-overlay"
        className="modal-content"
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        {children}
      </ReactModal>
    </div>
  ) : null;
};

export default Modal;
