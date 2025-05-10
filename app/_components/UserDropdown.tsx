"use client";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import React from "react";
import { useRef, useEffect } from "react";

interface DropdownProps {
  session: Session | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export default function UserDropdown({
  session,
  setIsOpen,
  isOpen,
}: DropdownProps) {
  const router = useRouter();
  const ref = useRef<HTMLUListElement>(null);

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
    <ul ref={ref}>
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
      <li
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        onClick={() => router.push("/#best")}
      >
        New Arrivals
      </li>
      <hr className="border-gray-200" />

      <li
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        onClick={() => router.push("/#about")}
      >
        Notifications
      </li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Messages</li>
      <hr className="border-gray-200" />
      <li
        onClick={() => signOut()}
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-center"
      >
        Logout
      </li>
    </ul>
  );
}
