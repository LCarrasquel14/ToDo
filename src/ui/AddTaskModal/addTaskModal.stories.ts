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
    onAddTask(task) {
      console.log(task);
    },
    listOption: [
      {
        label: "List 1",
        value: "1",
        id: "1",
      },
      {
        label: "List 2",
        value: "2",
        id: "2",
      },
    ],
  },
};
