import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

interface LoginFormData {
  // email: string;
  username: string;
  password: string;
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const navigate = useNavigate();

  async function onRegister() {
    try {
      const response = await axios.post("http://185.8.174.74:8000/accounts/", {
        username: "kaneki",
        email: "user@gmail.com",
        password: "12345",
      });
      console.log(response);
    } catch {
      console.log("error in register");
    }
  }

  async function onSubmit(data: LoginFormData) {
    try {
      const response = await api.requestLogin(data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <form
        className="flex flex-col w-full items-center gap-y-8 basis-4/5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          id="username"
          className="border rounded text-md py-2 px-4 w-3/4"
          placeholder="نام کاربری"
          {...register("username", { required: true })}
        />
        {/* <input
          type="emial"
          id="email"
          className="border rounded text-md py-2 px-4 w-3/4"
          placeholder="ایمیل"
          {...register("email", { required: true })}
        /> */}
        <input
          type="password"
          id="password"
          className="border rounded text-md py-2 px-4 w-3/4"
          placeholder="گزرواژه"
          {...register("password", { required: true })}
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded px-5 py-2.5 w-1/3 text-center"
        >
          ورود
        </button>
      </form>
      <button onClick={onRegister}>register</button>
    </>
  );
}
