import { HTTPMethods } from "../config/api.config";
import { API_CONSTANTS } from "../constants/api.constants";

export const loginService = () => {
  const loginUser = (email: string, password: string) => {
    const response = HTTPMethods.post(API_CONSTANTS.AUTH.LOGIN, {
      email,
      password,
    });

    return response;
  };

  const getRefreshToken = (refreshToken: string) => {
    const response = HTTPMethods.post(API_CONSTANTS.AUTH.REFRESH_TOKEN, {
      refreshToken,
    });
    return response;
  };

  return { loginUser };
};
