import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { User, LogIn, UserPlus } from "lucide-react";

import Logo from "./Logo";
import LoginForm from "./LoginForm";
import Modal from "./Modal";
import { FaShoppingCart } from "react-icons/fa";
import SignupForm from "./SignupForm";
import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../store/carts";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import AnimatedSearchBar from "./AnimatedScrollbar";

interface Props {
  session: Session | null;
}

export default function PrimaryNav({ session }: Props) {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const totalQuantity = useSelector(getTotalCartQuantity);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="bg-white text-gray-900 border-b border-gray-200 px-8">
      <nav className=" flex items-center justify-between py-4">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <Logo />
        </Link>

        <div className="flex items-center gap-x-6">
          <AnimatedSearchBar />

          <div className="relative" ref={dropdownRef}>
            {session?.user ? (
              <div className="relative cursor-pointer" ref={ref}>
                <img
                  src={session?.user?.image ?? undefined}
                  alt="user_image"
                  className="h-8 rounded-full hover:ring-2 hover:ring-[#00B259] transition-all duration-200"
                  onClick={() => setIsOpen(!isOpen)}
                />

                {isOpen && (
                  <div className="absolute right-0 mt-3 w-64 rounded-xl shadow-2xl bg-white border-2 border-[#009246] z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                    {/* User Info Header */}
                    <div className="px-5 py-4 bg-gradient-to-r from-[#EAE8E3] to-white border-b border-[#009246]/30">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={session?.user?.image ?? undefined}
                            alt="user_image"
                            className="w-12 h-12 rounded-full border-2 border-[#00B259]"
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#A7F133] border-2 border-white rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-base font-bold text-[#005C34] truncate">
                            {session?.user?.name}
                          </p>
                          <p className="text-sm text-gray-600 truncate">
                            {session?.user?.email}
                          </p>
                          <p className="text-xs text-[#009246] mt-1 font-medium">
                            Online
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      <button className="w-full px-5 py-3 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[#EAE8E3] hover:to-transparent transition-all duration-200 group">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-[#009246]/10 flex items-center justify-center group-hover:bg-[#009246]/20 transition-colors">
                            <span className="text-[#009246] text-sm">👤</span>
                          </div>
                          <span className="text-sm font-medium text-gray-800 group-hover:text-[#005C34]">
                            View Profile
                          </span>
                        </div>
                        <span className="text-[#009246] opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </button>

                      <button className="w-full px-5 py-3 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[#EAE8E3] hover:to-transparent transition-all duration-200 group">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-[#009246]/10 flex items-center justify-center group-hover:bg-[#009246]/20 transition-colors">
                            <span className="text-[#009246] text-sm">⚙️</span>
                          </div>
                          <span className="text-sm font-medium text-gray-800 group-hover:text-[#005C34]">
                            Account Settings
                          </span>
                        </div>
                        <span className="text-[#009246] opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </button>

                      <button className="w-full px-5 py-3 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[#EAE8E3] hover:to-transparent transition-all duration-200 group">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-[#009246]/10 flex items-center justify-center group-hover:bg-[#009246]/20 transition-colors">
                            <span className="text-[#009246] text-sm">💡</span>
                          </div>
                          <span className="text-sm font-medium text-gray-800 group-hover:text-[#005C34]">
                            Help Center
                          </span>
                        </div>
                        <span className="text-[#009246] opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </button>

                      <button className="w-full px-5 py-3 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-[#EAE8E3] hover:to-transparent transition-all duration-200 group">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-[#009246]/10 flex items-center justify-center group-hover:bg-[#009246]/20 transition-colors">
                            <span className="text-[#009246] text-sm">🔔</span>
                          </div>
                          <span className="text-sm font-medium text-gray-800 group-hover:text-[#005C34]">
                            Notifications
                          </span>
                        </div>
                        <span className="text-[#009246] opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </button>
                    </div>

                    {/* Divider */}
                    <div className="mx-4 border-t border-[#009246]/20"></div>

                    {/* Logout Button */}
                    <div className="py-2" onClick={() => signOut()}>
                      <button className="w-full px-5 py-3 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 transition-all duration-200 group">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                            <span className="text-red-600 text-sm">🚪</span>
                          </div>
                          <span className="text-sm font-bold text-red-600 group-hover:text-red-700">
                            Sign Out
                          </span>
                        </div>
                        <span className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </button>
                    </div>

                    {/* Footer */}
                    <div className="px-5 py-3 bg-gradient-to-r from-[#EAE8E3] to-white border-t border-[#009246]/20">
                      <p className="text-xs text-gray-500 text-center">
                        © 2025 Trivela Inc.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                aria-label="Account Access"
                className={`p-2 cursor-pointer rounded-lg transition-all duration-200 ${
                  showUserDropdown
                    ? "text-[#00B259] bg-[#EAE8E3] scale-105 shadow-md"
                    : "text-gray-700 hover:text-[#00B259] hover:bg-[#EAE8E3] hover:scale-105"
                }`}
                title="Access your account"
                onClick={() => setShowUserDropdown(!showUserDropdown)}
              >
                <User size={22} className="transition-transform duration-300" />
              </button>
            )}

            {/* Premium Dropdown */}
            <div
              className={`absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 transform origin-top-right z-50 ${
                showUserDropdown
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              {/* Dropdown Header */}
              <div className="px-4 py-3 bg-gradient-to-r from-[#005C34] to-[#00B259] text-white">
                <p className="text-sm font-medium">Welcome to Trivela</p>
              </div>

              {/* Login Option */}
              <Modal>
                <Modal.Open opens="login-form">
                  <button
                    className="w-full px-4 py-3 text-left hover:bg-[#EAE8E3] transition-all duration-200 group flex items-center gap-3 cursor-pointer"
                    onClick={() => setShowUserDropdown(false)}
                  >
                    <div className="p-2 bg-[#00B259]/10 rounded-lg group-hover:bg-[#00B259]/20 transition-colors">
                      <LogIn size={16} className="text-[#00B259]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Login
                      </div>
                      <div className="text-xs text-gray-500">
                        Access your account
                      </div>
                    </div>
                  </button>
                </Modal.Open>
                <Modal.Window name="login-form">
                  <LoginForm />
                </Modal.Window>
              </Modal>

              {/* Divider */}
              <div className="h-px bg-gray-100 mx-3"></div>

              {/* Sign Up Option */}
              <Modal>
                <Modal.Open opens="signup-form">
                  <button
                    className="w-full px-4 py-3 text-left hover:bg-[#EAE8E3] transition-all duration-200 group flex items-center gap-3 cursor-pointer"
                    onClick={() => setShowUserDropdown(false)}
                  >
                    <div className="p-2 bg-[#005C34]/10 rounded-lg group-hover:bg-[#005C34]/20 transition-colors">
                      <UserPlus size={16} className="text-[#005C34]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Sign Up
                      </div>
                      <div className="text-xs text-gray-500">
                        Create new account
                      </div>
                    </div>
                  </button>
                </Modal.Open>
                <Modal.Window name="signup-form">
                  <SignupForm />
                </Modal.Window>
              </Modal>

              {/* Dropdown Footer */}
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                <p className="text-xs text-gray-600 text-center">
                  Encrypted connection
                </p>
              </div>
            </div>
          </div>

          <button
            aria-label="Cart"
            className="relative p-2 cursor-pointer rounded-lg text-gray-700 hover:text-[#00B259] hover:bg-[#EAE8E3] transition-all duration-200 "
            title="View your cart"
            onClick={() => router.push("/cart")}
          >
            <FaShoppingCart size={22} />
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1.5 bg-[#00B259] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
