import ReactModal from "react-modal";
import React from "react";
import Icon from "../Icon/Icon";
import { FC, ReactNode } from "react";

type Props = {
  isOpen: boolean;
  onClose?: () => void;
  children?: ReactNode;
};

const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <div>
      {isOpen && (
        <i
          className="cursor-pointer flex items-center justify-end "
          onClick={onClose}
        >
          <Icon icon="close" size={24} />
        </i>
      )}
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
  );
};

export default Modal;
