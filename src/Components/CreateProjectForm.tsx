import Input from "@/ui/Input/Input";
import LoadableButton from "@/ui/LoadableButton/LoadableButton";
import React from "react";
import type { Project } from "@/ui/AddProjectModal/AddProjectModal";
import ClickAwayListener from "react-click-away-listener";
type Props = {
  onAddProject: (project: Project) => void;
  onClose: () => void;
};
const CreateProjectForm = ({ onAddProject, onClose }: Props) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddProject({
      name: title,
      dateCreated: date,
    });
    setTitle("");
    setDescription("");
    setDate("");
    onClose();
  };
  const handleClickAway = () => {
    onClose();
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4"
      >
        <Input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required={true}
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
          required={true}
        />
        <LoadableButton
          isLoading={false}
          label="Save"
          variant="secondary"
          type="submit"
        />
      </form>
    </ClickAwayListener>
  );
};

export default CreateProjectForm;
