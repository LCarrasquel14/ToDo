import type { Meta, StoryObj } from "@storybook/react";

import Dragged from "./Dragged";
const meta: Meta<typeof Dragged> = {
  component: Dragged,
};

export default meta;
type Story = StoryObj<typeof Dragged>;

export const Default: Story = {
  args: {},
};
