"use client";
import React from "react";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../store/carts";
import { Session } from "next-auth";

import { useUser } from "../_auth/useUser";

import UserIcon from "./UserIcon";
import Hambuger from "./Hambuger";
import Logo from "./Logo";
import Modal from "./Modal";
import SignupForm from "./SignupForm";
import LogoutOAuth from "./LogoutOAuth";
import Logout from "./Logout";
import { signOut } from "next-auth/react";

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
      <div className="flex gap-2.5 sm:gap-3.5 items-center">
        <Hambuger
          toggleMenu={toggleMenu}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleButtonClick={handleButtonClick}
          session={session}
        />

        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex items-center gap-2.5 sm:gap-3.5">
        <div className={`${mons.className} flex gap-4`}>
          {user ? (
            <div className="flex items-center gap-2">
              {session?.user ? (
                <img
                  src={session?.user?.image ?? undefined}
                  alt="user_image"
                  className="h-7 xs:h-8 rounded-full"
                />
              ) : (
                <UserIcon />
              )}
            </div>
          ) : (
            <>
              <Modal>
                <Modal.Open opens="signup-form">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 xs:size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </Modal.Open>
                <Modal.Window name="signup-form">
                  <SignupForm />
                </Modal.Window>
              </Modal>
            </>
          )}
        </div>
        <div
          className="cursor-pointer relative"
          onClick={() => router.push("/cart")}
        >
          <FaShoppingCart className="h-7 w-7 xs:h-8 xs:w-8" />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalQuantity}
            </span>
          )}
        </div>
        {user ? (
          <div className="flex items-center gap-2">
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
    </nav>
  );
}
