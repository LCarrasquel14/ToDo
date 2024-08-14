import CreateProjectForm from "@/Components/CreateProjectForm";
import ModalComponent from "@/Components/Modal";
import { ProjectProps } from "@/entities/Project";
import React from "react";

type Props = {
  isOpen: boolean;
  onAddProject: (project: Project) => void;
};

export type Project = Omit<ProjectProps, "id" | "usersIncluded" | "onwerId">;

const AddProjectModal = ({ isOpen, onAddProject }: Props) => {
  return (
    <ModalComponent isOpen={isOpen}>
      <CreateProjectForm onAddProject={onAddProject} />
    </ModalComponent>
  );
};

export default AddProjectModal;
