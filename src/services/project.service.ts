import { HTTPMethods } from "../config/api.config";
import { API_CONSTANTS } from "../constants/api.constants";
import type { IProjectResponse } from "../interface/api/projectResponse.interface";

export const projectService = () => {
  const getProjects = async () => {
    const response = await HTTPMethods.get<IProjectResponse[]>(
      API_CONSTANTS.PROJECT.GET_PROJECTS
    );
    return response.data;
  };

  return { getProjects };
};
