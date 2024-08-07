import type { TaskProps } from "./Task";
export interface ListProps {
  id: string | null;
  nameList: string;
  ProjectId: string;
  tasks: TaskProps[];
}
