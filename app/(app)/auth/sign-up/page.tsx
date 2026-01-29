import { SignUpForm } from "@/components/sign-up-form";
import SignUpPageClient from "./sign-up-client";

export default function Page() {
  return (
    <SignUpPageClient signUpForm={<SignUpForm />} />
  );
}
