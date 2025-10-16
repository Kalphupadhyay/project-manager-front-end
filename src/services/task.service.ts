import { HTTPMethods } from "../config/api.config";
import { API_CONSTANTS } from "../constants/api.constants";
import type { ITaskResponse } from "../interface/api/taskResponse.interface";
import type { ITask } from "../interface/local/task.interface";

export const TaskService = () => {
  const createTask = async (task: ITask, projectId: string) => {
    // Placeholder for task creation logic
    const response = await HTTPMethods.post(
      API_CONSTANTS.TASK.CREATE_TASK + projectId,
      task
    );
    return response.data;
  };

  const getCurrentUserTasks = async () => {
    const response = await HTTPMethods.get<ITaskResponse[]>(
      API_CONSTANTS.TASK.CURRENT_USER_TASKS
    );
    return response.data;
  };

  return { createTask, getCurrentUserTasks };
};
