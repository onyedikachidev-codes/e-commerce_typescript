import React from "react";

import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="absolute bottom-10 xs:bottom-12 lg:bottom-10 flex gap-2 pl-3 mt-3 md:mt-0">
      <Link
        href="https://github.com/onyedikachidev-codes"
        className="rounded-md cursor-pointer hover:bg-gray-300 h-8 w-8 md:h-10 md:w-10 border border-gray-500 flex items-center justify-center ml-2"
      >
        <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6 text-pink-700 " />
      </Link>

      <Link
        href="https://www.linkedin.com/in/onyedikachi-nwanguma/"
        className="rounded-md cursor-pointer hover:bg-gray-300 h-8 w-8 md:h-10 md:w-10 border border-gray-500  flex items-center justify-center"
      >
        <CiLinkedin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />
      </Link>

      <Link
        href="https://x.com/Mannie799"
        className="rounded-md cursor-pointer hover:bg-gray-300 h-8 w-8 md:h-10 md:w-10 border border-gray-500  flex items-center justify-center"
      >
        <FaXTwitter className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
      </Link>
      <Link
        href="https://github.com/onyedikachidev-codes"
        className="rounded-md cursor-pointer hover:bg-gray-300 h-8 w-8 md:h-10 md:w-10 border border-gray-500 flex items-center justify-center"
      >
        <FaFacebook className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700 " />
      </Link>
    </div>
  );
}
