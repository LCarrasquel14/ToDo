import type { Meta, StoryObj } from "@storybook/react";
import Navigation from "./Navigation";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const defeault: Story = {
  args: {
    title: "Projects",
    options: [
      {
        label: "All projects (3)",
        key: "1",
        selected: false,
      },
      {
        label: "Design system",
        key: "2",
        selected: false,
      },
      {
        label: "User flow",
        key: "3",
        selected: true,
      },
      {
        label: "Ux research",
        key: "4",
        selected: false,
      },
    ],
    onOptionSelected: (id) => {
      console.log(`selected ${id}`);
    },
  },
};
