"use client";

import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignupForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] =
    useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const togglePasswordConfirmVisibility = (): void => {
    setIsPasswordConfirmVisible((prevState) => !prevState);
  };

  return (
    <div className="">
      <div className="w-full">
        <p className="mb-4 ml-[3%] mt-6 text-xl font-semibold -translate-y-[3.1rem] -translate-x-10">
          Create an account
        </p>

        <form className="-translate-y-[2.5rem]">
          <div className=" mt-8 flex flex-col gap-4">
            <div className="">
              <input
                className="w-[100%] rounded-lg border border-blue-300 bg-blue-100 p-[0.625rem] text-sm text-[#06080B] placeholder-gray-600 outline-none"
                type="text"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-[100%] rounded-lg border border-blue-300 bg-blue-100 p-[0.625rem] text-sm text-[#06080B] placeholder-gray-600 outline-none"
              />
            </div>

            <div>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  required
                  className="w-[100%] rounded-lg border border-blue-300 bg-blue-100 p-[0.625rem] text-sm placeholder-gray-600 outline-none"
                />
                <div
                  className="absolute inset-y-0 right-2 flex cursor-pointer items-center text-gray-600"
                  onClick={() => togglePasswordVisibility()}
                >
                  {isPasswordVisible ? (
                    <FaEyeSlash className="h-5 w-5" />
                  ) : (
                    <FaEye className="h-5 w-5" />
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type={isPasswordConfirmVisible ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  required
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  className="w-[100%] rounded-lg border border-blue-300 bg-blue-100 p-[0.625rem] text-sm placeholder-gray-600 outline-none"
                />
                <div
                  className="absolute inset-y-0 right-2 flex cursor-pointer items-center text-gray-600"
                  onClick={() => togglePasswordConfirmVisibility()}
                >
                  {isPasswordConfirmVisible ? (
                    <FaEyeSlash className="h-5 w-5" />
                  ) : (
                    <FaEye className="h-5 w-5" />
                  )}
                </div>
              </div>
            </div>

            <div className="">
              <input type="checkbox" name="termsAndConditions" required />
              <label htmlFor="termsAndConditions" className="pl-2">
                I have read, understood and I agree to Helprr&apos;s Privacy
                Policy, and Terms and conditions.
              </label>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 lg:mb-2">
            <button
              type="submit"
              className="xl:ml-[13%] md:ml-[13%] mt-4 inline-block w-10/12 md:w-8/12 xl:w-8/12 rounded bg-blue-600 py-3 text-center text-sm font-semibold uppercase text-stone-300 hover:bg-blue-500 sm:mr-10"
            >
              register
            </button>
            <button className="text-blue-700">Already have an account?</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
