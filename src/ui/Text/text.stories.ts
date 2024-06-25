import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const PageTitle: Story = {
  args: {
    tag: "span",
    text: "Projects",
    variant: "PageTitle",
  },
};

export const title: Story = {
  args: {
    tag: "span",
    text: "Welcome back, Vincent 👋",
    variant: "title",
  },
};

export const titleCard: Story = {
  args: {
    tag: "span",
    text: "Design new ui presentation",
    variant: "titleCard",
  },
};

export const descriptionCard: Story = {
  args: {
    tag: "span",
    text: "Dribbble marketing",
    variant: "descriptionCard",
  },
};

export const subtitle: Story = {
  args: {
    tag: "span",
    text: "subtitle",
    variant: "subtitle",
  },
};

export const option: Story = {
  args: {
    tag: "span",
    text: "add new",
    variant: "option",
  },
};

export const optionSelected: Story = {
  args: {
    tag: "span",
    text: "Board view",
    variant: "optionSelected",
  },
};
