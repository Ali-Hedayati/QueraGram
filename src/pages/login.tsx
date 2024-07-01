import LoginForm from "../components/login/login-form";
import AuthLayout from "../layouts/auth-layout";

export default function Login() {
  return (
    <AuthLayout>
      <h2 className="text-4xl text-blue-700 basis-1/5">ورود به حساب کاربری</h2>
      <LoginForm />
      <a href="#" className="text-blue-700 self-end">
        ایجاد حساب
      </a>
    </AuthLayout>
  );
}
