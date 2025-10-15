import { HTTPMethods } from "../config/api.config";
import { API_CONSTANTS } from "../constants/api.constants";
import type { ITask } from "../interface/local/task.interface";

export const TaskService = () => {
  const createTask = async (task: ITask) => {
    // Placeholder for task creation logic
    const response = await HTTPMethods.post(
      API_CONSTANTS.TASK.CREATE_TASK,
      task
    );
    return response.data;
  };

  return { createTask };
};
