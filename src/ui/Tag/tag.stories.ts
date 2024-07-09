import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

const meta: Meta<typeof Tag> = {
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    tagContainer: [
      {
        label: "Board view",
        key: "1",
        selected: true,
        icon: "board",
      },
      {
        label: "Add view",
        key: "2",
        selected: false,
        icon: "add",
      },
      {
        label: "Edit view",
        key: "3",
        selected: false,
        icon: "calendar",
      },
    ],
  },
};
