import type { Metadata } from "next";
import Login from "@/components/auth/Login";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return <Login />;
}
