"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FormData } from "../_models/item";
import { useSignup } from "../_auth/useSignup";

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
          reset({
            fullName,
            email,
            password,
          });
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
        <p className="mb-4 ml-[3%] mt-6 text-xl font-semibold -translate-y-[3.1rem] -translate-x-10">
          Create an account
        </p>

        <form
          className="-translate-y-[2.5rem]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" mt-8 flex flex-col gap-4">
            <div className="flex flex-col">
              <input
                type="text"
                id="fullName"
                placeholder="Enter your name"
                {...register("fullName", {
                  required: "This field is required",
                })}
                disabled={isPending}
                className="w-[100%] rounded-lg border border-blue-300 bg-blue-100 p-[0.625rem] text-sm text-[#06080B] placeholder-gray-600 outline-none"
              />
              {errors.fullName && (
                <p className="text-red-600">{errors.fullName.message}</p>
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
                className="w-[100%] rounded-lg border border-blue-300 bg-blue-100 p-[0.625rem] text-sm text-[#06080B] placeholder-gray-600 outline-none"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
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
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
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
            {errors.confirmPassword && (
              <p className="text-red-600">{errors.confirmPassword.message}</p>
            )}
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
