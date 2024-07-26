import type { Meta, StoryObj } from "@storybook/react";
import LoadableButton from "./LoadableButton";
const meta: Meta<typeof LoadableButton> = {
  component: LoadableButton,
};

export default meta;
type Story = StoryObj<typeof LoadableButton>;

export const Primary: Story = {
  args: {
    isLoading: false,
    label: "Save",
    variant: "secondary",
  },
};
