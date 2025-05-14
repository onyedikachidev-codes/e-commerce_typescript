"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { HiX } from "react-icons/hi";

interface HambugerProps {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  handleButtonClick: () => void;
}

export default function Hambuger({
  isOpen,
  setIsOpen,
  handleButtonClick,
}: HambugerProps) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  const navItems = [
    {
      label: "Home",
      href: "/",
      onClick: () => router.push("/"),
    },
    {
      label: "Shop",
      href: "/products",
      onClick: () => router.push("/products"),
    },
    {
      label: "New Arrivals",
      href: "/#best",
      onClick: () => router.push("/#best"),
    },
    {
      label: "About Trivela",
      href: "/#about",
      onClick: () => router.push("/#about"),
    },
    {
      label: "Contact us",
      href: "mailto:nwangumabimma@gmail.com",
      onClick: () => {
        handleButtonClick();
        // Optional: open email client
      },
    },
  ];

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentHash(window.location.hash);
    }

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="relative">
      <button className="flex items-center justify-center">
        <div className="flex items-center justify-center transition-transform duration-300 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setIsOpen(true)}
            className={`size-7 xs:size-8 text-gray-800 hover:text-gray-600 transform transition-all duration-300 ${
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
            onClick={() => setIsOpen(false)}
            className={`size-7 xs:size-8 text-gray-800 hover:text-gray-600 absolute transform transition-all duration-300 ${
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

      <div
        ref={ref}
        className={`fixed top-23 right-4 p-4 lg:hidden w-[19rem] h-[22rem] overflow-hidden transition-all duration-300 ease-in-out rounded-lg ${
          isOpen
            ? "-translate-x-0 opacity-100 z-[200000] bg-gray-50"
            : "translate-x-full opacity-0 pointer-events-none"
        }  `}
      >
        <div className="flex justify-between items-center relative px-5">
          <div></div>

          <div
            className="p-1.5 rounded-md hover:bg-gray-100 duration-150 transition-all cursor-pointer "
            onClick={() => setIsOpen(false)}
          >
            <HiX className="h-5 w-5 text-gray-600" />
          </div>
        </div>

        <hr className="bg-gray-200 mt-2 h-[2px] border-0 rounded" />

        <div className="w-full">
          {navItems.map(({ label, href, onClick }, index) => {
            const isActive = `${pathname}${currentHash}` === href;

            return (
              <div
                key={index}
                onClick={() => {
                  onClick();
                  setIsOpen(false);
                }}
                className={`flex flex-col justify-center gap-2 pt-4 mx-auto cursor-pointer rounded-md text-sm font-medium w-[90%] ${
                  isActive ? "text-black" : "text-gray-500"
                }`}
              >
                <Link href={href} onClick={() => setIsOpen(false)}>
                  {label}
                </Link>
                <hr
                  className={`mt-2 h-[2px] border-0 rounded ${
                    isActive ? "bg-black" : "bg-gray-200"
                  }`}
                />
              </div>
            );
          })}
        </div>

        <hr className="bg-gray-200 mt-2 h-[2px] border-0 rounded" />
      </div>
    </div>
  );
}
