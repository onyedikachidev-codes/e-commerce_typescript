import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface MobileNavProps {
  toggleMenu: () => void;
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  handleButtonClick: () => void;
}

export default function MobileNav({
  toggleMenu,
  isOpen,
  setIsOpen,
  handleButtonClick,
}: MobileNavProps) {
  const router = useRouter();
  return (
    <>
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
    </>
  );
}
