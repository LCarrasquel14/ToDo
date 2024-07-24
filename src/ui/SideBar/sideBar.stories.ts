<<<<<<< HEAD
import type { Meta, StoryObj } from "@storybook/react";
import SideBar from "./SideBar";
=======
import { Meta, StoryObj } from "@storybook/react";
import SideBar from "./SideBar";

>>>>>>> 7dfd84209c2f2d2b535a220adc241b84cc47b5d4
const meta: Meta<typeof SideBar> = {
  component: SideBar,
};

export default meta;
type Story = StoryObj<typeof SideBar>;

<<<<<<< HEAD
export const Default: Story = {};
=======
export const Default: Story = {
  args: {},
};
>>>>>>> 7dfd84209c2f2d2b535a220adc241b84cc47b5d4
