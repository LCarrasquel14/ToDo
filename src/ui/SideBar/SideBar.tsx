import React from "react";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import Navigation from "../Navigation/Navigation";
import { options, options2 } from "@/data/menu";
import AddProjectModal from "../AddProjectModal/AddProjectModal";
import { Project } from "@/entities/Project";

const SideBar = () => {
  const [addProjectModal, setAddProjectModal] = React.useState(false);
  const [newProject, setNewProject] = React.useState<Partial<Project>>({});
  const onClose = () => {
    setAddProjectModal(false);
  };

  return (
    <div className="flex flex-col w-[318px] border-2 border-bgOption p-6">
      <div
        className="flex flex-row gap-4 justify-between items-center mb-7"
        onClick={() => setAddProjectModal(true)}
      >
        <Text text="Projects" variant="PageTitle" />
        <Icon icon="add" size={22} className="cursor-pointer" />
      </div>
      <div>
        <Navigation
          title="Projects"
          options={options}
          onOptionSelected={() => {}}
        />
        <Navigation
          title="tasks"
          options={options2}
          onOptionSelected={() => {}}
        />
      </div>
      <AddProjectModal
        isOpen={addProjectModal}
        onAddProject={(project) => {
          setNewProject(project);
        }}
        onClose={onClose}
      />
    </div>
  );
};

export default SideBar;
