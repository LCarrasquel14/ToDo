import CreateProjectForm from "../../Components/CreateProjectForm";
import ModalComponent from "../../Components/Modal";
import { Project as ProjectProps } from "@/entities/Project";
import React from "react";

type Props = {
  isOpen: boolean;
  onAddProject: (project: Project) => void;
  onClose: () => void;
};

export type Project = Omit<ProjectProps, "id" | "usersIncluded" | "onwerId">;

const AddProjectModal = ({ isOpen, onAddProject, onClose }: Props) => {
  const handleAddProject = (newProject: Project) => {
    onAddProject(newProject);
  };
  return (
    <ModalComponent isOpen={isOpen}>
      <CreateProjectForm onAddProject={handleAddProject} onClose={onClose} />
    </ModalComponent>
  );
};

export default AddProjectModal;
