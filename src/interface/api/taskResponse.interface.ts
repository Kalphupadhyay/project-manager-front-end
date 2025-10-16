import type { IProject } from "../local/project.interface";

export interface ITaskResponse {
  title: string;
  description: string;
  status: string;
  projectId: IProject;
}
