export interface ProjectProps {
  id: string | null;
  name: string;
  onwerId: string;
  usersIncluded: string[] | null;
  dateCreated: string;
}
