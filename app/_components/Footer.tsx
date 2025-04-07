import React from "react";
import Logo from "./Logo";

import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer(): React.JSX.Element {
  return (
    <>
      <div className="bg-gray-900 text-white flex flex-col gap-3">
        <div className="flex items-center justify-between px-12 pt-6">
          <Logo />
          <h2>Stay Updated with our news</h2>
        </div>

        <div className="flex items-center justify-between px-12 pb-3">
          <div className="flex">
            <Link
              href="https://github.com/onyedikachidev-codes"
              className="rounded-md cursor-pointer hover:bg-gray-600 h-10 w-10  flex items-center justify-center "
            >
              <FaInstagram className="h-6 w-6 text-white " />
            </Link>

            <Link
              href="https://www.linkedin.com/in/onyedikachi-nwanguma/"
              className="rounded-md cursor-pointer hover:bg-gray-600 h-10 w-10   flex items-center justify-center"
            >
              <CiLinkedin className="h-6 w-6 text-white" />
            </Link>

            <Link
              href="https://x.com/Mannie799"
              className="rounded-md cursor-pointer hover:bg-gray-600 h-10 w-10   flex items-center justify-center"
            >
              <FaXTwitter className="h-5 w-5 text-white" />
            </Link>
            <Link
              href="https://github.com/onyedikachidev-codes"
              className="rounded-md cursor-pointer hover:bg-gray-600 h-10 w-10  flex items-center justify-center "
            >
              <FaFacebook className="h-6 w-6 text-white " />
            </Link>
          </div>

          <form className="flex rounded-md shadow-sm">
            <div className="relative flex-grow focus-within:z-10">
              <input
                type="email"
                className="block py-2 px-4 w-full border rounded-l-md border-gray-700 bg-gray-800 text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your email here"
              />
            </div>
            <button
              type="submit"
              className="bg-gray-800 cursor-pointer border border-gray-700 text-white rounded-r-md px-4 py-2 text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
        <div className="flex justify-center">
          <p className="pl-8 text-white pb-4">
            &copy; 2025 Oneydikachi. All right reserved.
          </p>
        </div>
      </div>
    </>
  );
}
