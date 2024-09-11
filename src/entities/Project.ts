export interface Project {
  id: string | null;
  name: string;
  onwerId: string;
  usersIncluded: string[] | null;
  dateCreated: string;
}
