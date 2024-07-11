import type { Meta, StoryObj } from "@storybook/react";

import Tab from "./Tab";
const meta: Meta<typeof Tab> = {
  component: Tab,
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    tabs: [
      {
        id: "1",
        label: "Tab 1",
        selected: true,
      },
      {
        id: "2",
        label: "Tab 2",
        selected: false,
      },
    ],
    onTab: (id) => {
      console.log(`selected ${id}`);
    },
  },
};
