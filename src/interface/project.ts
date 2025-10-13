export interface Project {
  id: string;
  name: string;
  taskIds: string[];
  status: "active" | "completed" | "archived";
}
