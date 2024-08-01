import ModalComponent from "@/Components/Modal";
import React from "react";
import Input from "../Input/Input";
import LoadableButton from "../LoadableButton/LoadableButton";
import SelectComponent from "@/Components/SelectComponent";
import { TaskProps } from "@/entities/Task";

type Props = {
  isOpen: boolean;
  onAddTask: (task: Task) => void;
};

type Task = Omit<TaskProps, "id" | "parentId"> & {
  option?: string;
};

const AddTaskModal = ({ isOpen, onAddTask }: Props) => {
  const [nameTask, setNameTask] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");
  const [option, setOption] = React.useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTask({
      nameTask,
      description,
      dateCreated: date,
      listId: option,
      comments: [],
    });
    setNameTask("");
    setDescription("");
    setDate("");
    setOption("");
  };
  const options = [
    { label: "High", value: "High" },
    { label: "Medium", value: "Medium" },
    { label: "Low", value: "Low" },
  ];
  return (
    <ModalComponent isOpen={isOpen}>
      {" "}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4"
      >
        <Input
          name="nameTask"
          type="text"
          value={nameTask}
          onChange={(e) => setNameTask(e.target.value)}
        />
        <Input
          name="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <SelectComponent
          options={options}
          onchange={(value) => setOption(value || "")}
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

export default AddTaskModal;
