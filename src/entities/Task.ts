import type { CommentsProps } from "./Comments";
export interface Task {
  id: string | null;
  nameTask: string;
  listId: string;
  parentId: string | null;
  dateCreated: Date;
  description: string;
  comments: CommentsProps[];
  isDone: boolean;
  subTasks: Task[];
}
