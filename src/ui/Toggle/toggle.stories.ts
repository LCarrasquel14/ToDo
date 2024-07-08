import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";
const meta: Meta<typeof Toggle> = {
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    buttons: [
      {
        label: "Light",
        icon: "lightmode",
        id: "1",
        selected: false,
      },
      {
        label: "Dark",
        icon: "darkmode",
        id: "2",
        selected: true,
      },
    ],
  },
};
