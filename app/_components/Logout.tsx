import React from "react";
import { useLogout } from "../_auth/useLogout";

export default function Logout() {
  const { logout } = useLogout();
  return (
    <div className="flex items-center gap-2 md:block" onClick={() => logout()}>
      <p className="block md:hidden text-2xl font-semibold">Logout</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-10 cursor-pointer"
        onClick={() => logout()}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
        />
      </svg>
    </div>
  );
}
