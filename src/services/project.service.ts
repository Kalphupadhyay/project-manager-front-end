import { HTTPMethods } from "../config/api.config";
import { API_CONSTANTS } from "../constants/api.constants";
import type { IProject } from "../interface/local/project.interface";

export const projectService = () => {
  const getProjects = async () => {
    const response = await HTTPMethods.get<IProject[]>(
      API_CONSTANTS.PROJECT.GET_PROJECTS
    );
    return response.data;
  };

  return { getProjects };
};
