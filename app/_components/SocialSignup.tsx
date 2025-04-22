import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function SocialSignup() {
  return (
    <div className="flex items-center justify-center gap-3 pt-3">
      <div
        className="p-2.5 flex items-center justify-center border rounded-full bg-amber-50 cursor-pointer"
        onClick={() => signIn("github")}
      >
        <FaGithub className=" flex h-7 w-7  items-center" />
      </div>
      <div className="p-2.5 flex items-center justify-center border rounded-full bg-amber-50 cursor-pointer">
        <FaFacebook className=" flex h-7 w-7 items-center text-blue-600" />
      </div>
      <div
        className="p-2.5 flex items-center justify-center border rounded-full bg-amber-50 cursor-pointer"
        onClick={() => signIn("google")}
      >
        <FaGoogle className=" flex h-7 w-7 items-center text-green-500" />
      </div>
    </div>
  );
}
