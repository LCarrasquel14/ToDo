import type { Task } from "./Task";
export interface ListProps {
  id: string | null;
  nameList: string;
  ProjectId: string;
  tasks: Task[];
}
