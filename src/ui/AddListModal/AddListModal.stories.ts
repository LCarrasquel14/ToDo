import type { Meta, StoryObj } from "@storybook/react";
import AddListModal from "./AddListModal";

const meta: Meta<typeof AddListModal> = {
  component: AddListModal,
};

export default meta;
type Story = StoryObj<typeof AddListModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    options: [
      { value: "ToDo", label: "ToDo" },
      { value: "InProgress", label: "In Progress" },
      { value: "Done", label: "Done" },
    ],
  },
};
