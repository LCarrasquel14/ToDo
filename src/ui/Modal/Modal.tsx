import ReactModal from "react-modal";

import React from "react";
import Icon from "../Icon/Icon";

type Props = {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  return isOpen ? (
    <>
      <i
        className="cursor-pointer flex items-center justify-end "
        onClick={onClose}
      >
        <Icon icon="close" size={24} />
      </i>
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
    </>
  ) : null;
};

export default Modal;
