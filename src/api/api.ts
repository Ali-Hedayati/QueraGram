
import { LoginFormData } from "../types/types";
import { authInstance } from "./axios";

const api = {
  requestLogin(paylod: LoginFormData) {
    return authInstance.post("/accounts/login/", paylod);
  },
};

export default api;
