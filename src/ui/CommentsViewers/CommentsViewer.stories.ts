import type { Meta, StoryObj } from "@storybook/react";
import CommentsViewer from "./CommentsViewer";

const meta: Meta<typeof CommentsViewer> = {
  component: CommentsViewer,
};

export default meta;

type Story = StoryObj<typeof CommentsViewer>;

export const Comments: Story = {
  args: {
    comments: [
      {
        autor: "1",
        text: "comment 1",
        dateCreated: new Date(),
      },
      {
        autor: "2",
        text: "comment 2",
        dateCreated: new Date(),
      },
    ],
    icon: "comments",
  },
};
