import type { CommentsProps } from "./Comments";
export interface TaskProps {
  id: string | null;
  nameTask: string;
  listId: string;
  parentId: string | null;
  dateCreated: string;
  description: string;
  comments: CommentsProps[];
}
