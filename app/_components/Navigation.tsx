"use client";
import React from "react";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronRight, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";

import Logo from "./Logo";
import Signup from "@/app/_components/Signup";
import Login from "@/app/_components/Login";
import NavModal from "@/app/_components/NavModal";

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Navigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Add or remove overflow: hidden on the body
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (): void => {
    window.location.href = "mailto:nwangumabimma@gmail.com";
  };

  return (
    <nav className="relative flex justify-between items-center md:px-10 px-5 max-w-full">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div>
        <ul
          className={`${mons.className} lg:flex hidden items-center gap-8 text-xl text-black uppercase`}
        >
          <li>
            <Link href="/products" className="relative group">
              <span className="text-gray-800 hover:text-gray-500 transition duration-300 ">
                Shop
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li
            className="relative cursor-pointer text-gray-800 hover:text-gray-500 transition duration-300"
            onMouseEnter={() => setShowModal(true)}
            onMouseLeave={() => setShowModal(false)}
          >
            <Link href="" className="group ">
              <span className="">Categories</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <NavModal
              isOpen={showModal}
              uniqueStyles="fixed translate-y-0 -translate-x-32"
            >
              <div className="lowercase flex justify-between">
                <div className="border-r border-gray-400 pr-4">
                  <div className="hover:text-blue-300 transition-all duration-200">
                    men&apos;s clothing
                  </div>
                  <div className="hover:text-blue-300 transition-all duration-200">
                    jewelery
                  </div>
                </div>
                <div className="pl-4">
                  <div className="hover:text-blue-300 transition-all duration-200">
                    electronics
                  </div>
                  <div className="hover:text-blue-300 transition-all duration-200">
                    women&apos;s clothing
                  </div>
                </div>
              </div>
            </NavModal>
          </li>

          <li>
            <Link href="#about" className="relative group">
              <span className="text-gray-800 hover:text-gray-500 transition duration-300 ">
                About
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="mailto:nwangumabimma@gmail.com"
              className="relative group"
            >
              <span className="text-gray-800 hover:text-gray-500 transition duration-300 ">
                Contact
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center gap-12">
        <div className="cursor-pointer">
          <FaShoppingCart className="h-8 w-8" />
        </div>
        <div className={`${mons.className} flex gap-4`}>
          <div>
            <Signup />
          </div>
          <div>
            <Login />
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="relative h-8 w-8">
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300">
            <GiHamburgerMenu
              className={`h-6 w-6 text-blue-800 hover:text-blue-600 transform transition-all duration-300 ${
                isOpen
                  ? "scale-0 rotate-90 opacity-0"
                  : "scale-100 rotate-0 opacity-100"
              }`}
            />
            <FaTimes
              className={`h-6 w-6 text-blue-800 hover:text-blue-600 absolute transform transition-all duration-300 ${
                isOpen
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-0 -rotate-90 opacity-0"
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`absolute top-[10dvh] sm:top-[20dvh] lg:hidden w-full min-h-screen left-0  overflow-hidden p-4 transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 fixed inset-0 z-[200000] bg-gray-200"
            : "-translate-y-full opacity-0 pointer-events-none"
        }  `}
      >
        <div className="uppercase w-full mt-6 md:ml-3 md:mt-10">
          <div
            onClick={() => {
              router.push("/explore");
              setIsOpen(false);
            }}
            className="flex items-center justify-between hover:bg-gray-100 py-3 px-2 mx-5 text-lg font-medium w-[90%] border-b border-gray-700"
          >
            <Link href="/explore" onClick={() => setIsOpen(false)}>
              Explore
            </Link>
            <FaChevronRight className="text-lg text-[#06080B] lg:hidden" />
          </div>

          <div
            onClick={() => {
              router.push("/about");
              setIsOpen(false);
            }}
            className="flex items-center justify-between hover:bg-gray-100 py-3 px-2 mx-5 text-lg font-medium w-[90%] border-b border-gray-700"
          >
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About us
            </Link>
            <FaChevronRight className="text-lg text-[#06080B] lg:hidden" />
          </div>

          <div
            onClick={() => {
              handleButtonClick();
              setIsOpen(false);
            }}
            className="flex items-center justify-between hover:bg-gray-100 py-3 px-2 mx-5 text-lg font-medium w-[90%] "
          >
            <Link
              href="mailto:nwangumabimma@gmail.com"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
            <FaChevronRight className="text-lg text-[#06080B] lg:hidden" />
          </div>
        </div>

        <div className="max-w-[60%] md:max-w-[40%] mx-auto mt-10 md:mt-20 flex flex-col gap-3 md:gap-5">
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="py-3 text-center bg-gray-200 hover:bg-gray-300 px-7 rounded-md text-lg border border-gray-600 text-gray-900"
          >
            {/* <Signup /> */}
          </div>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="py-4 text-center  bg-gray-700 hover:bg-gray-600 px-7 rounded-md text-lg border border-gray-300 text-gray-100"
          >
            {/* <Login /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
