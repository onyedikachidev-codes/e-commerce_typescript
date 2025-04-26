"use client";
import React from "react";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FaChevronRight, FaShoppingCart, FaTimes } from "react-icons/fa";
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
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  session: Session | null;
}

const mons = Montserrat({
  subsets: ["latin"],
  variable: "--font-mons",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MobileNav({ session }: Props) {
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
            <></>
          )}
        </div>
      </div>
    </nav>
  );
}
