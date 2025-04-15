"use client";

import { FormEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import SocialSignIn from "@/app/_components/SocialSignIn";
import { useLogin } from "../auth/useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { login, isPending } = useLogin();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <div className="w-full">
      <div className="w-full">
        <p className="mb-4 ml-[3%] mt-6 text-xl font-semibold -translate-y-[3.1rem] -translate-x-10">
          Login <span className="hidden md:inline">to your account</span>
        </p>

        <form className="-translate-y-[2.5rem]">
          <div className=" mt-6 flex flex-col gap-2">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-1 block font-monts text-base"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                autoComplete="username"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-[100%] rounded-lg border border-blue-300 bg-blue-100 p-[0.625rem] text-sm text-[#06080B] placeholder-gray-600 outline-none"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="password"
                className="mb-1 block font-monts text-base"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-[100%] rounded-lg border border-blue-300 bg-blue-100 p-[0.625rem] text-sm placeholder-gray-600 outline-none"
                />
                <div
                  onClick={() => togglePasswordVisibility()}
                  className="absolute inset-y-0 right-2 flex cursor-pointer items-center text-gray-600"
                >
                  {isPasswordVisible ? (
                    <FaEyeSlash className="h-6 w-6" />
                  ) : (
                    <FaEye className="h-6 w-6" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-4">
            <p className=" text-blue-600 text-lg">Forgot Password?</p>
          </div>

          <div className="mx-auto mt-4 flex w-[70%] flex-col items-center justify-center gap-3">
            <button
              type="submit"
              className="ml[16%] md:ml-[20%] mt-4 inline-block w-11/12 rounded bg-blue-600 py-3 text-center text-sm font-semibold uppercase text-stone-300 hover:bg-blue-500 sm:mr-10"
            >
              Login
            </button>
          </div>
        </form>

        <SocialSignIn />
      </div>
    </div>
  );
}

export default LoginForm;
