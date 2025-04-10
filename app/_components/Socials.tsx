import React from "react";

import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="flex gap-2 pl-7 -translate-y-[40px]">
      <Link
        href="https://github.com/onyedikachidev-codes"
        className="rounded-md cursor-pointer hover:bg-gray-300 h-10 w-10 border border-gray-500 flex items-center justify-center ml-2"
      >
        <FaInstagram className="h-6 w-6 text-pink-700 " />
      </Link>

      <Link
        href="https://www.linkedin.com/in/onyedikachi-nwanguma/"
        className="rounded-md cursor-pointer hover:bg-gray-300 h-10 w-10 border border-gray-500  flex items-center justify-center"
      >
        <CiLinkedin className="h-6 w-6 text-blue-700" />
      </Link>

      <Link
        href="https://x.com/Mannie799"
        className="rounded-md cursor-pointer hover:bg-gray-300 h-10 w-10 border border-gray-500  flex items-center justify-center"
      >
        <FaXTwitter className="h-5 w-5 text-gray-700" />
      </Link>
      <Link
        href="https://github.com/onyedikachidev-codes"
        className="rounded-md cursor-pointer hover:bg-gray-300 h-10 w-10 border border-gray-500 flex items-center justify-center ml-2"
      >
        <FaFacebook className="h-6 w-6 text-blue-700 " />
      </Link>
    </div>
  );
}
