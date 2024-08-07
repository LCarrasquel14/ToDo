import ModalComponent from "@/Components/Modal";
import LoadableButton from "../LoadableButton/LoadableButton";
import React from "react";
import Input from "../Input/Input";
import { ListProps } from "@/entities/List";

type Props = {
  isOpen: boolean;
  onAddList: (list: List) => void;
};
type List = Omit<ListProps, "id" | "ProjectId" | "tasks">;

const AddListModal = ({ isOpen, onAddList }: Props) => {
  const [inputValue, setInputValue] = React.useState("");
  const onInputChange = (value: string) => {
    setInputValue(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddList({ nameList: inputValue });
    setInputValue("");
  };
  return (
    <ModalComponent isOpen={isOpen}>
      {" "}
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4"
      >
        <Input
          name="nameList"
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <LoadableButton
          type="submit"
          isLoading={false}
          label="Save"
          variant="secondary"
        />
      </form>
    </ModalComponent>
  );
};

export default AddListModal;
