import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./Menu";
const meta: Meta<typeof Menu> = {
  component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    options: [
      {
        label: "Edit",
        key: "1",
      },
      {
        label: "Delete",
        key: "2",
      },
      {
        label: "copy",
        key: "3",
      },
    ],
    onOptionClicked: (id) => {
      alert(`clicked ${id}`);
    },
  },
};
