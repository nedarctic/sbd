import { LoginForm } from "@/components/login-form";
import LoginClient from "./login-client";

export default function LoginPage() {
  return (
    <LoginClient loginForm={<LoginForm />} />
  );
}
