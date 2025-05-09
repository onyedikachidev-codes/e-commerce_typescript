"use client";
import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

import Logo from "./Logo";
import Signup from "@/app/_components/Signup";
import Login from "@/app/_components/Login";
import { useUser } from "../_auth/useUser";
import Logout from "./Logout";
import UserIcon from "./UserIcon";

import { getTotalCartQuantity } from "../store/carts";
import LogoutOAuth from "./LogoutOAuth";
import { ThemeToggle } from "./Theme-toggle";

interface Props {
  session: Session | null;
}

export default function Navigation({ session }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);

  const { user: supabaseUser } = useUser();
  const totalQuantity = useSelector(getTotalCartQuantity);

  const user = session?.user || supabaseUser;

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
  }, [isOpen]);

  return (
    <nav className="relative flex justify-between items-center md:px-10 px-5 max-w-full">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div>
        <ul className="lg:flex hidden items-center gap-8 text-xl text-black uppercase">
          <li>
            <Link href="/products" className="relative group">
              <span className="text-gray-800 hover:text-gray-500 transition duration-300 ">
                Shop
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link href="/#best" className="relative group">
              <span className="text-gray-800 hover:text-gray-500 transition duration-300 ">
                New Arrivals
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link href="/#about" className="relative group">
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

      <div className="flex justify-between items-center md:gap-12">
        <div
          className="cursor-pointer relative"
          onClick={() => router.push("/cart")}
        >
          <FaShoppingCart className="h-8 w-8" />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalQuantity}
            </span>
          )}
        </div>

        <div className={` flex items-center gap-2.5`}>
          <ThemeToggle />
          {user ? (
            <div className="flex items-center gap-2">
              {session?.user ? (
                <div className="relative cursor-pointer" ref={ref}>
                  <img
                    src={session?.user?.image ?? undefined}
                    alt="user_image"
                    className="h-10 rounded-full"
                    onClick={() => setIsOpen((open) => !open)}
                  />
                  {isOpen && (
                    <div className="absolute top-10 -left-[9rem] mt-2 w-[14rem] bg-white shadow-md rounded z-50 overflow-hidden text-ellipsis">
                      <ul>
                        <li className="px-4 pt-2 cursor-pointer flex gap-2">
                          <img
                            src={session?.user?.image ?? undefined}
                            alt="user_image"
                            className="h-16 rounded-full"
                            onClick={() => setIsOpen((open) => !open)}
                          />
                          <p className="font-semibold flex flex-col hover:text-blue-500 overflow-hidden text-ellipsis">
                            {session?.user?.name}
                            <span className="text-xs tracking-tighter text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis max-w-[150px]">
                              {session?.user?.email}
                            </span>
                          </p>
                        </li>

                        <hr className="border-gray-200 mt-3" />

                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => router.push("/cart")}
                        >
                          My Cart
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => router.push("/#about")}
                        >
                          About us
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Messages
                        </li>
                        <hr className="border-gray-200" />
                        <li
                          onClick={() => signOut()}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-center"
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <UserIcon />
              )}
              {session?.user ? <div></div> : <Logout />}
            </div>
          ) : (
            <div className="flex gap-2">
              <Signup />
              <Login />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
