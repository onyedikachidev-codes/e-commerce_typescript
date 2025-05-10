"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";

import { useUser } from "../_auth/useUser";
import Image from "next/image";
import icon from "@/app/icon.jpg";
import { HiX } from "react-icons/hi";
import { CiShop } from "react-icons/ci";
import { LiaPlaneArrivalSolid } from "react-icons/lia";
import { FcAbout } from "react-icons/fc";
import { LuContact } from "react-icons/lu";

interface HambugerProps {
  toggleMenu: () => void;
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  handleButtonClick: () => void;
  session: Session | null;
}

export default function Hambuger({
  toggleMenu,
  isOpen,
  setIsOpen,
  handleButtonClick,
  session,
}: HambugerProps) {
  const router = useRouter();
  const { user: supabaseUser } = useUser();
  const user = session?.user || supabaseUser;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div>
      <div>
        <button onClick={toggleMenu} className="relative h-7 w-7 xs:h-8 xs:w-8">
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-7 xs:size-8 text-gray-800 hover:text-gray-600 transform transition-all duration-300 ${
                isOpen ? "scale-0 rotate-90 opacity-0" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </button>
      </div>

      <div
        ref={ref}
        className={`absolute top-0 lg:hidden w-[60%] sm:w-[30%] h-[50%] xs:h-[40%] left-0 overflow-hidden p-4 transition-all duration-300 ease-in-out rounded-lg ${
          isOpen
            ? "translate-x-0 opacity-100 fixed inset-0 z-[200000] bg-[#D1D5E0] border-white"
            : "-translate-x-full opacity-0 pointer-events-none"
        }  `}
      >
        <div className="flex justify-between items-center relative">
          <Image
            src={icon}
            alt="trivela_icon"
            height={10}
            className="h-8 w-8 object-center object-contain"
          />

          <div
            className="p-1.5 rounded-md hover:bg-gray-100 duration-150 transition-all cursor-pointer "
            onClick={() => setIsOpen(false)}
          >
            <HiX className="h-5 w-5 " />
          </div>
        </div>

        <div className="w-full mt-8">
          <div
            onClick={() => {
              router.push("/products");
              setIsOpen(false);
            }}
            className="flex items-center gap-2 hover:bg-[#E0E3EB] py-1.5  cursor-pointer rounded-md text-base font-medium w-[90%] "
          >
            <span>
              <CiShop className="h-6 w-6 pl-1" />
            </span>
            <Link href="/products" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
          </div>

          <div
            onClick={() => {
              router.push("/#about");
              setIsOpen(false);
            }}
            className="flex items-center gap-2 hover:bg-[#E0E3EB] py-1.5  cursor-pointer rounded-md text-base font-medium w-[90%] "
          >
            <span>
              <FcAbout className="h-6 w-6 text-black pl-1" />
            </span>
            <Link href="/#about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </div>

          <div
            onClick={() => {
              handleButtonClick();
              setIsOpen(false);
            }}
            className="flex items-center gap-2 hover:bg-[#E0E3EB] py-1.5  cursor-pointer rounded-md text-base font-medium w-[90%] "
          >
            <span>
              <LuContact className="h-6 w-6 pl-1" />
            </span>
            <Link
              href="mailto:nwangumabimma@gmail.com"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
          </div>

          <div
            onClick={() => {
              router.push("/#best");
              setIsOpen(false);
            }}
            className="flex items-center gap-2 hover:bg-[#E0E3EB] py-1.5  cursor-pointer rounded-md text-base font-medium w-[90%] "
          >
            <span>
              <LiaPlaneArrivalSolid className="h-6 w-6 pl-1" />
            </span>
            <Link href="/#best" onClick={() => setIsOpen(false)}>
              New Arrivals
            </Link>
          </div>

          <hr className="border-gray-100 mt-3" />

          <p className="pt-4">&copy; 2025 Trivela, Inc.</p>
          <p className="absolute bottom-1.5 text-sm">All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
