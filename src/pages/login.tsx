export default function Login() {
  return (
    <div className="flex bg-white rounded p-2 w-3/4 border border-solid border-black">
      <div className=" flex-1 flex h-96 bg-blue-700 rounded justify-center items-center">
        <h1 className="text-6xl text-white ">سلام دوست عزیز</h1>
      </div>
      <div className="flex-1 flex flex-col items-center pt-2">
        <h2 className="text-4xl text-blue-700 basis-1/5">
          ورود به حساب کاربری
        </h2>
        <form className="flex flex-col w-full items-center gap-y-8 basis-4/5">
          <input
            type="emial"
            id="email"
            className="border rounded text-md py-2 px-4 w-3/4"
            placeholder="ایمیل"
          />
          <input
            type="password"
            id="password"
            className="border rounded text-md py-2 px-4 w-3/4"
            placeholder="گزرواژه"
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded px-5 py-2.5 w-1/3 text-center"
          >
            ورود
          </button>
        </form>
        <a href="#" className="text-blue-700 self-end">
          ایجاد حساب
        </a>
      </div>
    </div>
  );
}
