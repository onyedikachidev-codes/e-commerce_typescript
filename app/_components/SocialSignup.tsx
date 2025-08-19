import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function SocialSignup() {
  return (
    <div className="flex items-center justify-center gap-3 pt-3">
      <div
        className="p-2.5 flex items-center justify-center border border-[#EAE8E3] rounded-full bg-white cursor-pointer hover:bg-[#EAE8E3]/30 transition-colors duration-200"
        onClick={() => signIn("github")}
      >
        <FaGithub className=" flex h-7 w-7  items-center text-[#000000]" />
      </div>
      <div className="p-2.5 flex items-center justify-center border border-[#EAE8E3] rounded-full bg-white cursor-pointer hover:bg-[#EAE8E3]/30 transition-colors duration-200">
        <FaFacebook className=" flex h-7 w-7 items-center text-[#00B259]" />
      </div>
      <div
        className="p-2.5 flex items-center justify-center border border-[#EAE8E3] rounded-full bg-white cursor-pointer hover:bg-[#EAE8E3]/30 transition-colors duration-200"
        onClick={() => signIn("google")}
      >
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          className="w-7 h-7"
        />
      </div>
    </div>
  );
}
