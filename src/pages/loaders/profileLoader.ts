import { redirect } from "react-router-dom";
import auth from "../../auth";
import api from "../../api/api";
import { LoginResponse } from "../../types/types";

export default async function profileLoader() {
  const userId = Number(localStorage.getItem("user_id"));
  if (!auth.isAuthenticated()) {
    return redirect("/login");
  }

  const profileResponse = await api.requestFetchUser(userId);
  const data = profileResponse.data as LoginResponse;

  console.log(profileResponse);
  return {
    image: data.thumbnail,
    phoneNumber: data.phone_number,
  };
}
