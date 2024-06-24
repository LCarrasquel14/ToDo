import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const nameProyect: Story = {
  args: {
    tag: "span",
    text: "nameProyect",
    variant: "nameProyect",
  },
};

export const title: Story = {
  args: {
    tag: "span",
    text: "title",
    variant: "title",
  },
};

export const subtitle: Story = {
  args: {
    tag: "span",
    text: "subtitle",
    variant: "subtitle",
  },
};

export const paragraph: Story = {
  args: {
    tag: "span",
    text: "paragraph",
    variant: "paragraph",
  },
};
