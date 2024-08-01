import ModalComponent from "@/Components/Modal";
import LoadableButton from "../LoadableButton/LoadableButton";
import React from "react";
import Input from "../Input/Input";
import SelectComponent from "@/Components/SelectComponent";

type Props = {
  isOpen: boolean;
};

const AddListModal = ({ isOpen }: Props) => {
  const [inputValue, setInputValue] = React.useState("");
  const onINputChange = (value: string) => {
    setInputValue(value);
    console.log(inputValue);
  };
  return (
    <ModalComponent isOpen={isOpen}>
      {" "}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4">
        <Input
          name="title"
          type="text"
          onchange={(e) => onINputChange(e.target.value)}
        />
        <LoadableButton isLoading={false} label="Save" variant="secondary" />
      </form>
    </ModalComponent>
  );
};

export default AddListModal;
