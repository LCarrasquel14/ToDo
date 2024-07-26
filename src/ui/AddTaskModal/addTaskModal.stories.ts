import type { Meta, StoryObj } from "@storybook/react";
import AddTaskModal from "./AddTaskModal";

const meta: Meta<typeof AddTaskModal> = {
  component: AddTaskModal,
};

export default meta;
type Story = StoryObj<typeof AddTaskModal>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
