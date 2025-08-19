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
        className="border-2 border-[#EAE8E3] hover:border-[#00B259] px-4 py-3 rounded-xl font-medium text-sm flex gap-5 justify-between items-center cursor-pointer focus:border-[#00B259] transition-all duration-300 bg-white shadow-sm hover:shadow-md text-[#005C34]"
        onClick={() => setIsOpen(true)}
      >
        <p className="select-none">{selectedOption}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className={`size-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-20 w-full mt-2 bg-white border border-[#EAE8E3] rounded-xl shadow-lg overflow-hidden">
          <ul className="py-1">
            {options.map((option) => (
              <li
                key={option.value}
                className={`px-4 py-3 cursor-pointer text-sm font-medium transition-all duration-200 ${
                  selectedOption === option.label
                    ? "bg-gradient-to-r from-[#00B259] to-[#009246] text-white"
                    : "text-[#005C34] hover:bg-[#EAE8E3] hover:text-[#00B259]"
                }`}
                onClick={() => toggleSort(option.value, option.label)}
              >
                <div className="flex items-center justify-between">
                  <span>{option.label}</span>
                  {selectedOption === option.label && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
