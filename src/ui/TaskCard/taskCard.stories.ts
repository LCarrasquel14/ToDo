import type { Meta, StoryObj } from "@storybook/react";

import TaskCard from "./TaskCard";

const meta: Meta<typeof TaskCard> = {
  component: TaskCard,
};
export default meta;
type Story = StoryObj<typeof TaskCard>;

export const Default: Story = {
  args: {
    taskInfo: {
      id: "1",
      nameTask: "Task 1",
      listId: "1",
      parentId: null,
      dateCreated: new Date(),
      description: "Description",
      comments: [
        {
          autor: "Autor 1",
          dateCreated: new Date(),
          text: "Text 1",
        },
        {
          autor: "Autor 2",
          dateCreated: new Date(),
          text: "Text 2",
        },
      ],
      isDone: false,
      subTasks: [
        {
          id: "1",
          nameTask: "Task 1",
          listId: "1",
          parentId: "1",
          dateCreated: new Date(),
          description: "Description",
          comments: [],
          isDone: false,
          subTasks: [],
        },
        {
          id: "2",
          nameTask: "Task 2",
          listId: "1",
          parentId: "1",
          dateCreated: new Date(),
          description: "Description",
          comments: [],
          isDone: false,
          subTasks: [],
        },
        {
          id: "3",
          nameTask: "Task 3",
          listId: "1",
          parentId: "1",
          dateCreated: new Date(),
          description: "Description",
          comments: [],
          isDone: true,
          subTasks: [],
        },
        {
          id: "4",
          nameTask: "Task 4",
          listId: "1",
          parentId: "1",
          dateCreated: new Date(),
          description: "Description",
          comments: [],
          isDone: true,
          subTasks: [],
        },
      ],
    },
    onEdit: (id) => {
      console.log(`id ${id}`);
    },
    onDelete: (id) => {
      console.log(`id ${id}`);
    },
  },
};
