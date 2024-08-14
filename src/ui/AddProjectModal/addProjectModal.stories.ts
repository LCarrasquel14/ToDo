import type { Meta, StoryObj } from "@storybook/react";
import AddProjectModal from "./AddProjectModal";

const meta: Meta<typeof AddProjectModal> = {
  component: AddProjectModal,
};

export default meta;
type Story = StoryObj<typeof AddProjectModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onAddProject(project) {
      console.log(project);
    },
  },
};
