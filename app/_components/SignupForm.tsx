"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FormData } from "../_models/item";
import { useSignup } from "../_auth/useSignup";

import Divider from "./Divider";
import SocialSignup from "./SocialSignup";
import SpinnerMini from "./SpinnerMini";
import Modal from "./Modal";
import LoginForm from "./LoginForm";

function SignupForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] =
    useState<boolean>(false);

  const { signup, isPending } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } =
    useForm<FormData>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormData> = ({ fullName, email, password }) => {
    signup(
      { email, fullName, password },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  };

  const togglePasswordVisibility = (): void => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const togglePasswordConfirmVisibility = (): void => {
    setIsPasswordConfirmVisible((prevState) => !prevState);
  };

  return (
    <div className="">
      <div className="w-full">
        <p className="mb-4 ml-[3%] mt-6 text-xl font-semibold -translate-y-[3.1rem] -translate-x-10 text-gray-800">
          Create an account
        </p>

        <form
          className="-translate-y-[2.5rem]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" mt-5 flex flex-col gap-4">
            <div className="flex flex-col">
              <input
                type="text"
                id="fullName"
                placeholder="Enter your name"
                {...register("fullName", {
                  required: "This field is required",
                })}
                disabled={isPending}
                className="w-[100%] rounded-lg border-2 border-gray-300 bg-white p-[0.625rem] text-sm text-[#06080B] placeholder-gray-500 outline-none focus:border-[#00B259] focus:ring-2 focus:ring-[#00B259]/20"
              />
              {errors.fullName && (
                <p className="text-red-600 text-xs mt-1 font-medium">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
                disabled={isPending}
                className="w-[100%] rounded-lg border-2 border-gray-300 bg-white p-[0.625rem] text-sm text-[#06080B] placeholder-gray-500 outline-none focus:border-[#00B259] focus:ring-2 focus:ring-[#00B259]/20"
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Create a password"
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 8,
                      message: "Password needs a minimum of 8 characters",
                    },
                  })}
                  disabled={isPending}
                  className="w-[100%] rounded-lg border-2 border-gray-300 bg-white p-[0.625rem] text-sm text-[#06080B] placeholder-gray-500 outline-none focus:border-[#00B259] focus:ring-2 focus:ring-[#00B259]/20"
                />

                <div
                  className="absolute inset-y-0 right-2 flex cursor-pointer items-center text-gray-600 hover:text-gray-800"
                  onClick={() => togglePasswordVisibility()}
                >
                  {isPasswordVisible ? (
                    <FaEyeSlash className="h-5 w-5" />
                  ) : (
                    <FaEye className="h-5 w-5" />
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-600 text-xs mt-1 font-medium">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <div className="relative">
                <input
                  type={isPasswordConfirmVisible ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm password"
                  {...register("confirmPassword", {
                    required: "This field is required",
                    validate: (value) =>
                      value === getValues().password ||
                      "Passwords need to match",
                  })}
                  disabled={isPending}
                  className="w-[100%] rounded-lg border-2 border-gray-300 bg-white p-[0.625rem] text-sm text-[#06080B] placeholder-gray-500 outline-none focus:border-[#00B259] focus:ring-2 focus:ring-[#00B259]/20"
                />

                <div
                  className="absolute inset-y-0 right-2 flex cursor-pointer items-center text-gray-600 hover:text-gray-800"
                  onClick={() => togglePasswordConfirmVisibility()}
                >
                  {isPasswordConfirmVisible ? (
                    <FaEyeSlash className="h-5 w-5" />
                  ) : (
                    <FaEye className="h-5 w-5" />
                  )}
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-600 text-xs mt-1 font-medium">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="termsAndConditions"
                required
                className="mt-1 w-4 h-4 text-[#00B259] bg-white border-2 border-gray-300 rounded focus:ring-[#00B259] focus:ring-2"
              />
              <label
                htmlFor="termsAndConditions"
                className="text-sm text-gray-800 leading-relaxed"
              >
                By signing up, you agree to our T&C.
              </label>
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center gap-3">
            <button
              type="submit"
              disabled={isPending}
              className="xl:ml-[13%] cursor-pointer md:ml-[13%] mt-4 inline-block w-10/12 md:w-8/12 xl:w-8/12 rounded bg-[#00B259] py-3 text-center text-sm font-semibold uppercase text-white hover:bg-[#009246] disabled:opacity-70 disabled:cursor-not-allowed sm:mr-10 transition-colors duration-200"
            >
              {!isPending ? "Register" : <SpinnerMini />}
            </button>
            <Modal>
              <Modal.Open opens="signup-form">
                <button className="text-[#005C34] hover:text-[#004225] font-medium transition-colors duration-200">
                  Already have an account?
                </button>
              </Modal.Open>
              <Modal.Window name="signup-form">
                <LoginForm />
              </Modal.Window>
            </Modal>
          </div>
        </form>

        <div className="-translate-y-[2rem] pb-3">
          <Divider />

          <SocialSignup />
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
