import type { Task } from "./Task";
export interface List {
  id: string;
  nameList: string;
  ProjectId: string;
  tasks: Task[];
}
