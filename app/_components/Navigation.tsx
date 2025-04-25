"use client";
import React from "react";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";

import Logo from "./Logo";
import Signup from "@/app/_components/Signup";
import Login from "@/app/_components/Login";
import { useUser } from "../_auth/useUser";
import Logout from "./Logout";
import UserIcon from "./UserIcon";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../store/carts";
import { Session } from "next-auth";
import LogoutOAuth from "./LogoutOAuth";
import { signOut } from "next-auth/react";
import MobileNav from "./MobileNav";

interface Props {
  session: Session | null;
}

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Navigation({ session }: Props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { user: supabaseUser } = useUser();
  const totalQuantity = useSelector(getTotalCartQuantity);

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

  const user = session?.user || supabaseUser;

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

      <div className="flex justify-between items-center gap-12">
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
        <div className={`${mons.className} flex gap-4`}>
          {user ? (
            <div className="flex items-center gap-2">
              {session?.user ? (
                <img
                  src={session?.user?.image ?? undefined}
                  alt="user_image"
                  className="h-10 rounded-full"
                />
              ) : (
                <UserIcon />
              )}
              {session?.user ? (
                <LogoutOAuth onClick={() => signOut()} />
              ) : (
                <Logout />
              )}
            </div>
          ) : (
            <>
              <Signup />
              <Login />
            </>
          )}
        </div>
      </div>

      <MobileNav
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        setIsOpen={setIsOpen}
        handleButtonClick={handleButtonClick}
      />
    </nav>
  );
}
