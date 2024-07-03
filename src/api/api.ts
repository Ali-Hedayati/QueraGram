import { LoginFormData, SignupFormData } from "../types/types";
import { authInstance, axiosInsance } from "./axios";

const api = {
  requestLogin(paylod: LoginFormData) {
    return authInstance.post("/accounts/login/", paylod);
  },
  requestSignup(paylod: SignupFormData) {
    return authInstance.post("/accounts/", paylod);
  },
  requestChangeAvatar(avatar: Blob, id: number) {
    const formData = new FormData();
    formData.append("thumbnail", avatar);
    return axiosInsance.patch(`/accounts/${id}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },


  requestChangePhone(phoneNumber: number, id: number) {
    const request = {
      phone_number: phoneNumber,
    };

    return axiosInsance.patch(`/accounts/${id}/`, request);
  },

  
  requestFetchUser(id: number) {
    return axiosInsance.get(`/accounts/${id}/`);
  },
};

export default api;
