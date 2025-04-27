import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Signup from "@/app/_components/Signup";
import Login from "@/app/_components/Login";
import LogoutOAuth from "./LogoutOAuth";
import { signOut } from "next-auth/react";
import Logout from "./Logout";

import { useUser } from "../_auth/useUser";
import { Session } from "next-auth";

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
  return (
    <div>
      <div>
        <button onClick={toggleMenu} className="relative h-8 w-8">
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-8 text-gray-800 hover:text-gray-600 transform transition-all duration-300 ${
                isOpen
                  ? "scale-0 rotate-90 opacity-0"
                  : "scale-100 rotate-0 opacity-100"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-8 text-gray-800 hover:text-gray-600 absolute transform transition-all duration-300 ${
                isOpen
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-0 -rotate-90 opacity-0"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </button>
      </div>

      <div
        className={`absolute top-[9.5dvh] sm:top-[9.5dvh] lg:hidden w-full min-h-screen left-0 overflow-hidden p-4 transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 fixed inset-0 z-[200000] bg-gradient-to-br from-[#f5f7fa] to-[#e4ecf4]"
            : "-translate-y-full opacity-0 pointer-events-none"
        }  `}
      >
        <div className="uppercase w-full mt-6 md:ml-3 md:mt-10">
          <div
            onClick={() => {
              router.push("/products");
              setIsOpen(false);
            }}
            className="flex items-center justify-between hover:bg-gray-100 py-3 px-2 mx-5 text-lg font-medium w-[90%] border-b border-gray-700"
          >
            <Link href="/products" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <FaChevronRight className="text-lg text-[#06080B] lg:hidden" />
          </div>

          <div
            onClick={() => {
              router.push("/#best");
              setIsOpen(false);
            }}
            className="flex items-center justify-between hover:bg-gray-100 py-3 px-2 mx-5 text-lg font-medium w-[90%] border-b border-gray-700"
          >
            <Link href="/#best" onClick={() => setIsOpen(false)}>
              New Arrivals
            </Link>
            <FaChevronRight className="text-lg text-[#06080B] lg:hidden" />
          </div>

          <div
            onClick={() => {
              router.push("/#about");
              setIsOpen(false);
            }}
            className="flex items-center justify-between hover:bg-gray-100 py-3 px-2 mx-5 text-lg font-medium w-[90%] border-b border-gray-700"
          >
            <Link href="/#about" onClick={() => setIsOpen(false)}>
              About
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

        <div className="flex items-center justify-center md:max-w-[40%] mx-auto mt-10 md:mt-20 gap-3 md:gap-5">
          {user ? (
            <div className="flex items-center gap-2">
              {session?.user ? (
                <LogoutOAuth onClick={() => signOut()} />
              ) : (
                <Logout />
              )}
            </div>
          ) : (
            <div className="flex item-center gap-2.5">
              <div
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Signup />
              </div>
              <div
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <Login />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
