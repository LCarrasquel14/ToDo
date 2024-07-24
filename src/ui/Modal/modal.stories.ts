import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Form from "@/Components/Form";
const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: "Hello World",
    isOpen: true,
    content: Form,
  },
};
