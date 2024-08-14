import type { Meta, StoryObj } from "@storybook/react";
import DateTag from "./DateTag";
const meta: Meta<typeof DateTag> = {
  component: DateTag,
};

export default meta;
type Story = StoryObj<typeof DateTag>;

export const Primary: Story = {
  args: {
    date: new Date(),
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    date: new Date(),
    variant: "secondary",
  },
};
