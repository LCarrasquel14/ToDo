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

export const Title: Story = {
  args: {
    tag: "span",
    text: "Welcome back, Vincent 👋",
    variant: "title",
  },
};

export const TitleCard: Story = {
  args: {
    tag: "span",
    text: "Design new ui presentation",
    variant: "titleCard",
  },
};

export const DescriptionCard: Story = {
  args: {
    tag: "span",
    text: "Dribbble marketing",
    variant: "descriptionCard",
  },
};

export const Subtitle: Story = {
  args: {
    tag: "span",
    text: "subtitle",
    variant: "subtitle",
  },
};

export const Option: Story = {
  args: {
    tag: "span",
    text: "add new",
    variant: "option",
  },
};

export const OptionSelected: Story = {
  args: {
    tag: "span",
    text: "Board view",
    variant: "optionSelected",
  },
};
