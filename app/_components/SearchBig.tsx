"use client";

import { ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";

export interface SearchProps {
  value: string;
  setValue: (value: string) => void;
  errorText?: string;
  setErrorText: (value: string) => void;
}

export default function SearchBig({
  value,
  errorText,
  setValue,
  setErrorText,
}: SearchProps) {
  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    setValue(target.value);

    if (target.value.length < 4) {
      setErrorText("Please enter at least 4 characters.");
    } else {
      setErrorText("");
    }

    if (target.value.length < 1) {
      setErrorText("");
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-96">
        <input
          type="text"
          placeholder={value}
          className="w-full placeholder-[#00B259] text-base border-b relative border-gray-500 focus:outline-none focus:border-[#005C34] px-3 py-2 transition-transform focus:scale-101 duration-200 ease-in-out placeholder:text-[1.1rem] "
          onChange={handleSearch}
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#00B259] hover:text-[#005C34] cursor-pointer">
          <CiSearch size={20} />
        </button>
      </div>

      {errorText && (
        <p className="mt-2 absolute  translate-y-10 text-red-500">
          {errorText}
        </p>
      )}
    </div>
  );
}
