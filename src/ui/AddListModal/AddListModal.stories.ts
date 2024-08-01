import type { Meta, StoryObj } from "@storybook/react";
import AddListModal from "./AddListModal";

const meta: Meta<typeof AddListModal> = {
  component: AddListModal,
};

export default meta;
type Story = StoryObj<typeof AddListModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onAddList: ({ nameList }: { nameList: string }) => {
      console.log(`added ${nameList}`);
    },
  },
};
