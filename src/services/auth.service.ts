import { HTTPMethods } from "../config/api.config";
import { API_CONSTANTS } from "../constants/api.constants";

export const authService = () => {
  const loginUser = (email: string, password: string) => {
    const response = HTTPMethods.post(API_CONSTANTS.AUTH.LOGIN, {
      email,
      password,
    });

    return response;
  };

  const logoutUser = () => {
    const response = HTTPMethods.get(API_CONSTANTS.AUTH.LOGOUT);
    return response;
  };

  const getRefreshToken = () => {
    const response = HTTPMethods.post(API_CONSTANTS.AUTH.REFRESH_TOKEN);
    return response;
  };

  return { loginUser, getRefreshToken, logoutUser };
};
