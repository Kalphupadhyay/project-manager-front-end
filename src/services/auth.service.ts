import { HTTPMethods } from "../config/api.config";
import { API_CONSTANTS } from "../constants/api.constants";
import type { IUser } from "../interface/local/user.interface";

export const authService = () => {
  const loginUser = (email: string, password: string) => {
    const response = HTTPMethods.post(API_CONSTANTS.AUTH.LOGIN, {
      email,
      password,
    });

    return response;
  };

  const getCurrentUser = async () => {
    const response = await HTTPMethods.get<IUser>(
      API_CONSTANTS.AUTH.CURRENT_USER
    );
    return response.data;
  };

  const logoutUser = async () => {
    const response = await HTTPMethods.get(API_CONSTANTS.AUTH.LOGOUT);
    return response;
  };

  const getRefreshToken = () => {
    const response = HTTPMethods.post(API_CONSTANTS.AUTH.REFRESH_TOKEN);
    return response;
  };

  return { loginUser, getRefreshToken, logoutUser, getCurrentUser };
};
