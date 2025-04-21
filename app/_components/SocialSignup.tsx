import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

export default function SocialSignup() {
  return (
    <div className="flex items-center justify-center gap-3 pt-3">
      <div className="p-2.5 flex items-center justify-center border rounded-full bg-amber-50">
        <FaGithub className=" flex h-7 w-7 cursor-pointer items-center" />
      </div>
      <div className="p-2.5 flex items-center justify-center border rounded-full bg-amber-50">
        <FaFacebook className=" flex h-7 w-7 cursor-pointer items-center text-blue-600" />
      </div>
      <div className="p-2.5 flex items-center justify-center border rounded-full bg-amber-50">
        <FaGoogle className=" flex h-7 w-7 cursor-pointer items-center text-green-500" />
      </div>
    </div>
  );
}
