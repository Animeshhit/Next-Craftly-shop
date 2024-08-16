"use client";
import { getUser } from "@/helper/getUser";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, CircleUser } from "lucide-react";

const Navigation = () => {
  const [user, setUser] = useState<null | any>(null);
  const getUserData = async () => {
    const userData = await getUser();
    setUser(userData);
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      {user == null ? (
        <p>Loading...</p>
      ) : user ? (
        <>
          <div className="flex gap-2">
            <Link href="/" className="p-1">
              <ShoppingCart className="text-gray-800" />
            </Link>
            <Link href="/" className="p-1">
              <CircleUser className="text-gray-800" />
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link
            href="/auth/login"
            className="py-2 px-4 text-sm tracking-tight rounded-lg"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="py-2 hidden md:inline-block font-semibold text-sm px-4 bg-zinc-900 hover:text-white text-white/80 tracking-tight rounded-lg"
          >
            Create an account
          </Link>
        </>
      )}
    </>
  );
};

export default Navigation;
