import type { Meta, StoryObj } from "@storybook/react";
import ProjectViewer from "./ProjectViewer";

const meta: Meta<typeof ProjectViewer> = {
  component: ProjectViewer,
};

export default meta;

export const Default: StoryObj<typeof ProjectViewer> = {
  args: {
    listInfo: [
      {
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
      {
        id: "2",
        nameList: "List 2",
        ProjectId: "1",
        tasks: [
          {
            id: "3",
            nameTask: "Task 1",
            listId: "2",
            parentId: null,
            dateCreated: new Date(),
            description: "Description 1",
            comments: [],
            isDone: false,
            subTasks: [
              {
                id: "1",
                nameTask: "subTask 1",
                listId: "2",
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
            id: "4",
            nameTask: "Task 2",
            listId: "2",
            parentId: null,
            dateCreated: new Date(),
            description: "Description 2",
            comments: [],
            isDone: false,
            subTasks: [
              {
                id: "2",
                nameTask: "subTask 2",
                listId: "2",
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
                listId: "2",
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
                listId: "2",
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
                listId: "2",
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
      {
        id: "3",
        nameList: "List 3",
        ProjectId: "1",
        tasks: [
          {
            id: "5",
            nameTask: "Task 1",
            listId: "3",
            parentId: null,
            dateCreated: new Date(),
            description: "Description 1",
            comments: [],
            isDone: false,
            subTasks: [
              {
                id: "1",
                nameTask: "subTask 1",
                listId: "3",
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
            id: "6",
            nameTask: "Task 2",
            listId: "3",
            parentId: null,
            dateCreated: new Date(),
            description: "Description 2",
            comments: [],
            isDone: false,
            subTasks: [
              {
                id: "2",
                nameTask: "subTask 2",
                listId: "3",
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
                listId: "3",
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
                listId: "3",
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
                listId: "3",
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
    ],
  },
};