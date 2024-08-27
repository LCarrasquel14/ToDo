import type { Meta, StoryObj } from "@storybook/react";
import ListViewer from "./ListViewer";
const meta: Meta<typeof ListViewer> = {
  component: ListViewer,
};

export default meta;

export const Default: StoryObj<typeof ListViewer> = {
  args: {
    tasksContainer: {
      id: "1",
      nameList: "List 1",
      ProjectId: "1",
      tasks: [
        {
          id: "1",
          nameTask: "Task 1",
          listId: "1",
          parentId: null,
          dateCreated: new Date(),
          description: "Description 1",
          comments: [],
          isDone: false,
          subTasks: [
            {
              id: "1",
              nameTask: "subTask 1",
              listId: "1",
              parentId: "1",
              dateCreated: new Date(),
              description: "Description 1",
              comments: [],
              isDone: false,
              subTasks: [],
            },
          ],
        },
        {
          id: "2",
          nameTask: "Task 2",
          listId: "1",
          parentId: null,
          dateCreated: new Date(),
          description: "Description 2",
          comments: [],
          isDone: false,
          subTasks: [
            {
              id: "2",
              nameTask: "subTask 2",
              listId: "1",
              parentId: "2",
              dateCreated: new Date(),
              description: "Description 2",
              comments: [],
              isDone: false,
              subTasks: [],
            },
            {
              id: "3",
              nameTask: "subTask 3",
              listId: "1",
              parentId: "2",
              dateCreated: new Date(),
              description: "Description 3",
              comments: [],
              isDone: false,
              subTasks: [],
            },
            {
              id: "4",
              nameTask: "subTask 4",
              listId: "1",
              parentId: "2",
              dateCreated: new Date(),
              description: "Description 4",
              comments: [],
              isDone: true,
              subTasks: [],
            },
            {
              id: "5",
              nameTask: "subTask 5",
              listId: "1",
              parentId: "2",
              dateCreated: new Date(),
              description: "Description 5",
              comments: [],
              isDone: true,
              subTasks: [],
            },
          ],
        },
      ],
    },
    listOption: [
      { label: "List 1", value: "1", id: "1" },
      { label: "List 2", value: "2", id: "2" },
    ],
  },
};
