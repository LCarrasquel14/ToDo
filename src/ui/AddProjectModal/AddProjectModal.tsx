import CreateProjectForm from "@/Components/CreateProjectForm";
import ModalComponent from "@/Components/Modal";
import React from "react";

type Props = {
  isOpen: boolean;
};

const AddProjectModal = ({ isOpen }: Props) => {
  return (
    <ModalComponent isOpen={isOpen}>{<CreateProjectForm />}</ModalComponent>
  );
};

export default AddProjectModal;
