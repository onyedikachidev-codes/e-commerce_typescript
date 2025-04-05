"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

import Header from "@/app/_components/Header";
import SearchBar from "@/app/_components/SearchBar";
import Button from "@/app/_components/Button";
import BestSellers from "@/app/_components/BestSellers";

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main>
      <section className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e4ecf4]">
        <Header />

        <div className={`${mons.className} pt-30 flex justify-end px-5`}>
          <SearchBar />
        </div>

        <div
          className={`${mons.className} flex flex-col items-center gap-4 pl-8 pt-16`}
        >
          <h1 className="text-7xl uppercase font-semibold max-w-[60%] leading-[1.10] flex flex-col items-center drop-shadow-md">
            Your Cart is
            <span className="">Waiting.</span>
          </h1>
          <h2 className="text-xl text-gray-700">
            Your next favorite thing is just a click away.
          </h2>
          <div className="relative inline-block">
            <Button onClick={() => console.log("clicked")} type="cta">
              Shop Now
            </Button>
            <Button onClick={() => console.log("clicked")} type="black">
              Shop Now
            </Button>
          </div>
        </div>

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
      </section>

      <BestSellers />
    </main>
  );
}
