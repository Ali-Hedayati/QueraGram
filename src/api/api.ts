import { LoginFormData, SignupFormData } from "../types/types";
import { authInstance } from "./axios";

const api = {
  requestLogin(paylod: LoginFormData) {
    return authInstance.post("/accounts/login/", paylod);
  },
  requestSignup(paylod: SignupFormData) {
    return authInstance.post("/accounts/", paylod);
  },
};

export default api;
