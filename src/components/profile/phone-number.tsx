import { useForm } from "react-hook-form";
import { PhoneFormData } from "../../types/types";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

interface PhoneNumType {
  phoneNumber: number;
}

export default function PhoneNum({ phoneNumber }: PhoneNumType) {
  // export default function PhoneNum() {
  const userId = Number(localStorage.getItem("user_id"));
  const { register, handleSubmit } = useForm<PhoneFormData>();
  const navigate = useNavigate();

  async function onSubmit({ phone_number }: PhoneFormData) {
    try {
      const response = await api.requestChangePhone(phone_number, userId);
      console.log("response in phone:", response);
      // navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="basis-3/5">
      <form
        className="w-full flex flex-col items-center justify-around h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="number"
          className="basis-2/3 p-2.5 w-3/4 bg-gray-50 rounded border border-gray-300
           focus:border-blue-500"
          placeholder="شماره تماس را وارد کنید"
          {...register("phone_number")}
          defaultValue={phoneNumber}
        />

        <button
          className="text-white bg-blue-700
         hover:bg-blue-800 focus:outline-none rounded px-5 py-2.5 text-center w-1/3"
        >
          ذخیره
        </button>
      </form>
    </div>
  );
}
