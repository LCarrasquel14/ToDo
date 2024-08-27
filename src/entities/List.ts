import type { Task } from "./Task";
export interface List {
  id: string | null;
  nameList: string;
  ProjectId: string;
  tasks: Task[];
}
