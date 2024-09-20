import ModalComponent from "@/Components/Modal";
import React from "react";
import Input from "../Input/Input";
import LoadableButton from "../LoadableButton/LoadableButton";
import SelectComponent from "@/Components/SelectComponent";
import { Task as TaskProps } from "@/entities/Task";
import ClickAwayListener from "react-click-away-listener";
import { List } from "@/entities/List";

type Props = {
  isOpen: boolean;
  onAddTask: (task: Task) => void;
  listOption: { label: string; value: string; id: string }[];
  onClose: () => void;
  listId: List["id"];
};

type Task = Omit<TaskProps, "id" | "parentId"> & {
  option?: string;
};

const AddTaskModal = ({
  isOpen,
  onAddTask,
  listOption,
  onClose,
  listId,
}: Props) => {
  const [nameTask, setNameTask] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");
  const [option, setOption] = React.useState("");
  const listForDefault = listOption.find((list) => list.id === listId);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTask({
      nameTask,
      description,
      dateCreated: new Date(date),
      listId: option,
      comments: [],
      subTasks: [],
      isDone: false,
    });
    setNameTask("");
    setDescription("");
    setDate("");
    setOption("");
    onClose();
  };

  const handleClickAway = () => {
    onClose();
  };

  return (
    <ModalComponent isOpen={isOpen}>
      {" "}
      <ClickAwayListener onClickAway={handleClickAway}>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4"
        >
          <Input
            name="nameTask"
            type="text"
            value={nameTask}
            onChange={(e) => setNameTask(e.target.value)}
            required
          />
          <Input
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Input
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <SelectComponent
            options={listOption}
            onchange={(value) => setOption(value || "")}
            required={true}
            defaultValue={listForDefault || { label: "", value: "", id: "" }}
          />
          <LoadableButton
            type="submit"
            isLoading={false}
            label="Save"
            variant="secondary"
          />
        </form>
      </ClickAwayListener>
    </ModalComponent>
  );
};

export default AddTaskModal;
