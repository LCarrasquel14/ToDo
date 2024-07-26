import ModalComponent from "@/Components/Modal";
import React from "react";
import Input from "../Input/Input";
import LoadableButton from "../LoadableButton/LoadableButton";

type Props = {
  isOpen: boolean;
};

const AddListModal = ({ isOpen }: Props) => {
  return (
    <ModalComponent isOpen={isOpen}>
      {" "}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4">
        <Input name="nameList" type="text" />
        <LoadableButton isLoading={false} label="Save" variant="secondary" />
      </form>
    </ModalComponent>
  );
};

export default AddListModal;
