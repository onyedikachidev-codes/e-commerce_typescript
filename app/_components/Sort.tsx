"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface SortProps {
  options: Option[];
}

export default function Sort({ options }: SortProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort By");
  const sortRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  function toggleSort(value: string, label: string) {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", value);
    router.push(`/products?${params.toString()}`);
    setSelectedOption(label);
    setIsOpen(false);
  }

  return (
    <div className="relative" ref={sortRef}>
      <div
        className="border px-2.5 py-3 rounded-lg font-normal text-sm flex gap-5 justify-between items-center cursor-pointer focus:border-blue-400"
        onClick={() => setIsOpen(true)}
      >
        <p>{selectedOption}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border-gray-300 text-sm shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              className={`px-4 py-2 cursor-pointer ${
                selectedOption === option.label ? "bg-blue-600 text-white" : ""
              } ${selectedOption !== option.label ? "hover:bg-blue-100" : ""}`}
              onClick={() => toggleSort(option.value, option.label)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
