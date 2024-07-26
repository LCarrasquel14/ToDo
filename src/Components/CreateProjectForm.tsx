import Input from "@/ui/Input/Input";
import LoadableButton from "@/ui/LoadableButton/LoadableButton";
import React from "react";

const CreateProjectForm: React.FC = () => {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4">
      <Input name="title" type="text" />
      <Input name="onwerId" type="text" />
      <Input name="description" type="text" />
      <Input name="date" type="date" />
      <LoadableButton isLoading={false} label="Save" variant="secondary" />
    </form>
  );
};

export default CreateProjectForm;