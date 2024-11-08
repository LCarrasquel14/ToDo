import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "New template",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Save",
    variant: "secondary",
  },
};
