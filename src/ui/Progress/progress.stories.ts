import type { Meta, StoryObj } from "@storybook/react";
import Progress from "./Progress";
const meta: Meta<typeof Progress> = {
  component: Progress,
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    maxLimit: 10,
    progress: 7,
  },
};
