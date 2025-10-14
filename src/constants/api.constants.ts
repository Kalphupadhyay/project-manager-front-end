const API_VERSION = {
  AUTH: "v1",
  PROJECT: "v1",
  // add more modules if needed
};

const API = {
  AUTH: `${API_VERSION.AUTH}/auth`,
  PROJECT: `${API_VERSION.PROJECT}/projects`,
};

export const API_CONSTANTS = {
  AUTH: {
    LOGIN: `${API.AUTH}/login`,
    REGISTER: `${API.AUTH}/register`,
    LOGOUT: `${API.AUTH}/logout`,
    REFRESH_TOKEN: `${API.AUTH}/refresh-token`,
  },
  PROJECT: {
    GET_PROJECTS: `${API.PROJECT}/`,
  },
};
