import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../auth";
import { LoginFormData } from "../../types/types";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const navigate = useNavigate();


  async function onSubmit(data: LoginFormData) {
    try {
      await auth.login(data);
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
    </>
  );
}
{
  /* <button onClick={onRegister}>register</button> */
}
