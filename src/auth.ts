import api from "./api/api";
import { LoginFormData, LoginResponse, SignupFormData } from "./types/types";

const auth = {
  isAuthenticated() {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return false;
    }
    return true;
  },

  async login(data: LoginFormData) {
    try {
      const response = await api.requestLogin(data);
      const responseData = response.data as LoginResponse;
      const id = responseData.user_id;
      localStorage.setItem("accessToken", responseData.access);
      localStorage.setItem("refreshToken", responseData.refresh);
      localStorage.setItem("user_id", String(id));
    } catch (e) {
      throw e;
    }
  },

  async signup(data: SignupFormData) {
    try {
      await api.requestSignup(data);
      await auth.login({
        username: data.username,
        password: data.password,
      });
    } catch (e) {
      throw e;
    }
  },
};

export default auth;
