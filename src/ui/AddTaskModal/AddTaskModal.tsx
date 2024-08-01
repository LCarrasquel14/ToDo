import ModalComponent from "@/Components/Modal";
import React from "react";
import Input from "../Input/Input";
import LoadableButton from "../LoadableButton/LoadableButton";
import SelectComponent from "@/Components/SelectComponent";

type Props = {
  isOpen: boolean;
};

const AddTaskModal = ({ isOpen }: Props) => {
  const options = [
    { label: "High", value: "High" },
    { label: "Medium", value: "Medium" },
    { label: "Low", value: "Low" },
  ];
  return (
    <ModalComponent isOpen={isOpen}>
      {" "}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4">
        <Input name="listId" type="text" />
        <Input name="title" type="text" />
        <Input name="subTitle" type="text" />
        <Input name="description" type="text" />
        <Input name="date" type="date" />
        <SelectComponent options={options} onchange={() => {}} />
        <LoadableButton isLoading={false} label="Save" variant="secondary" />
      </form>
    </ModalComponent>
  );
};

export default AddTaskModal;
