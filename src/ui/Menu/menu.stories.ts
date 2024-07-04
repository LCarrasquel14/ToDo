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
        label: "edit",
        key: "1",
        selected: true,
      },
      {
        label: "delete",
        key: "2",
        selected: false,
      },
      {
        label: "copy",
        key: "3",
        selected: false,
      },
    ],
    onOptionClicked: (id) => {
      alert(`clicked ${id}`);
    },
  },
};
