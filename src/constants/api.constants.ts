const API_VERSION = {
  AUTH: "v1",
  PROJECT: "v1",
  TASK: "v1",
  // add more modules if needed
};

const API = {
  AUTH: `${API_VERSION.AUTH}/auth`,
  PROJECT: `${API_VERSION.PROJECT}/projects`,
  TASK: `${API_VERSION.TASK}/tasks`,
};

export const API_CONSTANTS = {
  AUTH: {
    LOGIN: `${API.AUTH}/login`,
    REGISTER: `${API.AUTH}/register`,
    LOGOUT: `${API.AUTH}/logout`,
    REFRESH_TOKEN: `${API.AUTH}/refresh-token`,
    CURRENT_USER: `${API.AUTH}/current-user`,
  },
  PROJECT: {
    GET_PROJECTS: `${API.PROJECT}/`,
  },
  TASK: {
    CREATE_TASK: `${API.TASK}/`,
    CURRENT_USER_TASKS: `${API.TASK}/me/`,
  },
};
